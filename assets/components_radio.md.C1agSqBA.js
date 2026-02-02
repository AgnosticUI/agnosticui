import{A as g}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{m as c}from"./chunks/VueRadio.vue_vue_type_script_setup_true_lang-C7Z-sWpa.yOVnEFXl.js";import{_ as y}from"./chunks/VueFieldset.BVv9vU-c.js";import{d as u,_ as m,C as k,c as F,o as r,j as s,G as i,ae as o,w as t,a as d,k as h}from"./chunks/framework.NAAYCHZu.js";import{F as b}from"./chunks/FrameworkExample.Z9eaTrCu.js";import{a as C,x as v}from"./chunks/Button.DkmThuAs.js";import"./chunks/createLucideIcon.B61Wqv9x.js";import"./chunks/form-control-utils.oxcP5Ntc.js";import"./chunks/state-CovhUvdr.CfYrM0Q-.js";import"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import"./chunks/sdk.m.DhOmSlC9.js";import"./chunks/Icon.BC5ob6Nk.js";const E=u({name:"RadioExamples",components:{VueRadio:c,VueFieldset:y}}),B={style:{display:"flex","flex-direction":"column",gap:"0.75rem"}},D={class:"mbe4",style:{display:"flex","flex-direction":"column",gap:"1.5rem"}},A={style:{display:"flex","flex-direction":"column",gap:"0.75rem"}},q={style:{display:"flex","flex-direction":"column",gap:"0.75rem"}},x={class:"mbe4",style:{display:"flex",gap:"2rem","align-items":"center"}},f={class:"mbe4",style:{display:"flex","flex-direction":"column",gap:"1.5rem"}},R={style:{display:"flex",gap:"1rem"}},T={style:{display:"flex",gap:"1rem"}},S={style:{display:"flex",gap:"1rem"}},w={style:{display:"flex",gap:"1rem"}},V={class:"mbe4",style:{display:"flex",gap:"1rem"}},$={style:{display:"flex","flex-direction":"column",gap:"0.75rem"}},P={class:"mbe4",style:{display:"flex","flex-direction":"column",gap:"1rem"}},z={style:{display:"flex",gap:"1.5rem"}},L={class:"stacked mbe4"},_={class:"stacked-mobile mbe4"};function M(p,e,n,j,H,K){const a=k("VueRadio"),l=k("VueFieldset");return r(),F("section",null,[e[0]||(e[0]=s("div",{class:"mbe4"},[s("h2",null,"Default Radio"),s("p",{class:"mbs2 mbe3"},"Basic radio buttons with default theme (primary)")],-1)),i(l,{legend:"Choose your plan"},{default:t(()=>[s("div",B,[i(a,{name:"plan",value:"free","label-text":"Free Plan"}),i(a,{name:"plan",value:"pro","label-text":"Pro Plan",checked:!0}),i(a,{name:"plan",value:"enterprise","label-text":"Enterprise Plan"})])]),_:1}),e[1]||(e[1]=s("div",{class:"mbe4"},[s("h2",null,"Radio Group"),s("p",{class:"mbs2 mbe3"},"Multiple radio button groups")],-1)),s("div",D,[i(l,{legend:"Select Framework"},{default:t(()=>[s("div",A,[i(a,{name:"framework",value:"react","label-text":"React"}),i(a,{name:"framework",value:"vue","label-text":"Vue",checked:!0}),i(a,{name:"framework",value:"angular","label-text":"Angular"}),i(a,{name:"framework",value:"svelte","label-text":"Svelte"})])]),_:1}),i(l,{legend:"Deployment Environment"},{default:t(()=>[s("div",q,[i(a,{name:"environment",value:"development","label-text":"Development",checked:!0}),i(a,{name:"environment",value:"staging","label-text":"Staging"}),i(a,{name:"environment",value:"production","label-text":"Production"})])]),_:1})]),e[2]||(e[2]=s("div",{class:"mbe4"},[s("h2",null,"Size Variants"),s("p",{class:"mbs2 mbe3"},"Three size options: small, medium (default), and large")],-1)),s("div",x,[i(a,{name:"size-demo",value:"small",size:"small","label-text":"Small",checked:!0}),i(a,{name:"size-demo2",value:"medium",size:"medium","label-text":"Medium",checked:!0}),i(a,{name:"size-demo3",value:"large",size:"large","label-text":"Large",checked:!0})]),e[3]||(e[3]=s("div",{class:"mbe4"},[s("h2",null,"Theme Variants"),s("p",{class:"mbs2 mbe3"},"Choose from default (green), primary (blue), or monochrome (black/white) themes")],-1)),s("div",f,[i(l,{legend:"Default Theme (Blue)"},{default:t(()=>[s("div",R,[i(a,{name:"theme-default",value:"1",theme:"default","label-text":"Unchecked"}),i(a,{name:"theme-default",value:"2",theme:"default","label-text":"Checked",checked:!0})])]),_:1}),i(l,{legend:"Primary Theme (Blue)"},{default:t(()=>[s("div",T,[i(a,{name:"theme-primary",value:"1",theme:"primary","label-text":"Unchecked"}),i(a,{name:"theme-primary",value:"2",theme:"primary","label-text":"Checked",checked:!0})])]),_:1}),i(l,{legend:"Success Theme (Green)"},{default:t(()=>[s("div",S,[i(a,{name:"theme-success",value:"1",theme:"success","label-text":"Unchecked"}),i(a,{name:"theme-success",value:"2",theme:"success","label-text":"Checked",checked:!0})])]),_:1}),i(l,{legend:"Monochrome Theme (Black/White)"},{default:t(()=>[s("div",w,[i(a,{name:"theme-mono",value:"1",theme:"monochrome","label-text":"Unchecked"}),i(a,{name:"theme-mono",value:"2",theme:"monochrome","label-text":"Checked",checked:!0})])]),_:1})]),e[4]||(e[4]=s("div",{class:"mbe4"},[s("h2",null,"Disabled State"),s("p",{class:"mbs2 mbe3"},"Radio buttons can be disabled to prevent interaction")],-1)),s("div",V,[i(a,{name:"disabled-demo",value:"1","label-text":"Disabled Unchecked",disabled:!0}),i(a,{name:"disabled-demo2",value:"2","label-text":"Disabled Checked",checked:!0,disabled:!0})]),e[5]||(e[5]=o('<div class="mbe4"><h2>Keyboard Navigation with Disabled Radios</h2><p class="mbs2 mbe3"> Disabled radios are automatically skipped when navigating with arrow keys. Try using <kbd>↑</kbd> / <kbd>↓</kbd> or <kbd>←</kbd> / <kbd>→</kbd> arrow keys, or <kbd>HOME</kbd> and <kbd>END</kbd> (to jump to start and end respectively) to navigate between options. The disabled middle option will be skipped. </p></div>',1)),i(l,{legend:"Select Shipping Method"},{default:t(()=>[s("div",$,[i(a,{name:"keyboard-nav-demo",value:"standard","label-text":"Standard Shipping - $5.99",checked:!0}),i(a,{name:"keyboard-nav-demo",value:"express","label-text":"Express Shipping - Currently Unavailable",disabled:!0}),i(a,{name:"keyboard-nav-demo",value:"overnight","label-text":"Overnight Shipping - $24.99"})])]),_:1}),e[6]||(e[6]=s("div",{class:"mbe4"},[s("h2",null,"Label Position"),s("p",{class:"mbs2 mbe3"},"Labels can be positioned at the end (default) or start of the radio button")],-1)),s("div",P,[i(a,{name:"position-demo",value:"1","label-text":"Label on End (Default)","label-position":"end",checked:!0}),i(a,{name:"position-demo2",value:"2","label-text":"Label on Start","label-position":"start",checked:!0})]),e[7]||(e[7]=s("div",{class:"mbe4"},[s("h2",null,"Inline Layout"),s("p",{class:"mbs2 mbe3"},"Radio buttons can be laid out horizontally for compact forms")],-1)),i(l,{legend:"Gender"},{default:t(()=>[s("div",z,[i(a,{name:"gender",value:"male","label-text":"Male"}),i(a,{name:"gender",value:"female","label-text":"Female",checked:!0}),i(a,{name:"gender",value:"other","label-text":"Other"})])]),_:1}),e[8]||(e[8]=s("div",{class:"mbe4"},[s("h2",null,"External Label Support"),s("p",{class:"mbs2 mbe3"}," Radio buttons support optional external labels, helper text, and error messages for validation feedback. ")],-1)),s("div",L,[i(a,{name:"shipping-method",value:"standard",label:"Shipping Method","label-text":"Standard Shipping (5-7 days)",checked:!0,class:"mbe2"}),i(a,{name:"payment-method",value:"credit",label:"Payment Method","label-text":"Credit Card","help-text":"We accept all major credit cards",checked:!0,class:"mbe2"}),i(a,{name:"terms-agreement",value:"agreed",label:"Terms and Conditions","label-text":"I agree to the terms and conditions",required:!0,"help-text":"Please read and accept our terms to proceed",class:"mbe2"}),i(a,{name:"age-verify",value:"confirmed",label:"Age Verification","label-text":"I confirm I am 18 years or older",required:!0,invalid:!0,"error-message":"You must confirm you are 18 or older to proceed",class:"mbe2"})]),e[9]||(e[9]=s("div",{class:"mbe4"},[s("h2",null,"CSS Shadow Parts Customization"),s("p",{class:"mbs2 mbe3"}," Use CSS Shadow Parts to customize the component's appearance. ")],-1)),s("div",_,[i(a,{name:"custom",value:"1","label-text":"Customized indicator",checked:!0,class:"custom-radio-1"})])])}const N=m(E,[["render",M]]);class U extends C{createRenderRoot(){return this}render(){return v`
      <section>
        <div class="mbe4">
          <h2>Default Radio</h2>
          <p class="mbs2 mbe3">Basic radio buttons with default theme (primary)</p>
        </div>
        <ag-fieldset legend="Choose your plan">
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <ag-radio
              name="plan"
              value="free"
              .labelText=${"Free Plan"}
            ></ag-radio>
            <ag-radio
              name="plan"
              value="pro"
              .labelText=${"Pro Plan"}
              .checked=${!0}
            ></ag-radio>
            <ag-radio
              name="plan"
              value="enterprise"
              .labelText=${"Enterprise Plan"}
            ></ag-radio>
          </div>
        </ag-fieldset>

        <div class="mbe4">
          <h2>Radio Group</h2>
          <p class="mbs2 mbe3">Multiple radio button groups</p>
        </div>
        <div
          class="mbe4"
          style="display: flex; flex-direction: column; gap: 1.5rem;"
        >
          <ag-fieldset legend="Select Framework">
            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
              <ag-radio
                name="framework"
                value="react"
                .labelText=${"React"}
              ></ag-radio>
              <ag-radio
                name="framework"
                value="vue"
                .labelText=${"Vue"}
                .checked=${!0}
              ></ag-radio>
              <ag-radio
                name="framework"
                value="angular"
                .labelText=${"Angular"}
              ></ag-radio>
              <ag-radio
                name="framework"
                value="svelte"
                .labelText=${"Svelte"}
              ></ag-radio>
            </div>
          </ag-fieldset>

          <ag-fieldset legend="Deployment Environment">
            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
              <ag-radio
                name="environment"
                value="development"
                .labelText=${"Development"}
                .checked=${!0}
              ></ag-radio>
              <ag-radio
                name="environment"
                value="staging"
                .labelText=${"Staging"}
              ></ag-radio>
              <ag-radio
                name="environment"
                value="production"
                .labelText=${"Production"}
              ></ag-radio>
            </div>
          </ag-fieldset>
        </div>

        <div class="mbe4">
          <h2>Size Variants</h2>
          <p class="mbs2 mbe3">Three size options: small, medium (default), and large</p>
        </div>
        <div
          class="mbe4"
          style="display: flex; gap: 2rem; align-items: center;"
        >
          <ag-radio
            name="size-demo"
            value="small"
            size="small"
            .labelText=${"Small"}
            .checked=${!0}
          ></ag-radio>
          <ag-radio
            name="size-demo2"
            value="medium"
            size="medium"
            .labelText=${"Medium"}
            .checked=${!0}
          ></ag-radio>
          <ag-radio
            name="size-demo3"
            value="large"
            size="large"
            .labelText=${"Large"}
            .checked=${!0}
          ></ag-radio>
        </div>

        <div class="mbe4">
          <h2>Theme Variants</h2>
          <p class="mbs2 mbe3">Choose from default (green), primary (blue), or monochrome (black/white) themes</p>
        </div>
        <div
          class="mbe4"
          style="display: flex; flex-direction: column; gap: 1.5rem;"
        >
          <ag-fieldset legend="Default Theme (Blue)">
            <div style="display: flex; gap: 1rem;">
              <ag-radio
                name="theme-default"
                value="1"
                theme="default"
                .labelText=${"Unchecked"}
              ></ag-radio>
              <ag-radio
                name="theme-default"
                value="2"
                theme="default"
                .labelText=${"Checked"}
                .checked=${!0}
              ></ag-radio>
            </div>
          </ag-fieldset>
          <ag-fieldset legend="Primary Theme (Blue)">
            <div style="display: flex; gap: 1rem;">
              <ag-radio
                name="theme-primary"
                value="1"
                theme="primary"
                .labelText=${"Unchecked"}
              ></ag-radio>
              <ag-radio
                name="theme-primary"
                value="2"
                theme="primary"
                .labelText=${"Checked"}
                .checked=${!0}
              ></ag-radio>
            </div>
          </ag-fieldset>
          <ag-fieldset legend="Success Theme (Green)">
            <div style="display: flex; gap: 1rem;">
              <ag-radio
                name="theme-success"
                value="1"
                theme="success"
                .labelText=${"Unchecked"}
              ></ag-radio>
              <ag-radio
                name="theme-success"
                value="2"
                theme="success"
                .labelText=${"Checked"}
                .checked=${!0}
              ></ag-radio>
            </div>
          </ag-fieldset>

          <ag-fieldset legend="Monochrome Theme (Black/White)">
            <div style="display: flex; gap: 1rem;">
              <ag-radio
                name="theme-mono"
                value="1"
                theme="monochrome"
                .labelText=${"Unchecked"}
              ></ag-radio>
              <ag-radio
                name="theme-mono"
                value="2"
                theme="monochrome"
                .labelText=${"Checked"}
                .checked=${!0}
              ></ag-radio>
            </div>
          </ag-fieldset>
        </div>

        <div class="mbe4">
          <h2>Disabled State</h2>
          <p class="mbs2 mbe3">Radio buttons can be disabled to prevent interaction</p>
        </div>
        <div
          class="mbe4"
          style="display: flex; gap: 1rem;"
        >
          <ag-radio
            name="disabled-demo"
            value="1"
            .labelText=${"Disabled Unchecked"}
            .disabled=${!0}
          ></ag-radio>
          <ag-radio
            name="disabled-demo2"
            value="2"
            .labelText=${"Disabled Checked"}
            .checked=${!0}
            .disabled=${!0}
          ></ag-radio>
        </div>

        <div class="mbe4">
          <h2>Keyboard Navigation with Disabled Radios</h2>
          <p class="mbs2 mbe3">
            Disabled radios are automatically skipped when navigating with arrow keys.
            Try using <kbd>↑</kbd> / <kbd>↓</kbd> or <kbd>←</kbd> / <kbd>→</kbd> arrow keys, or <kbd>HOME</kbd> and <kbd>END</kbd> (to jump to start and end respectively) to navigate between options.
            The disabled middle option will be skipped.
          </p>
        </div>
        <ag-fieldset legend="Select Shipping Method">
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <ag-radio
              name="keyboard-nav-demo"
              value="standard"
              .labelText=${"Standard Shipping - $5.99"}
              .checked=${!0}
            ></ag-radio>
            <ag-radio
              name="keyboard-nav-demo"
              value="express"
              .labelText=${"Express Shipping - Currently Unavailable"}
              .disabled=${!0}
            ></ag-radio>
            <ag-radio
              name="keyboard-nav-demo"
              value="overnight"
              .labelText=${"Overnight Shipping - $24.99"}
            ></ag-radio>
          </div>
        </ag-fieldset>

        <div class="mbe4">
          <h2>Label Position</h2>
          <p class="mbs2 mbe3">Labels can be positioned at the end (default) or start of the radio button</p>
        </div>
        <div
          class="mbe4"
          style="display: flex; flex-direction: column; gap: 1rem;"
        >
          <ag-radio
            name="position-demo"
            value="1"
            .labelText=${"Label on End (Default)"}
            label-position="end"
            .checked=${!0}
          ></ag-radio>
          <ag-radio
            name="position-demo2"
            value="2"
            .labelText=${"Label on Start"}
            label-position="start"
            .checked=${!0}
          ></ag-radio>
        </div>

        <div class="mbe4">
          <h2>Inline Layout</h2>
          <p class="mbs2 mbe3">Radio buttons can be laid out horizontally for compact forms</p>
        </div>
        <ag-fieldset legend="Gender">
          <div style="display: flex; gap: 1.5rem;">
            <ag-radio
              name="gender"
              value="male"
              .labelText=${"Male"}
            ></ag-radio>
            <ag-radio
              name="gender"
              value="female"
              .labelText=${"Female"}
              .checked=${!0}
            ></ag-radio>
            <ag-radio
              name="gender"
              value="other"
              .labelText=${"Other"}
            ></ag-radio>
          </div>
        </ag-fieldset>

        <div class="mbe4">
          <h2>External Label Support</h2>
          <p class="mbs2 mbe3">
            Radio buttons support optional external labels, helper text, and error messages for validation feedback.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-radio
            name="shipping-method"
            value="standard"
            label="Shipping Method"
            .labelText=${"Standard Shipping (5-7 days)"}
            .checked=${!0}
            class="mbe2"
          ></ag-radio>

          <ag-radio
            name="payment-method"
            value="credit"
            label="Payment Method"
            .labelText=${"Credit Card"}
            help-text="We accept all major credit cards"
            .checked=${!0}
            class="mbe2"
          ></ag-radio>

          <ag-radio
            name="terms-agreement"
            value="agreed"
            label="Terms and Conditions"
            .labelText=${"I agree to the terms and conditions"}
            .required=${!0}
            help-text="Please read and accept our terms to proceed"
            class="mbe2"
          ></ag-radio>

          <ag-radio
            name="age-verify"
            value="confirmed"
            label="Age Verification"
            .labelText=${"I confirm I am 18 years or older"}
            .required=${!0}
            .invalid=${!0}
            error-message="You must confirm you are 18 or older to proceed"
            class="mbe2"
          ></ag-radio>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the component's appearance.
          </p>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-radio
            name="custom"
            value="1"
            .labelText=${"Customized indicator"}
            .checked=${!0}
            class="custom-radio-1"
          ></ag-radio>
        </div>
      </section>

      <style>
        /* CSS Shadow Parts customization examples */
        .custom-radio-1::part(ag-radio-indicator) {
          border-width: 3px;
          transform: scale(1.3);
        }
      </style>
    `}}customElements.define("radio-lit-examples",U);const O=`<template>
  <section>
    <div class="mbe4">
      <h2>Default Radio</h2>
      <p class="mbs2 mbe3">Basic radio buttons with default theme (primary)</p>
    </div>
    <VueFieldset legend="Choose your plan">
      <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        <VueRadio
          name="plan"
          value="free"
          label-text="Free Plan"
        />
        <VueRadio
          name="plan"
          value="pro"
          label-text="Pro Plan"
          :checked="true"
        />
        <VueRadio
          name="plan"
          value="enterprise"
          label-text="Enterprise Plan"
        />
      </div>
    </VueFieldset>

    <div class="mbe4">
      <h2>Radio Group</h2>
      <p class="mbs2 mbe3">Multiple radio button groups</p>
    </div>
    <div
      class="mbe4"
      style="display: flex; flex-direction: column; gap: 1.5rem;"
    >
      <VueFieldset legend="Select Framework">
        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          <VueRadio
            name="framework"
            value="react"
            label-text="React"
          />
          <VueRadio
            name="framework"
            value="vue"
            label-text="Vue"
            :checked="true"
          />
          <VueRadio
            name="framework"
            value="angular"
            label-text="Angular"
          />
          <VueRadio
            name="framework"
            value="svelte"
            label-text="Svelte"
          />
        </div>
      </VueFieldset>

      <VueFieldset legend="Deployment Environment">
        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          <VueRadio
            name="environment"
            value="development"
            label-text="Development"
            :checked="true"
          />
          <VueRadio
            name="environment"
            value="staging"
            label-text="Staging"
          />
          <VueRadio
            name="environment"
            value="production"
            label-text="Production"
          />
        </div>
      </VueFieldset>
    </div>

    <div class="mbe4">
      <h2>Size Variants</h2>
      <p class="mbs2 mbe3">Three size options: small, medium (default), and large</p>
    </div>
    <div
      class="mbe4"
      style="display: flex; gap: 2rem; align-items: center;"
    >
      <VueRadio
        name="size-demo"
        value="small"
        size="small"
        label-text="Small"
        :checked="true"
      />
      <VueRadio
        name="size-demo2"
        value="medium"
        size="medium"
        label-text="Medium"
        :checked="true"
      />
      <VueRadio
        name="size-demo3"
        value="large"
        size="large"
        label-text="Large"
        :checked="true"
      />
    </div>

    <div class="mbe4">
      <h2>Theme Variants</h2>
      <p class="mbs2 mbe3">Choose from default (green), primary (blue), or monochrome (black/white) themes</p>
    </div>
    <div
      class="mbe4"
      style="display: flex; flex-direction: column; gap: 1.5rem;"
    >
      <VueFieldset legend="Default Theme (Blue)">
        <div style="display: flex; gap: 1rem;">
          <VueRadio
            name="theme-default"
            value="1"
            theme="default"
            label-text="Unchecked"
          />
          <VueRadio
            name="theme-default"
            value="2"
            theme="default"
            label-text="Checked"
            :checked="true"
          />
        </div>
      </VueFieldset>
      <VueFieldset legend="Primary Theme (Blue)">
        <div style="display: flex; gap: 1rem;">
          <VueRadio
            name="theme-primary"
            value="1"
            theme="primary"
            label-text="Unchecked"
          />
          <VueRadio
            name="theme-primary"
            value="2"
            theme="primary"
            label-text="Checked"
            :checked="true"
          />
        </div>
      </VueFieldset>
      <VueFieldset legend="Success Theme (Green)">
        <div style="display: flex; gap: 1rem;">
          <VueRadio
            name="theme-success"
            value="1"
            theme="success"
            label-text="Unchecked"
          />
          <VueRadio
            name="theme-success"
            value="2"
            theme="success"
            label-text="Checked"
            :checked="true"
          />
        </div>
      </VueFieldset>

      <VueFieldset legend="Monochrome Theme (Black/White)">
        <div style="display: flex; gap: 1rem;">
          <VueRadio
            name="theme-mono"
            value="1"
            theme="monochrome"
            label-text="Unchecked"
          />
          <VueRadio
            name="theme-mono"
            value="2"
            theme="monochrome"
            label-text="Checked"
            :checked="true"
          />
        </div>
      </VueFieldset>
    </div>

    <div class="mbe4">
      <h2>Disabled State</h2>
      <p class="mbs2 mbe3">Radio buttons can be disabled to prevent interaction</p>
    </div>
    <div
      class="mbe4"
      style="display: flex; gap: 1rem;"
    >
      <VueRadio
        name="disabled-demo"
        value="1"
        label-text="Disabled Unchecked"
        :disabled="true"
      />
      <VueRadio
        name="disabled-demo2"
        value="2"
        label-text="Disabled Checked"
        :checked="true"
        :disabled="true"
      />
    </div>

    <div class="mbe4">
      <h2>Keyboard Navigation with Disabled Radios</h2>
      <p class="mbs2 mbe3">
        Disabled radios are automatically skipped when navigating with arrow keys.
        Try using <kbd>↑</kbd> / <kbd>↓</kbd> or <kbd>←</kbd> / <kbd>→</kbd> arrow keys, or <kbd>HOME</kbd> and <kbd>END</kbd> (to jump to start and end respectively) to navigate between options.
        The disabled middle option will be skipped.
      </p>
    </div>
    <VueFieldset legend="Select Shipping Method">
      <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        <VueRadio
          name="keyboard-nav-demo"
          value="standard"
          label-text="Standard Shipping - $5.99"
          :checked="true"
        />
        <VueRadio
          name="keyboard-nav-demo"
          value="express"
          label-text="Express Shipping - Currently Unavailable"
          :disabled="true"
        />
        <VueRadio
          name="keyboard-nav-demo"
          value="overnight"
          label-text="Overnight Shipping - $24.99"
        />
      </div>
    </VueFieldset>

    <div class="mbe4">
      <h2>Label Position</h2>
      <p class="mbs2 mbe3">Labels can be positioned at the end (default) or start of the radio button</p>
    </div>
    <div
      class="mbe4"
      style="display: flex; flex-direction: column; gap: 1rem;"
    >
      <VueRadio
        name="position-demo"
        value="1"
        label-text="Label on End (Default)"
        label-position="end"
        :checked="true"
      />
      <VueRadio
        name="position-demo2"
        value="2"
        label-text="Label on Start"
        label-position="start"
        :checked="true"
      />
    </div>

    <div class="mbe4">
      <h2>Inline Layout</h2>
      <p class="mbs2 mbe3">Radio buttons can be laid out horizontally for compact forms</p>
    </div>
    <VueFieldset legend="Gender">
      <div style="display: flex; gap: 1.5rem;">
        <VueRadio
          name="gender"
          value="male"
          label-text="Male"
        />
        <VueRadio
          name="gender"
          value="female"
          label-text="Female"
          :checked="true"
        />
        <VueRadio
          name="gender"
          value="other"
          label-text="Other"
        />
      </div>
    </VueFieldset>

    <div class="mbe4">
      <h2>External Label Support</h2>
      <p class="mbs2 mbe3">
        Radio buttons support optional external labels, helper text, and error messages for validation feedback.
      </p>
    </div>
    <div class="stacked mbe4">
      <VueRadio
        name="shipping-method"
        value="standard"
        label="Shipping Method"
        label-text="Standard Shipping (5-7 days)"
        :checked="true"
        class="mbe2"
      />

      <VueRadio
        name="payment-method"
        value="credit"
        label="Payment Method"
        label-text="Credit Card"
        help-text="We accept all major credit cards"
        :checked="true"
        class="mbe2"
      />

      <VueRadio
        name="terms-agreement"
        value="agreed"
        label="Terms and Conditions"
        label-text="I agree to the terms and conditions"
        :required="true"
        help-text="Please read and accept our terms to proceed"
        class="mbe2"
      />

      <VueRadio
        name="age-verify"
        value="confirmed"
        label="Age Verification"
        label-text="I confirm I am 18 years or older"
        :required="true"
        :invalid="true"
        error-message="You must confirm you are 18 or older to proceed"
        class="mbe2"
      />
    </div>

    <div class="mbe4">
      <h2>CSS Shadow Parts Customization</h2>
      <p class="mbs2 mbe3">
        Use CSS Shadow Parts to customize the component's appearance.
      </p>
    </div>
    <div class="stacked-mobile mbe4">
      <VueRadio
        name="custom"
        value="1"
        label-text="Customized indicator"
        :checked="true"
        class="custom-radio-1"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueRadio } from "agnosticui-core/radio/vue";
