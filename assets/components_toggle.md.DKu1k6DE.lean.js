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
`,ps=JSON.parse('{"title":"Toggle","description":"","frontmatter":{},"headers":[],"relativePath":"components/toggle.md","filePath":"components/toggle.md"}'),X={name:"components/toggle.md"},os=Object.assign(X,{setup(l){return(i,n)=>(m(),c("div",null,[n[1]||(n[1]=s("h1",{id:"toggle",tabindex:"-1"},[h("Toggle "),s("a",{class:"header-anchor",href:"#toggle","aria-label":'Permalink to "Toggle"'},"​")],-1)),a(b),n[2]||(n[2]=s("p",null,"The Toggle component provides an accessible binary switch for on/off states, implementing the WAI-ARIA Switch pattern.",-1)),n[3]||(n[3]=s("h2",{id:"examples",tabindex:"-1"},[h("Examples "),s("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),a(B,{component:"toggle","vue-code":p(J),"lit-code":p(K),"react-code":p(Q)},{vue:o(()=>[a(U)]),lit:o(()=>[...n[0]||(n[0]=[s("toggle-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),n[4]||(n[4]=E("",26))]))}});export{ps as __pageData,os as default};
