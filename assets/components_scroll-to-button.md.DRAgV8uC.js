import{A as F}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{g as y}from"./chunks/VueScrollToButton.CKJxIeCs.js";import{R as x}from"./chunks/rocket.0FY0xHlE.js";import{d as v,_ as f,C as h,c as o,o as r,j as s,G as e,F as u,B,t as C,a as i,w as p,ae as g,k as l}from"./chunks/framework.NAAYCHZu.js";import{F as w}from"./chunks/FrameworkExample.Z9eaTrCu.js";import{a as S,x as k}from"./chunks/Button.DkmThuAs.js";import{c as m}from"./chunks/createLucideIcon.B61Wqv9x.js";import{Z as T}from"./chunks/sdk.m.DhOmSlC9.js";import{P as E,A as q}from"./chunks/palette.Dy0bFg6z.js";import{M as A}from"./chunks/map-pin.BrE5b0KS.js";import{C as D,a as z}from"./chunks/circle-x.wfdRs8_1.js";import"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import"./chunks/state-CovhUvdr.CfYrM0Q-.js";import"./chunks/Icon.BC5ob6Nk.js";/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=m("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=m("wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]]),R=v({name:"ScrollToButtonExamples",components:{VueScrollToButton:y,Rocket:x}}),V={class:"example-container"},I={class:"example-section"},N={class:"example-section"},j={class:"example-section"},M={class:"example-section"},$={class:"example-section"},_={class:"inline-examples"},U={class:"inline-example"},W={class:"inline-example"},O={class:"inline-example"},G={class:"inline-example"},H={class:"inline-example"},J={class:"example-section"},Q={class:"inline-examples"},Y={class:"inline-example"},K={class:"inline-example"},Z={class:"inline-example"},X={class:"inline-example"},ss={class:"inline-example"},ts={class:"example-section"};function ns(d,t,n,ys,xs,vs){const a=h("VueScrollToButton"),b=h("Rocket");return r(),o(u,null,[s("section",null,[t[0]||(t[0]=s("h2",null,"Default (Icon Only)",-1)),t[1]||(t[1]=s("p",null,"The most common use case - a circular button with just an icon that appears when scrolling down.",-1)),s("div",V,[(r(),o(u,null,B(20,c=>s("p",{key:c,class:"example-paragraph"}," Paragraph "+C(c)+": Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. ",1)),64)),e(a,{style:{bottom:"100px"}})])]),s("section",I,[t[2]||(t[2]=s("h2",null,"With Visible Label",-1)),t[3]||(t[3]=s("p",null,"Show both icon and text label for better clarity. The button becomes pill-shaped automatically.",-1)),e(a,{label:"Back to Top",scrollThreshold:200,showLabel:!0})]),s("section",N,[t[4]||(t[4]=s("h2",null,"Low Scroll Threshold",-1)),t[5]||(t[5]=s("p",null,[i("Control when the button appears by adjusting "),s("code",null,"scrollThreshold"),i(". This one appears after just 100px.")],-1)),e(a,{label:"Quick Access",showLabel:!0,scrollThreshold:100,style:{right:"180px"},shape:"rounded"})]),s("section",j,[t[6]||(t[6]=s("h2",null,"Scroll to Bottom",-1)),t[7]||(t[7]=s("p",null,"Navigate to the end of content. The arrow automatically points down based on the target.",-1)),e(a,{style:{bottom:"160px"},label:"Go to Bottom",target:"bottom",scrollThreshold:400})]),s("section",M,[t[8]||(t[8]=s("h2",null,"Custom Icon with Slot",-1)),t[9]||(t[9]=s("p",null,"Replace the default arrow with any icon using Vue's slot system.",-1)),e(a,{label:"Launch to Top!",style:{bottom:"220px"},scrollThreshold:600},{icon:p(()=>[e(b,{size:20})]),_:1})]),s("section",$,[t[15]||(t[15]=s("h2",null,"Different Sizes",-1)),t[16]||(t[16]=s("p",null,[i("Available sizes: "),s("code",null,"x-sm"),i(", "),s("code",null,"sm"),i(", "),s("code",null,"md"),i(" (default), "),s("code",null,"lg"),i(", "),s("code",null,"xl")],-1)),s("div",_,[s("div",U,[e(a,{size:"x-sm",style:{position:"static"}}),t[10]||(t[10]=s("span",null,"x-sm",-1))]),s("div",W,[e(a,{size:"sm",style:{position:"static"}}),t[11]||(t[11]=s("span",null,"sm",-1))]),s("div",O,[e(a,{size:"md",style:{position:"static"}}),t[12]||(t[12]=s("span",null,"md",-1))]),s("div",G,[e(a,{size:"lg",style:{position:"static"}}),t[13]||(t[13]=s("span",null,"lg",-1))]),s("div",H,[e(a,{size:"xl",style:{position:"static"}}),t[14]||(t[14]=s("span",null,"xl",-1))])])]),s("section",J,[t[22]||(t[22]=s("h2",null,"Different Shapes",-1)),t[23]||(t[23]=s("p",null,[i("Available shapes: "),s("code",null,"circle"),i(" (default), "),s("code",null,"square"),i(", "),s("code",null,"rounded"),i(", "),s("code",null,"rounded-square"),i(", "),s("code",null,"capsule")],-1)),s("div",Q,[s("div",Y,[e(a,{shape:"circle",style:{bottom:"280px"},scrollThreshold:800}),t[17]||(t[17]=s("span",null,"circle",-1))]),s("div",K,[e(a,{shape:"square",style:{bottom:"340px"},scrollThreshold:1e3}),t[18]||(t[18]=s("span",null,"square",-1))]),s("div",Z,[e(a,{shape:"rounded",style:{bottom:"400px"},scrollThreshold:1200}),t[19]||(t[19]=s("span",null,"rounded",-1))]),s("div",X,[e(a,{shape:"rounded-square",style:{bottom:"460px"},scrollThreshold:1400}),t[20]||(t[20]=s("span",null,"rounded-square",-1))]),s("div",ss,[e(a,{shape:"capsule",showLabel:!0,label:"Top",style:{bottom:"580px"},scrollThreshold:1800}),t[21]||(t[21]=s("span",null,"capsule",-1))])])]),s("section",ts,[t[24]||(t[24]=s("h2",null,"Custom Styling with CSS Shadow Parts",-1)),t[25]||(t[25]=s("p",null,"Style internal parts without breaking encapsulation using CSS Shadow Parts.",-1)),e(a,{class:"custom-gradient",label:"Styled Button",style:{bottom:"520px"},scrollThreshold:1600,showLabel:!0})])],64)}const es=f(R,[["render",ns],["__scopeId","data-v-d66abd47"]]);class is extends S{createRenderRoot(){return this}render(){return k`
      <style>
        .lit-example-section {
          margin-top: 3rem;
        }

        .lit-example-section h3 {
          margin-bottom: 0.5rem;
        }

        .lit-example-section p {
          margin-bottom: 1rem;
        }

        .lit-example-container {
          min-height: 120vh;
          padding: 1.5rem;
          background: var(--vp-c-bg-soft);
          border: 1px solid var(--vp-c-divider);
          border-radius: 8px;
          position: relative;
        }

        .lit-example-paragraph {
          margin-bottom: 1.5rem;
          line-height: 1.6;
          color: var(--vp-c-text-2);
        }

        .lit-inline-examples {
          display: flex;
          gap: 2rem;
          align-items: flex-end;
          flex-wrap: wrap;
          padding: 2rem;
          background: var(--vp-c-bg-soft);
          border: 1px solid var(--vp-c-divider);
          border-radius: 8px;
        }

        .lit-inline-example {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .lit-inline-example span {
          font-size: 0.875rem;
          font-family: var(--vp-font-family-mono);
          color: var(--vp-c-text-2);
        }

        /* Custom gradient styling example */
        ag-scroll-to-button.custom-gradient::part(ag-button) {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }

        ag-scroll-to-button.custom-gradient::part(ag-button):hover {
          box-shadow: 0 6px 16px rgba(102, 126, 234, 0.6);
          transform: translateY(-2px);
        }
      </style>

      <section>
        <h2>Default (Icon Only)</h2>
        <p>The most common use case - a circular button with just an icon that appears when scrolling down.</p>
        <div class="lit-example-container">
          ${Array.from({length:20},(t,n)=>k`
            <p class="lit-example-paragraph">
              Paragraph ${n+1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          `)}
          <ag-scroll-to-button style="bottom: 100px"></ag-scroll-to-button>
        </div>
      </section>

      <section class="lit-example-section">
        <h2>With Visible Label</h2>
        <p>Show both icon and text label for better clarity. The button becomes pill-shaped automatically.</p>
        <ag-scroll-to-button
          label="Back to Top"
          scroll-threshold="200"
          show-label
        ></ag-scroll-to-button>
      </section>

      <section class="lit-example-section">
        <h2>Low Scroll Threshold</h2>
        <p>Control when the button appears by adjusting <code>scroll-threshold</code>. This one appears after just 100px.</p>
        <ag-scroll-to-button
          label="Quick Access"
          show-label
          scroll-threshold="100"
          style="right: 180px"
          shape="rounded"
        ></ag-scroll-to-button>
      </section>

      <section class="lit-example-section">
        <h2>Scroll to Bottom</h2>
        <p>Navigate to the end of content. The arrow automatically points down based on the target.</p>
        <ag-scroll-to-button
          style="bottom: 160px"
          label="Go to Bottom"
          target="bottom"
          scroll-threshold="400"
        ></ag-scroll-to-button>
      </section>

      <section class="lit-example-section">
        <h2>Custom Icon with Slot</h2>
        <p>Replace the default arrow with any icon using slots.</p>
        <ag-scroll-to-button
          label="Launch to Top!"
          style="bottom: 220px"
          scroll-threshold="600"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
          </svg>
        </ag-scroll-to-button>
      </section>

      <section class="lit-example-section">
        <h2>Different Sizes</h2>
        <p>Available sizes: <code>x-sm</code>, <code>sm</code>, <code>md</code> (default), <code>lg</code>, <code>xl</code></p>
        <div class="lit-inline-examples">
          <div class="lit-inline-example">
            <ag-scroll-to-button size="x-sm" style="position: static"></ag-scroll-to-button>
            <span>x-sm</span>
          </div>
          <div class="lit-inline-example">
            <ag-scroll-to-button size="sm" style="position: static"></ag-scroll-to-button>
            <span>sm</span>
          </div>
          <div class="lit-inline-example">
            <ag-scroll-to-button size="md" style="position: static"></ag-scroll-to-button>
            <span>md</span>
          </div>
          <div class="lit-inline-example">
            <ag-scroll-to-button size="lg" style="position: static"></ag-scroll-to-button>
            <span>lg</span>
          </div>
          <div class="lit-inline-example">
            <ag-scroll-to-button size="xl" style="position: static"></ag-scroll-to-button>
            <span>xl</span>
          </div>
        </div>
      </section>

      <section class="lit-example-section">
        <h2>Different Shapes</h2>
        <p>Available shapes: <code>circle</code> (default), <code>square</code>, <code>rounded</code>, <code>rounded-square</code>, <code>capsule</code></p>
        <div class="lit-inline-examples">
          <div class="lit-inline-example">
            <ag-scroll-to-button
              shape="circle"
              style="bottom: 280px"
              scroll-threshold="800"
            ></ag-scroll-to-button>
            <span>circle</span>
          </div>
          <div class="lit-inline-example">
            <ag-scroll-to-button
              shape="square"
              style="bottom: 340px"
              scroll-threshold="1000"
            ></ag-scroll-to-button>
            <span>square</span>
          </div>
          <div class="lit-inline-example">
            <ag-scroll-to-button
              shape="rounded"
              style="bottom: 400px"
              scroll-threshold="1200"
            ></ag-scroll-to-button>
            <span>rounded</span>
          </div>
          <div class="lit-inline-example">
            <ag-scroll-to-button
              shape="rounded-square"
              style="bottom: 460px"
              scroll-threshold="1400"
            ></ag-scroll-to-button>
            <span>rounded-square</span>
          </div>
          <div class="lit-inline-example">
            <ag-scroll-to-button
              shape="capsule"
              show-label
              label="Top"
              style="bottom: 580px"
              scroll-threshold="1800"
            ></ag-scroll-to-button>
            <span>capsule</span>
          </div>
        </div>
      </section>

      <section class="lit-example-section">
        <h2>Custom Styling with CSS Shadow Parts</h2>
        <p>Style internal parts without breaking encapsulation using CSS Shadow Parts.</p>
        <ag-scroll-to-button
          class="custom-gradient"
          label="Styled Button"
          style="bottom: 520px"
          scroll-threshold="1600"
          show-label
        ></ag-scroll-to-button>
      </section>
    `}}customElements.define("scroll-to-button-lit-examples",is);const as=`<template>
  <section>
    <h2>Default (Icon Only)</h2>
    <p>The most common use case - a circular button with just an icon that appears when scrolling down.</p>
    <div class="example-container">
      <p
        v-for="i in 20"
        :key="i"
        class="example-paragraph"
      >
        Paragraph {{ i }}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
      </p>
      <VueScrollToButton :style="{bottom: '100px'}" />
    </div>
  </section>

  <section class="example-section">
    <h2>With Visible Label</h2>
    <p>Show both icon and text label for better clarity. The button becomes pill-shaped automatically.</p>
    <VueScrollToButton
      label="Back to Top"
      :scrollThreshold="200"
      :showLabel="true"
    />
  </section>

  <section class="example-section">
    <h2>Low Scroll Threshold</h2>
    <p>Control when the button appears by adjusting <code>scrollThreshold</code>. This one appears after just 100px.</p>
    <VueScrollToButton
      label="Quick Access"
      :showLabel="true"
      :scrollThreshold="100"
      :style="{right: '180px'}"
      shape="rounded"
    />
  </section>

  <section class="example-section">
    <h2>Scroll to Bottom</h2>
    <p>Navigate to the end of content. The arrow automatically points down based on the target.</p>
    <VueScrollToButton
      :style="{bottom: '160px'}"
      label="Go to Bottom"
      target="bottom"
      :scrollThreshold="400"
    />
  </section>

  <section class="example-section">
    <h2>Custom Icon with Slot</h2>
    <p>Replace the default arrow with any icon using Vue's slot system.</p>
    <VueScrollToButton
      label="Launch to Top!"
      :style="{bottom: '220px'}"
      :scrollThreshold="600"
    >
      <template #icon>
        <Rocket :size="20" />
      </template>
    </VueScrollToButton>
  </section>

  <section class="example-section">
    <h2>Different Sizes</h2>
    <p>Available sizes: <code>x-sm</code>, <code>sm</code>, <code>md</code> (default), <code>lg</code>, <code>xl</code></p>
    <div class="inline-examples">
      <div class="inline-example">
        <VueScrollToButton
          size="x-sm"
          style="position: static;"
        />
        <span>x-sm</span>
      </div>
      <div class="inline-example">
        <VueScrollToButton
          size="sm"
          style="position: static;"
        />
        <span>sm</span>
      </div>
      <div class="inline-example">
        <VueScrollToButton
          size="md"
          style="position: static;"
        />
        <span>md</span>
      </div>
      <div class="inline-example">
        <VueScrollToButton
          size="lg"
          style="position: static;"
        />
        <span>lg</span>
      </div>
      <div class="inline-example">
        <VueScrollToButton
          size="xl"
          style="position: static;"
        />
        <span>xl</span>
      </div>
    </div>
  </section>

  <section class="example-section">
    <h2>Different Shapes</h2>
    <p>Available shapes: <code>circle</code> (default), <code>square</code>, <code>rounded</code>, <code>rounded-square</code>, <code>capsule</code></p>
    <div class="inline-examples">
      <div class="inline-example">
        <VueScrollToButton
          shape="circle"
          :style="{bottom: '280px'}"
          :scrollThreshold="800"
        />
        <span>circle</span>
      </div>
      <div class="inline-example">
        <VueScrollToButton
          shape="square"
          :style="{bottom: '340px'}"
          :scrollThreshold="1000"
        />
        <span>square</span>
      </div>
      <div class="inline-example">
        <VueScrollToButton
          shape="rounded"
          :style="{bottom: '400px'}"
          :scrollThreshold="1200"
        />
        <span>rounded</span>
      </div>
      <div class="inline-example">
        <VueScrollToButton
          shape="rounded-square"
          :style="{bottom: '460px'}"
          :scrollThreshold="1400"
        />
        <span>rounded-square</span>
      </div>
      <div class="inline-example">
        <VueScrollToButton
          shape="capsule"
          :showLabel="true"
          label="Top"
          :style="{bottom: '580px'}"
          :scrollThreshold="1800"
        />
        <span>capsule</span>
      </div>
    </div>
  </section>

  <section class="example-section">
    <h2>Custom Styling with CSS Shadow Parts</h2>
    <p>Style internal parts without breaking encapsulation using CSS Shadow Parts.</p>
    <VueScrollToButton
      class="custom-gradient"
      label="Styled Button"
      :style="{bottom: '520px'}"
      :scrollThreshold="1600"
      :showLabel="true"
    />
  </section>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueScrollToButton } from "agnosticui-core/scroll-to-button/vue";
import { Rocket } from "lucide-vue-next";

export default defineComponent({
  name: "ScrollToButtonExamples",
  components: {
    VueScrollToButton,
    Rocket,
  },
});
<\/script>

<style scoped>
.example-section {
  margin-top: 3rem;
}

.example-section h3 {
  margin-bottom: 0.5rem;
}

.example-section p {
  margin-bottom: 1rem;
}

.example-container {
  min-height: 120vh;
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  position: relative;
}

.example-paragraph {
  margin-bottom: 1.5rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.inline-examples {
  display: flex;
  gap: 2rem;
  align-items: flex-end;
  flex-wrap: wrap;
  padding: 2rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
}

.inline-example {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.inline-example span {
  font-size: 0.875rem;
  font-family: var(--vp-font-family-mono);
  color: var(--vp-c-text-2);
}
</style>

<style>
/* Custom gradient styling example - must be global to target shadow parts */
ag-scroll-to-button.custom-gradient::part(ag-button) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

ag-scroll-to-button.custom-gradient::part(ag-button):hover {
  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.6);
  transform: translateY(-2px);
}
</style>
`,ls=`
import { LitElement, html, css } from 'lit';
import 'agnosticui-core/scroll-to-button';

export class ScrollToButtonLitExamples extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html\`
      <style>
        .lit-example-section {
          margin-top: 3rem;
        }

        .lit-example-section h3 {
          margin-bottom: 0.5rem;
        }

        .lit-example-section p {
          margin-bottom: 1rem;
        }

        .lit-example-container {
          min-height: 120vh;
          padding: 1.5rem;
          background: var(--vp-c-bg-soft);
          border: 1px solid var(--vp-c-divider);
          border-radius: 8px;
          position: relative;
        }

        .lit-example-paragraph {
          margin-bottom: 1.5rem;
          line-height: 1.6;
          color: var(--vp-c-text-2);
        }

        .lit-inline-examples {
          display: flex;
          gap: 2rem;
          align-items: flex-end;
          flex-wrap: wrap;
          padding: 2rem;
          background: var(--vp-c-bg-soft);
          border: 1px solid var(--vp-c-divider);
          border-radius: 8px;
        }

        .lit-inline-example {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .lit-inline-example span {
          font-size: 0.875rem;
          font-family: var(--vp-font-family-mono);
          color: var(--vp-c-text-2);
        }

        /* Custom gradient styling example */
        ag-scroll-to-button.custom-gradient::part(ag-button) {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }

        ag-scroll-to-button.custom-gradient::part(ag-button):hover {
          box-shadow: 0 6px 16px rgba(102, 126, 234, 0.6);
          transform: translateY(-2px);
        }
      </style>

      <section>
        <h2>Default (Icon Only)</h2>
        <p>The most common use case - a circular button with just an icon that appears when scrolling down.</p>
        <div class="lit-example-container">
          \${Array.from({ length: 20 }, (_, i) => html\`
            <p class="lit-example-paragraph">
              Paragraph \${i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          \`)}
          <ag-scroll-to-button style="bottom: 100px"></ag-scroll-to-button>
        </div>
      </section>

      <section class="lit-example-section">
        <h2>With Visible Label</h2>
        <p>Show both icon and text label for better clarity. The button becomes pill-shaped automatically.</p>
        <ag-scroll-to-button
          label="Back to Top"
          scroll-threshold="200"
          show-label
        ></ag-scroll-to-button>
      </section>

      <section class="lit-example-section">
        <h2>Low Scroll Threshold</h2>
        <p>Control when the button appears by adjusting <code>scroll-threshold</code>. This one appears after just 100px.</p>
        <ag-scroll-to-button
          label="Quick Access"
          show-label
          scroll-threshold="100"
          style="right: 180px"
          shape="rounded"
        ></ag-scroll-to-button>
      </section>

      <section class="lit-example-section">
        <h2>Scroll to Bottom</h2>
        <p>Navigate to the end of content. The arrow automatically points down based on the target.</p>
        <ag-scroll-to-button
          style="bottom: 160px"
          label="Go to Bottom"
          target="bottom"
          scroll-threshold="400"
        ></ag-scroll-to-button>
      </section>

      <section class="lit-example-section">
        <h2>Custom Icon with Slot</h2>
        <p>Replace the default arrow with any icon using slots.</p>
        <ag-scroll-to-button
          label="Launch to Top!"
          style="bottom: 220px"
          scroll-threshold="600"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
          </svg>
        </ag-scroll-to-button>
      </section>

      <section class="lit-example-section">
        <h2>Different Sizes</h2>
        <p>Available sizes: <code>x-sm</code>, <code>sm</code>, <code>md</code> (default), <code>lg</code>, <code>xl</code></p>
        <div class="lit-inline-examples">
          <div class="lit-inline-example">
            <ag-scroll-to-button size="x-sm" style="position: static"></ag-scroll-to-button>
            <span>x-sm</span>
          </div>
          <div class="lit-inline-example">
            <ag-scroll-to-button size="sm" style="position: static"></ag-scroll-to-button>
            <span>sm</span>
          </div>
          <div class="lit-inline-example">
            <ag-scroll-to-button size="md" style="position: static"></ag-scroll-to-button>
            <span>md</span>
          </div>
          <div class="lit-inline-example">
            <ag-scroll-to-button size="lg" style="position: static"></ag-scroll-to-button>
            <span>lg</span>
          </div>
          <div class="lit-inline-example">
            <ag-scroll-to-button size="xl" style="position: static"></ag-scroll-to-button>
            <span>xl</span>
          </div>
        </div>
      </section>

      <section class="lit-example-section">
        <h2>Different Shapes</h2>
        <p>Available shapes: <code>circle</code> (default), <code>square</code>, <code>rounded</code>, <code>rounded-square</code>, <code>capsule</code></p>
        <div class="lit-inline-examples">
          <div class="lit-inline-example">
            <ag-scroll-to-button
              shape="circle"
              style="bottom: 280px"
              scroll-threshold="800"
            ></ag-scroll-to-button>
            <span>circle</span>
          </div>
          <div class="lit-inline-example">
            <ag-scroll-to-button
              shape="square"
              style="bottom: 340px"
              scroll-threshold="1000"
            ></ag-scroll-to-button>
            <span>square</span>
          </div>
          <div class="lit-inline-example">
            <ag-scroll-to-button
              shape="rounded"
              style="bottom: 400px"
              scroll-threshold="1200"
            ></ag-scroll-to-button>
            <span>rounded</span>
          </div>
          <div class="lit-inline-example">
            <ag-scroll-to-button
              shape="rounded-square"
              style="bottom: 460px"
              scroll-threshold="1400"
            ></ag-scroll-to-button>
            <span>rounded-square</span>
          </div>
          <div class="lit-inline-example">
            <ag-scroll-to-button
              shape="capsule"
              show-label
              label="Top"
              style="bottom: 580px"
              scroll-threshold="1800"
            ></ag-scroll-to-button>
            <span>capsule</span>
          </div>
        </div>
      </section>

      <section class="lit-example-section">
        <h2>Custom Styling with CSS Shadow Parts</h2>
        <p>Style internal parts without breaking encapsulation using CSS Shadow Parts.</p>
        <ag-scroll-to-button
          class="custom-gradient"
          label="Styled Button"
          style="bottom: 520px"
          scroll-threshold="1600"
          show-label
        ></ag-scroll-to-button>
      </section>
    \`;
  }
}

customElements.define('scroll-to-button-lit-examples', ScrollToButtonLitExamples);
`,os=`
import { ReactScrollToButton } from "agnosticui-core/scroll-to-button/react";

export default function ScrollToButtonReactExamples() {
  return (
    <section>
      <style>{\`
        .react-example-section {
          margin-top: 3rem;
        }
        .react-example-section h3 {
          margin-bottom: 0.5rem;
        }
        .react-example-section p {
          margin-bottom: 1rem;
        }
        .react-example-container {
          min-height: 120vh;
          padding: 1.5rem;
          background: var(--vp-c-bg-soft);
          border: 1px solid var(--vp-c-divider);
          border-radius: 8px;
          position: relative;
        }
        .react-example-paragraph {
          margin-bottom: 1.5rem;
          line-height: 1.6;
          color: var(--vp-c-text-2);
        }
        .react-inline-examples {
          display: flex;
          gap: 2rem;
          align-items: flex-end;
          flex-wrap: wrap;
          padding: 2rem;
          background: var(--vp-c-bg-soft);
          border: 1px solid var(--vp-c-divider);
          border-radius: 8px;
        }
        .react-inline-example {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }
        .react-inline-example span {
          font-size: 0.875rem;
          font-family: var(--vp-font-family-mono);
          color: var(--vp-c-text-2);
        }
        /* Custom gradient styling example */
        ag-scroll-to-button.custom-gradient::part(ag-button) {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }
        ag-scroll-to-button.custom-gradient::part(ag-button):hover {
          box-shadow: 0 6px 16px rgba(102, 126, 234, 0.6);
          transform: translateY(-2px);
        }
      \`}</style>
      
      <h2>Default (Icon Only)</h2>
      <p>The most common use case - a circular button with just an icon that appears when scrolling down.</p>
      <div className="react-example-container">
        {Array.from({ length: 20 }).map((_, i) => (
          <p key={i} className="react-example-paragraph">
            Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        ))}
        <ReactScrollToButton style={{ bottom: "100px" }} />
      </div>

      <section className="react-example-section">
        <h2>With Visible Label</h2>
        <p>Show both icon and text label for better clarity. The button becomes pill-shaped automatically.</p>
        <ReactScrollToButton
          label="Back to Top"
          scrollThreshold={200}
          showLabel={true}
        />
      </section>

      <section className="react-example-section">
        <h2>Low Scroll Threshold</h2>
        <p>Control when the button appears by adjusting <code>scrollThreshold</code>. This one appears after just 100px.</p>
        <ReactScrollToButton
          label="Quick Access"
          showLabel={true}
          scrollThreshold={100}
          style={{ right: "180px" }}
          shape="rounded"
        />
      </section>

      <section className="react-example-section">
        <h2>Scroll to Bottom</h2>
        <p>Navigate to the end of content. The arrow automatically points down based on the target.</p>
        <ReactScrollToButton
          style={{ bottom: "160px" }}
          label="Go to Bottom"
          target="bottom"
          scrollThreshold={400}
        />
      </section>

      <section className="react-example-section">
        <h2>Custom Icon with Slot</h2>
        <p>Replace the default arrow with any icon using slots.</p>
        <ReactScrollToButton
          label="Launch to Top!"
          style={{ bottom: "220px" }}
          scrollThreshold={600}
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
          </svg>
        </ReactScrollToButton>
      </section>

      <section className="react-example-section">
        <h2>Different Sizes</h2>
        <p>Available sizes: <code>x-sm</code>, <code>sm</code>, <code>md</code> (default), <code>lg</code>, <code>xl</code></p>
        <div className="react-inline-examples">
          <div className="react-inline-example">
            <ReactScrollToButton size="x-sm" style={{ position: "static" }} />
            <span>x-sm</span>
          </div>
          <div className="react-inline-example">
            <ReactScrollToButton size="sm" style={{ position: "static" }} />
            <span>sm</span>
          </div>
          <div className="react-inline-example">
            <ReactScrollToButton size="md" style={{ position: "static" }} />
            <span>md</span>
          </div>
          <div className="react-inline-example">
            <ReactScrollToButton size="lg" style={{ position: "static" }} />
            <span>lg</span>
          </div>
          <div className="react-inline-example">
            <ReactScrollToButton size="xl" style={{ position: "static" }} />
            <span>xl</span>
          </div>
        </div>
      </section>

      <section className="react-example-section">
        <h2>Different Shapes</h2>
        <p>Available shapes: <code>circle</code> (default), <code>square</code>, <code>rounded</code>, <code>rounded-square</code>, <code>capsule</code></p>
        <div className="react-inline-examples">
          <div className="react-inline-example">
            <ReactScrollToButton
              shape="circle"
              style={{ bottom: "280px" }}
              scrollThreshold={800}
            />
            <span>circle</span>
          </div>
          <div className="react-inline-example">
            <ReactScrollToButton
              shape="square"
              style={{ bottom: "340px" }}
              scrollThreshold={1000}
            />
            <span>square</span>
          </div>
          <div className="react-inline-example">
            <ReactScrollToButton
              shape="rounded"
              style={{ bottom: "400px" }}
              scrollThreshold={1200}
            />
            <span>rounded</span>
          </div>
          <div className="react-inline-example">
            <ReactScrollToButton
              shape="rounded-square"
              style={{ bottom: "460px" }}
              scrollThreshold={1400}
            />
            <span>rounded-square</span>
          </div>
          <div className="react-inline-example">
            <ReactScrollToButton
              shape="capsule"
              showLabel={true}
              label="Top"
              style={{ bottom: "580px" }}
              scrollThreshold={1800}
            />
            <span>capsule</span>
          </div>
        </div>
      </section>

      <section className="react-example-section">
        <h2>Custom Styling with CSS Shadow Parts</h2>
        <p>Style internal parts without breaking encapsulation using CSS Shadow Parts.</p>
        <ReactScrollToButton
          className="custom-gradient"
          label="Styled Button"
          style={{ bottom: "520px" }}
          scrollThreshold={1600}
          showLabel={true}
        />
      </section>
    </section>
  );
}
`,rs={style:{display:"flex","flex-direction":"column",gap:"0.75rem",margin:"1.5rem 0"}},ps={style:{display:"flex","align-items":"center",gap:"0.5rem"}},ds={style:{display:"flex","align-items":"center",gap:"0.5rem"}},cs={style:{display:"flex","align-items":"center",gap:"0.5rem"}},hs={style:{display:"flex","align-items":"center",gap:"0.5rem"}},us={style:{display:"flex","align-items":"center",gap:"0.5rem"}},gs={style:{display:"flex","align-items":"center",gap:"0.5rem"}},ks={style:{display:"flex","flex-direction":"column",gap:"1rem",margin:"1.5rem 0"}},ms={style:{display:"flex","align-items":"center",gap:"0.5rem","margin-bottom":"0.5rem"}},bs={style:{display:"flex","align-items":"center",gap:"0.5rem","margin-bottom":"0.5rem"}},Vs=JSON.parse('{"title":"ScrollToButton","description":"","frontmatter":{},"headers":[],"relativePath":"components/scroll-to-button.md","filePath":"components/scroll-to-button.md"}'),Fs={name:"components/scroll-to-button.md"},Is=Object.assign(Fs,{setup(d){return(t,n)=>(r(),o("div",null,[n[19]||(n[19]=s("h1",{id:"scrolltobutton",tabindex:"-1"},[i("ScrollToButton "),s("a",{class:"header-anchor",href:"#scrolltobutton","aria-label":'Permalink to "ScrollToButton"'},"​")],-1)),e(F),n[20]||(n[20]=g('<p>A floating action button that appears when scrolling, allowing users to quickly navigate to different parts of the page. Perfect for long-form content, documentation sites, and single-page applications.</p><div class="tip custom-block"><p class="custom-block-title">Interactive Examples</p><p>The examples below show multiple scroll buttons to demonstrate different features. In real applications, <a href="https://www.nngroup.com/articles/back-to-top/" target="_blank" rel="noreferrer">use only one scroll button per page</a> to avoid confusion—multiple buttons can overwhelm users and create unclear navigation patterns.</p></div><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h2>',3)),s("div",rs,[s("div",ps,[e(l(P),{size:20,style:{color:"#3b82f6","flex-shrink":"0"}}),n[0]||(n[0]=s("strong",null,"Smart Visibility",-1)),n[1]||(n[1]=i(" - Automatically appears/disappears based on scroll position ",-1))]),s("div",ds,[e(l(T),{size:20,style:{color:"#eab308","flex-shrink":"0"}}),n[2]||(n[2]=s("strong",null,"Smooth Scrolling",-1)),n[3]||(n[3]=i(" - Built-in smooth scroll with ",-1)),n[4]||(n[4]=s("code",null,"prefers-reduced-motion",-1)),n[5]||(n[5]=i(" support ",-1))]),s("div",cs,[e(l(E),{size:20,style:{color:"#a855f7","flex-shrink":"0"}}),n[6]||(n[6]=s("strong",null,"Highly Customizable",-1)),n[7]||(n[7]=i(" - Multiple sizes, shapes, and CSS Shadow Parts for styling ",-1))]),s("div",hs,[e(l(q),{size:20,style:{color:"#10b981","flex-shrink":"0"}}),n[8]||(n[8]=s("strong",null,"Accessible",-1)),n[9]||(n[9]=i(" - Proper ARIA labels and keyboard navigation ",-1))]),s("div",us,[e(l(A),{size:20,style:{color:"#ef4444","flex-shrink":"0"}}),n[10]||(n[10]=s("strong",null,"Flexible Targets",-1)),n[11]||(n[11]=i(" - Scroll to top, bottom, or specific page sections ",-1))]),s("div",gs,[e(l(L),{size:20,style:{color:"#6b7280","flex-shrink":"0"}}),n[12]||(n[12]=s("strong",null,"Framework Agnostic",-1)),n[13]||(n[13]=i(" - Works with Vue, React, and vanilla JavaScript ",-1))])]),n[21]||(n[21]=s("h2",{id:"when-to-use",tabindex:"-1"},[i("When to Use "),s("a",{class:"header-anchor",href:"#when-to-use","aria-label":'Permalink to "When to Use"'},"​")],-1)),s("div",ks,[s("div",null,[s("div",ms,[e(l(D),{size:20,style:{color:"#10b981"}}),n[14]||(n[14]=s("strong",null,"Good for:",-1))]),n[15]||(n[15]=s("ul",{style:{"margin-left":"1.75rem"}},[s("li",null,"Long articles or documentation pages"),s("li",null,"Single-page applications with multiple sections"),s("li",null,"Chat interfaces (scroll to latest message)"),s("li",null,"Comment sections (jump to end)"),s("li",null,"Tables of contents or navigation aids")],-1))]),s("div",null,[s("div",bs,[e(l(z),{size:20,style:{color:"#ef4444"}}),n[16]||(n[16]=s("strong",null,"Avoid when:",-1))]),n[17]||(n[17]=s("ul",{style:{"margin-left":"1.75rem"}},[s("li",null,"Content is short and fits on one screen"),s("li",null,"The page already has persistent navigation"),s("li",null,"Users need to focus on sequential reading without jumping")],-1))])]),n[22]||(n[22]=s("h2",{id:"examples",tabindex:"-1"},[i("Examples "),s("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),e(w,{component:"scroll-to-button","vue-code":l(as),"lit-code":l(ls),"react-code":l(os)},{vue:p(()=>[e(es)]),lit:p(()=>[...n[18]||(n[18]=[s("scroll-to-button-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),n[23]||(n[23]=g(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The framework examples below <code>import</code> AgnosticUI as an <code>npm</code> package. Alternatively, you can use the <strong>CLI for complete control, AI/LLM visibility, and full code ownership</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> init</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> --framework</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> FRAMEWORK</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;"> # react, vue, lit, svelte, etc.</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> add</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ScrollToButton</span></span></code></pre></div><p>The CLI copies source code directly into your project, giving you full visibility and control. After running <code>npx ag add</code>, you&#39;ll receive exact import instructions.</p></div><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>label</code></td><td><code>string</code></td><td><code>&#39;Back to Top&#39;</code></td><td>Accessible label for the button (always used for <code>aria-label</code>)</td></tr><tr><td><code>showLabel</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Whether to display the label text alongside the icon</td></tr><tr><td><code>icon</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Show/hide the default icon. If <code>false</code>, label is shown as fallback</td></tr><tr><td><code>scrollThreshold</code></td><td><code>number</code></td><td><code>400</code></td><td>Scroll position (in pixels) before the button becomes visible</td></tr><tr><td><code>target</code></td><td><code>string</code></td><td><code>&#39;top&#39;</code></td><td>Scroll target: <code>&#39;top&#39;</code>, <code>&#39;bottom&#39;</code>, or element ID/selector (e.g., <code>&#39;section-3&#39;</code>, <code>&#39;.my-section&#39;</code>)</td></tr><tr><td><code>direction</code></td><td><code>&#39;up&#39; | &#39;down&#39; | &#39;auto&#39;</code></td><td><code>&#39;auto&#39;</code></td><td>Arrow icon direction. <code>&#39;auto&#39;</code> detects based on target</td></tr><tr><td><code>smoothScroll</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Enable smooth scrolling animation (respects <code>prefers-reduced-motion</code>)</td></tr><tr><td><code>size</code></td><td><code>&#39;x-sm&#39; | &#39;sm&#39; | &#39;md&#39; | &#39;lg&#39; | &#39;xl&#39;</code></td><td><code>&#39;md&#39;</code></td><td>Button size</td></tr><tr><td><code>shape</code></td><td><code>&#39;capsule&#39; | &#39;rounded&#39; | &#39;circle&#39; | &#39;square&#39; | &#39;rounded-square&#39; | &#39;&#39;</code></td><td><code>&#39;&#39;</code></td><td>Button shape (empty string uses default)</td></tr><tr><td><code>visible</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Manually control visibility (typically managed internally by scroll position)</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Slot</th><th>Description</th></tr></thead><tbody><tr><td><code>icon</code></td><td>Custom icon content. Overrides the default arrow icon when provided</td></tr></tbody></table><p><strong>Vue Example:</strong></p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueScrollToButton</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;template #icon&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;svg&gt;&lt;!-- custom icon --&gt;&lt;/svg&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/template&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueScrollToButton</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div><p><strong>React Example:</strong></p><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactScrollToButton</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">svg</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> slot</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;icon&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">{</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* custom icon */</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">svg</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactScrollToButton</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div><h2 id="css-shadow-parts" tabindex="-1">CSS Shadow Parts <a class="header-anchor" href="#css-shadow-parts" aria-label="Permalink to &quot;CSS Shadow Parts&quot;">​</a></h2><p>Style internal elements without breaking encapsulation:</p><table class="ag-table ag-table--striped"><thead><tr><th>Part</th><th>Description</th></tr></thead><tbody><tr><td><code>ag-scrollto-button</code></td><td>The button wrapper element</td></tr><tr><td><code>ag-button</code></td><td>The inner <code>ag-button</code> element (exported from nested component)</td></tr><tr><td><code>ag-button-content</code></td><td>The flex container holding icon and label</td></tr><tr><td><code>ag-icon-wrapper</code></td><td>The wrapper around the icon slot</td></tr><tr><td><code>ag-label</code></td><td>The label text span element</td></tr></tbody></table><p><strong>Example - Custom Gradient:</strong></p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-scroll-to-button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">linear-gradient</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">135</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">deg</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#667eea</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 0</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">%</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#764ba2</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 100</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">%</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">none</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  box-shadow</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 4</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 12</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> rgba</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">102</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">126</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">234</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.4</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><p><strong>Example - Icon Positioning:</strong></p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Icon on the right */</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-scroll-to-button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-button-content</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  flex-direction</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">row-reverse</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Icon above label (vertical) */</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-scroll-to-button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-button-content</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  flex-direction</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">column</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><h2 id="advanced-examples" tabindex="-1">Advanced Examples <a class="header-anchor" href="#advanced-examples" aria-label="Permalink to &quot;Advanced Examples&quot;">​</a></h2><h3 id="jump-to-specific-section" tabindex="-1">Jump to Specific Section <a class="header-anchor" href="#jump-to-specific-section" aria-label="Permalink to &quot;Jump to Specific Section&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueScrollToButton</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Jump to Comments&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  target</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;comments-section&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  :</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">scrollThreshold</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">300</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;!-- Somewhere in your page --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;section id=&quot;comments-section&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;!-- Comments content --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/section&gt;</span></span></code></pre></div><h3 id="chat-interface-scroll-to-bottom" tabindex="-1">Chat Interface (Scroll to Bottom) <a class="header-anchor" href="#chat-interface-scroll-to-bottom" aria-label="Permalink to &quot;Chat Interface (Scroll to Bottom)&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueScrollToButton</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Latest Messages&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  target</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;bottom&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  direction</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;down&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  :</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">scrollThreshold</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">200</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">/&gt;</span></span></code></pre></div><h3 id="programmatic-target-lit-react" tabindex="-1">Programmatic Target (Lit/React) <a class="header-anchor" href="#programmatic-target-lit-react" aria-label="Permalink to &quot;Programmatic Target (Lit/React)&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">// Get reference to the component</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> button</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> document.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ag-scroll-to-button&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> targetElement</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> document.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;.my-dynamic-section&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">// Set target programmatically</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">button.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">setTargetElement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(targetElement);</span></span></code></pre></div><h2 id="accessibility" tabindex="-1">Accessibility <a class="header-anchor" href="#accessibility" aria-label="Permalink to &quot;Accessibility&quot;">​</a></h2><p>The ScrollToButton component follows accessibility best practices:</p><ul><li><strong>ARIA Labels</strong>: Always includes <code>aria-label</code> with the <code>label</code> prop value for screen readers</li><li><strong>Keyboard Navigation</strong>: Fully keyboard accessible with standard button interactions</li><li><strong>Focus Management</strong>: Visible focus indicators for keyboard users</li><li><strong>Motion Sensitivity</strong>: Respects <code>prefers-reduced-motion</code> setting - disables smooth scroll when motion is reduced</li><li><strong>Touch Targets</strong>: Minimum 44×44px touch target size for mobile accessibility</li><li><strong>Semantic HTML</strong>: Uses proper <code>role=&quot;button&quot;</code> and button semantics</li><li><strong>Screen Reader Friendly</strong>: Hidden decorative icons with <code>aria-hidden=&quot;true&quot;</code></li></ul><h3 id="best-practices" tabindex="-1">Best Practices <a class="header-anchor" href="#best-practices" aria-label="Permalink to &quot;Best Practices&quot;">​</a></h3><ol><li><p><strong>Always provide descriptive labels</strong>: Even if not showing the label visually, the <code>label</code> prop is used for <code>aria-label</code></p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueScrollToButton</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Return to page top&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span></code></pre></div></li><li><p><strong>Consider showing labels</strong>: For users with cognitive disabilities, visible text labels are clearer than icon-only buttons</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueScrollToButton</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Back to Top&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> :</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">showLabel</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">true</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span></code></pre></div></li><li><p><strong>Don&#39;t rely solely on color</strong>: If using custom styling, ensure sufficient contrast</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-scroll-to-button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">  /* Ensure 4.5:1 contrast ratio minimum */</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#0066cc</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  color</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#ffffff</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></li><li><p><strong>Test with keyboard</strong>: Ensure the button is reachable and activatable with Tab and Enter/Space keys</p></li><li><p><strong>Position consistently</strong>: Keep the button in the same location across pages to build user familiarity</p></li></ol><h2 id="design-tokens" tabindex="-1">Design Tokens <a class="header-anchor" href="#design-tokens" aria-label="Permalink to &quot;Design Tokens&quot;">​</a></h2><p>The component uses AgnosticUI design tokens for consistency:</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">:host</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">  /* Spacing */</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  --ag-space-8</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">2</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">; </span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Default position offset */</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  --ag-space-2</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.5</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">; </span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Icon/label gap */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">  /* Motion */</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  --ag-motion-slow</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.4</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">s</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">; </span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Fade in/out duration */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">  /* Z-index */</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  --ag-z-index-sticky</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">900</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">; </span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Stacking context */</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><p>Override these in your global CSS or via CSS custom properties:</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-scroll-to-button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  --ag-motion-slow</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.2</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">s</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">; </span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Faster transitions */</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><h2 id="troubleshooting" tabindex="-1">Troubleshooting <a class="header-anchor" href="#troubleshooting" aria-label="Permalink to &quot;Troubleshooting&quot;">​</a></h2><p><strong>Button doesn&#39;t appear:</strong></p><ul><li>Check that page content is tall enough to exceed <code>scrollThreshold</code></li><li>Verify the component is not hidden by CSS</li><li>Ensure z-index is high enough (<code>--ag-z-index-sticky: 900</code> by default)</li></ul><p><strong>Smooth scroll doesn&#39;t work:</strong></p><ul><li>Check browser support for <code>scroll-behavior: smooth</code></li><li>Verify <code>smoothScroll</code> prop is <code>true</code></li><li>Check if user has <code>prefers-reduced-motion</code> enabled</li></ul><p><strong>Custom icon not showing:</strong></p><ul><li>Ensure slot content has the <code>slot=&quot;icon&quot;</code> attribute (Lit/React) or uses <code>&lt;template #icon&gt;</code> (Vue)</li><li>Verify the icon has appropriate size styling</li></ul><p><strong>Button appears too early/late:</strong></p><ul><li>Adjust the <code>scrollThreshold</code> prop (in pixels)</li><li>Default is <code>400</code>, try <code>200</code> for earlier or <code>600</code> for later</li></ul>`,43))]))}});export{Vs as __pageData,Is as default};
