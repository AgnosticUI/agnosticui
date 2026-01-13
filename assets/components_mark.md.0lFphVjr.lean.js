import{A as D}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{i as w,z as v,a as x,x as c}from"./chunks/Button.Bujdzq23.js";import{f as T}from"./chunks/query-BykXNUlT.Pm7lu9c1.js";import{s as _}from"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d as B,c as C,o as A,r as R,p as f,F as q,j as t,G as n,k as l,w as k,a as d,ae as b}from"./chunks/framework.NAAYCHZu.js";import{C as V}from"./chunks/VueInput.vue_vue_type_script_setup_true_lang-Dsxo7DuX.BU_KeN0p.js";import{v as E}from"./chunks/VueToggle.vue_vue_type_script_setup_true_lang-BxrvAsse.DA_G4Cbh.js";import{F as $}from"./chunks/FrameworkExample.Vj5DwYx5.js";import"./chunks/createLucideIcon.B61Wqv9x.js";import"./chunks/Icon.odq14qpJ.js";import"./chunks/slot.B17U6J5C.js";import"./chunks/form-control-utils.LZkauYsx.js";var I=Object.defineProperty,u=(h,i,a,o)=>{for(var r=void 0,s=h.length-1,e;s>=0;s--)(e=h[s])&&(r=e(i,a,r)||r);return r&&I(i,a,r),r};const M=class extends x{get _textContent(){return this._slot?this._slot.assignedNodes({flatten:!0}).map(i=>i.textContent??"").join(""):""}constructor(){super(),this.variant="warning",this.search=void 0,this.caseSensitive=!1,this.matchAll=!1}_onSlotChange(){this.requestUpdate()}_renderStatic(){return c`
      <mark class="mark mark-${this.variant}" part="ag-mark">
        <slot @slotchange=${this._onSlotChange}></slot>
      </mark>
    `}_renderReactive(){const i=this._textContent,a=c`<slot @slotchange=${this._onSlotChange} style="display: none;"></slot>`;if(!i)return a;if(!this.search)return c`${a}${i}`;const o=this.search.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&");if(!o)return c`${a}${i}`;let r=this.matchAll?"g":"";this.caseSensitive||(r+="i");const s=new RegExp(o,r),e=[];if(this.matchAll){const p=[...i.matchAll(s)];if(!p.length)return c`${a}${i}`;let y=0;for(const g of p)e.push(i.substring(y,g.index)),e.push(c`<mark class="mark mark-${this.variant}">${g[0]}</mark>`),y=(g.index??0)+g[0].length;e.push(i.substring(y))}else{const p=i.match(s);if(p&&p.index!==void 0){const y=i.substring(0,p.index),g=c`<mark class="mark mark-${this.variant}">${p[0]}</mark>`,S=i.substring(p.index+p[0].length);e.push(y,g,S)}else e.push(i)}return c`${a}${e}`}render(){return this.search?this._renderReactive():this._renderStatic()}};M.styles=w`
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
  `;let m=M;u([v({type:String})],m.prototype,"variant");u([v({type:String})],m.prototype,"search");u([v({type:Boolean,attribute:"case-sensitive"})],m.prototype,"caseSensitive");u([v({type:Boolean,attribute:"match-all"})],m.prototype,"matchAll");u([T("slot")],m.prototype,"_slot");customElements.get("ag-mark")||customElements.define("ag-mark",m);const N=B({name:"VueMark",props:{variant:{type:String,default:"warning"},search:{type:String,default:void 0},caseSensitive:{type:Boolean,default:!1},matchAll:{type:Boolean,default:!1}}}),P=["variant","search",".caseSensitive",".matchAll"];function z(h,i,a,o,r,s){return A(),C("ag-mark",{variant:h.variant,search:h.search,".caseSensitive":h.caseSensitive,".matchAll":h.matchAll},[R(h.$slots,"default")],40,P)}const F=_(N,[["render",z]]),j={class:"mbe4"},L={class:"flex flex-wrap items-center"},H={class:"mis3 mie3"},U={class:"mis3 mie3"},O={class:"mis3 mie3"},W={class:"mis3 mie3"},G={class:"mis3 mie3"},J={class:"mis3 mie3"},K={class:"mis3 mie3"},Y={class:"mbe4"},Q={class:"flex items-center mbe4"},X={class:"flex items-center mbe3"},Z={class:"flex items-center mbe3"},ss={class:"mbe4"},is=B({__name:"MarkExamples",setup(h){const i=f("fox"),a=f(!1),o=f(!0);return(r,s)=>(A(),C(q,null,[t("section",j,[s[10]||(s[10]=t("h2",null,"Mark Variants",-1)),t("div",L,[t("div",H,[n(l(F),{variant:"warning"},{default:k(()=>[...s[3]||(s[3]=[d("warning",-1)])]),_:1})]),t("div",U,[n(l(F),{variant:"info"},{default:k(()=>[...s[4]||(s[4]=[d("info",-1)])]),_:1})]),t("div",O,[n(l(F),{variant:"success"},{default:k(()=>[...s[5]||(s[5]=[d("success",-1)])]),_:1})]),t("div",W,[n(l(F),{variant:"error"},{default:k(()=>[...s[6]||(s[6]=[d("error",-1)])]),_:1})]),t("div",G,[n(l(F),{variant:"primary"},{default:k(()=>[...s[7]||(s[7]=[d("primary",-1)])]),_:1})]),t("div",J,[n(l(F),{variant:"secondary"},{default:k(()=>[...s[8]||(s[8]=[d("secondary",-1)])]),_:1})]),t("div",K,[n(l(F),{variant:"monochrome"},{default:k(()=>[...s[9]||(s[9]=[d("monochrome",-1)])]),_:1})])])]),t("section",Y,[s[14]||(s[14]=t("h2",null,"Reactive Highlighting",-1)),t("div",Q,[n(l(V),{class:"full-width",value:i.value,"onUpdate:value":s[0]||(s[0]=e=>i.value=e),label:"Enter text to highlight",type:"text"},null,8,["value"])]),t("div",X,[n(l(E),{checked:a.value,"onUpdate:checked":s[1]||(s[1]=e=>a.value=e),label:"Case sensitive"},null,8,["checked"]),s[11]||(s[11]=t("span",{class:"mis2"},"Case sensitive",-1))]),t("div",Z,[n(l(E),{checked:o.value,"onUpdate:checked":s[2]||(s[2]=e=>o.value=e),label:"Match all"},null,8,["checked"]),s[12]||(s[12]=t("span",{class:"mis2"},"Match all",-1))]),t("div",ss,[t("p",null,[n(l(F),{search:i.value,caseSensitive:a.value,matchAll:o.value,variant:"warning"},{default:k(()=>[...s[13]||(s[13]=[d(" The quick brown fox jumps over the lazy dog. The lazy fox was not the same as the other fox. ",-1)])]),_:1},8,["search","caseSensitive","matchAll"])])])])],64))}});class as extends x{createRenderRoot(){return this}static get properties(){return{searchTerm:{type:String,state:!0},caseSensitive:{type:Boolean,state:!0},matchAll:{type:Boolean,state:!0}}}constructor(){super(),this.searchTerm="fox",this.caseSensitive=!1,this.matchAll=!0}handleSearchInput(i){this.searchTerm=i.detail.value}handleCaseSensitiveChange(i){this.caseSensitive=i.detail.checked}handleMatchAllChange(i){this.matchAll=i.detail.checked}render(){return c`
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
`,fs=JSON.parse('{"title":"Mark","description":"","frontmatter":{},"headers":[],"relativePath":"components/mark.md","filePath":"components/mark.md"}'),ls={name:"components/mark.md"},Cs=Object.assign(ls,{setup(h){return(i,a)=>(A(),C("div",null,[a[1]||(a[1]=t("h1",{id:"mark",tabindex:"-1"},[d("Mark "),t("a",{class:"header-anchor",href:"#mark","aria-label":'Permalink to "Mark"'},"​")],-1)),n(D),a[2]||(a[2]=b("",3)),n($,{component:"mark","vue-code":l(ts),"lit-code":l(es),"react-code":l(ns)},{vue:k(()=>[n(is)]),lit:k(()=>[...a[0]||(a[0]=[t("mark-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),a[3]||(a[3]=b("",15))]))}});export{fs as __pageData,Cs as default};