import { VueFieldset } from "agnosticui-core/fieldset/vue";

export default defineComponent({
  name: "RadioExamples",
  components: {
    VueRadio,
    VueFieldset,
  },
});
<\/script>

<style>
/* CSS Shadow Parts customization examples */
.custom-radio-1::part(ag-radio-indicator) {
  border-width: 3px;
  transform: scale(1.3);
}
</style>

`,I=`import { LitElement, html } from 'lit';
import 'agnosticui-core/radio';
import 'agnosticui-core/fieldset';

export class RadioLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  render() {
    return html\`
      <section>
        <div class="mbe4">
          <h2>Default Radio</h2>
          <p class="mbs2 mbe3">Basic radio buttons with default theme (primary)</p>
        </div>
        <ag-fieldset legend="Choose your plan">
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <ag-radio
              name="plan"
              value="free"
              .labelText=\${"Free Plan"}
            ></ag-radio>
            <ag-radio
              name="plan"
              value="pro"
              .labelText=\${"Pro Plan"}
              .checked=\${true}
            ></ag-radio>
            <ag-radio
              name="plan"
              value="enterprise"
              .labelText=\${"Enterprise Plan"}
            ></ag-radio>
          </div>
        </ag-fieldset>

        <div class="mbe4">
          <h2>Radio Group</h2>
          <p class="mbs2 mbe3">Multiple radio button groups</p>
        </div>
        <div
          class="mbe4"
          style="display: flex; flex-direction: column; gap: 1.5rem;"
        >
          <ag-fieldset legend="Select Framework">
            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
              <ag-radio
                name="framework"
                value="react"
                .labelText=\${"React"}
              ></ag-radio>
              <ag-radio
                name="framework"
                value="vue"
                .labelText=\${"Vue"}
                .checked=\${true}
              ></ag-radio>
              <ag-radio
                name="framework"
                value="angular"
                .labelText=\${"Angular"}
              ></ag-radio>
              <ag-radio
                name="framework"
                value="svelte"
                .labelText=\${"Svelte"}
              ></ag-radio>
            </div>
          </ag-fieldset>

          <ag-fieldset legend="Deployment Environment">
            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
              <ag-radio
                name="environment"
                value="development"
                .labelText=\${"Development"}
                .checked=\${true}
              ></ag-radio>
              <ag-radio
                name="environment"
                value="staging"
                .labelText=\${"Staging"}
              ></ag-radio>
              <ag-radio
                name="environment"
                value="production"
                .labelText=\${"Production"}
              ></ag-radio>
            </div>
          </ag-fieldset>
        </div>

        <div class="mbe4">
          <h2>Size Variants</h2>
          <p class="mbs2 mbe3">Three size options: small, medium (default), and large</p>
        </div>
        <div
          class="mbe4"
          style="display: flex; gap: 2rem; align-items: center;"
        >
          <ag-radio
            name="size-demo"
            value="small"
            size="small"
            .labelText=\${"Small"}
            .checked=\${true}
          ></ag-radio>
          <ag-radio
            name="size-demo2"
            value="medium"
            size="medium"
            .labelText=\${"Medium"}
            .checked=\${true}
          ></ag-radio>
          <ag-radio
            name="size-demo3"
            value="large"
            size="large"
            .labelText=\${"Large"}
            .checked=\${true}
          ></ag-radio>
        </div>

        <div class="mbe4">
          <h2>Theme Variants</h2>
          <p class="mbs2 mbe3">Choose from default (green), primary (blue), or monochrome (black/white) themes</p>
        </div>
        <div
          class="mbe4"
          style="display: flex; flex-direction: column; gap: 1.5rem;"
        >
          <ag-fieldset legend="Default Theme (Blue)">
            <div style="display: flex; gap: 1rem;">
              <ag-radio
                name="theme-default"
                value="1"
                theme="default"
                .labelText=\${"Unchecked"}
              ></ag-radio>
              <ag-radio
                name="theme-default"
                value="2"
                theme="default"
                .labelText=\${"Checked"}
                .checked=\${true}
              ></ag-radio>
            </div>
          </ag-fieldset>
          <ag-fieldset legend="Primary Theme (Blue)">
            <div style="display: flex; gap: 1rem;">
              <ag-radio
                name="theme-primary"
                value="1"
                theme="primary"
                .labelText=\${"Unchecked"}
              ></ag-radio>
              <ag-radio
                name="theme-primary"
                value="2"
                theme="primary"
                .labelText=\${"Checked"}
                .checked=\${true}
              ></ag-radio>
            </div>
          </ag-fieldset>
          <ag-fieldset legend="Success Theme (Green)">
            <div style="display: flex; gap: 1rem;">
              <ag-radio
                name="theme-success"
                value="1"
                theme="success"
                .labelText=\${"Unchecked"}
              ></ag-radio>
              <ag-radio
                name="theme-success"
                value="2"
                theme="success"
                .labelText=\${"Checked"}
                .checked=\${true}
              ></ag-radio>
            </div>
          </ag-fieldset>

          <ag-fieldset legend="Monochrome Theme (Black/White)">
            <div style="display: flex; gap: 1rem;">
              <ag-radio
                name="theme-mono"
                value="1"
                theme="monochrome"
                .labelText=\${"Unchecked"}
              ></ag-radio>
              <ag-radio
                name="theme-mono"
                value="2"
                theme="monochrome"
                .labelText=\${"Checked"}
                .checked=\${true}
              ></ag-radio>
            </div>
          </ag-fieldset>
        </div>

        <div class="mbe4">
          <h2>Disabled State</h2>
          <p class="mbs2 mbe3">Radio buttons can be disabled to prevent interaction</p>
        </div>
        <div
          class="mbe4"
          style="display: flex; gap: 1rem;"
        >
          <ag-radio
            name="disabled-demo"
            value="1"
            .labelText=\${"Disabled Unchecked"}
            .disabled=\${true}
          ></ag-radio>
          <ag-radio
            name="disabled-demo2"
            value="2"
            .labelText=\${"Disabled Checked"}
            .checked=\${true}
            .disabled=\${true}
          ></ag-radio>
        </div>

        <div class="mbe4">
          <h2>Keyboard Navigation with Disabled Radios</h2>
          <p class="mbs2 mbe3">
            Disabled radios are automatically skipped when navigating with arrow keys.
            Try using <kbd>↑</kbd> / <kbd>↓</kbd> or <kbd>←</kbd> / <kbd>→</kbd> arrow keys, or <kbd>HOME</kbd> and <kbd>END</kbd> (to jump to start and end respectively) to navigate between options.
            The disabled middle option will be skipped.
          </p>
        </div>
        <ag-fieldset legend="Select Shipping Method">
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <ag-radio
              name="keyboard-nav-demo"
              value="standard"
              .labelText=\${"Standard Shipping - $5.99"}
              .checked=\${true}
            ></ag-radio>
            <ag-radio
              name="keyboard-nav-demo"
              value="express"
              .labelText=\${"Express Shipping - Currently Unavailable"}
              .disabled=\${true}
            ></ag-radio>
            <ag-radio
              name="keyboard-nav-demo"
              value="overnight"
              .labelText=\${"Overnight Shipping - $24.99"}
            ></ag-radio>
          </div>
        </ag-fieldset>

        <div class="mbe4">
          <h2>Label Position</h2>
          <p class="mbs2 mbe3">Labels can be positioned at the end (default) or start of the radio button</p>
        </div>
        <div
          class="mbe4"
          style="display: flex; flex-direction: column; gap: 1rem;"
        >
          <ag-radio
            name="position-demo"
            value="1"
            .labelText=\${"Label on End (Default)"}
            label-position="end"
            .checked=\${true}
          ></ag-radio>
          <ag-radio
            name="position-demo2"
            value="2"
            .labelText=\${"Label on Start"}
            label-position="start"
            .checked=\${true}
          ></ag-radio>
        </div>

        <div class="mbe4">
          <h2>Inline Layout</h2>
          <p class="mbs2 mbe3">Radio buttons can be laid out horizontally for compact forms</p>
        </div>
        <ag-fieldset legend="Gender">
          <div style="display: flex; gap: 1.5rem;">
            <ag-radio
              name="gender"
              value="male"
              .labelText=\${"Male"}
            ></ag-radio>
            <ag-radio
              name="gender"
              value="female"
              .labelText=\${"Female"}
              .checked=\${true}
            ></ag-radio>
            <ag-radio
              name="gender"
              value="other"
              .labelText=\${"Other"}
            ></ag-radio>
          </div>
        </ag-fieldset>

        <div class="mbe4">
          <h2>External Label Support</h2>
          <p class="mbs2 mbe3">
            Radio buttons support optional external labels, helper text, and error messages for validation feedback.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-radio
            name="shipping-method"
            value="standard"
            label="Shipping Method"
            .labelText=\${"Standard Shipping (5-7 days)"}
            .checked=\${true}
            class="mbe2"
          ></ag-radio>

          <ag-radio
            name="payment-method"
            value="credit"
            label="Payment Method"
            .labelText=\${"Credit Card"}
            help-text="We accept all major credit cards"
            .checked=\${true}
            class="mbe2"
          ></ag-radio>

          <ag-radio
            name="terms-agreement"
            value="agreed"
            label="Terms and Conditions"
            .labelText=\${"I agree to the terms and conditions"}
            .required=\${true}
            help-text="Please read and accept our terms to proceed"
            class="mbe2"
          ></ag-radio>

          <ag-radio
            name="age-verify"
            value="confirmed"
            label="Age Verification"
            .labelText=\${"I confirm I am 18 years or older"}
            .required=\${true}
            .invalid=\${true}
            error-message="You must confirm you are 18 or older to proceed"
            class="mbe2"
          ></ag-radio>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the component's appearance.
          </p>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-radio
            name="custom"
            value="1"
            .labelText=\${"Customized indicator"}
            .checked=\${true}
            class="custom-radio-1"
          ></ag-radio>
        </div>
      </section>

      <style>
        /* CSS Shadow Parts customization examples */
        .custom-radio-1::part(ag-radio-indicator) {
          border-width: 3px;
          transform: scale(1.3);
        }
      </style>
    \`;
  }
}

// Register the custom element
customElements.define('radio-lit-examples', RadioLitExamples);
`,G=`import { ReactRadio } from "agnosticui-core/radio/react";
import { ReactFieldset } from "agnosticui-core/fieldset/react";

export default function RadioReactExamples() {
  return (
    <section>
      <div className="mbe4">
        <h2>Default Radio</h2>
        <p className="mbs2 mbe3">Basic radio buttons with default theme (primary)</p>
      </div>
      <ReactFieldset legend="Choose your plan">
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <ReactRadio name="plan" value="free" labelText="Free Plan" />
          <ReactRadio name="plan" value="pro" labelText="Pro Plan" checked />
          <ReactRadio name="plan" value="enterprise" labelText="Enterprise Plan" />
        </div>
      </ReactFieldset>

      <div className="mbe4">
        <h2>Radio Group</h2>
        <p className="mbs2 mbe3">Multiple radio button groups</p>
      </div>
      <div
        className="mbe4"
        style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
      >
        <ReactFieldset legend="Select Framework">
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <ReactRadio name="framework" value="react" labelText="React" />
            <ReactRadio name="framework" value="vue" labelText="Vue" checked />
            <ReactRadio name="framework" value="angular" labelText="Angular" />
            <ReactRadio name="framework" value="svelte" labelText="Svelte" />
          </div>
        </ReactFieldset>

        <ReactFieldset legend="Deployment Environment">
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <ReactRadio
              name="environment"
              value="development"
              labelText="Development"
              checked
            />
            <ReactRadio name="environment" value="staging" labelText="Staging" />
            <ReactRadio name="environment" value="production" labelText="Production" />
          </div>
        </ReactFieldset>
      </div>

      <div className="mbe4">
        <h2>Size Variants</h2>
        <p className="mbs2 mbe3">Three size options: small, medium (default), and large</p>
      </div>
      <div className="mbe4" style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <ReactRadio name="size-demo" value="small" size="small" labelText="Small" checked />
        <ReactRadio
          name="size-demo2"
          value="medium"
          size="medium"
          labelText="Medium"
          checked
        />
        <ReactRadio name="size-demo3" value="large" size="large" labelText="Large" checked />
      </div>

      <div className="mbe4">
        <h2>Theme Variants</h2>
        <p className="mbs2 mbe3">
          Choose from default (green), primary (blue), or monochrome (black/white) themes
        </p>
      </div>
      <div
        className="mbe4"
        style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
      >
        <ReactFieldset legend="Default Theme (Blue)">
          <div style={{ display: "flex", gap: "1rem" }}>
            <ReactRadio name="theme-default" value="1" theme="default" labelText="Unchecked" />
            <ReactRadio
              name="theme-default"
              value="2"
              theme="default"
              labelText="Checked"
              checked
            />
          </div>
        </ReactFieldset>
        <ReactFieldset legend="Primary Theme (Blue)">
          <div style={{ display: "flex", gap: "1rem" }}>
            <ReactRadio name="theme-primary" value="1" theme="primary" labelText="Unchecked" />
            <ReactRadio
              name="theme-primary"
              value="2"
              theme="primary"
              labelText="Checked"
              checked
            />
          </div>
        </ReactFieldset>
        <ReactFieldset legend="Success Theme (Green)">
          <div style={{ display: "flex", gap: "1rem" }}>
            <ReactRadio name="theme-success" value="1" theme="success" labelText="Unchecked" />
            <ReactRadio
              name="theme-success"
              value="2"
              theme="success"
              labelText="Checked"
              checked
            />
          </div>
        </ReactFieldset>

        <ReactFieldset legend="Monochrome Theme (Black/White)">
          <div style={{ display: "flex", gap: "1rem" }}>
            <ReactRadio
              name="theme-mono"
              value="1"
              theme="monochrome"
              labelText="Unchecked"
            />
            <ReactRadio
              name="theme-mono"
              value="2"
              theme="monochrome"
              labelText="Checked"
              checked
            />
          </div>
        </ReactFieldset>
      </div>

      <div className="mbe4">
        <h2>Disabled State</h2>
        <p className="mbs2 mbe3">Radio buttons can be disabled to prevent interaction</p>
      </div>
      <div className="mbe4" style={{ display: "flex", gap: "1rem" }}>
        <ReactRadio
          name="disabled-demo"
          value="1"
          labelText="Disabled Unchecked"
          disabled
        />
        <ReactRadio
          name="disabled-demo2"
          value="2"
          labelText="Disabled Checked"
          checked
          disabled
        />
      </div>

      <div className="mbe4">
        <h2>Keyboard Navigation with Disabled Radios</h2>
        <p className="mbs2 mbe3">
          Disabled radios are automatically skipped when navigating with arrow keys. Try using{" "}
          <kbd>↑</kbd> / <kbd>↓</kbd> or <kbd>←</kbd> / <kbd>→</kbd> arrow keys, or{" "}
          <kbd>HOME</kbd> and <kbd>END</kbd> (to jump to start and end respectively) to navigate
          between options. The disabled middle option will be skipped.
        </p>
      </div>
      <ReactFieldset legend="Select Shipping Method">
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <ReactRadio
            name="keyboard-nav-demo"
            value="standard"
            labelText="Standard Shipping - $5.99"
            checked
          />
          <ReactRadio
            name="keyboard-nav-demo"
            value="express"
            labelText="Express Shipping - Currently Unavailable"
            disabled
          />
          <ReactRadio
            name="keyboard-nav-demo"
            value="overnight"
            labelText="Overnight Shipping - $24.99"
          />
        </div>
      </ReactFieldset>

      <div className="mbe4">
        <h2>Label Position</h2>
        <p className="mbs2 mbe3">
          Labels can be positioned at the end (default) or start of the radio button
        </p>
      </div>
      <div
        className="mbe4"
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <ReactRadio
          name="position-demo"
          value="1"
          labelText="Label on End (Default)"
          labelPosition="end"
          checked
        />
        <ReactRadio
          name="position-demo2"
          value="2"
          labelText="Label on Start"
          labelPosition="start"
          checked
        />
      </div>

      <div className="mbe4">
        <h2>Inline Layout</h2>
        <p className="mbs2 mbe3">Radio buttons can be laid out horizontally for compact forms</p>
      </div>
      <ReactFieldset legend="Gender">
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <ReactRadio name="gender" value="male" labelText="Male" />
          <ReactRadio name="gender" value="female" labelText="Female" checked />
          <ReactRadio name="gender" value="other" labelText="Other" />
        </div>
      </ReactFieldset>

      <div className="mbe4">
        <h2>External Label Support</h2>
        <p className="mbs2 mbe3">
          Radio buttons support optional external labels, helper text, and error messages for
          validation feedback.
        </p>
      </div>
      <div className="stacked mbe4">
        <ReactRadio
          name="shipping-method"
          value="standard"
          label="Shipping Method"
          labelText="Standard Shipping (5-7 days)"
          checked
          className="mbe2"
        />

        <ReactRadio
          name="payment-method"
          value="credit"
          label="Payment Method"
          labelText="Credit Card"
          helpText="We accept all major credit cards"
          checked
          className="mbe2"
        />

        <ReactRadio
          name="terms-agreement"
          value="agreed"
          label="Terms and Conditions"
          labelText="I agree to the terms and conditions"
          required
          helpText="Please read and accept our terms to proceed"
          className="mbe2"
        />

        <ReactRadio
          name="age-verify"
          value="confirmed"
          label="Age Verification"
          labelText="I confirm I am 18 years or older"
          required
          invalid
          errorMessage="You must confirm you are 18 or older to proceed"
          className="mbe2"
        />
      </div>

      <div className="mbe4">
        <h2>CSS Shadow Parts Customization</h2>
        <p className="mbs2 mbe3">
          Use CSS Shadow Parts to customize the component's appearance.
        </p>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactRadio
          name="custom"
          value="1"
          labelText="Customized indicator"
          checked
          className="custom-radio-1"
        />
      </div>
    </section>
  );
}
`,hs=JSON.parse('{"title":"Radio","description":"","frontmatter":{},"headers":[],"relativePath":"components/radio.md","filePath":"components/radio.md"}'),W={name:"components/radio.md"},ps=Object.assign(W,{setup(p){return(e,n)=>(r(),F("div",null,[n[1]||(n[1]=s("h1",{id:"radio",tabindex:"-1"},[d("Radio "),s("a",{class:"header-anchor",href:"#radio","aria-label":'Permalink to "Radio"'},"​")],-1)),i(g),n[2]||(n[2]=s("p",null,"Radio button allows a user to select a single option from a set of mutually exclusive choices. It's ideal for forms where only one selection is permitted.",-1)),n[3]||(n[3]=s("h2",{id:"examples",tabindex:"-1"},[d("Examples "),s("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),i(b,{component:"radio","vue-code":h(O),"lit-code":h(I),"react-code":h(G)},{vue:t(()=>[i(N)]),lit:t(()=>[...n[0]||(n[0]=[s("radio-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),n[4]||(n[4]=o(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The framework examples below <code>import</code> AgnosticUI as an <code>npm</code> package. Alternatively, you can use the <strong>CLI for complete control, AI/LLM visibility, and full code ownership</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> init</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> --framework</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> FRAMEWORK</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;"> # react, vue, lit, svelte, etc.</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> add</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> Radio</span></span></code></pre></div><p>The CLI copies source code directly into your project, giving you full visibility and control. After running <code>npx ag add</code>, you&#39;ll receive exact import instructions.</p></div><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueFieldset</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> legend</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Choose your plan&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueRadio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;plan&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;free&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Free Plan&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueRadio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;plan&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;pro&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Pro Plan&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        :checked</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;true&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueRadio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;plan&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;enterprise&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Enterprise Plan&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueFieldset</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueFieldset</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> legend</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Select framework&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueRadio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;framework&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;react&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        theme</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;React&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueRadio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;framework&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;vue&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        theme</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Vue&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        :checked</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;true&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueRadio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;framework&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;angular&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        theme</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Angular&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueFieldset</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueFieldset</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> legend</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Gender&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;display: flex; gap: 1.5rem;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueRadio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;gender&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;male&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Male&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueRadio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;gender&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;female&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Female&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          :checked</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;true&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueRadio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;gender&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;other&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Other&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueFieldset</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ts&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { defineComponent } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;vue&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { VueRadio } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/radio/vue&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { VueFieldset } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/fieldset/vue&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> defineComponent</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">({</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  components: { VueRadio, VueFieldset }</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">})</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ReactRadio } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/radio/react&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ReactFieldset } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/fieldset/react&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> function</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> Example</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactFieldset</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> legend</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Choose your plan&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactRadio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          name</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;plan&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;free&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          labelText</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Free Plan&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactRadio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          name</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;plan&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;pro&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          labelText</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Pro Plan&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          checked</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactRadio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          name</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;plan&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;enterprise&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          labelText</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Enterprise Plan&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactFieldset</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactFieldset</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> legend</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Select framework&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactRadio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          name</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;framework&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;react&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          theme</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          labelText</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;React&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactRadio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          name</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;framework&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;vue&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          theme</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          labelText</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Vue&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          checked</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactRadio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          name</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;framework&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;angular&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          theme</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          labelText</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Angular&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactFieldset</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactFieldset</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> legend</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Gender&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{ display: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;flex&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, gap: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;1.5rem&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactRadio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">            name</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;gender&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">            value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;male&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">            labelText</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Male&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactRadio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">            name</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;gender&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">            value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;female&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">            labelText</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Female&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">            checked</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactRadio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">            name</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;gender&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">            value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;other&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">            labelText</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Other&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactFieldset</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></details><details class="details custom-block"><summary>Lit (Web Components)</summary><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;module&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/radio&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/fieldset&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-fieldset</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> legend</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Choose your plan&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-radio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;plan&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;free&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Free Plan&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-radio</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-radio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;plan&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;pro&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Pro Plan&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      checked</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-radio</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-radio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;plan&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;enterprise&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Enterprise Plan&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-radio</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-fieldset</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-fieldset</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> legend</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Select framework&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-radio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;framework&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;react&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      theme</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;React&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-radio</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-radio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;framework&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;vue&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      theme</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Vue&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      checked</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-radio</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-radio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;framework&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;angular&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      theme</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Angular&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-radio</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-fieldset</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-fieldset</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> legend</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Gender&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;display: flex; gap: 1.5rem;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-radio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;gender&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;male&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Male&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-radio</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-radio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;gender&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;female&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Female&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        checked</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-radio</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-radio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;gender&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;other&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Other&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-radio</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-fieldset</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><h2 id="label-position" tabindex="-1">Label Position <a class="header-anchor" href="#label-position" aria-label="Permalink to &quot;Label Position&quot;">​</a></h2><p>The <code>labelPosition</code> prop controls where the internal label text appears relative to the radio button. This affects the <code>labelText</code> (the label that wraps the radio), not the external <code>label</code> prop.</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueRadio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;option&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;1&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Label on end (default)&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  label-position</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;end&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;VueRadio</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  name=&quot;option&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  value=&quot;2&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  label-text=&quot;Label on start&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  label-position=&quot;start&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">/&gt;</span></span></code></pre></div><h2 id="external-label-support" tabindex="-1">External Label Support <a class="header-anchor" href="#external-label-support" aria-label="Permalink to &quot;External Label Support&quot;">​</a></h2><p>Radio buttons now support optional external labels, helper text, and error messages using the shared form control utilities. This is useful for:</p><ul><li>Radio groups that need a descriptive label above them</li><li>Standalone radios that require validation feedback</li><li>Forms where consistent label/helper/error patterns are needed</li></ul><h3 id="basic-external-label" tabindex="-1">Basic External Label <a class="header-anchor" href="#basic-external-label" aria-label="Permalink to &quot;Basic External Label&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueRadio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;shipping&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;standard&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Shipping Method&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Standard Shipping (5-7 days)&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  :</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">checked</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">true</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">/&gt;</span></span></code></pre></div><h3 id="with-helper-text" tabindex="-1">With Helper Text <a class="header-anchor" href="#with-helper-text" aria-label="Permalink to &quot;With Helper Text&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueRadio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;payment&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;credit&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Payment Method&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Credit Card&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  help-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;We accept all major credit cards&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">/&gt;</span></span></code></pre></div><h3 id="with-validation" tabindex="-1">With Validation <a class="header-anchor" href="#with-validation" aria-label="Permalink to &quot;With Validation&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueRadio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;terms&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;agreed&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Terms and Conditions&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;I agree to the terms and conditions&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  :</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">required</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">true</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  :</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">invalid</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">!</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">termsAccepted</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  error-message</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;You must accept the terms to proceed&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">/&gt;</span></span></code></pre></div><h3 id="radio-groups-with-external-label" tabindex="-1">Radio Groups with External Label <a class="header-anchor" href="#radio-groups-with-external-label" aria-label="Permalink to &quot;Radio Groups with External Label&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueRadio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;notifications&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;email&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Notification Preferences&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Email notifications&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      help-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Choose how you&#39;d like to be notified&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :checked</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;true&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueRadio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;notifications&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;sms&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;SMS notifications&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueRadio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;notifications&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;push&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Push notifications&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div><p><strong>Note:</strong> The <code>label</code> prop creates an external label above the radio, while <code>labelText</code> is the internal label that wraps the radio itself. Most radios use only <code>labelText</code>, but external labels are useful for groups or when you need validation feedback.</p><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>name</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Name attribute for the radio input (required for grouping - all radios with the same name are mutually exclusive)</td></tr><tr><td><code>value</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Value of the radio input</td></tr><tr><td><code>checked</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Whether the radio is checked</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Whether the radio is disabled</td></tr><tr><td><code>size</code></td><td><code>&#39;small&#39; | &#39;medium&#39; | &#39;large&#39;</code></td><td><code>&#39;medium&#39;</code></td><td>Size of the radio button</td></tr><tr><td><code>theme</code></td><td><code>&#39;default&#39; | &#39;primary&#39; | &#39;success&#39; | &#39;monochrome&#39;</code></td><td><code>&#39;primary&#39;</code></td><td>Color theme variant (default=blue alias to primary, primary=blue, success=green, monochrome=black/white)</td></tr><tr><td><code>labelText</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Label text for the radio button (internal label that wraps the radio)</td></tr><tr><td><code>labelPosition</code></td><td><code>&#39;end&#39; | &#39;start&#39;</code></td><td><code>&#39;end&#39;</code></td><td>Position of labelText relative to radio button (<code>end</code> = after radio, <code>start</code> = before radio)</td></tr><tr><td><code>label</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Optional external label displayed above the radio (useful for groups or standalone with context)</td></tr><tr><td><code>labelHidden</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Visually hides the external label while keeping it accessible to screen readers</td></tr><tr><td><code>noLabel</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Completely removes the external label element</td></tr><tr><td><code>required</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Marks the radio as required. Displays an asterisk (*) after the external label</td></tr><tr><td><code>invalid</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Marks the radio as invalid. Sets aria-invalid and can display error message</td></tr><tr><td><code>errorMessage</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Error message displayed when invalid. Linked via aria-describedby</td></tr><tr><td><code>helpText</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Helper text displayed below the radio. Linked via aria-describedby</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Event</th><th>Framework</th><th>Detail</th><th>Description</th></tr></thead><tbody><tr><td><code>click</code></td><td>Vue: <code>@click</code><br>React: <code>onClick</code><br>Lit: <code>@click</code></td><td><code>MouseEvent</code></td><td>Fired when the radio is clicked.</td></tr><tr><td><code>change</code></td><td>Vue: <code>@change</code><br>React: <code>onChange</code><br>Lit: <code>@change</code></td><td><code>{ checked: boolean, value: string, name: string }</code></td><td>Fired when radio selection changes. Contains the checked state and form data.</td></tr></tbody></table><p><strong>Note:</strong> The Radio component supports <strong>dual-dispatch event propagation</strong>: it dispatches both DOM CustomEvents (usable with <code>addEventListener</code>) and invokes callback props (<code>.onChange</code>), giving you flexibility in how you handle events.</p><h3 id="event-usage-examples" tabindex="-1">Event Usage Examples <a class="header-anchor" href="#event-usage-examples" aria-label="Permalink to &quot;Event Usage Examples&quot;">​</a></h3><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueRadio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;color&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;red&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Red&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      @change</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;handleChange&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueRadio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;color&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;blue&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Blue&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      v-model:checked</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;selectedColor&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueRadio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;color&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;green&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Green&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      v-model:checked</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;selectedColor&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      @change</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;handleColorChange&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;display: flex; flex-direction: column; gap: 0.5rem;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueRadio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        v-for</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;option in options&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        :key</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;option.value&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;options&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        :value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;option.value&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        :label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;option.label&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        :checked</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;selectedOption === option.value&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        @change</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;(detail) =&gt; selectedOption = detail.value&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> setup</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ts&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ref } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;vue&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { VueRadio } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/radio/vue&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> selectedColor</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> ref</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;blue&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> selectedOption</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> ref</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;option1&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> options</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  { value: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;option1&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Option 1&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  { value: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;option2&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Option 2&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  { value: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;option3&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Option 3&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> handleChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">detail</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Radio changed:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, detail);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> handleColorChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">detail</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Color selected:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, detail.value);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">};</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { useState } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ReactRadio } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/radio/react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> function</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> Example</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">selectedColor</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">setSelectedColor</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;red&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactRadio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        name</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;color&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;red&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        labelText</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Red&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        checked</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">selectedColor </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">===</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;red&quot;</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Radio changed:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e.detail);</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">          setSelectedColor</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(e.detail.value);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{ display: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;flex&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, flexDirection: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;column&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, gap: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;0.5rem&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactRadio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          name</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;color&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;red&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          labelText</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Red&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          checked</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">selectedColor </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">===</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;red&quot;</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          onChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setSelectedColor</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(e.detail.value)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactRadio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          name</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;color&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;blue&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          labelText</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Blue&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          checked</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">selectedColor </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">===</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;blue&quot;</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          onChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setSelectedColor</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(e.detail.value)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactRadio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          name</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;color&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;green&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          labelText</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Green&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          checked</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">selectedColor </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">===</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;green&quot;</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          onChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setSelectedColor</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(e.detail.value)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactRadio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        name</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;notification&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;enabled&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        labelText</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Enable notifications&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onClick</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Clicked:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Changed:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e.detail)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></details><details class="details custom-block"><summary>Lit (Web Components)</summary><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;module&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/radio&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> radio1</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> document.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#radio1&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  radio1.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;change&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Event listener:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e.detail);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> radio2</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> document.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#radio2&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  radio2.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">onChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Callback prop:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e.detail);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> radio3</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> document.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#radio3&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  radio3.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;change&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;DOM event:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e.detail);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  });</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  radio3.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">onChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Callback also fired:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e.detail);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> radio4</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> document.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#radio4&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  radio4.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;click&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Click event:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  });</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  radio4.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">onClick</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Click callback:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> radios</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> document.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelectorAll</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ag-radio[name=</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">\\&quot;</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">group</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">\\&quot;</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">]&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  radios.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">forEach</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">radio</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    radio.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;change&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Selected:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e.detail.value);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    });</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  });</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-radio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    id</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;radio1&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;example1&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;1&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;addEventListener pattern&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-radio</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-radio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    id</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;radio2&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;example2&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;2&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Callback prop pattern&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-radio</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-radio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    id</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;radio3&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;example3&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;3&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Dual-dispatch (both patterns)&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-radio</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-radio</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    id</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;radio4&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;example4&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;4&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;With click handlers&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-radio</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;display: flex; flex-direction: column; gap: 0.5rem;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-radio</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;group&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;a&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Option A&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-radio</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-radio</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;group&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;b&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Option B&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-radio</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-radio</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;group&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;c&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Option C&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-radio</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><p><strong>Type:</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> type</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> RadioChangeEvent</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> CustomEvent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">RadioChangeEventDetail</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> interface</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> RadioChangeEventDetail</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  checked</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> boolean</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> string</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  name</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> string</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><h2 id="css-shadow-parts" tabindex="-1">CSS Shadow Parts <a class="header-anchor" href="#css-shadow-parts" aria-label="Permalink to &quot;CSS Shadow Parts&quot;">​</a></h2><p>Shadow Parts allow you to style internal elements of the radio from outside the shadow DOM using the <code>::part()</code> CSS selector.</p><table class="ag-table ag-table--striped"><thead><tr><th>Part</th><th>Description</th></tr></thead><tbody><tr><td><code>ag-radio-wrapper</code></td><td>The outer wrapper label element</td></tr><tr><td><code>ag-radio-input</code></td><td>The native radio input element (visually hidden)</td></tr><tr><td><code>ag-radio-indicator</code></td><td>The custom visual radio indicator (circle)</td></tr><tr><td><code>ag-radio-label</code></td><td>The label text span</td></tr></tbody></table><h3 id="customization-examples" tabindex="-1">Customization Examples <a class="header-anchor" href="#customization-examples" aria-label="Permalink to &quot;Customization Examples&quot;">​</a></h3><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-radio</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-radio-indicator</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  transform</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">scale</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">1.3</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border-width</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">3</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-radio</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-radio-wrapper</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  padding</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.5</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#6366f1</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border-radius</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#6366f1</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-radio</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-radio-label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  font-weight</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">600</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  color</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#12623e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><h2 id="accessibility" tabindex="-1">Accessibility <a class="header-anchor" href="#accessibility" aria-label="Permalink to &quot;Accessibility&quot;">​</a></h2><ul><li>Radio uses native <code>&lt;input type=&quot;radio&quot;&gt;</code> for proper form integration</li><li>Proper <code>aria-checked</code> state for assistive technologies</li><li>Keyboard navigable (Tab to focus, Arrow keys to move between radios in a group, Space to select)</li><li>Focus visible with customizable focus ring using design tokens</li><li>Always wrap radio groups with AgFieldset (ag-fieldset / ReactFieldset / VueFieldset) for proper semantic grouping and screen reader support</li><li>Disabled state prevents interaction and is communicated to assistive technologies</li></ul><h2 id="theme-support" tabindex="-1">Theme Support <a class="header-anchor" href="#theme-support" aria-label="Permalink to &quot;Theme Support&quot;">​</a></h2><p>All themes automatically support dark mode through CSS design tokens:</p><ul><li><strong>Default theme</strong>: Alias to primary theme - uses <code>--ag-primary</code> (blue) which adapts to dark mode</li><li><strong>Primary theme</strong>: Uses <code>--ag-primary</code> (blue) which adapts to dark mode</li><li><strong>Success theme</strong>: Uses <code>--ag-success</code> (green) which adapts to dark mode</li><li><strong>Monochrome theme</strong>: Uses <code>--ag-black</code> and <code>--ag-white</code> which invert in dark mode</li></ul><h2 id="best-practices" tabindex="-1">Best Practices <a class="header-anchor" href="#best-practices" aria-label="Permalink to &quot;Best Practices&quot;">​</a></h2><ul><li><strong>Use <code>name</code> attribute</strong>: All radio buttons in a group must have the same <code>name</code> attribute to ensure mutual exclusivity</li><li><strong>Always use AgFieldset</strong>: Wrap radio groups with AgFieldset (ag-fieldset / ReactFieldset / VueFieldset) with a descriptive legend for accessibility</li><li><strong>Pre-select a default</strong>: For better UX, always have one radio pre-selected in a required group</li><li><strong>Use checkboxes for multiple selections</strong>: If users can select multiple options, use checkboxes instead</li><li><strong>Inline vs. stacked</strong>: Use inline layout (flex/horizontal) for 2-3 short options; use stacked (vertical) for longer labels or more options</li></ul><h2 id="notes" tabindex="-1">Notes <a class="header-anchor" href="#notes" aria-label="Permalink to &quot;Notes&quot;">​</a></h2><ul><li><strong>Mutual exclusivity</strong>: Only one radio in a group (same <code>name</code>) can be selected at a time</li><li><strong>Form integration</strong>: Radio buttons work seamlessly with standard HTML forms</li><li><strong>Lit</strong>: Properties can be set via attributes or via property binding (e.g., <code>.checked=\${true}</code>)</li><li>All three implementations (Lit, React, Vue) share the same underlying styles and behavior</li></ul>`,45))]))}});export{hs as __pageData,ps as default};
