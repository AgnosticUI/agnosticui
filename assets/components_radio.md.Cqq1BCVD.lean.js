import{A as g}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{g as c}from"./chunks/VueRadio.vue_vue_type_script_setup_true_lang-DxNhH12d.CoE-Bcbf.js";import{_ as y}from"./chunks/VueFieldset.CM_BZncW.js";import{d as u,_ as m,C as k,c as F,o as r,j as s,G as i,ae as o,w as t,a as d,k as h}from"./chunks/framework.NAAYCHZu.js";import{F as b}from"./chunks/FrameworkExample.Vj5DwYx5.js";import{a as C,x as v}from"./chunks/Button.Bujdzq23.js";import"./chunks/createLucideIcon.B61Wqv9x.js";import"./chunks/form-control-utils.LZkauYsx.js";import"./chunks/Icon.odq14qpJ.js";import"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";const E=u({name:"RadioExamples",components:{VueRadio:c,VueFieldset:y}}),B={style:{display:"flex","flex-direction":"column",gap:"0.75rem"}},D={class:"mbe4",style:{display:"flex","flex-direction":"column",gap:"1.5rem"}},A={style:{display:"flex","flex-direction":"column",gap:"0.75rem"}},q={style:{display:"flex","flex-direction":"column",gap:"0.75rem"}},x={class:"mbe4",style:{display:"flex",gap:"2rem","align-items":"center"}},f={class:"mbe4",style:{display:"flex","flex-direction":"column",gap:"1.5rem"}},R={style:{display:"flex",gap:"1rem"}},T={style:{display:"flex",gap:"1rem"}},S={style:{display:"flex",gap:"1rem"}},w={style:{display:"flex",gap:"1rem"}},V={class:"mbe4",style:{display:"flex",gap:"1rem"}},$={style:{display:"flex","flex-direction":"column",gap:"0.75rem"}},P={class:"mbe4",style:{display:"flex","flex-direction":"column",gap:"1rem"}},z={style:{display:"flex",gap:"1.5rem"}},L={class:"stacked mbe4"},_={class:"stacked-mobile mbe4"};function M(p,e,n,j,H,K){const a=k("VueRadio"),l=k("VueFieldset");return r(),F("section",null,[e[0]||(e[0]=s("div",{class:"mbe4"},[s("h2",null,"Default Radio"),s("p",{class:"mbs2 mbe3"},"Basic radio buttons with default theme (primary)")],-1)),i(l,{legend:"Choose your plan"},{default:t(()=>[s("div",B,[i(a,{name:"plan",value:"free","label-text":"Free Plan"}),i(a,{name:"plan",value:"pro","label-text":"Pro Plan",checked:!0}),i(a,{name:"plan",value:"enterprise","label-text":"Enterprise Plan"})])]),_:1}),e[1]||(e[1]=s("div",{class:"mbe4"},[s("h2",null,"Radio Group"),s("p",{class:"mbs2 mbe3"},"Multiple radio button groups")],-1)),s("div",D,[i(l,{legend:"Select Framework"},{default:t(()=>[s("div",A,[i(a,{name:"framework",value:"react","label-text":"React"}),i(a,{name:"framework",value:"vue","label-text":"Vue",checked:!0}),i(a,{name:"framework",value:"angular","label-text":"Angular"}),i(a,{name:"framework",value:"svelte","label-text":"Svelte"})])]),_:1}),i(l,{legend:"Deployment Environment"},{default:t(()=>[s("div",q,[i(a,{name:"environment",value:"development","label-text":"Development",checked:!0}),i(a,{name:"environment",value:"staging","label-text":"Staging"}),i(a,{name:"environment",value:"production","label-text":"Production"})])]),_:1})]),e[2]||(e[2]=s("div",{class:"mbe4"},[s("h2",null,"Size Variants"),s("p",{class:"mbs2 mbe3"},"Three size options: small, medium (default), and large")],-1)),s("div",x,[i(a,{name:"size-demo",value:"small",size:"small","label-text":"Small",checked:!0}),i(a,{name:"size-demo2",value:"medium",size:"medium","label-text":"Medium",checked:!0}),i(a,{name:"size-demo3",value:"large",size:"large","label-text":"Large",checked:!0})]),e[3]||(e[3]=s("div",{class:"mbe4"},[s("h2",null,"Theme Variants"),s("p",{class:"mbs2 mbe3"},"Choose from default (green), primary (blue), or monochrome (black/white) themes")],-1)),s("div",f,[i(l,{legend:"Default Theme (Blue)"},{default:t(()=>[s("div",R,[i(a,{name:"theme-default",value:"1",theme:"default","label-text":"Unchecked"}),i(a,{name:"theme-default",value:"2",theme:"default","label-text":"Checked",checked:!0})])]),_:1}),i(l,{legend:"Primary Theme (Blue)"},{default:t(()=>[s("div",T,[i(a,{name:"theme-primary",value:"1",theme:"primary","label-text":"Unchecked"}),i(a,{name:"theme-primary",value:"2",theme:"primary","label-text":"Checked",checked:!0})])]),_:1}),i(l,{legend:"Success Theme (Green)"},{default:t(()=>[s("div",S,[i(a,{name:"theme-success",value:"1",theme:"success","label-text":"Unchecked"}),i(a,{name:"theme-success",value:"2",theme:"success","label-text":"Checked",checked:!0})])]),_:1}),i(l,{legend:"Monochrome Theme (Black/White)"},{default:t(()=>[s("div",w,[i(a,{name:"theme-mono",value:"1",theme:"monochrome","label-text":"Unchecked"}),i(a,{name:"theme-mono",value:"2",theme:"monochrome","label-text":"Checked",checked:!0})])]),_:1})]),e[4]||(e[4]=s("div",{class:"mbe4"},[s("h2",null,"Disabled State"),s("p",{class:"mbs2 mbe3"},"Radio buttons can be disabled to prevent interaction")],-1)),s("div",V,[i(a,{name:"disabled-demo",value:"1","label-text":"Disabled Unchecked",disabled:!0}),i(a,{name:"disabled-demo2",value:"2","label-text":"Disabled Checked",checked:!0,disabled:!0})]),e[5]||(e[5]=o("",1)),i(l,{legend:"Select Shipping Method"},{default:t(()=>[s("div",$,[i(a,{name:"keyboard-nav-demo",value:"standard","label-text":"Standard Shipping - $5.99",checked:!0}),i(a,{name:"keyboard-nav-demo",value:"express","label-text":"Express Shipping - Currently Unavailable",disabled:!0}),i(a,{name:"keyboard-nav-demo",value:"overnight","label-text":"Overnight Shipping - $24.99"})])]),_:1}),e[6]||(e[6]=s("div",{class:"mbe4"},[s("h2",null,"Label Position"),s("p",{class:"mbs2 mbe3"},"Labels can be positioned at the end (default) or start of the radio button")],-1)),s("div",P,[i(a,{name:"position-demo",value:"1","label-text":"Label on End (Default)","label-position":"end",checked:!0}),i(a,{name:"position-demo2",value:"2","label-text":"Label on Start","label-position":"start",checked:!0})]),e[7]||(e[7]=s("div",{class:"mbe4"},[s("h2",null,"Inline Layout"),s("p",{class:"mbs2 mbe3"},"Radio buttons can be laid out horizontally for compact forms")],-1)),i(l,{legend:"Gender"},{default:t(()=>[s("div",z,[i(a,{name:"gender",value:"male","label-text":"Male"}),i(a,{name:"gender",value:"female","label-text":"Female",checked:!0}),i(a,{name:"gender",value:"other","label-text":"Other"})])]),_:1}),e[8]||(e[8]=s("div",{class:"mbe4"},[s("h2",null,"External Label Support"),s("p",{class:"mbs2 mbe3"}," Radio buttons support optional external labels, helper text, and error messages for validation feedback. ")],-1)),s("div",L,[i(a,{name:"shipping-method",value:"standard",label:"Shipping Method","label-text":"Standard Shipping (5-7 days)",checked:!0,class:"mbe2"}),i(a,{name:"payment-method",value:"credit",label:"Payment Method","label-text":"Credit Card","help-text":"We accept all major credit cards",checked:!0,class:"mbe2"}),i(a,{name:"terms-agreement",value:"agreed",label:"Terms and Conditions","label-text":"I agree to the terms and conditions",required:!0,"help-text":"Please read and accept our terms to proceed",class:"mbe2"}),i(a,{name:"age-verify",value:"confirmed",label:"Age Verification","label-text":"I confirm I am 18 years or older",required:!0,invalid:!0,"error-message":"You must confirm you are 18 or older to proceed",class:"mbe2"})]),e[9]||(e[9]=s("div",{class:"mbe4"},[s("h2",null,"CSS Shadow Parts Customization"),s("p",{class:"mbs2 mbe3"}," Use CSS Shadow Parts to customize the component's appearance. ")],-1)),s("div",_,[i(a,{name:"custom",value:"1","label-text":"Customized indicator",checked:!0,class:"custom-radio-1"})])])}const N=m(E,[["render",M]]);class U extends C{createRenderRoot(){return this}render(){return v`
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
`,ts=JSON.parse('{"title":"Radio","description":"","frontmatter":{},"headers":[],"relativePath":"components/radio.md","filePath":"components/radio.md"}'),W={name:"components/radio.md"},ls=Object.assign(W,{setup(p){return(e,n)=>(r(),F("div",null,[n[1]||(n[1]=s("h1",{id:"radio",tabindex:"-1"},[d("Radio "),s("a",{class:"header-anchor",href:"#radio","aria-label":'Permalink to "Radio"'},"​")],-1)),i(g),n[2]||(n[2]=s("p",null,"Radio button allows a user to select a single option from a set of mutually exclusive choices. It's ideal for forms where only one selection is permitted.",-1)),n[3]||(n[3]=s("h2",{id:"examples",tabindex:"-1"},[d("Examples "),s("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),i(b,{component:"radio","vue-code":h(O),"lit-code":h(I),"react-code":h(G)},{vue:t(()=>[i(N)]),lit:t(()=>[...n[0]||(n[0]=[s("radio-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),n[4]||(n[4]=o("",45))]))}});export{ts as __pageData,ls as default};
