import{A as b}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{v as u}from"./chunks/VueToggle.vue_vue_type_script_setup_true_lang-BxrvAsse.DA_G4Cbh.js";import{v}from"./chunks/VueButton.vue_vue_type_script_setup_true_lang-Bq8IPXqd.CM5RJxDa.js";import{_ as C,C as r,c,o as m,j as s,G as a,a as h,t as k,w as o,ae as E,k as p}from"./chunks/framework.NAAYCHZu.js";import{F as B}from"./chunks/FrameworkExample.Vj5DwYx5.js";import{a as f,x as F}from"./chunks/Button.Bujdzq23.js";import"./chunks/createLucideIcon.B61Wqv9x.js";import"./chunks/form-control-utils.LZkauYsx.js";import"./chunks/Icon.odq14qpJ.js";const D={name:"ToggleExamples",components:{VueToggle:u,VueButton:v},data(){return{notificationsEnabled:!1,darkModeEnabled:!1,formData:{newsletter:!1,name:"",value:""},customToggleStyles:`
        <style>
          .custom-toggle::part(ag-toggle-button) {
            border: 2px solid var(--ag-coral-50);
            border-radius: 9999px;
            padding: var(--ag-space-2) var(--ag-space-3);
          }
          .custom-toggle::part(ag-toggle-track) {
            background-color: #f0f0f0;
          }
          .custom-toggle::part(ag-toggle-handle) {
            background-color: var(--ag-coral-200);
            border: 2px solid #fff;
            box-shadow: 0 0 5px var(--ag-coral-200);
          }
          .custom-toggle[checked]::part(ag-toggle-track) {
            background-color:var(--ag-coral-300);
          }
          .custom-toggle[checked]::part(ag-toggle-handle) {
            background-color: #fff;
          }
        </style>
      `}},methods:{handleToggleChange(l){this.notificationsEnabled=l.checked,console.log("Toggle changed:",l)},handleFormToggle(l){this.formData.newsletter=l.checked,this.formData.name=l.name,this.formData.value=l.value,console.log("Form toggle changed:",l)}}},T={class:"stacked-mobile mbe4"},A={class:"stacked-mobile mbe4"},x={class:"stacked-mobile mbe4"},w={class:"stacked-mobile mbe4"},q={style:{"margin-top":"0.5rem"}},S={style:{"margin-top":"0.5rem"}},V={style:{"margin-top":"0.5rem","font-size":"0.875rem",color:"var(--ag-text-secondary)"}},M={class:"mbe4 flex justify-center"},P={class:"mbe4",style:{"max-width":"600px"}},N={class:"mbe3"},R={class:"mbe3"},z={class:"mbe3"},_={class:"mbe3"},L={class:"mbe4",style:{"max-width":"600px"}},$={class:"mbe3"},O={class:"mbe3"},I={class:"mbe3"},W={class:"mbe3"},H={class:"stacked-mobile mbe4"},j=["innerHTML"];function Y(l,i,n,Z,t,d){const e=r("VueToggle"),y=r("VueButton");return m(),c("section",null,[i[5]||(i[5]=s("div",{class:"mbe2"},[s("h2",null,"Default Toggles")],-1)),s("div",T,[a(e,{label:"Default toggle"}),a(e,{label:"Checked by default",checked:!0}),a(e,{label:"Disabled",disabled:""}),a(e,{label:"Disabled and checked",checked:!0,disabled:""})]),i[6]||(i[6]=s("div",{class:"mbe2"},[s("h2",null,"Sizes")],-1)),s("div",A,[a(e,{label:"Extra small",size:"xs"}),a(e,{label:"Small",size:"sm"}),a(e,{label:"Medium (default)",size:"md"}),a(e,{label:"Large",size:"lg"}),a(e,{label:"Extra large",size:"xl"})]),i[7]||(i[7]=s("div",{class:"mbe2"},[s("h2",null,"Variants")],-1)),s("div",x,[a(e,{label:"Default variant",checked:!0}),a(e,{label:"Success",variant:"success",checked:!0}),a(e,{label:"Warning",variant:"warning",checked:!0}),a(e,{label:"Danger",variant:"danger",checked:!0}),a(e,{label:"Monochrome",variant:"monochrome",checked:!0})]),i[8]||(i[8]=s("div",{class:"mbe2"},[s("h2",null,"Interactive Examples"),s("p",{class:"mbs2 mbe3"}," Demonstrates event handling with @toggle-change and v-model:checked ")],-1)),s("div",w,[s("div",null,[a(e,{label:"Notifications (@toggle-change)",checked:t.notificationsEnabled,onToggleChange:d.handleToggleChange},null,8,["checked","onToggleChange"]),s("p",q,[i[2]||(i[2]=h(" Notifications: ",-1)),s("strong",null,k(t.notificationsEnabled?"Enabled":"Disabled"),1)])]),s("div",null,[a(e,{label:"Dark Mode (v-model:checked)",checked:t.darkModeEnabled,"onUpdate:checked":i[0]||(i[0]=g=>t.darkModeEnabled=g)},null,8,["checked"]),s("p",S,[i[3]||(i[3]=h(" Dark mode: ",-1)),s("strong",null,k(t.darkModeEnabled?"On":"Off"),1)])]),s("div",null,[a(e,{label:"Newsletter Subscription",name:"newsletter",value:"subscribed",checked:t.formData.newsletter,onToggleChange:d.handleFormToggle},null,8,["checked","onToggleChange"]),s("p",V,' Form data: name="'+k(t.formData.name)+'", value="'+k(t.formData.value)+'", checked='+k(t.formData.newsletter),1)])]),s("div",M,[a(y,{onClick:i[1]||(i[1]=g=>t.darkModeEnabled=!t.darkModeEnabled),mode:"primary",size:"small"},{default:o(()=>[...i[4]||(i[4]=[h(" Toggle above programmatically ",-1)])]),_:1})]),i[9]||(i[9]=s("div",{class:"mbe4"},[s("h2",null,"Labels, Helper Text, and Validation"),s("p",{class:"mbs2 mbe3"}," The Toggle component supports labels, helper text, required fields, and validation states. ")],-1)),s("div",P,[s("div",N,[a(e,{label:"Enable notifications"})]),s("div",R,[a(e,{label:"Dark mode","help-text":"Reduces eye strain in low-light environments"})]),s("div",z,[a(e,{label:"Two-factor authentication",required:!0,"help-text":"This setting is required for account security"})]),s("div",_,[a(e,{label:"Email notifications",required:!0,invalid:!0,"error-message":"You must enable email notifications to continue"})])]),i[10]||(i[10]=s("div",{class:"mbe4"},[s("h2",null,"Label Positioning"),s("p",{class:"mbs2 mbe3"},[h(" Control label position with "),s("code",null,"label-position"),h(": 'top' (default), 'start', 'end', or 'bottom'. ")])],-1)),s("div",L,[s("div",$,[a(e,{label:"Top Label (Default)","label-position":"top"})]),s("div",O,[a(e,{label:"Start Position","label-position":"start"})]),s("div",I,[a(e,{label:"End Position","label-position":"end"})]),s("div",W,[a(e,{label:"Bottom Position","label-position":"bottom","help-text":"Bottom label position for alternative layouts"})])]),i[11]||(i[11]=s("div",{class:"mbe2"},[s("h2",null,"CSS Shadow Parts Customization")],-1)),s("div",H,[s("div",{innerHTML:t.customToggleStyles},null,8,j),a(e,{class:"custom-toggle",label:"Customized Toggle",checked:!0})])])}const U=C(D,[["render",Y]]);class G extends f{createRenderRoot(){return this}static get properties(){return{notificationsEnabled:{type:Boolean,state:!0},darkModeEnabled:{type:Boolean,state:!0},formData:{type:Object,state:!0}}}constructor(){super(),this.notificationsEnabled=!1,this.darkModeEnabled=!1,this.formData={newsletter:!1,name:"",value:""},this.customToggleStyles=F`
      <style>
        .custom-toggle::part(ag-toggle-button) {
          border: 2px solid var(--ag-coral-50);
          border-radius: 9999px;
          padding: var(--ag-space-2) var(--ag-space-3);
        }
        .custom-toggle::part(ag-toggle-track) {
          background-color: #f0f0f0;
        }
        .custom-toggle::part(ag-toggle-handle) {
          background-color: var(--ag-coral-200);
          border: 2px solid #fff;
          box-shadow: 0 0 5px var(--ag-coral-200);
        }
        .custom-toggle[checked]::part(ag-toggle-track) {
          background-color: var(--ag-coral-300);
        }
        .custom-toggle[checked]::part(ag-toggle-handle) {
          background-color: #fff;
        }
      </style>
    `}handleToggleChange(i){this.notificationsEnabled=i.detail.checked,console.log("Toggle changed:",i.detail)}handleDarkModeToggle(i){this.darkModeEnabled=i.detail.checked}handleFormToggle(i){this.formData={newsletter:i.detail.checked,name:i.detail.name,value:i.detail.value},console.log("Form toggle changed:",i.detail)}toggleDarkModeProgrammatically(){this.darkModeEnabled=!this.darkModeEnabled}render(){return F`
      <section>
        <div class="mbe2">
          <h2>Default Toggles</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-toggle label="Default toggle"></ag-toggle>
          <ag-toggle label="Checked by default" checked></ag-toggle>
          <ag-toggle label="Disabled" disabled></ag-toggle>
          <ag-toggle label="Disabled and checked" checked disabled></ag-toggle>
        </div>

        <div class="mbe2">
          <h2>Sizes</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-toggle label="Extra small" size="xs"></ag-toggle>
          <ag-toggle label="Small" size="sm"></ag-toggle>
          <ag-toggle label="Medium (default)" size="md"></ag-toggle>
          <ag-toggle label="Large" size="lg"></ag-toggle>
          <ag-toggle label="Extra large" size="xl"></ag-toggle>
        </div>

        <div class="mbe2">
          <h2>Variants</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-toggle label="Default variant" checked></ag-toggle>
          <ag-toggle label="Success" variant="success" checked></ag-toggle>
          <ag-toggle label="Warning" variant="warning" checked></ag-toggle>
          <ag-toggle label="Danger" variant="danger" checked></ag-toggle>
          <ag-toggle label="Monochrome" variant="monochrome" checked></ag-toggle>
        </div>

        <div class="mbe2">
          <h2>Interactive Examples</h2>
          <p class="mbs2 mbe3">
            Demonstrates event handling with @toggle-change.
          </p>
        </div>
        <div class="stacked-mobile mbe4">
          <div>
            <ag-toggle
              label="Notifications (@toggle-change)"
              .checked=${this.notificationsEnabled}
              @toggle-change=${this.handleToggleChange}
            ></ag-toggle>
            <p style="margin-top: 0.5rem">
              Notifications: <strong>${this.notificationsEnabled?"Enabled":"Disabled"}</strong>
            </p>
          </div>
          <div>
            <ag-toggle
              label="Dark Mode"
              .checked=${this.darkModeEnabled}
              @toggle-change=${this.handleDarkModeToggle}
            ></ag-toggle>
            <p style="margin-top: 0.5rem">
              Dark mode: <strong>${this.darkModeEnabled?"On":"Off"}</strong>
            </p>
          </div>
          <div>
            <ag-toggle
              label="Newsletter Subscription"
              name="newsletter"
              value="subscribed"
              .checked=${this.formData.newsletter}
              @toggle-change=${this.handleFormToggle}
            ></ag-toggle>
            <p style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--ag-text-secondary);">
              Form data: name="${this.formData.name}", value="${this.formData.value}", checked=${this.formData.newsletter}
            </p>
          </div>
        </div>
        <div class="mbe4 flex justify-center">
          <ag-button
            @click=${this.toggleDarkModeProgrammatically}
            mode="primary"
            size="small"
          >
            Toggle above programmatically
          </ag-button>
        </div>

        <div class="mbe4">
          <h2>Labels, Helper Text, and Validation</h2>
          <p class="mbs2 mbe3">
            The Toggle component supports labels, helper text, required fields, and validation states.
          </p>
        </div>
        <div class="mbe4" style="max-width: 600px;">
          <div class="mbe3">
            <ag-toggle label="Enable notifications"></ag-toggle>
          </div>
          <div class="mbe3">
            <ag-toggle
              label="Dark mode"
              help-text="Reduces eye strain in low-light environments"
            ></ag-toggle>
          </div>
          <div class="mbe3">
            <ag-toggle
              label="Two-factor authentication"
              required
              help-text="This setting is required for account security"
            ></ag-toggle>
          </div>
          <div class="mbe3">
            <ag-toggle
              label="Email notifications"
              required
              invalid
              error-message="You must enable email notifications to continue"
            ></ag-toggle>
          </div>
        </div>

        <div class="mbe4">
          <h2>Label Positioning</h2>
          <p class="mbs2 mbe3">
            Control label position with <code>label-position</code>: 'top' (default), 'start', 'end', or 'bottom'.
          </p>
        </div>
        <div class="mbe4" style="max-width: 600px;">
          <div class="mbe3">
            <ag-toggle label="Top Label (Default)" label-position="top"></ag-toggle>
          </div>
          <div class="mbe3">
            <ag-toggle label="Start Position" label-position="start"></ag-toggle>
          </div>
          <div class="mbe3">
            <ag-toggle label="End Position" label-position="end"></ag-toggle>
          </div>
          <div class="mbe3">
            <ag-toggle
              label="Bottom Position"
              label-position="bottom"
              help-text="Bottom label position for alternative layouts"
            ></ag-toggle>
          </div>
        </div>

        <div class="mbe2">
          <h2>CSS Shadow Parts Customization</h2>
        </div>
        <div class="stacked-mobile mbe4">
          ${this.customToggleStyles}
          <ag-toggle
            class="custom-toggle"
            label="Customized Toggle"
            checked
          ></ag-toggle>
        </div>
      </section>
    `}}customElements.define("toggle-lit-examples",G);const J=`<template>
  <section>
    <div class="mbe2">
      <h2>Default Toggles</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VueToggle label="Default toggle" />
      <VueToggle
        label="Checked by default"
        :checked="true"
      />
      <VueToggle
        label="Disabled"
        disabled
      />
      <VueToggle
        label="Disabled and checked"
        :checked="true"
        disabled
      />
    </div>

    <div class="mbe2">
      <h2>Sizes</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VueToggle
        label="Extra small"
        size="xs"
      />
      <VueToggle
        label="Small"
        size="sm"
      />
      <VueToggle
        label="Medium (default)"
        size="md"
      />
      <VueToggle
        label="Large"
        size="lg"
      />
      <VueToggle
        label="Extra large"
        size="xl"
      />
    </div>

    <div class="mbe2">
      <h2>Variants</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VueToggle
        label="Default variant"
        :checked="true"
      />
      <VueToggle
        label="Success"
        variant="success"
        :checked="true"
      />
      <VueToggle
        label="Warning"
        variant="warning"
        :checked="true"
      />
      <VueToggle
        label="Danger"
        variant="danger"
        :checked="true"
      />
      <VueToggle
        label="Monochrome"
        variant="monochrome"
        :checked="true"
      />
    </div>

    <div class="mbe2">
      <h2>Interactive Examples</h2>
      <p class="mbs2 mbe3">
        Demonstrates event handling with @toggle-change and v-model:checked
      </p>
    </div>
    <div class="stacked-mobile mbe4">
      <!-- Pattern 1: @toggle-change event -->
      <div>
        <VueToggle
          label="Notifications (@toggle-change)"
          :checked="notificationsEnabled"
          @toggle-change="handleToggleChange"
        />
        <p style="margin-top: 0.5rem">
          Notifications: <strong>{{ notificationsEnabled ? 'Enabled' : 'Disabled' }}</strong>
        </p>
      </div>

      <!-- Pattern 2: v-model:checked (two-way binding) -->
      <div>
        <VueToggle
          label="Dark Mode (v-model:checked)"
          v-model:checked="darkModeEnabled"
        />
        <p style="margin-top: 0.5rem">
          Dark mode: <strong>{{ darkModeEnabled ? 'On' : 'Off' }}</strong>
        </p>
      </div>

      <!-- Pattern 3: Form integration with event detail -->
      <div>
        <VueToggle
          label="Newsletter Subscription"
          name="newsletter"
          value="subscribed"
          :checked="formData.newsletter"
          @toggle-change="handleFormToggle"
        />
        <p style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--ag-text-secondary);">
          Form data: name="{{ formData.name }}", value="{{ formData.value }}", checked={{ formData.newsletter }}
        </p>
      </div>
    </div>
    <div class="mbe4 flex justify-center">
      <VueButton
        @click="darkModeEnabled = !darkModeEnabled"
        mode="primary"
        size="small"
      >
        Toggle above programmatically
      </VueButton>
    </div>

    <div class="mbe4">
      <h2>Labels, Helper Text, and Validation</h2>
      <p class="mbs2 mbe3">
        The Toggle component supports labels, helper text, required fields, and validation states.
      </p>
    </div>
    <div
      class="mbe4"
      style="max-width: 600px;"
    >
      <div class="mbe3">
        <VueToggle label="Enable notifications" />
      </div>

      <div class="mbe3">
        <VueToggle
          label="Dark mode"
          help-text="Reduces eye strain in low-light environments"
        />
      </div>

      <div class="mbe3">
        <VueToggle
          label="Two-factor authentication"
          :required="true"
          help-text="This setting is required for account security"
        />
      </div>

      <div class="mbe3">
        <VueToggle
          label="Email notifications"
          :required="true"
          :invalid="true"
          error-message="You must enable email notifications to continue"
        />
      </div>
    </div>

    <div class="mbe4">
      <h2>Label Positioning</h2>
      <p class="mbs2 mbe3">
        Control label position with <code>label-position</code>: 'top' (default), 'start', 'end', or 'bottom'.
      </p>
    </div>
    <div
      class="mbe4"
      style="max-width: 600px;"
    >
      <div class="mbe3">
        <VueToggle
          label="Top Label (Default)"
          label-position="top"
        />
      </div>

      <div class="mbe3">
        <VueToggle
          label="Start Position"
          label-position="start"
        />
      </div>

      <div class="mbe3">
        <VueToggle
          label="End Position"
          label-position="end"
        />
      </div>

      <div class="mbe3">
        <VueToggle
          label="Bottom Position"
          label-position="bottom"
          help-text="Bottom label position for alternative layouts"
        />
      </div>
    </div>

    <div class="mbe2">
      <h2>CSS Shadow Parts Customization</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <div v-html="customToggleStyles"></div>
      <VueToggle
        class="custom-toggle"
        label="Customized Toggle"
        :checked="true"
      />
    </div>
  </section>
</template>

<script>
import VueToggle from "agnosticui-core/toggle/vue";
import VueButton from "agnosticui-core/button/vue";

export default {
  name: "ToggleExamples",
  components: { VueToggle, VueButton },
  data() {
    return {
      notificationsEnabled: false,
      darkModeEnabled: false,
      formData: {
        newsletter: false,
        name: "",
        value: "",
      },
      customToggleStyles: \`
        <style>
          .custom-toggle::part(ag-toggle-button) {
            border: 2px solid var(--ag-coral-50);
            border-radius: 9999px;
            padding: var(--ag-space-2) var(--ag-space-3);
          }
          .custom-toggle::part(ag-toggle-track) {
            background-color: #f0f0f0;
          }
          .custom-toggle::part(ag-toggle-handle) {
            background-color: var(--ag-coral-200);
            border: 2px solid #fff;
            box-shadow: 0 0 5px var(--ag-coral-200);
          }
          .custom-toggle[checked]::part(ag-toggle-track) {
            background-color:var(--ag-coral-300);
          }
          .custom-toggle[checked]::part(ag-toggle-handle) {
            background-color: #fff;
          }
        </style>
      \`,
    };
  },
  methods: {
    handleToggleChange(event) {
      this.notificationsEnabled = event.checked;
      console.log("Toggle changed:", event);
    },
    handleFormToggle(event) {
      this.formData.newsletter = event.checked;
      this.formData.name = event.name;
      this.formData.value = event.value;
      console.log("Form toggle changed:", event);
    },
  },
};
<\/script>
`,K=`import { LitElement, html } from 'lit';
import 'agnosticui-core/toggle';
import 'agnosticui-core/button';

export class ToggleLitExamples extends LitElement {
  createRenderRoot() {
    return this;
  }

  static get properties() {
    return {
      notificationsEnabled: { type: Boolean, state: true },
      darkModeEnabled: { type: Boolean, state: true },
      formData: { type: Object, state: true },
    };
  }

  constructor() {
    super();
    this.notificationsEnabled = false;
    this.darkModeEnabled = false;
    this.formData = {
      newsletter: false,
      name: "",
      value: "",
    };
    this.customToggleStyles = html\`
      <style>
        .custom-toggle::part(ag-toggle-button) {
          border: 2px solid var(--ag-coral-50);
          border-radius: 9999px;
          padding: var(--ag-space-2) var(--ag-space-3);
        }
        .custom-toggle::part(ag-toggle-track) {
          background-color: #f0f0f0;
        }
        .custom-toggle::part(ag-toggle-handle) {
          background-color: var(--ag-coral-200);
          border: 2px solid #fff;
          box-shadow: 0 0 5px var(--ag-coral-200);
        }
        .custom-toggle[checked]::part(ag-toggle-track) {
          background-color: var(--ag-coral-300);
        }
        .custom-toggle[checked]::part(ag-toggle-handle) {
          background-color: #fff;
        }
      </style>
    \`;
  }

  handleToggleChange(event) {
    this.notificationsEnabled = event.detail.checked;
    console.log("Toggle changed:", event.detail);
  }
  
  handleDarkModeToggle(event) {
    this.darkModeEnabled = event.detail.checked;
  }

  handleFormToggle(event) {
    this.formData = {
      newsletter: event.detail.checked,
      name: event.detail.name,
      value: event.detail.value,
    };
    console.log("Form toggle changed:", event.detail);
  }

  toggleDarkModeProgrammatically() {
    this.darkModeEnabled = !this.darkModeEnabled;
  }
  
  render() {
    return html\`
      <section>
        <div class="mbe2">
          <h2>Default Toggles</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-toggle label="Default toggle"></ag-toggle>
          <ag-toggle label="Checked by default" checked></ag-toggle>
          <ag-toggle label="Disabled" disabled></ag-toggle>
          <ag-toggle label="Disabled and checked" checked disabled></ag-toggle>
        </div>

        <div class="mbe2">
          <h2>Sizes</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-toggle label="Extra small" size="xs"></ag-toggle>
          <ag-toggle label="Small" size="sm"></ag-toggle>
          <ag-toggle label="Medium (default)" size="md"></ag-toggle>
          <ag-toggle label="Large" size="lg"></ag-toggle>
          <ag-toggle label="Extra large" size="xl"></ag-toggle>
        </div>

        <div class="mbe2">
          <h2>Variants</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-toggle label="Default variant" checked></ag-toggle>
          <ag-toggle label="Success" variant="success" checked></ag-toggle>
          <ag-toggle label="Warning" variant="warning" checked></ag-toggle>
          <ag-toggle label="Danger" variant="danger" checked></ag-toggle>
          <ag-toggle label="Monochrome" variant="monochrome" checked></ag-toggle>
        </div>

        <div class="mbe2">
          <h2>Interactive Examples</h2>
          <p class="mbs2 mbe3">
            Demonstrates event handling with @toggle-change.
          </p>
        </div>
        <div class="stacked-mobile mbe4">
          <div>
            <ag-toggle
              label="Notifications (@toggle-change)"
              .checked=\${this.notificationsEnabled}
              @toggle-change=\${this.handleToggleChange}
            ></ag-toggle>
            <p style="margin-top: 0.5rem">
              Notifications: <strong>\${this.notificationsEnabled ? 'Enabled' : 'Disabled'}</strong>
            </p>
          </div>
          <div>
            <ag-toggle
              label="Dark Mode"
              .checked=\${this.darkModeEnabled}
              @toggle-change=\${this.handleDarkModeToggle}
            ></ag-toggle>
            <p style="margin-top: 0.5rem">
              Dark mode: <strong>\${this.darkModeEnabled ? 'On' : 'Off'}</strong>
            </p>
          </div>
          <div>
            <ag-toggle
              label="Newsletter Subscription"
              name="newsletter"
              value="subscribed"
              .checked=\${this.formData.newsletter}
              @toggle-change=\${this.handleFormToggle}
            ></ag-toggle>
            <p style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--ag-text-secondary);">
              Form data: name="\${this.formData.name}", value="\${this.formData.value}", checked=\${this.formData.newsletter}
            </p>
          </div>
        </div>
        <div class="mbe4 flex justify-center">
          <ag-button
            @click=\${this.toggleDarkModeProgrammatically}
            mode="primary"
            size="small"
          >
            Toggle above programmatically
          </ag-button>
        </div>

        <div class="mbe4">
          <h2>Labels, Helper Text, and Validation</h2>
          <p class="mbs2 mbe3">
            The Toggle component supports labels, helper text, required fields, and validation states.
          </p>
        </div>
        <div class="mbe4" style="max-width: 600px;">
          <div class="mbe3">
            <ag-toggle label="Enable notifications"></ag-toggle>
          </div>
          <div class="mbe3">
            <ag-toggle
              label="Dark mode"
              help-text="Reduces eye strain in low-light environments"
            ></ag-toggle>
          </div>
          <div class="mbe3">
            <ag-toggle
              label="Two-factor authentication"
              required
              help-text="This setting is required for account security"
            ></ag-toggle>
          </div>
          <div class="mbe3">
            <ag-toggle
              label="Email notifications"
              required
              invalid
              error-message="You must enable email notifications to continue"
            ></ag-toggle>
          </div>
        </div>

        <div class="mbe4">
          <h2>Label Positioning</h2>
          <p class="mbs2 mbe3">
            Control label position with <code>label-position</code>: 'top' (default), 'start', 'end', or 'bottom'.
          </p>
        </div>
        <div class="mbe4" style="max-width: 600px;">
          <div class="mbe3">
            <ag-toggle label="Top Label (Default)" label-position="top"></ag-toggle>
          </div>
          <div class="mbe3">
            <ag-toggle label="Start Position" label-position="start"></ag-toggle>
          </div>
          <div class="mbe3">
            <ag-toggle label="End Position" label-position="end"></ag-toggle>
          </div>
          <div class="mbe3">
            <ag-toggle
              label="Bottom Position"
              label-position="bottom"
              help-text="Bottom label position for alternative layouts"
            ></ag-toggle>
          </div>
        </div>

        <div class="mbe2">
          <h2>CSS Shadow Parts Customization</h2>
        </div>
        <div class="stacked-mobile mbe4">
          \${this.customToggleStyles}
          <ag-toggle
            class="custom-toggle"
            label="Customized Toggle"
            checked
          ></ag-toggle>
        </div>
      </section>
    \`;
  }
}
customElements.define('toggle-lit-examples', ToggleLitExamples);
`,Q=`import { useState } from "react";
import { ReactToggle } from "agnosticui-core/toggle/react";
import { ReactButton } from "agnosticui-core/button/react";

export default function ToggleReactExamples() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [formData, setFormData] = useState({
    newsletter: false,
    name: "",
    value: "",
  });

  const handleToggleChange = (event) => {
    setNotificationsEnabled(event.checked);
    console.log("Toggle changed:", event);
  };

  const handleFormToggle = (event) => {
    setFormData({
      newsletter: event.checked,
      name: event.name,
      value: event.value,
    });
    console.log("Form toggle changed:", event);
  };
  
  const customToggleStyles = \`
    <style>
      .custom-toggle::part(ag-toggle-button) {
        border: 2px solid var(--ag-coral-50);
        border-radius: 9999px;
        padding: var(--ag-space-2) var(--ag-space-3);
      }
      .custom-toggle::part(ag-toggle-track) {
        background-color: #f0f0f0;
      }
      .custom-toggle::part(ag-toggle-handle) {
        background-color: var(--ag-coral-200);
        border: 2px solid #fff;
        box-shadow: 0 0 5px var(--ag-coral-200);
      }
      .custom-toggle[checked]::part(ag-toggle-track) {
        background-color:var(--ag-coral-300);
      }
      .custom-toggle[checked]::part(ag-toggle-handle) {
        background-color: #fff;
      }
    </style>
  \`;

  return (
    <section>
      <div className="mbe2">
        <h2>Default Toggles</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactToggle label="Default toggle" />
        <ReactToggle
          label="Checked by default"
          checked={true}
        />
        <ReactToggle
          label="Disabled"
          disabled
        />
        <ReactToggle
          label="Disabled and checked"
          checked={true}
          disabled
        />
      </div>

      <div className="mbe2">
        <h2>Sizes</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactToggle
          label="Extra small"
          size="xs"
        />
        <ReactToggle
          label="Small"
          size="sm"
        />
        <ReactToggle
          label="Medium (default)"
          size="md"
        />
        <ReactToggle
          label="Large"
          size="lg"
        />
        <ReactToggle
          label="Extra large"
          size="xl"
        />
      </div>

      <div className="mbe2">
        <h2>Variants</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactToggle
          label="Default variant"
          checked={true}
        />
        <ReactToggle
          label="Success"
          variant="success"
          checked={true}
        />
        <ReactToggle
          label="Warning"
          variant="warning"
          checked={true}
        />
        <ReactToggle
          label="Danger"
          variant="danger"
          checked={true}
        />
        <ReactToggle
          label="Monochrome"
          variant="monochrome"
          checked={true}
        />
      </div>

      <div className="mbe2">
        <h2>Interactive Examples</h2>
        <p className="mbs2 mbe3">
          Demonstrates event handling with onToggleChange.
        </p>
      </div>
      <div className="stacked-mobile mbe4">
        <div>
          <ReactToggle
            label="Notifications (onToggleChange)"
            checked={notificationsEnabled}
            onToggleChange={handleToggleChange}
          />
          <p style={{ marginTop: "0.5rem" }}>
            Notifications: <strong>{notificationsEnabled ? 'Enabled' : 'Disabled'}</strong>
          </p>
        </div>
        <div>
          <ReactToggle
            label="Dark Mode"
            checked={darkModeEnabled}
            onToggleChange={(e) => setDarkModeEnabled(e.checked)}
          />
          <p style={{ marginTop: "0.5rem" }}>
            Dark mode: <strong>{darkModeEnabled ? 'On' : 'Off'}</strong>
          </p>
        </div>
        <div>
          <ReactToggle
            label="Newsletter Subscription"
            name="newsletter"
            value="subscribed"
            checked={formData.newsletter}
            onToggleChange={handleFormToggle}
          />
          <p style={{ marginTop: "0.5rem", fontSize: "0.875rem", color: "var(--ag-text-secondary)" }}>
            Form data: name="{formData.name}", value="{formData.value}", checked={String(formData.newsletter)}
          </p>
        </div>
      </div>
      <div className="mbe4 flex justify-center">
        <ReactButton
          onClick={() => setDarkModeEnabled(!darkModeEnabled)}
          mode="primary"
          size="small"
        >
          Toggle above programmatically
        </ReactButton>
      </div>

      <div className="mbe4">
        <h2>Labels, Helper Text, and Validation</h2>
        <p className="mbs2 mbe3">
          The Toggle component supports labels, helper text, required fields, and validation states.
        </p>
      </div>
      <div
        className="mbe4"
        style={{ maxWidth: "600px" }}
      >
        <div className="mbe3">
          <ReactToggle label="Enable notifications" />
        </div>

        <div className="mbe3">
          <ReactToggle
            label="Dark mode"
            helpText="Reduces eye strain in low-light environments"
          />
        </div>

        <div className="mbe3">
          <ReactToggle
            label="Two-factor authentication"
            required={true}
            helpText="This setting is required for account security"
          />
        </div>

        <div className="mbe3">
          <ReactToggle
            label="Email notifications"
            required={true}
            invalid={true}
            errorMessage="You must enable email notifications to continue"
          />
        </div>
      </div>

      <div className="mbe4">
        <h2>Label Positioning</h2>
        <p className="mbs2 mbe3">
          Control label position with <code>labelPosition</code>: 'top' (default), 'start', 'end', or 'bottom'.
        </p>
      </div>
      <div
        className="mbe4"
        style={{ maxWidth: "600px" }}
      >
        <div className="mbe3">
          <ReactToggle
            label="Top Label (Default)"
            labelPosition="top"
          />
        </div>

        <div className="mbe3">
          <ReactToggle
            label="Start Position"
            labelPosition="start"
          />
        </div>

        <div className="mbe3">
          <ReactToggle
            label="End Position"
            labelPosition="end"
          />
        </div>

        <div className="mbe3">
          <ReactToggle
            label="Bottom Position"
            labelPosition="bottom"
            helpText="Bottom label position for alternative layouts"
          />
        </div>
      </div>

      <div className="mbe2">
        <h2>CSS Shadow Parts Customization</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <div dangerouslySetInnerHTML={{ __html: customToggleStyles }}></div>
        <ReactToggle
          className="custom-toggle"
          label="Customized Toggle"
          checked={true}
        />
      </div>
    </section>
  );
}
`,ps=JSON.parse('{"title":"Toggle","description":"","frontmatter":{},"headers":[],"relativePath":"components/toggle.md","filePath":"components/toggle.md"}'),X={name:"components/toggle.md"},os=Object.assign(X,{setup(l){return(i,n)=>(m(),c("div",null,[n[1]||(n[1]=s("h1",{id:"toggle",tabindex:"-1"},[h("Toggle "),s("a",{class:"header-anchor",href:"#toggle","aria-label":'Permalink to "Toggle"'},"​")],-1)),a(b),n[2]||(n[2]=s("p",null,"The Toggle component provides an accessible binary switch for on/off states, implementing the WAI-ARIA Switch pattern.",-1)),n[3]||(n[3]=s("h2",{id:"examples",tabindex:"-1"},[h("Examples "),s("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),a(B,{component:"toggle","vue-code":p(J),"lit-code":p(K),"react-code":p(Q)},{vue:o(()=>[a(U)]),lit:o(()=>[...n[0]||(n[0]=[s("toggle-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),n[4]||(n[4]=E(`<h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>label</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Label text for the toggle</td></tr><tr><td><code>labelPosition</code></td><td><code>&#39;top&#39; | &#39;start&#39; | &#39;end&#39; | &#39;bottom&#39;</code></td><td><code>&#39;top&#39;</code></td><td>Position of the label relative to the toggle</td></tr><tr><td><code>labelHidden</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Visually hide the label (still accessible to screen readers)</td></tr><tr><td><code>noLabel</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Remove label completely</td></tr><tr><td><code>checked</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Whether the toggle is checked/on</td></tr><tr><td><code>size</code></td><td><code>&#39;xs&#39; | &#39;sm&#39; | &#39;md&#39; | &#39;lg&#39; | &#39;xl&#39;</code></td><td><code>&#39;md&#39;</code></td><td>Size of the toggle switch</td></tr><tr><td><code>variant</code></td><td><code>&#39;default&#39; | &#39;success&#39; | &#39;warning&#39; | &#39;danger&#39; | &#39;monochrome&#39;</code></td><td><code>&#39;default&#39;</code></td><td>Color variant when checked</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Whether the toggle is disabled</td></tr><tr><td><code>readonly</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Toggle appears interactive but cannot be changed</td></tr><tr><td><code>required</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Required field indicator</td></tr><tr><td><code>invalid</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Invalid state for validation feedback</td></tr><tr><td><code>errorMessage</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Error message text displayed when invalid</td></tr><tr><td><code>helpText</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Helper text displayed below toggle</td></tr><tr><td><code>name</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Name for form integration</td></tr><tr><td><code>value</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Value when toggle is checked (for forms)</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Event</th><th>Framework</th><th>Detail</th><th>Description</th></tr></thead><tbody><tr><td><code>click</code></td><td>Vue: <code>@click</code><br>React: <code>onClick</code><br>Lit: <code>@click</code></td><td><code>MouseEvent</code></td><td>Fired when the toggle is clicked.</td></tr><tr><td><code>toggle-change</code></td><td>Vue: <code>@toggle-change</code><br>React: <code>onToggleChange</code><br>Lit: <code>@toggle-change</code></td><td><code>{ checked: boolean, name: string, value: string }</code></td><td>Fired when toggle state changes. Contains the new checked state and form integration data.</td></tr></tbody></table><p><strong>Note:</strong> The Toggle component supports <strong>dual-dispatch event propagation</strong>: it dispatches both DOM CustomEvents (usable with <code>addEventListener</code>) and invokes callback props (<code>.onToggleChange</code>), giving you flexibility in how you handle events.</p><p><strong>Type:</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> type</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> ToggleChangeEvent</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> CustomEvent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">ToggleChangeEventDetail</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> interface</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> ToggleChangeEventDetail</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  checked</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> boolean</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;  </span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">// New checked state</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  name</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> string</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;      </span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">// Form name (if provided)</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> string</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;     </span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">// Form value (if provided)</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><h3 id="event-handling-patterns" tabindex="-1">Event Handling Patterns <a class="header-anchor" href="#event-handling-patterns" aria-label="Permalink to &quot;Event Handling Patterns&quot;">​</a></h3><details class="details custom-block"><summary>Lit / Web Components</summary><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">// Pattern 1: addEventListener (DOM event)</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> toggle</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> document.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;ag-toggle&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">toggle.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;toggle-change&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Checked:&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e.detail.checked);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Form name:&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e.detail.name);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Form value:&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e.detail.value);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">// Pattern 2: Callback prop</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">html</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">\`&lt;ag-toggle</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">  label=&quot;Enable feature&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">  .onToggleChange=\${</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">e</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> CustomEvent</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Callback fired:&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e.detail);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">}</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&gt;&lt;/ag-toggle&gt;\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">// Pattern 3: Both (dual-dispatch)</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">html</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">\`&lt;ag-toggle</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">  label=&quot;With both&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">  @toggle-change=\${</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">e</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> console</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;DOM event&#39;</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">)</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">}</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">  .onToggleChange=\${</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">e</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> console</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Callback&#39;</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">)</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">}</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&gt;&lt;/ag-toggle&gt;\`</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ReactToggle } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/toggle/react&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">// React automatically maps toggle-change to onToggleChange</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactToggle</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Enable notifications&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  onToggleChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Checked:&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e.detail.checked);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Name:&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e.detail.name);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Value:&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e.detail.value);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  onClick</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Native click also available:&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">/&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">  &lt;!-- Pattern 1: @toggle-change event --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueToggle</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Enable feature&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    @toggle-change</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;handleToggle&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">  &lt;!-- Pattern 2: v-model:checked (two-way binding) --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueToggle</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Dark mode&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    v-model:checked</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;isDarkMode&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">  &lt;!-- Pattern 3: Both together --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueToggle</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;With both&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    v-model:checked</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;isEnabled&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    @toggle-change</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;handleToggle&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> setup</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ref } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;vue&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> isDarkMode</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> ref</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> isEnabled</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> ref</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">// Event emits detail object (not full CustomEvent)</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> handleToggle</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">detail</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Checked:&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, detail.checked);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Name:&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, detail.name);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Value:&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, detail.value);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">};</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><h3 id="event-detail-structure" tabindex="-1">Event Detail Structure <a class="header-anchor" href="#event-detail-structure" aria-label="Permalink to &quot;Event Detail Structure&quot;">​</a></h3><p>The <code>toggle-change</code> event provides the following detail payload:</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">interface</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> ToggleChangeEventDetail</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  checked</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> boolean</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;  </span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">// New checked state</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  name</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> string</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;      </span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">// Form name (if provided)</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> string</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;     </span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">// Form value (if provided)</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><h2 id="accessibility" tabindex="-1">Accessibility <a class="header-anchor" href="#accessibility" aria-label="Permalink to &quot;Accessibility&quot;">​</a></h2><p>The Toggle component implements the <a href="https://www.w3.org/WAI/ARIA/apg/patterns/switch/" target="_blank" rel="noreferrer">WAI-ARIA Switch pattern</a>:</p><ul><li>Uses semantic <code>&lt;button&gt;</code> element with <code>role=&quot;switch&quot;</code></li><li>Communicates state via <code>aria-checked</code></li><li>Requires accessible name via <code>label</code> or <code>aria-label</code> prop</li><li>Keyboard accessible (Space/Enter to toggle)</li><li>Screen reader announces &quot;On&quot;/&quot;Off&quot; state</li><li>Minimum 44px touch target for mobile accessibility</li><li>Clear focus indicators for keyboard navigation</li></ul><h2 id="form-integration" tabindex="-1">Form Integration <a class="header-anchor" href="#form-integration" aria-label="Permalink to &quot;Form Integration&quot;">​</a></h2><p>Use the <code>name</code> and <code>value</code> props to integrate with forms:</p><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">form</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> @submit.prevent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;handleSubmit&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueToggle</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Subscribe to newsletter&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;newsletter&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;yes&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :checked</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;formData.newsletter&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      @toggle-change</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;handleChange&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueButton</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;submit&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Submit&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueButton</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">form</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> {</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">  data</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">    return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      formData: {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        newsletter: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    };</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  methods: {</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">    handleChange</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">event</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.formData.newsletter </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> event.checked;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    },</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">    handleSubmit</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Submit:&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.formData);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { useState } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;react&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> function</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> Form</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">formData</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">setFormData</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">({ newsletter: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> handleChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">event</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> CustomEvent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">    setFormData</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">({ newsletter: event.detail.checked });</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> handleSubmit</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> React</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">FormEvent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    e.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">preventDefault</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">();</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Submit:&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, formData);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">form</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> onSubmit</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">handleSubmit</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactToggle</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Subscribe to newsletter&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        name</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;newsletter&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;yes&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        checked</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">formData.newsletter</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onToggleChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">handleChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;submit&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Submit&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">form</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></details><details class="details custom-block"><summary>Lit (Web Components)</summary><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">form</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> id</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;myForm&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-toggle</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    id</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;newsletter-toggle&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Subscribe to newsletter&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;newsletter&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;yes&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-toggle</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;submit&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Submit&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">form</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;module&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  let</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> formData </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { newsletter: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> toggle</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> document.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;#newsletter-toggle&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  toggle?.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;toggle-change&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">event</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    formData.newsletter </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> event.detail.checked;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  document.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;#myForm&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)?.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;submit&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    e.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">preventDefault</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">();</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Submit:&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, formData);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  });</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><h2 id="css-shadow-parts" tabindex="-1">CSS Shadow Parts <a class="header-anchor" href="#css-shadow-parts" aria-label="Permalink to &quot;CSS Shadow Parts&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Part</th><th>Description</th></tr></thead><tbody><tr><td><code>ag-toggle-button</code></td><td>The main button element for the toggle.</td></tr><tr><td><code>ag-toggle-track</code></td><td>The track of the toggle switch.</td></tr><tr><td><code>ag-toggle-handle</code></td><td>The handle of the toggle switch.</td></tr></tbody></table><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.custom-toggle</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-toggle-button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">2</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> solid</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> #bada55</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border-radius</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">9999</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.custom-toggle</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-toggle-track</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background-color</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#f0f0f0</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.custom-toggle</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-toggle-handle</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background-color</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#bada55</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">2</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> solid</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> #fff</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  box-shadow</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 0</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 5</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> #bada55</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.custom-toggle</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">[</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">checked</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">]::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-toggle-track</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background-color</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#bada55</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.custom-toggle</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">[</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">checked</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">]::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-toggle-handle</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background-color</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#fff</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div>`,26))]))}});export{ps as __pageData,os as default};
