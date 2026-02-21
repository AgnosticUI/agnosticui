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
`,ls=JSON.parse('{"title":"Checkbox","description":"","frontmatter":{},"headers":[],"relativePath":"components/checkbox.md","filePath":"components/checkbox.md"}'),G={name:"components/checkbox.md"},hs=Object.assign(G,{setup(p){return(e,n)=>(r(),F("div",null,[n[1]||(n[1]=s("h1",{id:"checkbox",tabindex:"-1"},[h("Checkbox "),s("a",{class:"header-anchor",href:"#checkbox","aria-label":'Permalink to "Checkbox"'},"​")],-1)),i(c),n[2]||(n[2]=s("p",null,"Checkbox allows a user to select one or more options from a set. It's ideal for forms, settings panels, and multi-select interfaces.",-1)),n[3]||(n[3]=s("h2",{id:"examples",tabindex:"-1"},[h("Examples "),s("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),i(b,{component:"checkbox","vue-code":k(_),"lit-code":k(M),"react-code":k(W)},{vue:t(()=>[i(N)]),lit:t(()=>[...n[0]||(n[0]=[s("checkbox-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),n[4]||(n[4]=y("",43))]))}});export{ls as __pageData,hs as default};
