import{A as u}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{p as o}from"./chunks/VueVisuallyHidden.vue_vue_type_script_setup_true_lang-C_9Tq_M2.CfZAsFOv.js";import{d as p,c as d,o as r,j as n,a as t,G as i,k as s,w as l,ae as h}from"./chunks/framework.NAAYCHZu.js";import{F as m}from"./chunks/FrameworkExample.Cm-JbUj-.js";import{a as b,x as v}from"./chunks/Button.CFkPNK98.js";import"./chunks/createLucideIcon.B61Wqv9x.js";import"./chunks/state-CovhUvdr.DWhhlYib.js";import"./chunks/sdk.m.DhOmSlC9.js";import"./chunks/Icon.DjToxxjJ.js";const w={class:"flex-inline-center mbe4"},y={class:"btn btn-primary"},g={class:"mbe4"},f=p({__name:"VisuallyHiddenExamples",setup(a){return(c,e)=>(r(),d("section",null,[e[4]||(e[4]=n("div",{class:"mbe4"},[n("h2",{class:"mbs1 mbe3"},"Visually Hidden Usage"),n("p",{class:"mbe3"},[t(" The "),n("code",null,"VisuallyHidden"),t(" component will hide content from the screen, but the content will still be available to screen readers. This is useful for accessibility, for example, providing a text label for an icon-only button. ")]),n("p",null,' In the example below, we have a button with a "Close" icon. Sighted users can see the icon, and screen reader users will hear the text "Close". ')],-1)),n("div",w,[n("button",y,[e[1]||(e[1]=n("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 16 16"},[n("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})],-1)),i(s(o),null,{default:l(()=>[...e[0]||(e[0]=[t("Close",-1)])]),_:1})])]),e[5]||(e[5]=n("div",{class:"mbe4"},[n("p",null," You can also use it to provide additional context that might be obvious to sighted users but not to screen reader users. ")],-1)),n("div",g,[n("p",null,[e[3]||(e[3]=t(" New post",-1)),i(s(o),null,{default:l(()=>[...e[2]||(e[2]=[t(" (opens in a new window)",-1)])]),_:1})])])]))}});class x extends b{createRenderRoot(){return this}render(){return v`
      <section>
        <div class="mbe4">
          <h2 class="mbs1 mbe3">Visually Hidden Usage</h2>
          <p class="mbe3">
            The <code>VisuallyHidden</code> component will hide content from the screen,
            but the content will still be available to screen readers. This is useful
            for accessibility, for example, providing a text label for an icon-only button.
          </p>
          <p>
            In the example below, we have a button with a "Close" icon. Sighted users
            can see the icon, and screen reader users will hear the text "Close".
          </p>
        </div>
        <div class="flex-inline-center mbe4">
          <button class="btn btn-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
            <ag-visually-hidden>Close</ag-visually-hidden>
          </button>
        </div>
        <div class="mbe4">
          <p>
            You can also use it to provide additional context that might be obvious
            to sighted users but not to screen reader users.
          </p>
        </div>
        <div class="mbe4">
          <p>
            New post<ag-visually-hidden> (opens in a new window)</ag-visually-hidden>
          </p>
        </div>
      </section>
    `}}customElements.define("visually-hidden-lit-examples",x);const V=`<template>
  <section>
    <div class="mbe4">
      <h2 class="mbs1 mbe3">Visually Hidden Usage</h2>
      <p class="mbe3">
        The <code>VisuallyHidden</code> component will hide content from the screen,
        but the content will still be available to screen readers. This is useful
        for accessibility, for example, providing a text label for an icon-only button.
      </p>
      <p>
        In the example below, we have a button with a "Close" icon. Sighted users
        can see the icon, and screen reader users will hear the text "Close".
      </p>
    </div>
    <div class="flex-inline-center mbe4">
      <button class="btn btn-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
        <VueVisuallyHidden>Close</VueVisuallyHidden>
      </button>
    </div>
    <div class="mbe4">
      <p>
        You can also use it to provide additional context that might be obvious
        to sighted users but not to screen reader users.
      </p>
    </div>
    <div class="mbe4">
      <p>
        New post<VueVisuallyHidden> (opens in a new window)</VueVisuallyHidden>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { VueVisuallyHidden } from "agnosticui-core/visually-hidden/vue";
<\/script>
`,H=`import { LitElement, html } from 'lit';
import 'agnosticui-core/visually-hidden';

export class VisuallyHiddenLitExamples extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html\`
      <section>
        <div class="mbe4">
          <h2 class="mbs1 mbe3">Visually Hidden Usage</h2>
          <p class="mbe3">
            The <code>VisuallyHidden</code> component will hide content from the screen,
            but the content will still be available to screen readers. This is useful
            for accessibility, for example, providing a text label for an icon-only button.
          </p>
          <p>
            In the example below, we have a button with a "Close" icon. Sighted users
            can see the icon, and screen reader users will hear the text "Close".
          </p>
        </div>
        <div class="flex-inline-center mbe4">
          <button class="btn btn-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
            <ag-visually-hidden>Close</ag-visually-hidden>
          </button>
        </div>
        <div class="mbe4">
          <p>
            You can also use it to provide additional context that might be obvious
            to sighted users but not to screen reader users.
          </p>
        </div>
        <div class="mbe4">
          <p>
            New post<ag-visually-hidden> (opens in a new window)</ag-visually-hidden>
          </p>
        </div>
      </section>
    \`;
  }
}

customElements.define('visually-hidden-lit-examples', VisuallyHiddenLitExamples);
`,C=`import { ReactVisuallyHidden } from "agnosticui-core/visually-hidden/react";

export default function VisuallyHiddenReactExamples() {
  return (
    <section>
      <div className="mbe4">
        <h2 className="mbs1 mbe3">Visually Hidden Usage</h2>
        <p className="mbe3">
          The <code>VisuallyHidden</code> component will hide content from the screen,
          but the content will still be available to screen readers. This is useful
          for accessibility, for example, providing a text label for an icon-only button.
        </p>
        <p>
          In the example below, we have a button with a "Close" icon. Sighted users
          can see the icon, and screen reader users will hear the text "Close".
        </p>
      </div>
      <div className="flex-inline-center mbe4">
        <button className="btn btn-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
          <ReactVisuallyHidden>Close</ReactVisuallyHidden>
        </button>
      </div>
      <div className="mbe4">
        <p>
          You can also use it to provide additional context that might be obvious
          to sighted users but not to screen reader users.
        </p>
      </div>
      <div className="mbe4">
        <p>
          New post<ReactVisuallyHidden> (opens in a new window)</ReactVisuallyHidden>
        </p>
      </div>
    </section>
  );
}
`,I=JSON.parse('{"title":"VisuallyHidden","description":"","frontmatter":{"title":"VisuallyHidden"},"headers":[],"relativePath":"components/visually-hidden.md","filePath":"components/visually-hidden.md"}'),L={name:"components/visually-hidden.md"},B=Object.assign(L,{setup(a){return(c,e)=>(r(),d("div",null,[e[1]||(e[1]=n("h1",{id:"visuallyhidden",tabindex:"-1"},[t("VisuallyHidden "),n("a",{class:"header-anchor",href:"#visuallyhidden","aria-label":'Permalink to "VisuallyHidden"'},"​")],-1)),i(u),e[2]||(e[2]=n("p",null,[t("A utility component to visually hide content while keeping it accessible to screen readers. This is a common pattern for accessibility, often implemented with a CSS class like "),n("code",null,".sr-only"),t(" or "),n("code",null,".visually-hidden"),t(". This component provides a declarative way to achieve the same result.")],-1)),i(m,{component:"visually-hidden","vue-code":s(V),"lit-code":s(H),"react-code":s(C)},{vue:l(()=>[i(f)]),lit:l(()=>[...e[0]||(e[0]=[n("visually-hidden-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),e[3]||(e[3]=h("",6))]))}});export{I as __pageData,B as default};
