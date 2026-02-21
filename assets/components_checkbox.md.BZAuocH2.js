import{A as c}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{k as o}from"./chunks/VueCheckbox.vue_vue_type_script_setup_true_lang-VtQfJ-6f.BCEVdEh6.js";import{_ as g}from"./chunks/VueFieldset.Dl_uy5DJ.js";import{d as m,_ as u,C as d,c as F,o as r,j as s,G as i,w as t,a as h,ae as y,k}from"./chunks/framework.NAAYCHZu.js";import{F as b}from"./chunks/FrameworkExample.Cm-JbUj-.js";import{a as x,x as C}from"./chunks/Button.CFkPNK98.js";import"./chunks/Checkbox.jvWE-CWV.js";import"./chunks/createLucideIcon.B61Wqv9x.js";import"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import"./chunks/state-CovhUvdr.DWhhlYib.js";import"./chunks/sdk.m.DhOmSlC9.js";import"./chunks/Icon.DjToxxjJ.js";import"./chunks/form-control-utils.CX0RHW4_.js";const v=m({name:"CheckboxExamples",components:{VueCheckbox:o,VueFieldset:g}}),B={class:"stacked-mobile mbe4"},E={style:{display:"flex","flex-direction":"column",gap:"0.75rem"}},D={class:"mbe4",style:{display:"flex","flex-direction":"column",gap:"0.75rem"}},q={style:{"padding-left":"1.5rem",display:"flex","flex-direction":"column",gap:"0.5rem"}},A={class:"mbe4",style:{display:"flex",gap:"2rem","align-items":"center"}},f={class:"mbe4",style:{display:"flex","flex-direction":"column",gap:"1.5rem"}},S={style:{display:"flex",gap:"1rem"}},T={style:{display:"flex",gap:"1rem"}},w={style:{display:"flex",gap:"1rem"}},V={style:{display:"flex",gap:"1rem"}},I={class:"mbe4",style:{display:"flex",gap:"1rem"}},R={class:"mbe4",style:{display:"flex","flex-direction":"column",gap:"1rem"}},L={class:"stacked mbe4"},z={class:"stacked-mobile mbe4"};function P(p,e,n,Y,H,O){const a=d("VueCheckbox"),l=d("VueFieldset");return r(),F("section",null,[e[0]||(e[0]=s("div",{class:"mbe4"},[s("h2",null,"Default Checkbox"),s("p",{class:"mbs2 mbe3"},"Basic checkbox with default theme (primary)")],-1)),s("div",B,[i(a,{name:"example",value:"1","label-text":"I agree to the terms and conditions"}),i(a,{name:"example",value:"2","label-text":"Subscribe to newsletter",checked:!0})]),e[1]||(e[1]=s("div",{class:"mbe4"},[s("h2",null,"Checkbox Group"),s("p",{class:"mbs2 mbe3"},"Multiple checkboxes grouped together with a fieldset")],-1)),i(l,{legend:"Select your interests",class:"mbe4"},{default:t(()=>[s("div",E,[i(a,{name:"interests",value:"tech","label-text":"Technology",checked:!0}),i(a,{name:"interests",value:"design","label-text":"Design"}),i(a,{name:"interests",value:"business","label-text":"Business",checked:!0}),i(a,{name:"interests",value:"science","label-text":"Science"})])]),_:1}),e[2]||(e[2]=s("div",{class:"mbe4"},[s("h2",null,"Indeterminate State"),s("p",{class:"mbs2 mbe3"},[h('Used for "select all" scenarios where some items are selected. Simply supply the '),s("i",null,"indeterminate"),h(" attribute to activate.")])],-1)),s("div",D,[i(a,{name:"select-all",value:"all",indeterminate:!0,"label-text":"Select All (Some selected)"}),s("div",q,[i(a,{name:"items",value:"item1","label-text":"Item 1",checked:!0}),i(a,{name:"items",value:"item2","label-text":"Item 2"}),i(a,{name:"items",value:"item3","label-text":"Item 3",checked:!0})])]),e[3]||(e[3]=s("div",{class:"mbe4"},[s("h2",null,"Size Variants"),s("p",{class:"mbs2 mbe3"},"Three size options: small, medium (default), and large")],-1)),s("div",A,[i(a,{name:"size",value:"small",size:"small","label-text":"Small",checked:!0}),i(a,{name:"size",value:"medium",size:"medium","label-text":"Medium",checked:!0}),i(a,{name:"size",value:"large",size:"large","label-text":"Large",checked:!0})]),e[4]||(e[4]=s("div",{class:"mbe4"},[s("h2",null,"Theme Variants"),s("p",{class:"mbs2 mbe3"},"Choose from default (green), primary (blue), or monochrome (black/white) themes")],-1)),s("div",f,[i(l,{legend:"Default Theme (Blue)"},{default:t(()=>[s("div",S,[i(a,{name:"theme-default",value:"1",theme:"default","label-text":"Unchecked"}),i(a,{name:"theme-default",value:"2",theme:"default","label-text":"Checked",checked:!0}),i(a,{name:"theme-default",value:"3",theme:"default","label-text":"Indeterminate",indeterminate:!0})])]),_:1}),i(l,{legend:"Primary Theme (Blue)"},{default:t(()=>[s("div",T,[i(a,{name:"theme-primary",value:"1",theme:"primary","label-text":"Unchecked"}),i(a,{name:"theme-primary",value:"2",theme:"primary","label-text":"Checked",checked:!0}),i(a,{name:"theme-primary",value:"3",theme:"primary","label-text":"Indeterminate",indeterminate:!0})])]),_:1}),i(l,{legend:"Success Theme (Green)"},{default:t(()=>[s("div",w,[i(a,{name:"theme-success",value:"1",theme:"success","label-text":"Unchecked"}),i(a,{name:"theme-success",value:"2",theme:"success","label-text":"Checked",checked:!0}),i(a,{name:"theme-success",value:"3",theme:"success","label-text":"Indeterminate",indeterminate:!0})])]),_:1}),i(l,{legend:"Monochrome Theme (Black/White)"},{default:t(()=>[s("div",V,[i(a,{name:"theme-mono",value:"1",theme:"monochrome","label-text":"Unchecked"}),i(a,{name:"theme-mono",value:"2",theme:"monochrome","label-text":"Checked",checked:!0}),i(a,{name:"theme-mono",value:"3",theme:"monochrome","label-text":"Indeterminate",indeterminate:!0})])]),_:1})]),e[5]||(e[5]=s("div",{class:"mbe4"},[s("h2",null,"Disabled State"),s("p",{class:"mbs2 mbe3"},"Checkboxes can be disabled to prevent interaction")],-1)),s("div",I,[i(a,{name:"disabled",value:"1","label-text":"Disabled Unchecked",disabled:!0}),i(a,{name:"disabled",value:"2","label-text":"Disabled Checked",checked:!0,disabled:!0}),i(a,{name:"disabled",value:"3","label-text":"Disabled Indeterminate",indeterminate:!0,disabled:!0})]),e[6]||(e[6]=s("div",{class:"mbe4"},[s("h2",null,"Label Position"),s("p",{class:"mbs2 mbe3"},"Labels can be positioned at the end (default) or start of the checkbox")],-1)),s("div",R,[i(a,{name:"position",value:"1","label-text":"Label on End (Default)","label-position":"end",checked:!0}),i(a,{name:"position",value:"2","label-text":"Label on Start","label-position":"start",checked:!0})]),e[7]||(e[7]=s("div",{class:"mbe4"},[s("h2",null,"External Label Support"),s("p",{class:"mbs2 mbe3"}," Checkboxes support optional external labels, helper text, and error messages for validation feedback. ")],-1)),s("div",L,[i(a,{name:"terms",value:"agreed",label:"Terms and Conditions","label-text":"I agree to the terms and conditions",class:"mbe2"}),i(a,{name:"newsletter",value:"subscribed",label:"Newsletter Subscription","label-text":"Send me weekly updates","help-text":"You can unsubscribe at any time",class:"mbe2"}),i(a,{name:"required-check",value:"yes",label:"Required Agreement","label-text":"I acknowledge I have read the privacy policy",required:!0,"help-text":"This field is required to proceed",class:"mbe2"}),i(a,{name:"age-verify",value:"yes",label:"Age Verification","label-text":"I confirm I am 18 years or older",required:!0,invalid:!0,"error-message":"You must confirm you are 18 or older",class:"mbe2"})]),e[8]||(e[8]=s("div",{class:"mbe4"},[s("h2",null,"CSS Shadow Parts Customization"),s("p",{class:"mbs2 mbe3"}," Use CSS Shadow Parts to customize the component's appearance. ")],-1)),s("div",z,[i(a,{name:"custom",value:"1","label-text":"Customized with rounded indicator",checked:!0,class:"custom-checkbox-1"}),i(a,{name:"custom",value:"3","label-text":"Fully customized",checked:!0,theme:"primary",class:"custom-checkbox-3"})])])}const N=u(v,[["render",P]]);class U extends x{createRenderRoot(){return this}render(){return C`
      <section>
        <!-- Default Checkbox -->
        <div class="mbe4">
          <h2>Default Checkbox</h2>
          <p class="mbs2 mbe3">Basic checkbox with default theme (primary)</p>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-checkbox
            name="example"
            value="1"
            label-text="I agree to the terms and conditions"
          ></ag-checkbox>
          <ag-checkbox
            name="example"
            value="2"
            label-text="Subscribe to newsletter"
            checked
          ></ag-checkbox>
        </div>

        <!-- Checkbox Group -->
        <div class="mbe4">
          <h2>Checkbox Group</h2>
          <p class="mbs2 mbe3">Multiple checkboxes grouped together with a fieldset</p>
        </div>
        <ag-fieldset legend="Select your interests" class="mbe4">
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <ag-checkbox
              name="interests"
              value="tech"
              label-text="Technology"
              checked
            ></ag-checkbox>
            <ag-checkbox
              name="interests"
              value="design"
              label-text="Design"
            ></ag-checkbox>
            <ag-checkbox
              name="interests"
              value="business"
              label-text="Business"
              checked
            ></ag-checkbox>
            <ag-checkbox
              name="interests"
              value="science"
              label-text="Science"
            ></ag-checkbox>
          </div>
        </ag-fieldset>

        <!-- Indeterminate State -->
        <div class="mbe4">
          <h2>Indeterminate State</h2>
          <p class="mbs2 mbe3">Used for "select all" scenarios where some items are selected. Simply supply the <i>indeterminate</i> attribute to activate.</p>
        </div>
        <div class="mbe4" style="display: flex; flex-direction: column; gap: 0.75rem;">
          <ag-checkbox
            name="select-all"
            value="all"
            indeterminate
            label-text="Select All (Some selected)"
          ></ag-checkbox>
          <div style="padding-left: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem;">
            <ag-checkbox
              name="items"
              value="item1"
              label-text="Item 1"
              checked
            ></ag-checkbox>
            <ag-checkbox
              name="items"
              value="item2"
              label-text="Item 2"
            ></ag-checkbox>
            <ag-checkbox
              name="items"
              value="item3"
              label-text="Item 3"
              checked
            ></ag-checkbox>
          </div>
        </div>

        <!-- Size Variants -->
        <div class="mbe4">
          <h2>Size Variants</h2>
          <p class="mbs2 mbe3">Three size options: small, medium (default), and large</p>
        </div>
        <div class="mbe4" style="display: flex; gap: 2rem; align-items: center;">
          <ag-checkbox
            name="size"
            value="small"
            size="small"
            label-text="Small"
            checked
          ></ag-checkbox>
          <ag-checkbox
            name="size"
            value="medium"
            size="medium"
            label-text="Medium"
            checked
          ></ag-checkbox>
          <ag-checkbox
            name="size"
            value="large"
            size="large"
            label-text="Large"
            checked
          ></ag-checkbox>
        </div>

        <!-- Theme Variants -->
        <div class="mbe4">
          <h2>Theme Variants</h2>
          <p class="mbs2 mbe3">Choose from default (green), primary (blue), or monochrome (black/white) themes</p>
        </div>
        <div class="mbe4" style="display: flex; flex-direction: column; gap: 1.5rem;">
          <ag-fieldset legend="Default Theme (Blue)">
            <div style="display: flex; gap: 1rem;">
              <ag-checkbox
                name="theme-default"
                value="1"
                theme="default"
                label-text="Unchecked"
              ></ag-checkbox>
              <ag-checkbox
                name="theme-default"
                value="2"
                theme="default"
                label-text="Checked"
                checked
              ></ag-checkbox>
              <ag-checkbox
                name="theme-default"
                value="3"
                theme="default"
                label-text="Indeterminate"
                indeterminate
              ></ag-checkbox>
            </div>
          </ag-fieldset>
          <ag-fieldset legend="Primary Theme (Blue)">
            <div style="display: flex; gap: 1rem;">
              <ag-checkbox
                name="theme-primary"
                value="1"
                theme="primary"
                label-text="Unchecked"
              ></ag-checkbox>
              <ag-checkbox
                name="theme-primary"
                value="2"
                theme="primary"
                label-text="Checked"
                checked
              ></ag-checkbox>
              <ag-checkbox
                name="theme-primary"
                value="3"
                theme="primary"
                label-text="Indeterminate"
                indeterminate
              ></ag-checkbox>
            </div>
          </ag-fieldset>
          <ag-fieldset legend="Success Theme (Green)">
            <div style="display: flex; gap: 1rem;">
              <ag-checkbox
                name="theme-success"
                value="1"
                theme="success"
                label-text="Unchecked"
              ></ag-checkbox>
              <ag-checkbox
                name="theme-success"
                value="2"
                theme="success"
                label-text="Checked"
                checked
              ></ag-checkbox>
              <ag-checkbox
                name="theme-success"
                value="3"
                theme="success"
                label-text="Indeterminate"
                indeterminate
              ></ag-checkbox>
            </div>
          </ag-fieldset>
          <ag-fieldset legend="Monochrome Theme (Black/White)">
            <div style="display: flex; gap: 1rem;">
              <ag-checkbox
                name="theme-mono"
                value="1"
                theme="monochrome"
                label-text="Unchecked"
              ></ag-checkbox>
              <ag-checkbox
                name="theme-mono"
                value="2"
                theme="monochrome"
                label-text="Checked"
                checked
              ></ag-checkbox>
              <ag-checkbox
                name="theme-mono"
                value="3"
                theme="monochrome"
                label-text="Indeterminate"
                indeterminate
              ></ag-checkbox>
            </div>
          </ag-fieldset>
        </div>

        <!-- Disabled State -->
        <div class="mbe4">
          <h2>Disabled State</h2>
          <p class="mbs2 mbe3">Checkboxes can be disabled to prevent interaction</p>
        </div>
        <div class="mbe4" style="display: flex; gap: 1rem;">
          <ag-checkbox
            name="disabled"
            value="1"
            label-text="Disabled Unchecked"
            disabled
          ></ag-checkbox>
          <ag-checkbox
            name="disabled"
            value="2"
            label-text="Disabled Checked"
            checked
            disabled
          ></ag-checkbox>
          <ag-checkbox
            name="disabled"
            value="3"
            label-text="Disabled Indeterminate"
            indeterminate
            disabled
          ></ag-checkbox>
        </div>

        <!-- Label Position -->
        <div class="mbe4">
          <h2>Label Position</h2>
          <p class="mbs2 mbe3">Labels can be positioned at the end (default) or start of the checkbox</p>
        </div>
        <div class="mbe4" style="display: flex; flex-direction: column; gap: 1rem;">
          <ag-checkbox
            name="position"
            value="1"
            label-text="Label on End (Default)"
            label-position="end"
            checked
          ></ag-checkbox>
          <ag-checkbox
            name="position"
            value="2"
            label-text="Label on Start"
            label-position="start"
            checked
          ></ag-checkbox>
        </div>

        <!-- External Label Support -->
        <div class="mbe4">
          <h2>External Label Support</h2>
          <p class="mbs2 mbe3">
            Checkboxes support optional external labels, helper text, and error messages for validation feedback.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-checkbox
            name="terms"
            value="agreed"
            label="Terms and Conditions"
            label-text="I agree to the terms and conditions"
            class="mbe2"
          ></ag-checkbox>

          <ag-checkbox
            name="newsletter"
            value="subscribed"
            label="Newsletter Subscription"
            label-text="Send me weekly updates"
            help-text="You can unsubscribe at any time"
            class="mbe2"
          ></ag-checkbox>

          <ag-checkbox
            name="required-check"
            value="yes"
            label="Required Agreement"
            label-text="I acknowledge I have read the privacy policy"
            required
            help-text="This field is required to proceed"
            class="mbe2"
          ></ag-checkbox>

          <ag-checkbox
            name="age-verify"
            value="yes"
            label="Age Verification"
            label-text="I confirm I am 18 years or older"
            required
            invalid
            error-message="You must confirm you are 18 or older"
            class="mbe2"
          ></ag-checkbox>
        </div>

        <!-- CSS Shadow Parts Customization -->
        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the component's appearance.
          </p>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-checkbox
            name="custom"
            value="1"
            label-text="Customized with rounded indicator"
            checked
            class="custom-checkbox-1"
          ></ag-checkbox>
          <ag-checkbox
            name="custom"
            value="3"
            label-text="Fully customized"
            checked
            theme="primary"
            class="custom-checkbox-3"
          ></ag-checkbox>
        </div>
      </section>
    `}}customElements.define("checkbox-lit-examples",U);const _=`<template>
  <section>
    <div class="mbe4">
      <h2>Default Checkbox</h2>
      <p class="mbs2 mbe3">Basic checkbox with default theme (primary)</p>
    </div>
    <div class="stacked-mobile mbe4">
      <VueCheckbox
        name="example"
        value="1"
        label-text="I agree to the terms and conditions"
      />
      <VueCheckbox
        name="example"
        value="2"
        label-text="Subscribe to newsletter"
        :checked="true"
      />
    </div>

    <div class="mbe4">
      <h2>Checkbox Group</h2>
      <p class="mbs2 mbe3">Multiple checkboxes grouped together with a fieldset</p>
    </div>
    <VueFieldset
      legend="Select your interests"
      class="mbe4"
    >
      <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        <VueCheckbox
          name="interests"
          value="tech"
          label-text="Technology"
          :checked="true"
        />
        <VueCheckbox
          name="interests"
          value="design"
          label-text="Design"
        />
        <VueCheckbox
          name="interests"
          value="business"
          label-text="Business"
          :checked="true"
        />
        <VueCheckbox
          name="interests"
          value="science"
          label-text="Science"
        />
      </div>
    </VueFieldset>

    <div class="mbe4">
      <h2>Indeterminate State</h2>
      <p class="mbs2 mbe3">Used for "select all" scenarios where some items are selected. Simply supply the <i>indeterminate</i> attribute to activate.</p>
    </div>
    <div
      class="mbe4"
      style="display: flex; flex-direction: column; gap: 0.75rem;"
    >
      <VueCheckbox
        name="select-all"
        value="all"
        :indeterminate="true"
        label-text="Select All (Some selected)"
      />
      <div style="padding-left: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem;">
        <VueCheckbox
          name="items"
          value="item1"
          label-text="Item 1"
          :checked="true"
        />
        <VueCheckbox
          name="items"
          value="item2"
          label-text="Item 2"
        />
        <VueCheckbox
          name="items"
          value="item3"
          label-text="Item 3"
          :checked="true"
        />
      </div>
    </div>

    <div class="mbe4">
      <h2>Size Variants</h2>
      <p class="mbs2 mbe3">Three size options: small, medium (default), and large</p>
    </div>
    <div
      class="mbe4"
      style="display: flex; gap: 2rem; align-items: center;"
    >
      <VueCheckbox
        name="size"
        value="small"
        size="small"
        label-text="Small"
        :checked="true"
      />
      <VueCheckbox
        name="size"
        value="medium"
        size="medium"
        label-text="Medium"
        :checked="true"
      />
      <VueCheckbox
        name="size"
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
          <VueCheckbox
            name="theme-default"
            value="1"
            theme="default"
            label-text="Unchecked"
          />
          <VueCheckbox
            name="theme-default"
            value="2"
            theme="default"
            label-text="Checked"
            :checked="true"
          />
          <VueCheckbox
            name="theme-default"
            value="3"
            theme="default"
            label-text="Indeterminate"
            :indeterminate="true"
          />
        </div>
      </VueFieldset>
      <VueFieldset legend="Primary Theme (Blue)">
        <div style="display: flex; gap: 1rem;">
          <VueCheckbox
            name="theme-primary"
            value="1"
            theme="primary"
            label-text="Unchecked"
          />
          <VueCheckbox
            name="theme-primary"
            value="2"
            theme="primary"
            label-text="Checked"
            :checked="true"
          />
          <VueCheckbox
            name="theme-primary"
            value="3"
            theme="primary"
            label-text="Indeterminate"
            :indeterminate="true"
          />
        </div>
      </VueFieldset>
      <VueFieldset legend="Success Theme (Green)">
        <div style="display: flex; gap: 1rem;">
          <VueCheckbox
            name="theme-success"
            value="1"
            theme="success"
            label-text="Unchecked"
          />
          <VueCheckbox
            name="theme-success"
            value="2"
            theme="success"
            label-text="Checked"
            :checked="true"
          />
          <VueCheckbox
            name="theme-success"
            value="3"
            theme="success"
            label-text="Indeterminate"
            :indeterminate="true"
          />
        </div>
      </VueFieldset>

      <VueFieldset legend="Monochrome Theme (Black/White)">
        <div style="display: flex; gap: 1rem;">
          <VueCheckbox
            name="theme-mono"
            value="1"
            theme="monochrome"
            label-text="Unchecked"
          />
          <VueCheckbox
            name="theme-mono"
            value="2"
            theme="monochrome"
            label-text="Checked"
            :checked="true"
          />
          <VueCheckbox
            name="theme-mono"
            value="3"
            theme="monochrome"
            label-text="Indeterminate"
            :indeterminate="true"
          />
        </div>
      </VueFieldset>
    </div>

    <div class="mbe4">
      <h2>Disabled State</h2>
      <p class="mbs2 mbe3">Checkboxes can be disabled to prevent interaction</p>
    </div>
    <div
      class="mbe4"
      style="display: flex; gap: 1rem;"
    >
      <VueCheckbox
        name="disabled"
        value="1"
        label-text="Disabled Unchecked"
        :disabled="true"
      />
      <VueCheckbox
        name="disabled"
        value="2"
        label-text="Disabled Checked"
        :checked="true"
        :disabled="true"
      />
      <VueCheckbox
        name="disabled"
        value="3"
        label-text="Disabled Indeterminate"
        :indeterminate="true"
        :disabled="true"
      />
    </div>

    <div class="mbe4">
      <h2>Label Position</h2>
      <p class="mbs2 mbe3">Labels can be positioned at the end (default) or start of the checkbox</p>
    </div>
    <div
      class="mbe4"
      style="display: flex; flex-direction: column; gap: 1rem;"
    >
      <VueCheckbox
        name="position"
        value="1"
        label-text="Label on End (Default)"
        label-position="end"
        :checked="true"
      />
      <VueCheckbox
        name="position"
        value="2"
        label-text="Label on Start"
        label-position="start"
        :checked="true"
      />
    </div>

    <div class="mbe4">
      <h2>External Label Support</h2>
      <p class="mbs2 mbe3">
        Checkboxes support optional external labels, helper text, and error messages for validation feedback.
      </p>
    </div>
    <div class="stacked mbe4">
      <VueCheckbox
        name="terms"
        value="agreed"
        label="Terms and Conditions"
        label-text="I agree to the terms and conditions"
        class="mbe2"
      />

      <VueCheckbox
        name="newsletter"
        value="subscribed"
        label="Newsletter Subscription"
        label-text="Send me weekly updates"
        help-text="You can unsubscribe at any time"
        class="mbe2"
      />

      <VueCheckbox
        name="required-check"
        value="yes"
        label="Required Agreement"
        label-text="I acknowledge I have read the privacy policy"
        :required="true"
        help-text="This field is required to proceed"
        class="mbe2"
      />

      <VueCheckbox
        name="age-verify"
        value="yes"
        label="Age Verification"
        label-text="I confirm I am 18 years or older"
        :required="true"
        :invalid="true"
        error-message="You must confirm you are 18 or older"
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
      <VueCheckbox
        name="custom"
        value="1"
        label-text="Customized with rounded indicator"
        :checked="true"
        class="custom-checkbox-1"
      />
      <VueCheckbox
        name="custom"
        value="3"
        label-text="Fully customized"
        :checked="true"
        theme="primary"
        class="custom-checkbox-3"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueCheckbox } from "agnosticui-core/checkbox/vue";
