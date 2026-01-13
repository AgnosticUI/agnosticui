import{A as F}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{g as y}from"./chunks/VueScrollToButton.Clux3ZNr.js";import{R as x}from"./chunks/rocket.0FY0xHlE.js";import{d as v,_ as f,C as h,c as o,o as r,j as s,G as e,F as u,B,t as C,a as i,w as p,ae as g,k as l}from"./chunks/framework.NAAYCHZu.js";import{Z as w,F as S}from"./chunks/FrameworkExample.Vj5DwYx5.js";import{a as T,x as k}from"./chunks/Button.Bujdzq23.js";import{c as m}from"./chunks/createLucideIcon.B61Wqv9x.js";import{P as E,A as q}from"./chunks/palette.Dy0bFg6z.js";import{M as A}from"./chunks/map-pin.BrE5b0KS.js";import{C as D,a as z}from"./chunks/circle-x.wfdRs8_1.js";import"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import"./chunks/Icon.odq14qpJ.js";/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=m("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=m("wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]]),R=v({name:"ScrollToButtonExamples",components:{VueScrollToButton:y,Rocket:x}}),V={class:"example-container"},I={class:"example-section"},N={class:"example-section"},j={class:"example-section"},M={class:"example-section"},$={class:"example-section"},_={class:"inline-examples"},U={class:"inline-example"},W={class:"inline-example"},O={class:"inline-example"},G={class:"inline-example"},H={class:"inline-example"},J={class:"example-section"},Q={class:"inline-examples"},Y={class:"inline-example"},K={class:"inline-example"},Z={class:"inline-example"},X={class:"inline-example"},ss={class:"inline-example"},ts={class:"example-section"};function ns(d,t,n,ys,xs,vs){const a=h("VueScrollToButton"),b=h("Rocket");return r(),o(u,null,[s("section",null,[t[0]||(t[0]=s("h2",null,"Default (Icon Only)",-1)),t[1]||(t[1]=s("p",null,"The most common use case - a circular button with just an icon that appears when scrolling down.",-1)),s("div",V,[(r(),o(u,null,B(20,c=>s("p",{key:c,class:"example-paragraph"}," Paragraph "+C(c)+": Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. ",1)),64)),e(a,{style:{bottom:"100px"}})])]),s("section",I,[t[2]||(t[2]=s("h2",null,"With Visible Label",-1)),t[3]||(t[3]=s("p",null,"Show both icon and text label for better clarity. The button becomes pill-shaped automatically.",-1)),e(a,{label:"Back to Top",scrollThreshold:200,showLabel:!0})]),s("section",N,[t[4]||(t[4]=s("h2",null,"Low Scroll Threshold",-1)),t[5]||(t[5]=s("p",null,[i("Control when the button appears by adjusting "),s("code",null,"scrollThreshold"),i(". This one appears after just 100px.")],-1)),e(a,{label:"Quick Access",showLabel:!0,scrollThreshold:100,style:{right:"180px"},shape:"rounded"})]),s("section",j,[t[6]||(t[6]=s("h2",null,"Scroll to Bottom",-1)),t[7]||(t[7]=s("p",null,"Navigate to the end of content. The arrow automatically points down based on the target.",-1)),e(a,{style:{bottom:"160px"},label:"Go to Bottom",target:"bottom",scrollThreshold:400})]),s("section",M,[t[8]||(t[8]=s("h2",null,"Custom Icon with Slot",-1)),t[9]||(t[9]=s("p",null,"Replace the default arrow with any icon using Vue's slot system.",-1)),e(a,{label:"Launch to Top!",style:{bottom:"220px"},scrollThreshold:600},{icon:p(()=>[e(b,{size:20})]),_:1})]),s("section",$,[t[15]||(t[15]=s("h2",null,"Different Sizes",-1)),t[16]||(t[16]=s("p",null,[i("Available sizes: "),s("code",null,"x-sm"),i(", "),s("code",null,"sm"),i(", "),s("code",null,"md"),i(" (default), "),s("code",null,"lg"),i(", "),s("code",null,"xl")],-1)),s("div",_,[s("div",U,[e(a,{size:"x-sm",style:{position:"static"}}),t[10]||(t[10]=s("span",null,"x-sm",-1))]),s("div",W,[e(a,{size:"sm",style:{position:"static"}}),t[11]||(t[11]=s("span",null,"sm",-1))]),s("div",O,[e(a,{size:"md",style:{position:"static"}}),t[12]||(t[12]=s("span",null,"md",-1))]),s("div",G,[e(a,{size:"lg",style:{position:"static"}}),t[13]||(t[13]=s("span",null,"lg",-1))]),s("div",H,[e(a,{size:"xl",style:{position:"static"}}),t[14]||(t[14]=s("span",null,"xl",-1))])])]),s("section",J,[t[22]||(t[22]=s("h2",null,"Different Shapes",-1)),t[23]||(t[23]=s("p",null,[i("Available shapes: "),s("code",null,"circle"),i(" (default), "),s("code",null,"square"),i(", "),s("code",null,"rounded"),i(", "),s("code",null,"rounded-square"),i(", "),s("code",null,"capsule")],-1)),s("div",Q,[s("div",Y,[e(a,{shape:"circle",style:{bottom:"280px"},scrollThreshold:800}),t[17]||(t[17]=s("span",null,"circle",-1))]),s("div",K,[e(a,{shape:"square",style:{bottom:"340px"},scrollThreshold:1e3}),t[18]||(t[18]=s("span",null,"square",-1))]),s("div",Z,[e(a,{shape:"rounded",style:{bottom:"400px"},scrollThreshold:1200}),t[19]||(t[19]=s("span",null,"rounded",-1))]),s("div",X,[e(a,{shape:"rounded-square",style:{bottom:"460px"},scrollThreshold:1400}),t[20]||(t[20]=s("span",null,"rounded-square",-1))]),s("div",ss,[e(a,{shape:"capsule",showLabel:!0,label:"Top",style:{bottom:"580px"},scrollThreshold:1800}),t[21]||(t[21]=s("span",null,"capsule",-1))])])]),s("section",ts,[t[24]||(t[24]=s("h2",null,"Custom Styling with CSS Shadow Parts",-1)),t[25]||(t[25]=s("p",null,"Style internal parts without breaking encapsulation using CSS Shadow Parts.",-1)),e(a,{class:"custom-gradient",label:"Styled Button",style:{bottom:"520px"},scrollThreshold:1600,showLabel:!0})])],64)}const es=f(R,[["render",ns],["__scopeId","data-v-d66abd47"]]);class is extends T{createRenderRoot(){return this}render(){return k`
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
`,rs={style:{display:"flex","flex-direction":"column",gap:"0.75rem",margin:"1.5rem 0"}},ps={style:{display:"flex","align-items":"center",gap:"0.5rem"}},ds={style:{display:"flex","align-items":"center",gap:"0.5rem"}},cs={style:{display:"flex","align-items":"center",gap:"0.5rem"}},hs={style:{display:"flex","align-items":"center",gap:"0.5rem"}},us={style:{display:"flex","align-items":"center",gap:"0.5rem"}},gs={style:{display:"flex","align-items":"center",gap:"0.5rem"}},ks={style:{display:"flex","flex-direction":"column",gap:"1rem",margin:"1.5rem 0"}},ms={style:{display:"flex","align-items":"center",gap:"0.5rem","margin-bottom":"0.5rem"}},bs={style:{display:"flex","align-items":"center",gap:"0.5rem","margin-bottom":"0.5rem"}},Ls=JSON.parse('{"title":"ScrollToButton","description":"","frontmatter":{},"headers":[],"relativePath":"components/scroll-to-button.md","filePath":"components/scroll-to-button.md"}'),Fs={name:"components/scroll-to-button.md"},Rs=Object.assign(Fs,{setup(d){return(t,n)=>(r(),o("div",null,[n[19]||(n[19]=s("h1",{id:"scrolltobutton",tabindex:"-1"},[i("ScrollToButton "),s("a",{class:"header-anchor",href:"#scrolltobutton","aria-label":'Permalink to "ScrollToButton"'},"​")],-1)),e(F),n[20]||(n[20]=g("",3)),s("div",rs,[s("div",ps,[e(l(P),{size:20,style:{color:"#3b82f6","flex-shrink":"0"}}),n[0]||(n[0]=s("strong",null,"Smart Visibility",-1)),n[1]||(n[1]=i(" - Automatically appears/disappears based on scroll position ",-1))]),s("div",ds,[e(l(w),{size:20,style:{color:"#eab308","flex-shrink":"0"}}),n[2]||(n[2]=s("strong",null,"Smooth Scrolling",-1)),n[3]||(n[3]=i(" - Built-in smooth scroll with ",-1)),n[4]||(n[4]=s("code",null,"prefers-reduced-motion",-1)),n[5]||(n[5]=i(" support ",-1))]),s("div",cs,[e(l(E),{size:20,style:{color:"#a855f7","flex-shrink":"0"}}),n[6]||(n[6]=s("strong",null,"Highly Customizable",-1)),n[7]||(n[7]=i(" - Multiple sizes, shapes, and CSS Shadow Parts for styling ",-1))]),s("div",hs,[e(l(q),{size:20,style:{color:"#10b981","flex-shrink":"0"}}),n[8]||(n[8]=s("strong",null,"Accessible",-1)),n[9]||(n[9]=i(" - Proper ARIA labels and keyboard navigation ",-1))]),s("div",us,[e(l(A),{size:20,style:{color:"#ef4444","flex-shrink":"0"}}),n[10]||(n[10]=s("strong",null,"Flexible Targets",-1)),n[11]||(n[11]=i(" - Scroll to top, bottom, or specific page sections ",-1))]),s("div",gs,[e(l(L),{size:20,style:{color:"#6b7280","flex-shrink":"0"}}),n[12]||(n[12]=s("strong",null,"Framework Agnostic",-1)),n[13]||(n[13]=i(" - Works with Vue, React, and vanilla JavaScript ",-1))])]),n[21]||(n[21]=s("h2",{id:"when-to-use",tabindex:"-1"},[i("When to Use "),s("a",{class:"header-anchor",href:"#when-to-use","aria-label":'Permalink to "When to Use"'},"​")],-1)),s("div",ks,[s("div",null,[s("div",ms,[e(l(D),{size:20,style:{color:"#10b981"}}),n[14]||(n[14]=s("strong",null,"Good for:",-1))]),n[15]||(n[15]=s("ul",{style:{"margin-left":"1.75rem"}},[s("li",null,"Long articles or documentation pages"),s("li",null,"Single-page applications with multiple sections"),s("li",null,"Chat interfaces (scroll to latest message)"),s("li",null,"Comment sections (jump to end)"),s("li",null,"Tables of contents or navigation aids")],-1))]),s("div",null,[s("div",bs,[e(l(z),{size:20,style:{color:"#ef4444"}}),n[16]||(n[16]=s("strong",null,"Avoid when:",-1))]),n[17]||(n[17]=s("ul",{style:{"margin-left":"1.75rem"}},[s("li",null,"Content is short and fits on one screen"),s("li",null,"The page already has persistent navigation"),s("li",null,"Users need to focus on sequential reading without jumping")],-1))])]),n[22]||(n[22]=s("h2",{id:"examples",tabindex:"-1"},[i("Examples "),s("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),e(S,{component:"scroll-to-button","vue-code":l(as),"lit-code":l(ls),"react-code":l(os)},{vue:p(()=>[e(es)]),lit:p(()=>[...n[18]||(n[18]=[s("scroll-to-button-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),n[23]||(n[23]=g("",43))]))}});export{Ls as __pageData,Rs as default};
