var m=Object.defineProperty;var y=(t,a,e)=>a in t?m(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e;var p=(t,a,e)=>y(t,typeof a!="symbol"?a+"":a,e);import{A as b}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{h as f}from"./chunks/VueRating.vue_vue_type_script_setup_true_lang-CICncp71.Du4q6pOg.js";import{d as C,p as r,_ as E,C as R,c as k,o as c,j as i,G as s,t as h,ae as x,a as d,w as g,k as o}from"./chunks/framework.NAAYCHZu.js";import{F as V}from"./chunks/FrameworkExample.Cm-JbUj-.js";import{a as B,x as A}from"./chunks/Button.CFkPNK98.js";import"./chunks/createLucideIcon.B61Wqv9x.js";import"./chunks/state-CovhUvdr.DWhhlYib.js";import"./chunks/form-control-utils.CX0RHW4_.js";import"./chunks/sdk.m.DhOmSlC9.js";import"./chunks/Icon.DjToxxjJ.js";const w=C({name:"RatingExamples",components:{VueRating:f},setup(){const t=r(3),a=r(0),e=r("");return{eventValue:t,hoverValue:a,lastEvent:e,handleRatingChange:l=>{t.value=l.detail.newValue,e.value=`rating-change: oldValue=${l.detail.oldValue}, newValue=${l.detail.newValue}`},handleRatingHover:l=>{a.value=l.detail.value,e.value=`rating-hover: phase=${l.detail.phase}, value=${l.detail.value}`}}}}),$={class:"mbe4"},S={class:"mbe4"},q={class:"mbe4"},D={class:"mbe4"},P={class:"mbe4"},z={class:"mbe4",style:{display:"flex","flex-direction":"column",gap:"1rem","align-items":"flex-start"}},H={class:"mbe4"},T={class:"mbe4",style:{display:"flex","flex-direction":"column",gap:"1rem","align-items":"flex-start"}},N={class:"mbe4"},L={style:{"margin-top":"1rem","font-family":"monospace","font-size":"0.875rem"}},W={class:"mbe4"},I={style:{"max-width":"600px",display:"flex","flex-direction":"column",gap:"1.5rem"}},_={class:"mbe4"};function O(t,a,e,F,v,l){const n=R("VueRating");return c(),k("section",null,[i("div",$,[a[0]||(a[0]=i("h2",null,"Default Rating",-1)),a[1]||(a[1]=i("p",{class:"mbs2 mbe3"},"A basic rating component.",-1)),s(n,{value:3})]),i("div",S,[a[2]||(a[2]=i("h2",null,"Half Precision",-1)),a[3]||(a[3]=i("p",{class:"mbs2 mbe3"},"Allows for half-star ratings.",-1)),s(n,{value:2.5,precision:"half"})]),i("div",q,[a[4]||(a[4]=i("h2",null,"Readonly",-1)),a[5]||(a[5]=i("p",{class:"mbs2 mbe3"},"A non-interactive rating display.",-1)),s(n,{value:4,readonly:!0})]),i("div",D,[a[6]||(a[6]=i("h2",null,"Allow Clear",-1)),a[7]||(a[7]=i("p",{class:"mbs2 mbe3"},"Clicking the current rating will clear it to 0.",-1)),s(n,{value:3,"allow-clear":!0})]),i("div",P,[a[8]||(a[8]=i("h2",null,"Sizes",-1)),a[9]||(a[9]=i("p",{class:"mbs2 mbe3"},"Three size options: small, medium (default), and large.",-1)),i("div",z,[s(n,{size:"sm",value:3}),s(n,{size:"md",value:3}),s(n,{size:"lg",value:3})])]),i("div",H,[a[10]||(a[10]=i("h2",null,"Variants",-1)),a[11]||(a[11]=i("p",{class:"mbs2 mbe3"},"Color variants for different contexts.",-1)),i("div",T,[s(n,{variant:"primary",value:3}),s(n,{variant:"secondary",value:3}),s(n,{variant:"success",value:3}),s(n,{variant:"warning",value:3}),s(n,{variant:"danger",value:3}),s(n,{variant:"monochrome",value:3})])]),i("div",N,[a[12]||(a[12]=i("h2",null,"Event Handling",-1)),a[13]||(a[13]=i("p",{class:"mbs2 mbe3"},"Listen for `rating-change` and `rating-hover` events.",-1)),i("div",null,[s(n,{value:t.eventValue,onRatingChange:t.handleRatingChange,onRatingHover:t.handleRatingHover},null,8,["value","onRatingChange","onRatingHover"]),i("div",L,[i("p",null,"Current Value: "+h(t.eventValue),1),i("p",null,"Hover Value: "+h(t.hoverValue),1),i("p",null,"Last Event: "+h(t.lastEvent),1)])])]),i("div",W,[a[14]||(a[14]=i("h2",null,"Form Control Features",-1)),a[15]||(a[15]=i("p",{class:"mbs2 mbe3"}," Rating supports labels, helper text, validation, and label positioning for form integration. ",-1)),i("div",I,[s(n,{label:"Product Rating",value:3}),s(n,{label:"Service Quality","help-text":"Rate the quality of service you received",value:4}),s(n,{label:"Overall Experience",required:!0,"help-text":"This rating is required to submit your feedback",value:0}),s(n,{label:"Customer Support",required:!0,invalid:!0,"error-message":"Please provide a rating before submitting",value:0}),s(n,{label:"Start Position","label-position":"start",value:3}),s(n,{label:"End Position","label-position":"end",value:3})])]),i("div",_,[a[16]||(a[16]=i("h2",null,"CSS Shadow Parts Customization",-1)),a[17]||(a[17]=i("p",{class:"mbs2 mbe3"}," Use CSS Shadow Parts to customize the component's appearance. ",-1)),s(n,{value:4,class:"custom-rating"})])])}const U=E(w,[["render",O]]);class u extends B{constructor(){super(),this.eventValue=3,this.hoverValue=0,this.lastEvent=""}createRenderRoot(){return this}handleRatingChange(a){this.eventValue=a.detail.newValue,this.lastEvent=`rating-change: oldValue=${a.detail.oldValue}, newValue=${a.detail.newValue}`}handleRatingHover(a){this.hoverValue=a.detail.value,this.lastEvent=`rating-hover: phase=${a.detail.phase}, value=${a.detail.value}`}render(){return A`
      <section>
        <div class="mbe4">
          <h2>Default Rating</h2>
          <p class="mbs2 mbe3">A basic rating component.</p>
          <ag-rating .value=${3}></ag-rating>
        </div>

        <div class="mbe4">
          <h2>Half Precision</h2>
          <p class="mbs2 mbe3">Allows for half-star ratings.</p>
          <ag-rating
            .value=${2.5}
            precision="half"
          ></ag-rating>
        </div>

        <div class="mbe4">
          <h2>Readonly</h2>
          <p class="mbs2 mbe3">A non-interactive rating display.</p>
          <ag-rating
            .value=${4}
            .readonly=${!0}
          ></ag-rating>
        </div>

        <div class="mbe4">
          <h2>Allow Clear</h2>
          <p class="mbs2 mbe3">Clicking the current rating will clear it to 0.</p>
          <ag-rating
            .value=${3}
            .allowClear=${!0}
          ></ag-rating>
        </div>

        <div class="mbe4">
          <h2>Sizes</h2>
          <p class="mbs2 mbe3">Three size options: small, medium (default), and large.</p>
          <div
            class="mbe4"
            style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;"
          >
            <ag-rating
              size="sm"
              .value=${3}
            ></ag-rating>
            <ag-rating
              size="md"
              .value=${3}
            ></ag-rating>
            <ag-rating
              size="lg"
              .value=${3}
            ></ag-rating>
          </div>
        </div>

        <div class="mbe4">
          <h2>Variants</h2>
          <p class="mbs2 mbe3">Color variants for different contexts.</p>
          <div
            class="mbe4"
            style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;"
          >
            <ag-rating
              variant="primary"
              .value=${3}
            ></ag-rating>
            <ag-rating
              variant="secondary"
              .value=${3}
            ></ag-rating>
            <ag-rating
              variant="success"
              .value=${3}
            ></ag-rating>
            <ag-rating
              variant="warning"
              .value=${3}
            ></ag-rating>
            <ag-rating
              variant="danger"
              .value=${3}
            ></ag-rating>
            <ag-rating
              variant="monochrome"
              .value=${3}
            ></ag-rating>
          </div>
        </div>

        <div class="mbe4">
          <h2>Event Handling</h2>
          <p class="mbs2 mbe3">Listen for <code>rating-change</code> and <code>rating-hover</code> events.</p>
          <div>
            <ag-rating
              .value=${this.eventValue}
              @rating-change=${this.handleRatingChange}
              @rating-hover=${this.handleRatingHover}
            ></ag-rating>
            <div style="margin-top: 1rem; font-family: monospace; font-size: 0.875rem;">
              <p>Current Value: ${this.eventValue}</p>
              <p>Hover Value: ${this.hoverValue}</p>
              <p>Last Event: ${this.lastEvent}</p>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>Form Control Features</h2>
          <p class="mbs2 mbe3">
            Rating supports labels, helper text, validation, and label positioning for form integration.
          </p>
          <div style="max-width: 600px; display: flex; flex-direction: column; gap: 1.5rem;">
            <!-- Basic label -->
            <ag-rating
              label="Product Rating"
              .value=${3}
            ></ag-rating>

            <!-- With help text -->
            <ag-rating
              label="Service Quality"
              help-text="Rate the quality of service you received"
              .value=${4}
            ></ag-rating>

            <!-- Required field -->
            <ag-rating
              label="Overall Experience"
              .required=${!0}
              help-text="This rating is required to submit your feedback"
              .value=${0}
            ></ag-rating>

            <!-- With error validation -->
            <ag-rating
              label="Customer Support"
              .required=${!0}
              .invalid=${!0}
              error-message="Please provide a rating before submitting"
              .value=${0}
            ></ag-rating>

            <!-- Label positioning -->
            <ag-rating
              label="Start Position"
              label-position="start"
              .value=${3}
            ></ag-rating>

            <ag-rating
              label="End Position"
              label-position="end"
              .value=${3}
            ></ag-rating>
          </div>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the component's appearance.
          </p>
          <ag-rating
            .value=${4}
            class="custom-rating"
          ></ag-rating>
        </div>
      </section>

      <style>
        /* CSS Shadow Parts customization examples */
        .custom-rating::part(star-button) {
          padding: 0.25rem;
          border-radius: 50%;
          transition: background-color 0.2s ease;
        }
        .custom-rating::part(star-button):hover {
          background-color: rgba(0, 0, 0, 0.1);
        }
        .custom-rating::part(star) {
          opacity: 0.8;
          transition: opacity 0.2s ease;
        }
        .custom-rating::part(star):hover {
          opacity: 1;
        }
      </style>
    `}}p(u,"properties",{eventValue:{type:Number},hoverValue:{type:Number},lastEvent:{type:String}});customElements.define("rating-lit-examples",u);const Q=`<template>
  <section>
    <div class="mbe4">
      <h2>Default Rating</h2>
      <p class="mbs2 mbe3">A basic rating component.</p>
      <VueRating :value="3" />
    </div>

    <div class="mbe4">
      <h2>Half Precision</h2>
      <p class="mbs2 mbe3">Allows for half-star ratings.</p>
      <VueRating
        :value="2.5"
        precision="half"
      />
    </div>

    <div class="mbe4">
      <h2>Readonly</h2>
      <p class="mbs2 mbe3">A non-interactive rating display.</p>
      <VueRating
        :value="4"
        :readonly="true"
      />
    </div>

    <div class="mbe4">
      <h2>Allow Clear</h2>
      <p class="mbs2 mbe3">Clicking the current rating will clear it to 0.</p>
      <VueRating
        :value="3"
        :allow-clear="true"
      />
    </div>

    <div class="mbe4">
      <h2>Sizes</h2>
      <p class="mbs2 mbe3">Three size options: small, medium (default), and large.</p>
      <div
        class="mbe4"
        style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;"
      >
        <VueRating
          size="sm"
          :value="3"
        />
        <VueRating
          size="md"
          :value="3"
        />
        <VueRating
          size="lg"
          :value="3"
        />
      </div>
    </div>

    <div class="mbe4">
      <h2>Variants</h2>
      <p class="mbs2 mbe3">Color variants for different contexts.</p>
      <div
        class="mbe4"
        style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;"
      >
        <VueRating
          variant="primary"
          :value="3"
        />
        <VueRating
          variant="secondary"
          :value="3"
        />
        <VueRating
          variant="success"
          :value="3"
        />
        <VueRating
          variant="warning"
          :value="3"
        />
        <VueRating
          variant="danger"
          :value="3"
        />
        <VueRating
          variant="monochrome"
          :value="3"
        />
      </div>
    </div>

    <div class="mbe4">
      <h2>Event Handling</h2>
      <p class="mbs2 mbe3">Listen for \`rating-change\` and \`rating-hover\` events.</p>
      <div>
        <VueRating
          :value="eventValue"
          @rating-change="handleRatingChange"
          @rating-hover="handleRatingHover"
        />
        <div style="margin-top: 1rem; font-family: monospace; font-size: 0.875rem;">
          <p>Current Value: {{ eventValue }}</p>
          <p>Hover Value: {{ hoverValue }}</p>
          <p>Last Event: {{ lastEvent }}</p>
        </div>
      </div>
    </div>

    <div class="mbe4">
      <h2>Form Control Features</h2>
      <p class="mbs2 mbe3">
        Rating supports labels, helper text, validation, and label positioning for form integration.
      </p>
      <div style="max-width: 600px; display: flex; flex-direction: column; gap: 1.5rem;">
        <!-- Basic label -->
        <VueRating
          label="Product Rating"
          :value="3"
        />

        <!-- With help text -->
        <VueRating
          label="Service Quality"
          help-text="Rate the quality of service you received"
          :value="4"
        />

        <!-- Required field -->
        <VueRating
          label="Overall Experience"
          :required="true"
          help-text="This rating is required to submit your feedback"
          :value="0"
        />

        <!-- With error validation -->
        <VueRating
          label="Customer Support"
          :required="true"
          :invalid="true"
          error-message="Please provide a rating before submitting"
          :value="0"
        />

        <!-- Label positioning -->
        <VueRating
          label="Start Position"
          label-position="start"
          :value="3"
        />

        <VueRating
          label="End Position"
          label-position="end"
          :value="3"
        />
      </div>
    </div>

    <div class="mbe4">
      <h2>CSS Shadow Parts Customization</h2>
      <p class="mbs2 mbe3">
        Use CSS Shadow Parts to customize the component's appearance.
      </p>
      <VueRating
        :value="4"
        class="custom-rating"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { VueRating } from "agnosticui-core/rating/vue";
import type {
  RatingChangeEvent,
  RatingHoverEvent,
} from "agnosticui-core/rating/vue";

export default defineComponent({
  name: "RatingExamples",
  components: {
    VueRating,
  },
  setup() {
    const eventValue = ref(3);
    const hoverValue = ref(0);
    const lastEvent = ref("");

    const handleRatingChange = (e: RatingChangeEvent) => {
      eventValue.value = e.detail.newValue;
      lastEvent.value = \`rating-change: oldValue=\${e.detail.oldValue}, newValue=\${e.detail.newValue}\`;
    };

    const handleRatingHover = (e: RatingHoverEvent) => {
      hoverValue.value = e.detail.value;
      lastEvent.value = \`rating-hover: phase=\${e.detail.phase}, value=\${e.detail.value}\`;
    };

    return {
      eventValue,
      hoverValue,
      lastEvent,
      handleRatingChange,
      handleRatingHover,
    };
  },
});
<\/script>

<style>
/* CSS Shadow Parts customization examples */
.custom-rating::part(star-button) {
  padding: 0.25rem;
  border-radius: 50%;
  transition: background-color 0.2s ease;
}
.custom-rating::part(star-button):hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.custom-rating::part(star) {
  opacity: 0.8;
  transition: opacity 0.2s ease;
}
.custom-rating::part(star):hover {
  opacity: 1;
}
</style>
`,M=`import { LitElement, html } from 'lit';
import 'agnosticui-core/rating';

export class RatingLitExamples extends LitElement {
  static properties = {
    eventValue: { type: Number },
    hoverValue: { type: Number },
    lastEvent: { type: String }
  };

  constructor() {
    super();
    this.eventValue = 3;
    this.hoverValue = 0;
    this.lastEvent = '';
  }

  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  handleRatingChange(e) {
    this.eventValue = e.detail.newValue;
    this.lastEvent = \`rating-change: oldValue=\${e.detail.oldValue}, newValue=\${e.detail.newValue}\`;
  }

  handleRatingHover(e) {
    this.hoverValue = e.detail.value;
    this.lastEvent = \`rating-hover: phase=\${e.detail.phase}, value=\${e.detail.value}\`;
  }

  render() {
    return html\`
      <section>
        <div class="mbe4">
          <h2>Default Rating</h2>
          <p class="mbs2 mbe3">A basic rating component.</p>
          <ag-rating .value=\${3}></ag-rating>
        </div>

        <div class="mbe4">
          <h2>Half Precision</h2>
          <p class="mbs2 mbe3">Allows for half-star ratings.</p>
          <ag-rating
            .value=\${2.5}
            precision="half"
          ></ag-rating>
        </div>

        <div class="mbe4">
          <h2>Readonly</h2>
          <p class="mbs2 mbe3">A non-interactive rating display.</p>
          <ag-rating
            .value=\${4}
            .readonly=\${true}
          ></ag-rating>
        </div>

        <div class="mbe4">
          <h2>Allow Clear</h2>
          <p class="mbs2 mbe3">Clicking the current rating will clear it to 0.</p>
          <ag-rating
            .value=\${3}
            .allowClear=\${true}
          ></ag-rating>
        </div>

        <div class="mbe4">
          <h2>Sizes</h2>
          <p class="mbs2 mbe3">Three size options: small, medium (default), and large.</p>
          <div
            class="mbe4"
            style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;"
          >
            <ag-rating
              size="sm"
              .value=\${3}
            ></ag-rating>
            <ag-rating
              size="md"
              .value=\${3}
            ></ag-rating>
            <ag-rating
              size="lg"
              .value=\${3}
            ></ag-rating>
          </div>
        </div>

        <div class="mbe4">
          <h2>Variants</h2>
          <p class="mbs2 mbe3">Color variants for different contexts.</p>
          <div
            class="mbe4"
            style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;"
          >
            <ag-rating
              variant="primary"
              .value=\${3}
            ></ag-rating>
            <ag-rating
              variant="secondary"
              .value=\${3}
            ></ag-rating>
            <ag-rating
              variant="success"
              .value=\${3}
            ></ag-rating>
            <ag-rating
              variant="warning"
              .value=\${3}
            ></ag-rating>
            <ag-rating
              variant="danger"
              .value=\${3}
            ></ag-rating>
            <ag-rating
              variant="monochrome"
              .value=\${3}
            ></ag-rating>
          </div>
        </div>

        <div class="mbe4">
          <h2>Event Handling</h2>
          <p class="mbs2 mbe3">Listen for <code>rating-change</code> and <code>rating-hover</code> events.</p>
          <div>
            <ag-rating
              .value=\${this.eventValue}
              @rating-change=\${this.handleRatingChange}
              @rating-hover=\${this.handleRatingHover}
            ></ag-rating>
            <div style="margin-top: 1rem; font-family: monospace; font-size: 0.875rem;">
              <p>Current Value: \${this.eventValue}</p>
              <p>Hover Value: \${this.hoverValue}</p>
              <p>Last Event: \${this.lastEvent}</p>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>Form Control Features</h2>
          <p class="mbs2 mbe3">
            Rating supports labels, helper text, validation, and label positioning for form integration.
          </p>
          <div style="max-width: 600px; display: flex; flex-direction: column; gap: 1.5rem;">
            <!-- Basic label -->
            <ag-rating
              label="Product Rating"
              .value=\${3}
            ></ag-rating>

            <!-- With help text -->
            <ag-rating
              label="Service Quality"
              help-text="Rate the quality of service you received"
              .value=\${4}
            ></ag-rating>

            <!-- Required field -->
            <ag-rating
              label="Overall Experience"
              .required=\${true}
              help-text="This rating is required to submit your feedback"
              .value=\${0}
            ></ag-rating>

            <!-- With error validation -->
            <ag-rating
              label="Customer Support"
              .required=\${true}
              .invalid=\${true}
              error-message="Please provide a rating before submitting"
              .value=\${0}
            ></ag-rating>

            <!-- Label positioning -->
            <ag-rating
              label="Start Position"
              label-position="start"
              .value=\${3}
            ></ag-rating>

            <ag-rating
              label="End Position"
              label-position="end"
              .value=\${3}
            ></ag-rating>
          </div>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the component's appearance.
          </p>
          <ag-rating
            .value=\${4}
            class="custom-rating"
          ></ag-rating>
        </div>
      </section>

      <style>
        /* CSS Shadow Parts customization examples */
        .custom-rating::part(star-button) {
          padding: 0.25rem;
          border-radius: 50%;
          transition: background-color 0.2s ease;
        }
        .custom-rating::part(star-button):hover {
          background-color: rgba(0, 0, 0, 0.1);
        }
        .custom-rating::part(star) {
          opacity: 0.8;
          transition: opacity 0.2s ease;
        }
        .custom-rating::part(star):hover {
          opacity: 1;
        }
      </style>
    \`;
  }
}

// Register the custom element
customElements.define('rating-lit-examples', RatingLitExamples);
`,j=`import { useState } from "react";
import { ReactRating } from "agnosticui-core/rating/react";

export default function RatingReactExamples() {
  const [eventValue, setEventValue] = useState(3);
  const [hoverValue, setHoverValue] = useState(0);
  const [lastEvent, setLastEvent] = useState("");

  const handleRatingChange = (e) => {
    setEventValue(e.detail.newValue);
    setLastEvent(\`rating-change: oldValue=\${e.detail.oldValue}, newValue=\${e.detail.newValue}\`);
  };

  const handleRatingHover = (e) => {
    setHoverValue(e.detail.value);
    setLastEvent(\`rating-hover: phase=\${e.detail.phase}, value=\${e.detail.value}\`);
  };

  return (
    <section>
      <div className="mbe4">
        <h2>Default Rating</h2>
        <p className="mbs2 mbe3">A basic rating component.</p>
        <ReactRating value={3} />
      </div>

      <div className="mbe4">
        <h2>Half Precision</h2>
        <p className="mbs2 mbe3">Allows for half-star ratings.</p>
        <ReactRating value={2.5} precision="half" />
      </div>

      <div className="mbe4">
        <h2>Readonly</h2>
        <p className="mbs2 mbe3">A non-interactive rating display.</p>
        <ReactRating value={4} readonly={true} />
      </div>

      <div className="mbe4">
        <h2>Allow Clear</h2>
        <p className="mbs2 mbe3">Clicking the current rating will clear it to 0.</p>
        <ReactRating value={3} allowClear={true} />
      </div>

      <div className="mbe4">
        <h2>Sizes</h2>
        <p className="mbs2 mbe3">Three size options: small, medium (default), and large.</p>
        <div
          className="mbe4"
          style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}
        >
          <ReactRating size="sm" value={3} />
          <ReactRating size="md" value={3} />
          <ReactRating size="lg" value={3} />
        </div>
      </div>

      <div className="mbe4">
        <h2>Variants</h2>
        <p className="mbs2 mbe3">Color variants for different contexts.</p>
        <div
          className="mbe4"
          style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}
        >
          <ReactRating variant="primary" value={3} />
          <ReactRating variant="secondary" value={3} />
          <ReactRating variant="success" value={3} />
          <ReactRating variant="warning" value={3} />
          <ReactRating variant="danger" value={3} />
          <ReactRating variant="monochrome" value={3} />
        </div>
      </div>

      <div className="mbe4">
        <h2>Event Handling</h2>
        <p className="mbs2 mbe3">
          Listen for <code>rating-change</code> and <code>rating-hover</code> events.
        </p>
        <div>
          <ReactRating
            value={eventValue}
            onRatingChange={handleRatingChange}
            onRatingHover={handleRatingHover}
          />
          <div style={{ marginTop: "1rem", fontFamily: "monospace", fontSize: "0.875rem" }}>
            <p>Current Value: {eventValue}</p>
            <p>Hover Value: {hoverValue}</p>
            <p>Last Event: {lastEvent}</p>
          </div>
        </div>
      </div>

      <div className="mbe4">
        <h2>Form Control Features</h2>
        <p className="mbs2 mbe3">
          Rating supports labels, helper text, validation, and label positioning for form
          integration.
        </p>
        <div style={{ maxWidth: "600px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Basic label */}
          <ReactRating label="Product Rating" value={3} />

          {/* With help text */}
          <ReactRating
            label="Service Quality"
            helpText="Rate the quality of service you received"
            value={4}
          />

          {/* Required field */}
          <ReactRating
            label="Overall Experience"
            required={true}
            helpText="This rating is required to submit your feedback"
            value={0}
          />

          {/* With error validation */}
          <ReactRating
            label="Customer Support"
            required={true}
            invalid={true}
            errorMessage="Please provide a rating before submitting"
            value={0}
          />

          {/* Label positioning */}
          <ReactRating label="Start Position" labelPosition="start" value={3} />

          <ReactRating label="End Position" labelPosition="end" value={3} />
        </div>
      </div>

      <div className="mbe4">
        <h2>CSS Shadow Parts Customization</h2>
        <p className="mbs2 mbe3">
          Use CSS Shadow Parts to customize the component's appearance.
        </p>
        <ReactRating value={4} className="custom-rating" />
      </div>
    </section>
  );
}
`,la=JSON.parse('{"title":"Rating","description":"","frontmatter":{},"headers":[],"relativePath":"components/rating.md","filePath":"components/rating.md"}'),G={name:"components/rating.md"},ra=Object.assign(G,{setup(t){return(a,e)=>(c(),k("div",null,[e[1]||(e[1]=i("h1",{id:"rating",tabindex:"-1"},[d("Rating "),i("a",{class:"header-anchor",href:"#rating","aria-label":'Permalink to "Rating"'},"​")],-1)),s(b),e[2]||(e[2]=i("p",null,"The Rating component provides a way for users to view and set a rating, typically represented by stars. It's highly customizable, supporting different sizes, colors, and precision.",-1)),e[3]||(e[3]=i("h2",{id:"examples",tabindex:"-1"},[d("Examples "),i("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),s(V,{component:"rating","vue-code":o(Q),"lit-code":o(M),"react-code":o(j)},{vue:g(()=>[s(U)]),lit:g(()=>[...e[0]||(e[0]=[i("rating-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),e[4]||(e[4]=x(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The framework examples below <code>import</code> AgnosticUI as an <code>npm</code> package. Alternatively, you can use the <strong>CLI for complete control, AI/LLM visibility, and full code ownership</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> init</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> --framework</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> FRAMEWORK</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;"> # react, vue, lit, svelte, etc.</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> add</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> Rating</span></span></code></pre></div><p>The CLI copies source code directly into your project, giving you full visibility and control. After running <code>npx ag add</code>, you&#39;ll receive exact import instructions.</p></div><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueRating</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;3&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueRating</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;2.5&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> precision</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;half&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueRating</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;4&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;success&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ts&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { defineComponent } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;vue&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { VueRating } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/rating/vue&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> defineComponent</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">({</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  components: { VueRating }</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">})</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ReactRating } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/rating/react&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> function</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> Example</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactRating</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">3</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactRating</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">2.5</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> precision</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;half&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactRating</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">4</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;success&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></details><details class="details custom-block"><summary>Lit (Web Components)</summary><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;module&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/rating&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-rating</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;3&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-rating</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-rating</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;2.5&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> precision</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;half&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-rating</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-rating</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;4&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;success&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-rating</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>value</code></td><td><code>number</code></td><td><code>0</code></td><td>The current rating value. Can be a float if <code>precision</code> is <code>half</code>.</td></tr><tr><td><code>max</code></td><td><code>number</code></td><td><code>5</code></td><td>The maximum rating value (total number of stars).</td></tr><tr><td><code>precision</code></td><td><code>&#39;whole&#39; | &#39;half&#39;</code></td><td><code>&#39;whole&#39;</code></td><td>The precision of the rating, allowing for whole or half-star increments.</td></tr><tr><td><code>readonly</code></td><td><code>boolean</code></td><td><code>false</code></td><td>If true, the rating is display-only and cannot be changed by the user.</td></tr><tr><td><code>allowClear</code></td><td><code>boolean</code></td><td><code>false</code></td><td>If true, clicking on the currently selected rating value will set the rating to 0.</td></tr><tr><td><code>size</code></td><td><code>&#39;sm&#39; | &#39;md&#39; | &#39;lg&#39;</code></td><td><code>&#39;md&#39;</code></td><td>The size of the rating stars.</td></tr><tr><td><code>variant</code></td><td><code>&#39;&#39; | &#39;primary&#39; | &#39;secondary&#39; | &#39;success&#39; | &#39;warning&#39; | &#39;danger&#39;</code></td><td><code>&#39;&#39;</code></td><td>The color variant of the rating. Defaults to yellow if empty.</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Event</th><th>Framework</th><th>Detail</th><th>Description</th></tr></thead><tbody><tr><td><code>rating-change</code></td><td>Vue: <code>@rating-change</code><br>React: <code>onRatingChange</code><br>Lit: <code>@rating-change</code></td><td><code>{ oldValue: number, newValue: number }</code></td><td>Fired when the user selects a new rating value.</td></tr><tr><td><code>rating-hover</code></td><td>Vue: <code>@rating-hover</code><br>React: <code>onRatingHover</code><br>Lit: <code>@rating-hover</code></td><td><code>{ phase: &#39;start&#39; | &#39;move&#39; | &#39;end&#39;, value: number }</code></td><td>Fired as the user&#39;s pointer moves over the component. <code>phase</code> indicates the state of the hover interaction.</td></tr></tbody></table><h2 id="css-shadow-parts" tabindex="-1">CSS Shadow Parts <a class="header-anchor" href="#css-shadow-parts" aria-label="Permalink to &quot;CSS Shadow Parts&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Part</th><th>Description</th></tr></thead><tbody><tr><td><code>base</code></td><td>The main container <code>div</code> element wrapping the stars.</td></tr><tr><td><code>star-button</code></td><td>The <code>&lt;span&gt;</code> element that acts as the clickable area for each star.</td></tr><tr><td><code>star</code></td><td>The <code>&lt;span&gt;</code> element that contains the star&#39;s SVG icon.</td></tr></tbody></table><h3 id="customization-example" tabindex="-1">Customization Example <a class="header-anchor" href="#customization-example" aria-label="Permalink to &quot;Customization Example&quot;">​</a></h3><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-rating</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.custom-rating</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">star-button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  padding</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.25</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border-radius</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">50</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">%</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  transition</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: background-color </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.2</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">s</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> ease</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-rating</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.custom-rating</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">star-button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">:hover</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background-color</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">rgba</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.1</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-rating</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.custom-rating</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(star) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  opacity</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.8</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  transition</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: opacity </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.2</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">s</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> ease</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-rating</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.custom-rating</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(star)</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">:hover</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  opacity</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">1</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><h2 id="accessibility" tabindex="-1">Accessibility <a class="header-anchor" href="#accessibility" aria-label="Permalink to &quot;Accessibility&quot;">​</a></h2><ul><li>The component is implemented as a <code>role=&quot;slider&quot;</code> for screen reader compatibility.</li><li><code>aria-valuenow</code>, <code>aria-valuemin</code>, and <code>aria-valuemax</code> are used to convey the current, minimum, and maximum values.</li><li>The component is keyboard navigable using arrow keys, Home, and End.</li><li>A visually hidden <code>&lt;span&gt;</code> with <code>aria-live=&quot;polite&quot;</code> announces the rating to screen readers.</li><li>The component is focusable and has a visible focus ring.</li></ul><h2 id="best-practices" tabindex="-1">Best Practices <a class="header-anchor" href="#best-practices" aria-label="Permalink to &quot;Best Practices&quot;">​</a></h2><ul><li>For ratings that are not interactive, always use the <code>readonly</code> prop.</li><li>Ensure sufficient color contrast for the star colors, especially when using <code>variant</code>.</li><li>When used in a form, consider associating it with a label for better context.</li></ul>`,17))]))}});export{la as __pageData,ra as default};
