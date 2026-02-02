import{A as D}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{i as w,z as v,a as x,x as c}from"./chunks/Button.DkmThuAs.js";import{f as T}from"./chunks/query-BykXNUlT.Pm7lu9c1.js";import{s as _}from"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d as B,c as C,o as A,r as R,p as f,F as q,j as t,G as n,k as l,w as p,a as d,ae as b}from"./chunks/framework.NAAYCHZu.js";import{L as V}from"./chunks/VueInput.vue_vue_type_script_setup_true_lang-cOALNmlO.USN8J9cM.js";import{v as E}from"./chunks/VueToggle.vue_vue_type_script_setup_true_lang-BxrvAsse.DCuZWWYl.js";import{F as $}from"./chunks/FrameworkExample.Z9eaTrCu.js";import"./chunks/createLucideIcon.B61Wqv9x.js";import"./chunks/state-CovhUvdr.CfYrM0Q-.js";import"./chunks/slot.B17U6J5C.js";import"./chunks/form-control-utils.oxcP5Ntc.js";import"./chunks/sdk.m.DhOmSlC9.js";import"./chunks/Icon.BC5ob6Nk.js";var I=Object.defineProperty,u=(h,i,a,o)=>{for(var r=void 0,s=h.length-1,e;s>=0;s--)(e=h[s])&&(r=e(i,a,r)||r);return r&&I(i,a,r),r};const M=class extends x{get _textContent(){return this._slot?this._slot.assignedNodes({flatten:!0}).map(i=>i.textContent??"").join(""):""}constructor(){super(),this.variant="warning",this.search=void 0,this.caseSensitive=!1,this.matchAll=!1}_onSlotChange(){this.requestUpdate()}_renderStatic(){return c`
      <mark class="mark mark-${this.variant}" part="ag-mark">
        <slot @slotchange=${this._onSlotChange}></slot>
      </mark>
    `}_renderReactive(){const i=this._textContent,a=c`<slot @slotchange=${this._onSlotChange} style="display: none;"></slot>`;if(!i)return a;if(!this.search)return c`${a}${i}`;const o=this.search.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&");if(!o)return c`${a}${i}`;let r=this.matchAll?"g":"";this.caseSensitive||(r+="i");const s=new RegExp(o,r),e=[];if(this.matchAll){const k=[...i.matchAll(s)];if(!k.length)return c`${a}${i}`;let y=0;for(const g of k)e.push(i.substring(y,g.index)),e.push(c`<mark class="mark mark-${this.variant}">${g[0]}</mark>`),y=(g.index??0)+g[0].length;e.push(i.substring(y))}else{const k=i.match(s);if(k&&k.index!==void 0){const y=i.substring(0,k.index),g=c`<mark class="mark mark-${this.variant}">${k[0]}</mark>`,S=i.substring(k.index+k[0].length);e.push(y,g,S)}else e.push(i)}return c`${a}${e}`}render(){return this.search?this._renderReactive():this._renderStatic()}};M.styles=w`
    :host {
      display: inline;
    }
    .mark {
      border-radius: var(--ag-radius-xs);
      background-color: var(--ag-warning-background);
      color: var(--ag-warning-text);
    }
    .mark::before,
    .mark::after {
      clip-path: inset(100%);
      clip: rect(1px, 1px, 1px, 1px);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }
    .mark::before {
      content: " [highlight start] ";
    }
    .mark::after {
      content: " [highlight end] ";
    }
    .mark-warning {
      background-color: var(--ag-warning-background);
      color: var(--ag-warning-text);
    }
    .mark-info {
      background-color: var(--ag-info-background);
      color: var(--ag-info-text);
    }
    .mark-success {
      background-color: var(--ag-success-background);
      color: var(--ag-success-text);
    }
    .mark-error {
      background-color: var(--ag-danger-background);
      color: var(--ag-danger-text);
    }
    .mark-primary {
      background-color: var(--ag-primary-background);
      color: var(--ag-primary-text);
    }
    .mark-secondary {
      background-color: var(--ag-background-secondary);
      color: var(--ag-text-primary);
    }
    .mark-monochrome {
      background-color: var(--ag-background-secondary-inverted);
      color: var(--ag-text-primary-inverted);
    }
  `;let m=M;u([v({type:String})],m.prototype,"variant");u([v({type:String})],m.prototype,"search");u([v({type:Boolean,attribute:"case-sensitive"})],m.prototype,"caseSensitive");u([v({type:Boolean,attribute:"match-all"})],m.prototype,"matchAll");u([T("slot")],m.prototype,"_slot");customElements.get("ag-mark")||customElements.define("ag-mark",m);const N=B({name:"VueMark",props:{variant:{type:String,default:"warning"},search:{type:String,default:void 0},caseSensitive:{type:Boolean,default:!1},matchAll:{type:Boolean,default:!1}}}),P=["variant","search",".caseSensitive",".matchAll"];function z(h,i,a,o,r,s){return A(),C("ag-mark",{variant:h.variant,search:h.search,".caseSensitive":h.caseSensitive,".matchAll":h.matchAll},[R(h.$slots,"default")],40,P)}const F=_(N,[["render",z]]),L={class:"mbe4"},j={class:"flex flex-wrap items-center"},H={class:"mis3 mie3"},U={class:"mis3 mie3"},O={class:"mis3 mie3"},W={class:"mis3 mie3"},G={class:"mis3 mie3"},J={class:"mis3 mie3"},K={class:"mis3 mie3"},Y={class:"mbe4"},Q={class:"flex items-center mbe4"},X={class:"flex items-center mbe3"},Z={class:"flex items-center mbe3"},ss={class:"mbe4"},is=B({__name:"MarkExamples",setup(h){const i=f("fox"),a=f(!1),o=f(!0);return(r,s)=>(A(),C(q,null,[t("section",L,[s[10]||(s[10]=t("h2",null,"Mark Variants",-1)),t("div",j,[t("div",H,[n(l(F),{variant:"warning"},{default:p(()=>[...s[3]||(s[3]=[d("warning",-1)])]),_:1})]),t("div",U,[n(l(F),{variant:"info"},{default:p(()=>[...s[4]||(s[4]=[d("info",-1)])]),_:1})]),t("div",O,[n(l(F),{variant:"success"},{default:p(()=>[...s[5]||(s[5]=[d("success",-1)])]),_:1})]),t("div",W,[n(l(F),{variant:"error"},{default:p(()=>[...s[6]||(s[6]=[d("error",-1)])]),_:1})]),t("div",G,[n(l(F),{variant:"primary"},{default:p(()=>[...s[7]||(s[7]=[d("primary",-1)])]),_:1})]),t("div",J,[n(l(F),{variant:"secondary"},{default:p(()=>[...s[8]||(s[8]=[d("secondary",-1)])]),_:1})]),t("div",K,[n(l(F),{variant:"monochrome"},{default:p(()=>[...s[9]||(s[9]=[d("monochrome",-1)])]),_:1})])])]),t("section",Y,[s[14]||(s[14]=t("h2",null,"Reactive Highlighting",-1)),t("div",Q,[n(l(V),{class:"full-width",value:i.value,"onUpdate:value":s[0]||(s[0]=e=>i.value=e),label:"Enter text to highlight",type:"text"},null,8,["value"])]),t("div",X,[n(l(E),{checked:a.value,"onUpdate:checked":s[1]||(s[1]=e=>a.value=e),label:"Case sensitive"},null,8,["checked"]),s[11]||(s[11]=t("span",{class:"mis2"},"Case sensitive",-1))]),t("div",Z,[n(l(E),{checked:o.value,"onUpdate:checked":s[2]||(s[2]=e=>o.value=e),label:"Match all"},null,8,["checked"]),s[12]||(s[12]=t("span",{class:"mis2"},"Match all",-1))]),t("div",ss,[t("p",null,[n(l(F),{search:i.value,caseSensitive:a.value,matchAll:o.value,variant:"warning"},{default:p(()=>[...s[13]||(s[13]=[d(" The quick brown fox jumps over the lazy dog. The lazy fox was not the same as the other fox. ",-1)])]),_:1},8,["search","caseSensitive","matchAll"])])])])],64))}});class as extends x{createRenderRoot(){return this}static get properties(){return{searchTerm:{type:String,state:!0},caseSensitive:{type:Boolean,state:!0},matchAll:{type:Boolean,state:!0}}}constructor(){super(),this.searchTerm="fox",this.caseSensitive=!1,this.matchAll=!0}handleSearchInput(i){this.searchTerm=i.detail.value}handleCaseSensitiveChange(i){this.caseSensitive=i.detail.checked}handleMatchAllChange(i){this.matchAll=i.detail.checked}render(){return c`
      <section class="mbe4">
        <h2>Mark Variants</h2>
        <div class="flex flex-wrap items-center">
          <div class="mis3 mie3">
            <ag-mark variant="warning">warning</ag-mark>
          </div>
          <div class="mis3 mie3">
            <ag-mark variant="info">info</ag-mark>
          </div>
          <div class="mis3 mie3">
            <ag-mark variant="success">success</ag-mark>
          </div>
          <div class="mis3 mie3">
            <ag-mark variant="error">error</ag-mark>
          </div>
          <div class="mis3 mie3">
            <ag-mark variant="primary">primary</ag-mark>
          </div>
          <div class="mis3 mie3">
            <ag-mark variant="secondary">secondary</ag-mark>
          </div>
          <div class="mis3 mie3">
            <ag-mark variant="monochrome">monochrome</ag-mark>
          </div>
        </div>
      </section>
      <section class="mbe4">
        <h2>Reactive Highlighting</h2>
        <div class="flex items-center mbe4">
          <ag-input
            class="full-width"
            .value=${this.searchTerm}
            label="Enter text to highlight"
            type="text"
            @input=${this.handleSearchInput}
          ></ag-input>
        </div>
        <div class="flex items-center mbe3">
          <ag-toggle
            .checked=${this.caseSensitive}
            label="Case sensitive"
            @change=${this.handleCaseSensitiveChange}
          ></ag-toggle>
          <span class="mis2">Case sensitive</span>
        </div>
        <div class="flex items-center mbe3">
          <ag-toggle
            .checked=${this.matchAll}
            label="Match all"
            @change=${this.handleMatchAllChange}
          ></ag-toggle>
          <span class="mis2">Match all</span>
        </div>
        <div class="mbe4">
          <p>
            <ag-mark
              search=${this.searchTerm}
              ?caseSensitive=${this.caseSensitive}
              ?matchAll=${this.matchAll}
              variant="warning"
            >
              The quick brown fox jumps over the lazy dog. The lazy fox was not the same as the other fox.
            </ag-mark>
          </p>
        </div>
      </section>
    `}}customElements.define("mark-lit-examples",as);const ts=`<template>
  <section class="mbe4">
    <h2>Mark Variants</h2>
    <div class="flex flex-wrap items-center">
      <div class="mis3 mie3">
        <VueMark variant="warning">warning</VueMark>
      </div>
      <div class="mis3 mie3">
        <VueMark variant="info">info</VueMark>
      </div>
      <div class="mis3 mie3">
        <VueMark variant="success">success</VueMark>
      </div>
      <div class="mis3 mie3">
        <VueMark variant="error">error</VueMark>
      </div>
      <div class="mis3 mie3">
        <VueMark variant="primary">primary</VueMark>
      </div>
      <div class="mis3 mie3">
        <VueMark variant="secondary">secondary</VueMark>
      </div>
      <div class="mis3 mie3">
        <VueMark variant="monochrome">monochrome</VueMark>
      </div>
    </div>
  </section>
  <section class="mbe4">
    <h2>Reactive Highlighting</h2>
    <div class="flex items-center mbe4">
      <VueInput
        class="full-width"
        v-model:value="searchTerm"
        label="Enter text to highlight"
        type="text"
      />
    </div>
    <div class="flex items-center mbe3">
      <VueToggle
        v-model:checked="caseSensitive"
        label="Case sensitive"
      />
      <span class="mis2">Case sensitive</span>
    </div>
    <div class="flex items-center mbe3">
      <VueToggle
        v-model:checked="matchAll"
        label="Match all"
      />
      <span class="mis2">Match all</span>
    </div>
    <div class="mbe4">
      <p>
        <VueMark
          :search="searchTerm"
          :caseSensitive="caseSensitive"
          :matchAll="matchAll"
          variant="warning"
        >
          The quick brown fox jumps over the lazy dog. The lazy fox was not the same as the other fox.
        </VueMark>
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { VueMark } from "agnosticui-core/mark/vue";
import { VueInput } from "agnosticui-core/input/vue";
import { VueToggle } from "agnosticui-core/toggle/vue";