import { VueFieldset } from "agnosticui-core/fieldset/vue";

export default defineComponent({
  name: "CheckboxExamples",
  components: {
    VueCheckbox,
    VueFieldset,
  },
});
<\/script>

<style>
/* CSS Shadow Parts customization examples */
.custom-checkbox-1::part(ag-checkbox-indicator) {
  border-radius: 50%;
  border-width: 3px;
}

.custom-checkbox-3::part(ag-checkbox-indicator) {
  border-radius: var(--ag-radius-md);
  transform: scale(1.2);
}

.custom-checkbox-3::part(ag-checkbox-wrapper) {
  padding: 0.75rem;
  background: linear-gradient(
    135deg,
    var(--ag-primary-background) 0%,
    var(--ag-background-secondary) 100%
  );
  border-radius: var(--ag-radius-lg);
  border: 2px solid var(--ag-primary-border);
}

.custom-checkbox-3::part(ag-checkbox-label) {
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--ag-primary);
}
</style>
`,M=`import { LitElement, html } from 'lit';
import 'agnosticui-core/checkbox';
import 'agnosticui-core/fieldset';

export class CheckboxLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  render() {
    return html\`
      <section>
        <!-- Default Checkbox -->
        <div class="mbe4">
          <h2>Default Checkbox</h2>
          <p class="mbs2 mbe3">Basic checkbox with default theme (primary)</p>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-checkbox
            name="example"
            value="1"
            label-text="I agree to the terms and conditions"
          ></ag-checkbox>
          <ag-checkbox
            name="example"
            value="2"
            label-text="Subscribe to newsletter"
            checked
          ></ag-checkbox>
        </div>

        <!-- Checkbox Group -->
        <div class="mbe4">
          <h2>Checkbox Group</h2>
          <p class="mbs2 mbe3">Multiple checkboxes grouped together with a fieldset</p>
        </div>
        <ag-fieldset legend="Select your interests" class="mbe4">
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <ag-checkbox
              name="interests"
              value="tech"
              label-text="Technology"
              checked
            ></ag-checkbox>
            <ag-checkbox
              name="interests"
              value="design"
              label-text="Design"
            ></ag-checkbox>
            <ag-checkbox
              name="interests"
              value="business"
              label-text="Business"
              checked
            ></ag-checkbox>
            <ag-checkbox
              name="interests"
              value="science"
              label-text="Science"
            ></ag-checkbox>
          </div>
        </ag-fieldset>

        <!-- Indeterminate State -->
        <div class="mbe4">
          <h2>Indeterminate State</h2>
          <p class="mbs2 mbe3">Used for "select all" scenarios where some items are selected. Simply supply the <i>indeterminate</i> attribute to activate.</p>
        </div>
        <div class="mbe4" style="display: flex; flex-direction: column; gap: 0.75rem;">
          <ag-checkbox
            name="select-all"
            value="all"
            indeterminate
            label-text="Select All (Some selected)"
          ></ag-checkbox>
          <div style="padding-left: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem;">
            <ag-checkbox
              name="items"
              value="item1"
              label-text="Item 1"
              checked
            ></ag-checkbox>
            <ag-checkbox
              name="items"
              value="item2"
              label-text="Item 2"
            ></ag-checkbox>
            <ag-checkbox
              name="items"
              value="item3"
              label-text="Item 3"
              checked
            ></ag-checkbox>
          </div>
        </div>

        <!-- Size Variants -->
        <div class="mbe4">
          <h2>Size Variants</h2>
          <p class="mbs2 mbe3">Three size options: small, medium (default), and large</p>
        </div>
        <div class="mbe4" style="display: flex; gap: 2rem; align-items: center;">
          <ag-checkbox
            name="size"
            value="small"
            size="small"
            label-text="Small"
            checked
          ></ag-checkbox>
          <ag-checkbox
            name="size"
            value="medium"
            size="medium"
            label-text="Medium"
            checked
          ></ag-checkbox>
          <ag-checkbox
            name="size"
            value="large"
            size="large"
            label-text="Large"
            checked
          ></ag-checkbox>
        </div>

        <!-- Theme Variants -->
        <div class="mbe4">
          <h2>Theme Variants</h2>
          <p class="mbs2 mbe3">Choose from default (green), primary (blue), or monochrome (black/white) themes</p>
        </div>
        <div class="mbe4" style="display: flex; flex-direction: column; gap: 1.5rem;">
          <ag-fieldset legend="Default Theme (Blue)">
            <div style="display: flex; gap: 1rem;">
              <ag-checkbox
                name="theme-default"
                value="1"
                theme="default"
                label-text="Unchecked"
              ></ag-checkbox>
              <ag-checkbox
                name="theme-default"
                value="2"
                theme="default"
                label-text="Checked"
                checked
              ></ag-checkbox>
              <ag-checkbox
                name="theme-default"
                value="3"
                theme="default"
                label-text="Indeterminate"
                indeterminate
              ></ag-checkbox>
            </div>
          </ag-fieldset>
          <ag-fieldset legend="Primary Theme (Blue)">
            <div style="display: flex; gap: 1rem;">
              <ag-checkbox
                name="theme-primary"
                value="1"
                theme="primary"
                label-text="Unchecked"
              ></ag-checkbox>
              <ag-checkbox
                name="theme-primary"
                value="2"
                theme="primary"
                label-text="Checked"
                checked
              ></ag-checkbox>
              <ag-checkbox
                name="theme-primary"
                value="3"
                theme="primary"
                label-text="Indeterminate"
                indeterminate
              ></ag-checkbox>
            </div>
          </ag-fieldset>
          <ag-fieldset legend="Success Theme (Green)">
            <div style="display: flex; gap: 1rem;">
              <ag-checkbox
                name="theme-success"
                value="1"
                theme="success"
                label-text="Unchecked"
              ></ag-checkbox>
              <ag-checkbox
                name="theme-success"
                value="2"
                theme="success"
                label-text="Checked"
                checked
              ></ag-checkbox>
              <ag-checkbox
                name="theme-success"
                value="3"
                theme="success"
                label-text="Indeterminate"
                indeterminate
              ></ag-checkbox>
            </div>
          </ag-fieldset>
          <ag-fieldset legend="Monochrome Theme (Black/White)">
            <div style="display: flex; gap: 1rem;">
              <ag-checkbox
                name="theme-mono"
                value="1"
                theme="monochrome"
                label-text="Unchecked"
              ></ag-checkbox>
              <ag-checkbox
                name="theme-mono"
                value="2"
                theme="monochrome"
                label-text="Checked"
                checked
              ></ag-checkbox>
              <ag-checkbox
                name="theme-mono"
                value="3"
                theme="monochrome"
                label-text="Indeterminate"
                indeterminate
              ></ag-checkbox>
            </div>
          </ag-fieldset>
        </div>

        <!-- Disabled State -->
        <div class="mbe4">
          <h2>Disabled State</h2>
          <p class="mbs2 mbe3">Checkboxes can be disabled to prevent interaction</p>
        </div>
        <div class="mbe4" style="display: flex; gap: 1rem;">
          <ag-checkbox
            name="disabled"
            value="1"
            label-text="Disabled Unchecked"
            disabled
          ></ag-checkbox>
          <ag-checkbox
            name="disabled"
            value="2"
            label-text="Disabled Checked"
            checked
            disabled
          ></ag-checkbox>
          <ag-checkbox
            name="disabled"
            value="3"
            label-text="Disabled Indeterminate"
            indeterminate
            disabled
          ></ag-checkbox>
        </div>

        <!-- Label Position -->
        <div class="mbe4">
          <h2>Label Position</h2>
          <p class="mbs2 mbe3">Labels can be positioned at the end (default) or start of the checkbox</p>
        </div>
        <div class="mbe4" style="display: flex; flex-direction: column; gap: 1rem;">
          <ag-checkbox
            name="position"
            value="1"
            label-text="Label on End (Default)"
            label-position="end"
            checked
          ></ag-checkbox>
          <ag-checkbox
            name="position"
            value="2"
            label-text="Label on Start"
            label-position="start"
            checked
          ></ag-checkbox>
        </div>

        <!-- External Label Support -->
        <div class="mbe4">
          <h2>External Label Support</h2>
          <p class="mbs2 mbe3">
            Checkboxes support optional external labels, helper text, and error messages for validation feedback.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-checkbox
            name="terms"
            value="agreed"
            label="Terms and Conditions"
            label-text="I agree to the terms and conditions"
            class="mbe2"
          ></ag-checkbox>

          <ag-checkbox
            name="newsletter"
            value="subscribed"
            label="Newsletter Subscription"
            label-text="Send me weekly updates"
            help-text="You can unsubscribe at any time"
            class="mbe2"
          ></ag-checkbox>

          <ag-checkbox
            name="required-check"
            value="yes"
            label="Required Agreement"
            label-text="I acknowledge I have read the privacy policy"
            required
            help-text="This field is required to proceed"
            class="mbe2"
          ></ag-checkbox>

          <ag-checkbox
            name="age-verify"
            value="yes"
            label="Age Verification"
            label-text="I confirm I am 18 years or older"
            required
            invalid
            error-message="You must confirm you are 18 or older"
            class="mbe2"
          ></ag-checkbox>
        </div>

        <!-- CSS Shadow Parts Customization -->
        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the component's appearance.
          </p>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-checkbox
            name="custom"
            value="1"
            label-text="Customized with rounded indicator"
            checked
            class="custom-checkbox-1"
          ></ag-checkbox>
          <ag-checkbox
            name="custom"
            value="3"
            label-text="Fully customized"
            checked
            theme="primary"
            class="custom-checkbox-3"
          ></ag-checkbox>
        </div>
      </section>
    \`;
  }
}

// Register the custom element
customElements.define('checkbox-lit-examples', CheckboxLitExamples);
`,W=`import { ReactCheckbox } from "agnosticui-core/checkbox/react";
import { ReactFieldset } from "agnosticui-core/fieldset/react";

export default function CheckboxReactExamples() {
  return (
    <section>
      {/* Default Checkbox */}
      <div className="mbe4">
        <h2>Default Checkbox</h2>
        <p className="mbs2 mbe3">Basic checkbox with default theme (primary)</p>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactCheckbox
          name="example"
          value="1"
          labelText="I agree to the terms and conditions"
        />
        <ReactCheckbox
          name="example"
          value="2"
          labelText="Subscribe to newsletter"
          checked
        />
      </div>

      {/* Checkbox Group */}
      <div className="mbe4">
        <h2>Checkbox Group</h2>
        <p className="mbs2 mbe3">Multiple checkboxes grouped together with a fieldset</p>
      </div>
      <ReactFieldset legend="Select your interests" className="mbe4">
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <ReactCheckbox
            name="interests"
            value="tech"
            labelText="Technology"
            checked
          />
          <ReactCheckbox
            name="interests"
            value="design"
            labelText="Design"
          />
          <ReactCheckbox
            name="interests"
            value="business"
            labelText="Business"
            checked
          />
          <ReactCheckbox
            name="interests"
            value="science"
            labelText="Science"
          />
        </div>
      </ReactFieldset>

      {/* Indeterminate State */}
      <div className="mbe4">
        <h2>Indeterminate State</h2>
        <p className="mbs2 mbe3">Used for "select all" scenarios where some items are selected. Simply supply the <i>indeterminate</i> attribute to activate.</p>
      </div>
      <div className="mbe4" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <ReactCheckbox
          name="select-all"
          value="all"
          indeterminate
          labelText="Select All (Some selected)"
        />
        <div style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <ReactCheckbox
            name="items"
            value="item1"
            labelText="Item 1"
            checked
          />
          <ReactCheckbox
            name="items"
            value="item2"
            labelText="Item 2"
          />
          <ReactCheckbox
            name="items"
            value="item3"
            labelText="Item 3"
            checked
          />
        </div>
      </div>

      {/* Size Variants */}
      <div className="mbe4">
        <h2>Size Variants</h2>
        <p className="mbs2 mbe3">Three size options: small, medium (default), and large</p>
      </div>
      <div className="mbe4" style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <ReactCheckbox
          name="size"
          value="small"
          size="small"
          labelText="Small"
          checked
        />
        <ReactCheckbox
          name="size"
          value="medium"
          size="medium"
          labelText="Medium"
          checked
        />
        <ReactCheckbox
          name="size"
          value="large"
          size="large"
          labelText="Large"
          checked
        />
      </div>

      {/* Theme Variants */}
      <div className="mbe4">
        <h2>Theme Variants</h2>
        <p className="mbs2 mbe3">Choose from default (green), primary (blue), or monochrome (black/white) themes</p>
      </div>
      <div className="mbe4" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <ReactFieldset legend="Default Theme (Blue)">
          <div style={{ display: "flex", gap: "1rem" }}>
            <ReactCheckbox
              name="theme-default"
              value="1"
              theme="default"
              labelText="Unchecked"
            />
            <ReactCheckbox
              name="theme-default"
              value="2"
              theme="default"
              labelText="Checked"
              checked
            />
            <ReactCheckbox
              name="theme-default"
              value="3"
              theme="default"
              labelText="Indeterminate"
              indeterminate
            />
          </div>
        </ReactFieldset>
        <ReactFieldset legend="Primary Theme (Blue)">
          <div style={{ display: "flex", gap: "1rem" }}>
            <ReactCheckbox
              name="theme-primary"
              value="1"
              theme="primary"
              labelText="Unchecked"
            />
            <ReactCheckbox
              name="theme-primary"
              value="2"
              theme="primary"
              labelText="Checked"
              checked
            />
            <ReactCheckbox
              name="theme-primary"
              value="3"
              theme="primary"
              labelText="Indeterminate"
              indeterminate
            />
          </div>
        </ReactFieldset>
        <ReactFieldset legend="Success Theme (Green)">
          <div style={{ display: "flex", gap: "1rem" }}>
            <ReactCheckbox
              name="theme-success"
              value="1"
              theme="success"
              labelText="Unchecked"
            />
            <ReactCheckbox
              name="theme-success"
              value="2"
              theme="success"
              labelText="Checked"
              checked
            />
            <ReactCheckbox
              name="theme-success"
              value="3"
              theme="success"
              labelText="Indeterminate"
              indeterminate
            />
          </div>
        </ReactFieldset>
        <ReactFieldset legend="Monochrome Theme (Black/White)">
          <div style={{ display: "flex", gap: "1rem" }}>
            <ReactCheckbox
              name="theme-mono"
              value="1"
              theme="monochrome"
              labelText="Unchecked"
            />
            <ReactCheckbox
              name="theme-mono"
              value="2"
              theme="monochrome"
              labelText="Checked"
              checked
            />
            <ReactCheckbox
              name="theme-mono"
              value="3"
              theme="monochrome"
              labelText="Indeterminate"
              indeterminate
            />
          </div>
        </ReactFieldset>
      </div>

      {/* Disabled State */}
      <div className="mbe4">
        <h2>Disabled State</h2>
        <p className="mbs2 mbe3">Checkboxes can be disabled to prevent interaction</p>
      </div>
      <div className="mbe4" style={{ display: "flex", gap: "1rem" }}>
        <ReactCheckbox
          name="disabled"
          value="1"
          labelText="Disabled Unchecked"
          disabled
        />
        <ReactCheckbox
          name="disabled"
          value="2"
          labelText="Disabled Checked"
          checked
          disabled
        />
        <ReactCheckbox
          name="disabled"
          value="3"
          labelText="Disabled Indeterminate"
          indeterminate
          disabled
        />
      </div>

      {/* Label Position */}
      <div className="mbe4">
        <h2>Label Position</h2>
        <p className="mbs2 mbe3">Labels can be positioned at the end (default) or start of the checkbox</p>
      </div>
      <div className="mbe4" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <ReactCheckbox
          name="position"
          value="1"
          labelText="Label on End (Default)"
          labelPosition="end"
          checked
        />
        <ReactCheckbox
          name="position"
          value="2"
          labelText="Label on Start"
          labelPosition="start"
          checked
        />
      </div>

      {/* External Label Support */}
      <div className="mbe4">
        <h2>External Label Support</h2>
        <p className="mbs2 mbe3">
          Checkboxes support optional external labels, helper text, and error messages for validation feedback.
        </p>
      </div>
      <div className="stacked mbe4">
        <ReactCheckbox
          name="terms"
          value="agreed"
          label="Terms and Conditions"
          labelText="I agree to the terms and conditions"
          className="mbe2"
        />

        <ReactCheckbox
          name="newsletter"
          value="subscribed"
          label="Newsletter Subscription"
          labelText="Send me weekly updates"
          helpText="You can unsubscribe at any time"
          className="mbe2"
        />

        <ReactCheckbox
          name="required-check"
          value="yes"
          label="Required Agreement"
          labelText="I acknowledge I have read the privacy policy"
          required
          helpText="This field is required to proceed"
          className="mbe2"
        />

        <ReactCheckbox
          name="age-verify"
          value="yes"
          label="Age Verification"
          labelText="I confirm I am 18 years or older"
          required
          invalid
          errorMessage="You must confirm you are 18 or older"
          className="mbe2"
        />
      </div>

      {/* CSS Shadow Parts Customization */}
      <div className="mbe4">
        <h2>CSS Shadow Parts Customization</h2>
        <p className="mbs2 mbe3">
          Use CSS Shadow Parts to customize the component's appearance.
        </p>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactCheckbox
          name="custom"
          value="1"
          labelText="Customized with rounded indicator"
          checked
          className="custom-checkbox-1"
        />
        <ReactCheckbox
          name="custom"
          value="3"
          labelText="Fully customized"
          checked
          theme="primary"
          className="custom-checkbox-3"
        />
      </div>
    </section>
  );
}
`,ls=JSON.parse('{"title":"Checkbox","description":"","frontmatter":{},"headers":[],"relativePath":"components/checkbox.md","filePath":"components/checkbox.md"}'),G={name:"components/checkbox.md"},hs=Object.assign(G,{setup(p){return(e,n)=>(r(),F("div",null,[n[1]||(n[1]=s("h1",{id:"checkbox",tabindex:"-1"},[h("Checkbox "),s("a",{class:"header-anchor",href:"#checkbox","aria-label":'Permalink to "Checkbox"'},"​")],-1)),i(c),n[2]||(n[2]=s("p",null,"Checkbox allows a user to select one or more options from a set. It's ideal for forms, settings panels, and multi-select interfaces.",-1)),n[3]||(n[3]=s("h2",{id:"examples",tabindex:"-1"},[h("Examples "),s("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),i(b,{component:"checkbox","vue-code":k(_),"lit-code":k(M),"react-code":k(W)},{vue:t(()=>[i(N)]),lit:t(()=>[...n[0]||(n[0]=[s("checkbox-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),n[4]||(n[4]=y(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The framework examples below <code>import</code> AgnosticUI as an <code>npm</code> package. Alternatively, you can use the <strong>CLI for complete control, AI/LLM visibility, and full code ownership</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> init</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> --framework</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> FRAMEWORK</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;"> # react, vue, lit, svelte, etc.</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> add</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> Checkbox</span></span></code></pre></div><p>The CLI copies source code directly into your project, giving you full visibility and control. After running <code>npx ag add</code>, you&#39;ll receive exact import instructions.</p></div><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueCheckbox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;terms&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;agree&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;I agree to the terms and conditions&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueFieldset</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> legend</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Select your interests&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueCheckbox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;interests&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;tech&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Technology&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        :checked</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;true&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueCheckbox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;interests&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;design&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Design&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueCheckbox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;interests&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;business&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Business&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueFieldset</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueCheckbox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;example&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;1&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      theme</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Primary theme&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :checked</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;true&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueCheckbox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;example&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;2&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      theme</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;monochrome&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Monochrome theme&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :checked</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;true&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ts&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { defineComponent } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { VueCheckbox } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/checkbox/vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { VueFieldset } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/fieldset/vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> defineComponent</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">({</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  components: { VueCheckbox, VueFieldset }</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">})</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ReactCheckbox } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/checkbox/react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ReactFieldset } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/fieldset/react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> function</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> Example</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactCheckbox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        name</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;terms&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;agree&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        labelText</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;I agree to the terms and conditions&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactFieldset</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> legend</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Select your interests&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactCheckbox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          name</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;interests&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;tech&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          labelText</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Technology&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          checked</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactCheckbox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          name</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;interests&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;design&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          labelText</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Design&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactCheckbox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          name</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;interests&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;business&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          labelText</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Business&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactFieldset</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactCheckbox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        name</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;example&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;1&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        theme</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        labelText</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Primary theme&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        checked</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactCheckbox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        name</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;example&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;2&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        theme</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;monochrome&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        labelText</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Monochrome theme&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        checked</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></details><details class="details custom-block"><summary>Lit (Web Components)</summary><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;module&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/checkbox&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/fieldset&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-checkbox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;terms&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;agree&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;I agree to the terms and conditions&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-checkbox</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-fieldset</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> legend</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Select your interests&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-checkbox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;interests&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;tech&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Technology&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      checked</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-checkbox</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-checkbox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;interests&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;design&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Design&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-checkbox</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-checkbox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;interests&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;business&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Business&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-checkbox</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-fieldset</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-checkbox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;example&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;1&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    theme</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Primary theme&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    checked</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-checkbox</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-checkbox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;example&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;2&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    theme</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;monochrome&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Monochrome theme&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    checked</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-checkbox</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><h2 id="label-position" tabindex="-1">Label Position <a class="header-anchor" href="#label-position" aria-label="Permalink to &quot;Label Position&quot;">​</a></h2><p>The <code>labelPosition</code> prop controls where the internal label text appears relative to the checkbox. This affects the <code>labelText</code> (the label that wraps the checkbox), not the external <code>label</code> prop.</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueCheckbox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;option&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;1&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Label on end (default)&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  label-position</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;end&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;VueCheckbox</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  name=&quot;option&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  value=&quot;2&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  label-text=&quot;Label on start&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  label-position=&quot;start&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">/&gt;</span></span></code></pre></div><h2 id="external-label-support" tabindex="-1">External Label Support <a class="header-anchor" href="#external-label-support" aria-label="Permalink to &quot;External Label Support&quot;">​</a></h2><p>Checkboxes now support optional external labels, helper text, and error messages using the shared form control utilities. This is useful for:</p><ul><li>Checkbox groups that need a descriptive label above them</li><li>Standalone checkboxes that require validation feedback</li><li>Forms where consistent label/helper/error patterns are needed</li></ul><h3 id="basic-external-label" tabindex="-1">Basic External Label <a class="header-anchor" href="#basic-external-label" aria-label="Permalink to &quot;Basic External Label&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueCheckbox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;terms&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;agreed&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Terms and Conditions&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;I agree to the terms and conditions&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">/&gt;</span></span></code></pre></div><h3 id="with-helper-text" tabindex="-1">With Helper Text <a class="header-anchor" href="#with-helper-text" aria-label="Permalink to &quot;With Helper Text&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueCheckbox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;newsletter&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;subscribed&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Newsletter Subscription&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Send me weekly updates&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  help-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;You can unsubscribe at any time&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">/&gt;</span></span></code></pre></div><h3 id="with-validation" tabindex="-1">With Validation <a class="header-anchor" href="#with-validation" aria-label="Permalink to &quot;With Validation&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueCheckbox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;age-verify&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;confirmed&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Age Verification&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;I confirm I am 18 years or older&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  :</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">required</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">true</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  :</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">invalid</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">!</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">ageVerified</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  error-message</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;You must confirm you are 18 or older&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">/&gt;</span></span></code></pre></div><h3 id="checkbox-groups-with-external-label" tabindex="-1">Checkbox Groups with External Label <a class="header-anchor" href="#checkbox-groups-with-external-label" aria-label="Permalink to &quot;Checkbox Groups with External Label&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueCheckbox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;features&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;email&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Select Features&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Email notifications&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      help-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Choose the features you want to enable&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueCheckbox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;features&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;sms&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;SMS notifications&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueCheckbox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;features&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;push&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Push notifications&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div><p><strong>Note:</strong> The <code>label</code> prop creates an external label above the checkbox, while <code>labelText</code> is the internal label that wraps the checkbox itself. Most checkboxes use only <code>labelText</code>, but external labels are useful for groups or when you need validation feedback.</p><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>name</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Name attribute for the checkbox input (used for form submission)</td></tr><tr><td><code>value</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Value of the checkbox input</td></tr><tr><td><code>checked</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Whether the checkbox is checked</td></tr><tr><td><code>indeterminate</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Whether the checkbox is in indeterminate state (used for &quot;select all&quot; scenarios)</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Whether the checkbox is disabled</td></tr><tr><td><code>size</code></td><td><code>&#39;small&#39; | &#39;medium&#39; | &#39;large&#39;</code></td><td><code>&#39;medium&#39;</code></td><td>Size of the checkbox</td></tr><tr><td><code>theme</code></td><td><code>&#39;default&#39; | &#39;primary&#39; | &#39;success&#39; | &#39;monochrome&#39;</code></td><td><code>&#39;primary&#39;</code></td><td>Color theme variant (default=blue alias to primary, primary=blue, success=green, monochrome=black/white)</td></tr><tr><td><code>labelText</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Label text for the checkbox (internal label that wraps the checkbox)</td></tr><tr><td><code>labelPosition</code></td><td><code>&#39;end&#39; | &#39;start&#39;</code></td><td><code>&#39;end&#39;</code></td><td>Position of labelText relative to checkbox (<code>end</code> = after checkbox, <code>start</code> = before checkbox)</td></tr><tr><td><code>label</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Optional external label displayed above the checkbox (useful for groups or standalone with context)</td></tr><tr><td><code>labelHidden</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Visually hides the external label while keeping it accessible to screen readers</td></tr><tr><td><code>noLabel</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Completely removes the external label element</td></tr><tr><td><code>required</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Marks the checkbox as required. Displays an asterisk (*) after the external label</td></tr><tr><td><code>invalid</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Marks the checkbox as invalid. Sets aria-invalid and can display error message</td></tr><tr><td><code>errorMessage</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Error message displayed when invalid. Linked via aria-describedby</td></tr><tr><td><code>helpText</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Helper text displayed below the checkbox. Linked via aria-describedby</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Event</th><th>Framework</th><th>Detail</th><th>Description</th></tr></thead><tbody><tr><td><code>click</code></td><td>Vue: <code>@click</code><br>React: <code>onClick</code><br>Lit: <code>@click</code></td><td><code>MouseEvent</code></td><td>Fired when the checkbox is clicked.</td></tr><tr><td><code>change</code></td><td>Vue: <code>@change</code><br>React: <code>onChange</code><br>Lit: <code>@change</code></td><td><code>{ checked: boolean, value: string, name: string, indeterminate: boolean }</code></td><td>Fired when checkbox state changes. Contains the new checked state and form integration data.</td></tr></tbody></table><p><strong>Note:</strong> The Checkbox component supports <strong>dual-dispatch event propagation</strong>: it dispatches both DOM CustomEvents (usable with <code>addEventListener</code>) and invokes callback props (<code>.onChange</code>), giving you flexibility in how you handle events.</p><h3 id="event-usage-examples" tabindex="-1">Event Usage Examples <a class="header-anchor" href="#event-usage-examples" aria-label="Permalink to &quot;Event Usage Examples&quot;">​</a></h3><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueCheckbox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;terms&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;agree&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;I agree to the terms&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      @change</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;handleChange&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueCheckbox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;newsletter&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;subscribed&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Subscribe to newsletter&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      v-model:checked</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;isSubscribed&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueCheckbox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;select-all&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;all&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Select All&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      v-model:indeterminate</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;isIndeterminate&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      v-model:checked</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;allChecked&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueCheckbox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;notifications&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;enabled&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Enable notifications&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      v-model:checked</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;notificationsEnabled&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      @change</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;handleNotificationChange&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> setup</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ts&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ref } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { VueCheckbox } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/checkbox/vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> isSubscribed</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> ref</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> isIndeterminate</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> ref</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> allChecked</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> ref</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> notificationsEnabled</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> ref</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> handleChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">detail</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Checkbox changed:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, detail);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> handleNotificationChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">detail</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Notifications:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, detail.checked </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">?</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;enabled&quot;</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> :</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;disabled&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">};</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { useState } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ReactCheckbox } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/checkbox/react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> function</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> Example</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">isChecked</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">setIsChecked</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactCheckbox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        name</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;terms&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;agree&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        labelText</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;I agree to the terms&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Checkbox changed:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, (e.target </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">as</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> HTMLInputElement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">).checked);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactCheckbox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        name</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;newsletter&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;subscribed&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        labelText</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Subscribe to newsletter&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        checked</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">isChecked</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">          setIsChecked</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">((e.target </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">as</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> HTMLInputElement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">).checked);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactCheckbox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        name</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;notifications&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;enabled&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        labelText</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Enable notifications&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onClick</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Clicked:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Changed:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, (e.target </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">as</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> HTMLInputElement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">).checked)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactCheckbox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        name</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;select-all&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;all&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        labelText</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Select All&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        indeterminate</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Indeterminate cleared on click:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, (e.target </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">as</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> HTMLInputElement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">).checked);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></details><details class="details custom-block"><summary>Lit (Web Components)</summary><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;module&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/checkbox&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> checkbox1</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> document.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#checkbox1&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  checkbox1.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;change&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Event listener:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e.detail);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> checkbox2</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> document.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#checkbox2&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  checkbox2.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">onChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Callback prop:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e.detail);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> checkbox3</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> document.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#checkbox3&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  checkbox3.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;change&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;DOM event:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e.detail);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  });</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  checkbox3.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">onChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Callback also fired:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e.detail);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> checkbox4</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> document.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#checkbox4&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  checkbox4.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;click&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Click event:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  });</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  checkbox4.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">onClick</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Click callback:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  };</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-checkbox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    id</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;checkbox1&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;example1&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;1&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;addEventListener pattern&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-checkbox</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-checkbox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    id</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;checkbox2&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;example2&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;2&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Callback prop pattern&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-checkbox</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-checkbox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    id</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;checkbox3&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;example3&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;3&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Dual-dispatch (both patterns)&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-checkbox</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-checkbox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    id</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;checkbox4&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;example4&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;4&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    label-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;With click handlers&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-checkbox</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><p><strong>Type:</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> type</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> CheckboxChangeEvent</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> CustomEvent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">CheckboxChangeEventDetail</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> interface</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> CheckboxChangeEventDetail</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  checked</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> boolean</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> string</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  name</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> string</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  indeterminate</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> boolean</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><h2 id="css-shadow-parts" tabindex="-1">CSS Shadow Parts <a class="header-anchor" href="#css-shadow-parts" aria-label="Permalink to &quot;CSS Shadow Parts&quot;">​</a></h2><p>Shadow Parts allow you to style internal elements of the checkbox from outside the shadow DOM using the <code>::part()</code> CSS selector.</p><table class="ag-table ag-table--striped"><thead><tr><th>Part</th><th>Description</th></tr></thead><tbody><tr><td><code>ag-checkbox-wrapper</code></td><td>The outer wrapper label element</td></tr><tr><td><code>ag-checkbox-input</code></td><td>The native checkbox input element (visually hidden)</td></tr><tr><td><code>ag-checkbox-indicator</code></td><td>The custom visual checkbox indicator (box with checkmark)</td></tr><tr><td><code>ag-checkbox-label</code></td><td>The label text span</td></tr></tbody></table><h3 id="customization-examples" tabindex="-1">Customization Examples <a class="header-anchor" href="#customization-examples" aria-label="Permalink to &quot;Customization Examples&quot;">​</a></h3><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-checkbox</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-checkbox-indicator</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border-radius</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">50</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">%</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border-width</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">3</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-checkbox</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-checkbox-wrapper</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  padding</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.5</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#6366f1</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border-radius</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#6366f1</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-checkbox</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-checkbox-label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  font-weight</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">600</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  color</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#12623e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><h2 id="accessibility" tabindex="-1">Accessibility <a class="header-anchor" href="#accessibility" aria-label="Permalink to &quot;Accessibility&quot;">​</a></h2><ul><li>Checkbox uses native <code>&lt;input type=&quot;checkbox&quot;&gt;</code> for proper form integration</li><li>Proper <code>aria-checked</code> state for assistive technologies (&quot;true&quot;, &quot;false&quot;, or &quot;mixed&quot; for indeterminate)</li><li>Keyboard navigable (Tab to focus, Space to toggle)</li><li>Focus visible with customizable focus ring using design tokens</li><li>Always wrap checkbox groups with AgFieldset (ag-fieldset / ReactFieldset / VueFieldset) for proper semantic grouping and screen reader support</li><li>Disabled state prevents interaction and is communicated to assistive technologies</li></ul><h2 id="theme-support" tabindex="-1">Theme Support <a class="header-anchor" href="#theme-support" aria-label="Permalink to &quot;Theme Support&quot;">​</a></h2><p>All themes automatically support dark mode through CSS design tokens:</p><ul><li><strong>Default theme</strong>: Alias to primary theme - uses <code>--ag-primary</code> (blue) which adapts to dark mode</li><li><strong>Primary theme</strong>: Uses <code>--ag-primary</code> (blue) which adapts to dark mode</li><li><strong>Success theme</strong>: Uses <code>--ag-success</code> (green) which adapts to dark mode</li><li><strong>Monochrome theme</strong>: Uses <code>--ag-black</code> and <code>--ag-white</code> which invert in dark mode</li></ul><h2 id="notes" tabindex="-1">Notes <a class="header-anchor" href="#notes" aria-label="Permalink to &quot;Notes&quot;">​</a></h2><ul><li><strong>Indeterminate state</strong>: Useful for &quot;select all&quot; checkboxes when only some items are selected</li><li><strong>Form integration</strong>: Checkboxes work seamlessly with standard HTML forms</li><li><strong>Lit</strong>: Properties can be set via attributes or via property binding (e.g., <code>.checked=\${true}</code>)</li><li>All three implementations (Lit, React, Vue) share the same underlying styles and behavior</li></ul>`,43))]))}});export{ls as __pageData,hs as default};