const searchTerm = ref("fox");
const caseSensitive = ref(false);
const matchAll = ref(true);
<\/script>
`,es=`import { LitElement, html } from 'lit';
import 'agnosticui-core/mark';
import 'agnosticui-core/input';
import 'agnosticui-core/toggle';

export class MarkLitExamples extends LitElement {
  createRenderRoot() {
    return this;
  }

  static get properties() {
    return {
      searchTerm: { type: String, state: true },
      caseSensitive: { type: Boolean, state: true },
      matchAll: { type: Boolean, state: true },
    };
  }

  constructor() {
    super();
    this.searchTerm = 'fox';
    this.caseSensitive = false;
    this.matchAll = true;
  }

  handleSearchInput(event) {
    this.searchTerm = event.detail.value;
  }

  handleCaseSensitiveChange(event) {
    this.caseSensitive = event.detail.checked;
  }

  handleMatchAllChange(event) {
    this.matchAll = event.detail.checked;
  }

  render() {
    return html\`
      <section class="mbe4">
        <h2>Mark Variants</h2>
        <div class="flex flex-wrap items-center">
          <div class="mis3 mie3">
            <ag-mark variant="warning">warning</ag-mark>
          </div>
          <div class="mis3 mie3">
            <ag-mark variant="info">info</ag-mark>
          </div>
          <div class="mis3 mie3">
            <ag-mark variant="success">success</ag-mark>
          </div>
          <div class="mis3 mie3">
            <ag-mark variant="error">error</ag-mark>
          </div>
          <div class="mis3 mie3">
            <ag-mark variant="primary">primary</ag-mark>
          </div>
          <div class="mis3 mie3">
            <ag-mark variant="secondary">secondary</ag-mark>
          </div>
          <div class="mis3 mie3">
            <ag-mark variant="monochrome">monochrome</ag-mark>
          </div>
        </div>
      </section>
      <section class="mbe4">
        <h2>Reactive Highlighting</h2>
        <div class="flex items-center mbe4">
          <ag-input
            class="full-width"
            .value=\${this.searchTerm}
            label="Enter text to highlight"
            type="text"
            @input=\${this.handleSearchInput}
          ></ag-input>
        </div>
        <div class="flex items-center mbe3">
          <ag-toggle
            .checked=\${this.caseSensitive}
            label="Case sensitive"
            @change=\${this.handleCaseSensitiveChange}
          ></ag-toggle>
          <span class="mis2">Case sensitive</span>
        </div>
        <div class="flex items-center mbe3">
          <ag-toggle
            .checked=\${this.matchAll}
            label="Match all"
            @change=\${this.handleMatchAllChange}
          ></ag-toggle>
          <span class="mis2">Match all</span>
        </div>
        <div class="mbe4">
          <p>
            <ag-mark
              search=\${this.searchTerm}
              ?caseSensitive=\${this.caseSensitive}
              ?matchAll=\${this.matchAll}
              variant="warning"
            >
              The quick brown fox jumps over the lazy dog. The lazy fox was not the same as the other fox.
            </ag-mark>
          </p>
        </div>
      </section>
    \`;
  }
}

// Register the custom element
customElements.define('mark-lit-examples', MarkLitExamples);
`,ns=`import { useState } from "react";
import { ReactMark } from "agnosticui-core/mark/react";
import { ReactInput } from "agnosticui-core/input/react";
import { ReactToggle } from "agnosticui-core/toggle/react";

export default function MarkReactExamples() {
  const [searchTerm, setSearchTerm] = useState("fox");
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [matchAll, setMatchAll] = useState(true);

  const handleSearchInput = (event) => {
    setSearchTerm(event.detail.value);
  };

  const handleCaseSensitiveChange = (event) => {
    setCaseSensitive(event.detail.checked);
  };

  const handleMatchAllChange = (event) => {
    setMatchAll(event.detail.checked);
  };

  return (
    <>
      <section className="mbe4">
        <h2>Mark Variants</h2>
        <div className="flex flex-wrap items-center">
          <div className="mis3 mie3">
            <ReactMark variant="warning">warning</ReactMark>
          </div>
          <div className="mis3 mie3">
            <ReactMark variant="info">info</ReactMark>
          </div>
          <div className="mis3 mie3">
            <ReactMark variant="success">success</ReactMark>
          </div>
          <div className="mis3 mie3">
            <ReactMark variant="error">error</ReactMark>
          </div>
          <div className="mis3 mie3">
            <ReactMark variant="primary">primary</ReactMark>
          </div>
          <div className="mis3 mie3">
            <ReactMark variant="secondary">secondary</ReactMark>
          </div>
          <div className="mis3 mie3">
            <ReactMark variant="monochrome">monochrome</ReactMark>
          </div>
        </div>
      </section>
      <section className="mbe4">
        <h2>Reactive Highlighting</h2>
        <div className="flex items-center mbe4">
          <ReactInput
            className="full-width"
            value={searchTerm}
            label="Enter text to highlight"
            type="text"
            onInput={handleSearchInput}
          />
        </div>
        <div className="flex items-center mbe3">
          <ReactToggle
            checked={caseSensitive}
            label="Case sensitive"
            onChange={handleCaseSensitiveChange}
          />
          <span className="mis2">Case sensitive</span>
        </div>
        <div className="flex items-center mbe3">
          <ReactToggle
            checked={matchAll}
            label="Match all"
            onChange={handleMatchAllChange}
          />
          <span className="mis2">Match all</span>
        </div>
        <div className="mbe4">
          <p>
            <ReactMark
              search={searchTerm}
              caseSensitive={caseSensitive}
              matchAll={matchAll}
              variant="warning"
            >
              The quick brown fox jumps over the lazy dog. The lazy fox was not the same as the other fox.
            </ReactMark>
          </p>
        </div>
      </section>
    </>
  );
}
`,As=JSON.parse('{"title":"Mark","description":"","frontmatter":{},"headers":[],"relativePath":"components/mark.md","filePath":"components/mark.md"}'),ls={name:"components/mark.md"},bs=Object.assign(ls,{setup(h){return(i,a)=>(A(),C("div",null,[a[1]||(a[1]=t("h1",{id:"mark",tabindex:"-1"},[d("Mark "),t("a",{class:"header-anchor",href:"#mark","aria-label":'Permalink to "Mark"'},"​")],-1)),n(D),a[2]||(a[2]=b('<p>The <code>Mark</code> component is used to highlight or &quot;mark&quot; a portion of text. It can be used in two modes:</p><ol><li><strong>Static Mode</strong>: By default, it wraps its content in a <code>&lt;mark&gt;</code> tag, similar to the native HTML element, but styled with AgnosticUI design tokens.</li><li><strong>Reactive Mode</strong>: When a <code>search</code> prop is provided, the component will dynamically find and highlight substrings within its content that match the search term.</li></ol><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2>',3)),n($,{component:"mark","vue-code":l(ts),"lit-code":l(es),"react-code":l(ns)},{vue:p(()=>[n(is)]),lit:p(()=>[...a[0]||(a[0]=[t("mark-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),a[3]||(a[3]=b(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The framework examples below <code>import</code> AgnosticUI as an <code>npm</code> package. Alternatively, you can use the <strong>CLI for complete control, AI/LLM visibility, and full code ownership</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> init</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> --framework</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> FRAMEWORK</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;"> # react, vue, lit, svelte, etc.</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> add</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> Mark</span></span></code></pre></div><p>The CLI copies source code directly into your project, giving you full visibility and control. After running <code>npx ag add</code>, you&#39;ll receive exact import instructions.</p></div><h3 id="static-highlighting" tabindex="-1">Static Highlighting <a class="header-anchor" href="#static-highlighting" aria-label="Permalink to &quot;Static Highlighting&quot;">​</a></h3><p>To highlight a static piece of text, simply wrap the text with the <code>Mark</code> component.</p><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    This is some text with a &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueMark</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;success&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;highlighted part&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueMark</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt; inside it.</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ts&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { defineComponent } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;vue&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { VueMark } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/mark/vue&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> defineComponent</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">({</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  components: { VueMark }</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">})</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ReactMark } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/mark/react&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> function</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> Example</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      This is some text with a &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactMark</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;success&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;highlighted part&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactMark</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt; inside it.</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></details><details class="details custom-block"><summary>Lit (Web Components)</summary><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;module&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/mark&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  This is some text with a &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-mark</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;success&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;highlighted part&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-mark</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt; inside it.</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><h3 id="reactive-highlighting" tabindex="-1">Reactive Highlighting <a class="header-anchor" href="#reactive-highlighting" aria-label="Permalink to &quot;Reactive Highlighting&quot;">​</a></h3><p>To dynamically highlight text, provide the full text as the child of the <code>Mark</code> component and pass a <code>search</code> term as a prop. You can also control the matching behavior with <code>caseSensitive</code> and <code>matchAll</code>.</p><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> class</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;mbe24&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">vue-input</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      v-model</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;searchTerm&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Enter text to highlight&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;text&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueMark</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :search</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;searchTerm&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :match-all</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;true&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;warning&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      The quick brown fox jumps over the lazy dog. The lazy fox was not the same as the other fox.</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueMark</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ts&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> setup</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ref } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;vue&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { VueMark } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/mark/vue&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { VueInput } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/input/vue&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> searchTerm</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> ref</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;fox&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ReactMark } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/mark/react&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ReactInput } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/input/react&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { useState } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;react&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> function</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> Example</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">searchTerm</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">setSearchTerm</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;fox&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{ marginBottom: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;24px&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactInput</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Enter text to highlight&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">searchTerm</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          onInput</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setSearchTerm</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">((e.target </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">as</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> HTMLInputElement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">).value)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactMark</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> search</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">searchTerm</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> matchAll</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">true</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;warning&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          The quick brown fox jumps over the lazy dog. The lazy fox was not the same as the other fox.</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactMark</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></details><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>variant</code></td><td>&#39;warning&#39; | &#39;info&#39; | &#39;success&#39; | &#39;error&#39; | &#39;primary&#39; | &#39;secondary&#39; | &#39;monochrome&#39;</td><td>&#39;warning&#39;</td><td>Sets the color variant for the highlight.</td></tr><tr><td><code>search</code></td><td><code>string</code></td><td><code>undefined</code></td><td>The substring to search for and highlight within the component&#39;s content. When provided, enables reactive mode.</td></tr><tr><td><code>caseSensitive</code></td><td><code>boolean</code></td><td><code>false</code></td><td>If <code>true</code>, the search will be case-sensitive. Only applies in reactive mode.</td></tr><tr><td><code>matchAll</code></td><td><code>boolean</code></td><td><code>false</code></td><td>If <code>true</code>, all occurrences of the search term will be highlighted. If <code>false</code>, only the first occurrence is highlighted.</td></tr></tbody></table><h2 id="accessibility" tabindex="-1">Accessibility <a class="header-anchor" href="#accessibility" aria-label="Permalink to &quot;Accessibility&quot;">​</a></h2><p>For screen reader users, the component automatically adds visually-hidden text <code>[highlight start]</code> and <code>[highlight end]</code> before and after the highlighted section. This makes the presence of the highlight perceivable to users who may not see the visual styling.</p>`,15))]))}});export{As as __pageData,bs as default};
