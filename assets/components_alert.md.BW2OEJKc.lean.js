var E=Object.defineProperty;var B=(h,s,e)=>s in h?E(h,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):h[s]=e;var c=(h,s,e)=>B(h,typeof s!="symbol"?s+"":s,e);import{A as v}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{B as b}from"./chunks/VueAlert.vue_vue_type_script_setup_true_lang-BSEoqQWL.CLUTh94c.js";import{_ as D,C as u,c as g,o as r,j as l,G as i,w as a,a as n,b as A,e as d,ae as q,k as o}from"./chunks/framework.NAAYCHZu.js";import{I as f}from"./chunks/info.CjSjj6Py.js";import{F as w}from"./chunks/FrameworkExample.Cm-JbUj-.js";import{a as x,x as F}from"./chunks/Button.CFkPNK98.js";import"./chunks/Alert.CU4CH75e.js";import"./chunks/createLucideIcon.B61Wqv9x.js";import"./chunks/state-CovhUvdr.DWhhlYib.js";import"./chunks/sdk.m.DhOmSlC9.js";import"./chunks/Icon.DjToxxjJ.js";import"./chunks/CloseButton.BYeeZuwt.js";const S={name:"AlertExamples",components:{VueAlert:b,Info:f},data(){return{showSuccessAlert:!0,showWarningAlert:!0}},methods:{handleWarningDismiss(h){console.log("Warning dismissed, variant:",h.detail.variant),this.showWarningAlert=!1}}},R={class:"stacked"},V={class:"stacked"},W={class:"stacked"},N={class:"flex-inline items-center justify-center"},L={class:"flex-inline items-center justify-center"},M={class:"flex-inline items-center justify-center"},j={class:"flex-inline items-center justify-center"},I={class:"flex-inline items-center justify-center"},P={class:"flex-inline items-center justify-center"},z={class:"flex-inline items-center justify-center"},T={class:"flex-inline items-center justify-center"},$={class:"stacked"},O={class:"stacked mbe4"},Y={class:"stacked mbe4"};function U(h,s,e,Q,p,m){const t=u("VueAlert"),k=u("Info");return r(),g("section",null,[s[39]||(s[39]=l("div",{class:"mbe4"},[l("h2",null,"Alerts")],-1)),l("div",R,[i(t,{class:"mbe2"},{default:a(()=>[...s[3]||(s[3]=[n("Default alert",-1)])]),_:1}),i(t,{class:"mbe2",variant:"success"},{default:a(()=>[...s[4]||(s[4]=[n("Success alert",-1)])]),_:1}),i(t,{class:"mbe2",variant:"info"},{default:a(()=>[...s[5]||(s[5]=[n("Info alert",-1)])]),_:1}),i(t,{class:"mbe2",variant:"primary"},{default:a(()=>[...s[6]||(s[6]=[n("Primary alert",-1)])]),_:1}),i(t,{class:"mbe2",variant:"warning"},{default:a(()=>[...s[7]||(s[7]=[n("Warning alert",-1)])]),_:1}),i(t,{class:"mbe2",variant:"error"},{default:a(()=>[...s[8]||(s[8]=[n("Error alert",-1)])]),_:1}),i(t,{class:"mbe2",variant:"danger"},{default:a(()=>[...s[9]||(s[9]=[n("Danger alert",-1)])]),_:1}),i(t,{class:"mbe2",variant:"monochrome"},{default:a(()=>[...s[10]||(s[10]=[n("Monochrome alert",-1)])]),_:1})]),s[40]||(s[40]=l("div",{class:"mbe4"},[l("h2",null,"Bordered")],-1)),l("div",V,[i(t,{class:"mbe2",bordered:""},{default:a(()=>[...s[11]||(s[11]=[n("Default alert",-1)])]),_:1}),i(t,{class:"mbe2",bordered:"",variant:"success"},{default:a(()=>[...s[12]||(s[12]=[n("Success alert",-1)])]),_:1}),i(t,{class:"mbe2",bordered:"",variant:"info"},{default:a(()=>[...s[13]||(s[13]=[n("Info alert",-1)])]),_:1}),i(t,{class:"mbe2",bordered:"",variant:"primary"},{default:a(()=>[...s[14]||(s[14]=[n("Primary alert",-1)])]),_:1}),i(t,{class:"mbe2",bordered:"",variant:"warning"},{default:a(()=>[...s[15]||(s[15]=[n("Warning alert",-1)])]),_:1}),i(t,{class:"mbe2",bordered:"",variant:"error"},{default:a(()=>[...s[16]||(s[16]=[n("Error alert",-1)])]),_:1}),i(t,{class:"mbe2",bordered:"",variant:"danger"},{default:a(()=>[...s[17]||(s[17]=[n("Danger alert",-1)])]),_:1}),i(t,{class:"mbe2",bordered:"",variant:"monochrome"},{default:a(()=>[...s[18]||(s[18]=[n("Monochrome alert",-1)])]),_:1})]),s[41]||(s[41]=l("div",{class:"mbe4"},[l("h2",null,"Bordered Left with Icon")],-1)),l("div",W,[i(t,{class:"mbe2",borderedLeft:""},{default:a(()=>[l("div",N,[i(k,{color:"var(--ag-secondary)",size:18,class:"mie2"}),s[19]||(s[19]=n(" Default alert ",-1))])]),_:1}),i(t,{class:"mbe2",borderedLeft:"",variant:"success"},{default:a(()=>[l("div",L,[i(k,{color:"var(--ag-success)",size:18,class:"mie2"}),s[20]||(s[20]=n("Success alert ",-1))])]),_:1}),i(t,{class:"mbe2",borderedLeft:"",variant:"info"},{default:a(()=>[l("div",M,[i(k,{color:"var(--ag-secondary)",size:18,class:"mie2"}),s[21]||(s[21]=n("Info alert ",-1))])]),_:1}),i(t,{class:"mbe2",borderedLeft:"",variant:"primary"},{default:a(()=>[l("div",j,[i(k,{color:"var(--ag-primary)",size:18,class:"mie2"}),s[22]||(s[22]=n("Primary alert ",-1))])]),_:1}),i(t,{class:"mbe2",borderedLeft:"",variant:"warning"},{default:a(()=>[l("div",I,[i(k,{color:"var(--ag-warning)",size:18,class:"mie2"}),s[23]||(s[23]=n("Warning alert ",-1))])]),_:1}),i(t,{class:"mbe2",borderedLeft:"",variant:"error"},{default:a(()=>[l("div",P,[i(k,{color:"var(--ag-danger)",size:18,class:"mie2"}),s[24]||(s[24]=n("Error alert ",-1))])]),_:1}),i(t,{class:"mbe2",borderedLeft:"",variant:"danger"},{default:a(()=>[l("div",z,[i(k,{color:"var(--ag-danger)",size:18,class:"mie2"}),s[25]||(s[25]=n("Danger alert ",-1))])]),_:1}),i(t,{class:"mbe2",borderedLeft:"",variant:"monochrome"},{default:a(()=>[l("div",T,[i(k,{color:"var(--ag-text-primary)",size:18,class:"mie2"}),s[26]||(s[26]=n("Monochrome alert ",-1))])]),_:1})]),s[42]||(s[42]=l("div",{class:"mbe4"},[l("h2",null,"Rounded")],-1)),l("div",$,[i(t,{class:"mbe2",rounded:""},{default:a(()=>[...s[27]||(s[27]=[n("Default alert",-1)])]),_:1}),i(t,{class:"mbe2",rounded:"",variant:"success"},{default:a(()=>[...s[28]||(s[28]=[n("Success alert",-1)])]),_:1}),i(t,{class:"mbe2",rounded:"",variant:"info"},{default:a(()=>[...s[29]||(s[29]=[n("Info alert",-1)])]),_:1}),i(t,{class:"mbe2",rounded:"",variant:"primary"},{default:a(()=>[...s[30]||(s[30]=[n("Primary alert",-1)])]),_:1}),i(t,{class:"mbe2",rounded:"",variant:"warning"},{default:a(()=>[...s[31]||(s[31]=[n("Warning alert",-1)])]),_:1}),i(t,{class:"mbe2",rounded:"",variant:"error"},{default:a(()=>[...s[32]||(s[32]=[n("Error alert",-1)])]),_:1}),i(t,{class:"mbe2",rounded:"",variant:"danger"},{default:a(()=>[...s[33]||(s[33]=[n("Danger alert",-1)])]),_:1}),i(t,{class:"mbe2",rounded:"",variant:"monochrome"},{default:a(()=>[...s[34]||(s[34]=[n("Monochrome alert",-1)])]),_:1})]),s[43]||(s[43]=l("div",{class:"mbe4"},[l("h2",null,"Dismissible"),l("p",{class:"mbe2",style:{color:"var(--ag-text-secondary)","font-size":"0.875rem"}}," Alerts can be dismissed by the user with a close button. ")],-1)),l("div",O,[p.showSuccessAlert?(r(),A(t,{key:0,class:"mbe2",variant:"success",dismissible:"",onAlertDismiss:s[0]||(s[0]=y=>p.showSuccessAlert=!1)},{default:a(()=>[...s[35]||(s[35]=[l("strong",null,"Success!",-1),n(" Your changes have been saved. Click the × to dismiss. ",-1)])]),_:1})):d("",!0),p.showSuccessAlert?d("",!0):(r(),g("button",{key:1,onClick:s[1]||(s[1]=y=>p.showSuccessAlert=!0),class:"mbe2",style:{padding:"0.5rem 1rem",cursor:"pointer"}}," Show Success Alert ")),p.showWarningAlert?(r(),A(t,{key:2,class:"mbe2",variant:"warning",dismissible:"",rounded:"",onAlertDismiss:m.handleWarningDismiss},{default:a(()=>[...s[36]||(s[36]=[l("strong",null,"Warning!",-1),n(" This action may have unintended consequences. ",-1)])]),_:1},8,["onAlertDismiss"])):d("",!0),p.showWarningAlert?d("",!0):(r(),g("button",{key:3,onClick:s[2]||(s[2]=y=>p.showWarningAlert=!0),style:{padding:"0.5rem 1rem",cursor:"pointer"}}," Show Warning Alert "))]),s[44]||(s[44]=l("div",{class:"mbe4"},[l("h2",null,"CSS Parts Customization"),l("p",{class:"mbe2",style:{color:"var(--ag-text-secondary)","font-size":"0.875rem"}}," Customize alert appearance using CSS Shadow Parts without breaking encapsulation. ")],-1)),l("div",Y,[i(t,{class:"custom-gradient-alert mbe2"},{default:a(()=>[...s[37]||(s[37]=[n(" This alert uses a vibrant gradient background with custom shadows ",-1)])]),_:1}),i(t,{class:"custom-card-alert mbe2"},{default:a(()=>[...s[38]||(s[38]=[n(" Card-style alert with elevation and hover effect ",-1)])]),_:1})])])}const G=D(S,[["render",U],["__scopeId","data-v-b3c46f90"]]);class C extends x{createRenderRoot(){return this}constructor(){super(),this.showSuccessAlert=!0,this.showWarningAlert=!0}handleWarningDismiss(s){console.log("Warning dismissed, variant:",s.detail.variant),this.showWarningAlert=!1}render(){return F`
      <section>
        <div class="mbe4">
          <h2>Alerts</h2>
        </div>
        <div class="stacked">
          <ag-alert class="mbe2">Default alert</ag-alert>
          <ag-alert class="mbe2" variant="success">Success alert</ag-alert>
          <ag-alert class="mbe2" variant="info">Info alert</ag-alert>
          <ag-alert class="mbe2" variant="primary">Primary alert</ag-alert>
          <ag-alert class="mbe2" variant="warning">Warning alert</ag-alert>
          <ag-alert class="mbe2" variant="error">Error alert</ag-alert>
          <ag-alert class="mbe2" variant="danger">Danger alert</ag-alert>
          <ag-alert class="mbe2" variant="monochrome">Monochrome alert</ag-alert>
        </div>

        <div class="mbe4">
          <h2>Bordered</h2>
        </div>
        <div class="stacked">
          <ag-alert class="mbe2" bordered>Default alert</ag-alert>
          <ag-alert class="mbe2" bordered variant="success">Success alert</ag-alert>
          <ag-alert class="mbe2" bordered variant="info">Info alert</ag-alert>
          <ag-alert class="mbe2" bordered variant="primary">Primary alert</ag-alert>
          <ag-alert class="mbe2" bordered variant="warning">Warning alert</ag-alert>
          <ag-alert class="mbe2" bordered variant="error">Error alert</ag-alert>
          <ag-alert class="mbe2" bordered variant="danger">Danger alert</ag-alert>
          <ag-alert class="mbe2" bordered variant="monochrome">Monochrome alert</ag-alert>
        </div>

        <div class="mbe4">
          <h2>Bordered Left with Icon</h2>
        </div>
        <div class="stacked">
          <ag-alert class="mbe2" borderedleft>
            <div class="flex-inline items-center justify-center">
              <svg
                class="mie2"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--ag-secondary)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              Default alert
            </div>
          </ag-alert>
          <ag-alert class="mbe2" borderedleft variant="success">
            <div class="flex-inline items-center justify-center">
              <svg
                class="mie2"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--ag-success)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              Success alert
            </div>
          </ag-alert>
          <ag-alert class="mbe2" borderedleft variant="info">
            <div class="flex-inline items-center justify-center">
              <svg
                class="mie2"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--ag-secondary)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              Info alert
            </div>
          </ag-alert>
          <ag-alert class="mbe2" borderedleft variant="primary">
            <div class="flex-inline items-center justify-center">
              <svg
                class="mie2"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--ag-primary)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              Primary alert
            </div>
          </ag-alert>
          <ag-alert class="mbe2" borderedleft variant="warning">
            <div class="flex-inline items-center justify-center">
              <svg
                class="mie2"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--ag-warning)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              Warning alert
            </div>
          </ag-alert>
          <ag-alert class="mbe2" borderedleft variant="error">
            <div class="flex-inline items-center justify-center">
              <svg
                class="mie2"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--ag-danger)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              Error alert
            </div>
          </ag-alert>
          <ag-alert class="mbe2" borderedleft variant="danger">
            <div class="flex-inline items-center justify-center">
              <svg
                class="mie2"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--ag-danger)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              Danger alert
            </div>
          </ag-alert>
          <ag-alert class="mbe2" borderedleft variant="monochrome">
            <div class="flex-inline items-center justify-center">
              <svg
                class="mie2"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--ag-text-primary)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              Monochrome alert
            </div>
          </ag-alert>
        </div>

        <div class="mbe4">
          <h2>Rounded</h2>
        </div>
        <div class="stacked">
          <ag-alert class="mbe2" rounded>Default alert</ag-alert>
          <ag-alert class="mbe2" rounded variant="success">Success alert</ag-alert>
          <ag-alert class="mbe2" rounded variant="info">Info alert</ag-alert>
          <ag-alert class="mbe2" rounded variant="primary">Primary alert</ag-alert>
          <ag-alert class="mbe2" rounded variant="warning">Warning alert</ag-alert>
          <ag-alert class="mbe2" rounded variant="error">Error alert</ag-alert>
          <ag-alert class="mbe2" rounded variant="danger">Danger alert</ag-alert>
          <ag-alert class="mbe2" rounded variant="monochrome">Monochrome alert</ag-alert>
        </div>

        <div class="mbe4">
          <h2>Dismissible</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Alerts can be dismissed by the user with a close button.
          </p>
        </div>
        <div class="stacked mbe4">
          ${this.showSuccessAlert?F`
                <ag-alert
                  class="mbe2"
                  variant="success"
                  dismissible
                  @alert-dismiss=${()=>this.showSuccessAlert=!1}
                >
                  <strong>Success!</strong> Your changes have been saved. Click
                  the × to dismiss.
                </ag-alert>
              `:F`
                <button
                  @click=${()=>this.showSuccessAlert=!0}
                  class="mbe2"
                  style="padding: 0.5rem 1rem; cursor: pointer;"
                >
                  Show Success Alert
                </button>
              `}
          ${this.showWarningAlert?F`
                <ag-alert
                  class="mbe2"
                  variant="warning"
                  dismissible
                  rounded
                  @alert-dismiss=${s=>this.handleWarningDismiss(s)}
                >
                  <strong>Warning!</strong> This action may have unintended
                  consequences.
                </ag-alert>
              `:F`
                <button
                  @click=${()=>this.showWarningAlert=!0}
                  style="padding: 0.5rem 1rem; cursor: pointer;"
                >
                  Show Warning Alert
                </button>
              `}
        </div>

        <div class="mbe4">
          <h2>CSS Parts Customization</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Customize alert appearance using CSS Shadow Parts without breaking
            encapsulation.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-alert class="custom-gradient-alert mbe2">
            This alert uses a vibrant gradient background with custom shadows
          </ag-alert>
          <ag-alert class="custom-card-alert mbe2">
            Card-style alert with elevation and hover effect
          </ag-alert>
        </div>

        <style>
          /* CSS Parts customization examples */

          /* Gradient alert style */
          .custom-gradient-alert::part(ag-alert) {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1.5rem;
            border-radius: 12px;
            border: none;
            box-shadow: 0 8px 16px rgba(102, 126, 234, 0.3);
            font-weight: 600;
          }

          /* Card-style elevated alert */
          .custom-card-alert::part(ag-alert) {
            background: white;
            color: #333;
            padding: 1.5rem;
            border-radius: 16px;
            border: 1px solid #e5e7eb;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .custom-card-alert::part(ag-alert):hover {
            transform: translateY(-2px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
              0 10px 10px -5px rgba(0, 0, 0, 0.04);
          }
        </style>
      </section>
    `}}c(C,"properties",{showSuccessAlert:{type:Boolean},showWarningAlert:{type:Boolean}});customElements.define("alert-lit-examples",C);const _=`<template>
  <section>
    <div class="mbe4">
      <h2>Alerts</h2>
    </div>
    <div class="stacked">
      <VueAlert class="mbe2">Default alert</VueAlert>
      <VueAlert
        class="mbe2"
        variant="success"
      >Success alert</VueAlert>
      <VueAlert
        class="mbe2"
        variant="info"
      >Info alert</VueAlert>
      <VueAlert
        class="mbe2"
        variant="primary"
      >Primary alert</VueAlert>
      <VueAlert
        class="mbe2"
        variant="warning"
      >Warning alert</VueAlert>
      <VueAlert
        class="mbe2"
        variant="error"
      >Error alert</VueAlert>
      <VueAlert
        class="mbe2"
        variant="danger"
      >Danger alert</VueAlert>
      <VueAlert
        class="mbe2"
        variant="monochrome"
      >Monochrome alert</VueAlert>
    </div>
    <div class="mbe4">
      <h2>Bordered</h2>
    </div>
    <div class="stacked">
      <VueAlert
        class="mbe2"
        bordered
      >Default alert</VueAlert>
      <VueAlert
        class="mbe2"
        bordered
        variant="success"
      >Success alert</VueAlert>
      <VueAlert
        class="mbe2"
        bordered
        variant="info"
      >Info alert</VueAlert>
      <VueAlert
        class="mbe2"
        bordered
        variant="primary"
      >Primary alert</VueAlert>
      <VueAlert
        class="mbe2"
        bordered
        variant="warning"
      >Warning alert</VueAlert>
      <VueAlert
        class="mbe2"
        bordered
        variant="error"
      >Error alert</VueAlert>
      <VueAlert
        class="mbe2"
        bordered
        variant="danger"
      >Danger alert</VueAlert>
      <VueAlert
        class="mbe2"
        bordered
        variant="monochrome"
      >Monochrome alert</VueAlert>
    </div>
    <div class="mbe4">
      <h2>Bordered Left with Icon</h2>
    </div>
    <div class="stacked">
      <VueAlert
        class="mbe2"
        borderedLeft
      >
        <div class="flex-inline items-center justify-center">
          <Info
            color="var(--ag-secondary)"
            :size="18"
            class="mie2"
          />
          Default alert
        </div>
      </VueAlert>
      <VueAlert
        class="mbe2"
        borderedLeft
        variant="success"
      >
        <div class="flex-inline items-center justify-center">
          <Info
            color="var(--ag-success)"
            :size="18"
            class="mie2"
          />Success alert
        </div>
      </VueAlert>
      <VueAlert
        class="mbe2"
        borderedLeft
        variant="info"
      >
        <div class="flex-inline items-center justify-center">
          <Info
            color="var(--ag-secondary)"
            :size="18"
            class="mie2"
          />Info alert
        </div>
      </VueAlert>
      <VueAlert
        class="mbe2"
        borderedLeft
        variant="primary"
      >
        <div class="flex-inline items-center justify-center">
          <Info
            color="var(--ag-primary)"
            :size="18"
            class="mie2"
          />Primary alert
        </div>
      </VueAlert>
      <VueAlert
        class="mbe2"
        borderedLeft
        variant="warning"
      >
        <div class="flex-inline items-center justify-center">
          <Info
            color="var(--ag-warning)"
            :size="18"
            class="mie2"
          />Warning alert
        </div>
      </VueAlert>
      <VueAlert
        class="mbe2"
        borderedLeft
        variant="error"
      >
        <div class="flex-inline items-center justify-center">
          <Info
            color="var(--ag-danger)"
            :size="18"
            class="mie2"
          />Error alert
        </div>
      </VueAlert>
      <VueAlert
        class="mbe2"
        borderedLeft
        variant="danger"
      >
        <div class="flex-inline items-center justify-center">
          <Info
            color="var(--ag-danger)"
            :size="18"
            class="mie2"
          />Danger alert
        </div>
      </VueAlert>
      <VueAlert
        class="mbe2"
        borderedLeft
        variant="monochrome"
      >
        <div class="flex-inline items-center justify-center">
          <Info
            color="var(--ag-text-primary)"
            :size="18"
            class="mie2"
          />Monochrome alert
        </div>
      </VueAlert>
    </div>
    <div class="mbe4">
      <h2>Rounded</h2>
    </div>
    <div class="stacked">
      <VueAlert
        class="mbe2"
        rounded
      >Default alert</VueAlert>
      <VueAlert
        class="mbe2"
        rounded
        variant="success"
      >Success alert</VueAlert>
      <VueAlert
        class="mbe2"
        rounded
        variant="info"
      >Info alert</VueAlert>
      <VueAlert
        class="mbe2"
        rounded
        variant="primary"
      >Primary alert</VueAlert>
      <VueAlert
        class="mbe2"
        rounded
        variant="warning"
      >Warning alert</VueAlert>
      <VueAlert
        class="mbe2"
        rounded
        variant="error"
      >Error alert</VueAlert>
      <VueAlert
        class="mbe2"
        rounded
        variant="danger"
      >Danger alert</VueAlert>
      <VueAlert
        class="mbe2"
        rounded
        variant="monochrome"
      >Monochrome alert</VueAlert>
    </div>
    <div class="mbe4">
      <h2>Dismissible</h2>
      <p
        class="mbe2"
        style="color: var(--ag-text-secondary); font-size: 0.875rem;"
      >
        Alerts can be dismissed by the user with a close button.
      </p>
    </div>
    <div class="stacked mbe4">
      <VueAlert
        v-if="showSuccessAlert"
        class="mbe2"
        variant="success"
        dismissible
        @alert-dismiss="showSuccessAlert = false"
      >
        <strong>Success!</strong> Your changes have been saved. Click the × to dismiss.
      </VueAlert>
      <button
        v-if="!showSuccessAlert"
        @click="showSuccessAlert = true"
        class="mbe2"
        style="padding: 0.5rem 1rem; cursor: pointer;"
      >
        Show Success Alert
      </button>

      <VueAlert
        v-if="showWarningAlert"
        class="mbe2"
        variant="warning"
        dismissible
        rounded
        @alert-dismiss="handleWarningDismiss"
      >
        <strong>Warning!</strong> This action may have unintended consequences.
      </VueAlert>
      <button
        v-if="!showWarningAlert"
        @click="showWarningAlert = true"
        style="padding: 0.5rem 1rem; cursor: pointer;"
      >
        Show Warning Alert
      </button>
    </div>
    <div class="mbe4">
      <h2>CSS Parts Customization</h2>
      <p
        class="mbe2"
        style="color: var(--ag-text-secondary); font-size: 0.875rem;"
      >
        Customize alert appearance using CSS Shadow Parts without breaking encapsulation.
      </p>
    </div>
    <div class="stacked mbe4">
      <VueAlert class="custom-gradient-alert mbe2">
        This alert uses a vibrant gradient background with custom shadows
      </VueAlert>
      <VueAlert class="custom-card-alert mbe2">
        Card-style alert with elevation and hover effect
      </VueAlert>
    </div>
  </section>
</template>
<script>
import { Info } from "lucide-vue-next";
import VueAlert from "agnosticui-core/alert/vue";
export default {
  name: "AlertExamples",
  components: { VueAlert, Info },
  data() {
    return {
      showSuccessAlert: true,
      showWarningAlert: true,
    };
  },
  methods: {
    handleWarningDismiss(event) {
      console.log("Warning dismissed, variant:", event.detail.variant);
      this.showWarningAlert = false;
    },
  },
};
<\/script>

<style scoped>
/* CSS Parts customization examples */

/* Gradient alert style */
.custom-gradient-alert::part(ag-alert) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 12px;
  border: none;
  box-shadow: 0 8px 16px rgba(102, 126, 234, 0.3);
  font-weight: 600;
}

/* Card-style elevated alert */
.custom-card-alert::part(ag-alert) {
  background: white;
  color: #333;
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.custom-card-alert::part(ag-alert):hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>
`,J=`import { LitElement, html } from 'lit';
import 'agnosticui-core/alert';

export class AlertLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  static properties = {
    showSuccessAlert: { type: Boolean },
    showWarningAlert: { type: Boolean },
  };

  constructor() {
    super();
    this.showSuccessAlert = true;
    this.showWarningAlert = true;
  }

  handleWarningDismiss(event) {
    console.log('Warning dismissed, variant:', event.detail.variant);
    this.showWarningAlert = false;
  }

  render() {
    return html\`
      <section>
        <div class="mbe4">
          <h2>Alerts</h2>
        </div>
        <div class="stacked">
          <ag-alert class="mbe2">Default alert</ag-alert>
          <ag-alert class="mbe2" variant="success">Success alert</ag-alert>
          <ag-alert class="mbe2" variant="info">Info alert</ag-alert>
          <ag-alert class="mbe2" variant="primary">Primary alert</ag-alert>
          <ag-alert class="mbe2" variant="warning">Warning alert</ag-alert>
          <ag-alert class="mbe2" variant="error">Error alert</ag-alert>
          <ag-alert class="mbe2" variant="danger">Danger alert</ag-alert>
          <ag-alert class="mbe2" variant="monochrome">Monochrome alert</ag-alert>
        </div>

        <div class="mbe4">
          <h2>Bordered</h2>
        </div>
        <div class="stacked">
          <ag-alert class="mbe2" bordered>Default alert</ag-alert>
          <ag-alert class="mbe2" bordered variant="success">Success alert</ag-alert>
          <ag-alert class="mbe2" bordered variant="info">Info alert</ag-alert>
          <ag-alert class="mbe2" bordered variant="primary">Primary alert</ag-alert>
          <ag-alert class="mbe2" bordered variant="warning">Warning alert</ag-alert>
          <ag-alert class="mbe2" bordered variant="error">Error alert</ag-alert>
          <ag-alert class="mbe2" bordered variant="danger">Danger alert</ag-alert>
          <ag-alert class="mbe2" bordered variant="monochrome">Monochrome alert</ag-alert>
        </div>

        <div class="mbe4">
          <h2>Bordered Left with Icon</h2>
        </div>
        <div class="stacked">
          <ag-alert class="mbe2" borderedleft>
            <div class="flex-inline items-center justify-center">
              <svg
                class="mie2"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--ag-secondary)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              Default alert
            </div>
          </ag-alert>
          <ag-alert class="mbe2" borderedleft variant="success">
            <div class="flex-inline items-center justify-center">
              <svg
                class="mie2"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--ag-success)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              Success alert
            </div>
          </ag-alert>
          <ag-alert class="mbe2" borderedleft variant="info">
            <div class="flex-inline items-center justify-center">
              <svg
                class="mie2"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--ag-secondary)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              Info alert
            </div>
          </ag-alert>
          <ag-alert class="mbe2" borderedleft variant="primary">
            <div class="flex-inline items-center justify-center">
              <svg
                class="mie2"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--ag-primary)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              Primary alert
            </div>
          </ag-alert>
          <ag-alert class="mbe2" borderedleft variant="warning">
            <div class="flex-inline items-center justify-center">
              <svg
                class="mie2"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--ag-warning)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              Warning alert
            </div>
          </ag-alert>
          <ag-alert class="mbe2" borderedleft variant="error">
            <div class="flex-inline items-center justify-center">
              <svg
                class="mie2"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--ag-danger)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              Error alert
            </div>
          </ag-alert>
          <ag-alert class="mbe2" borderedleft variant="danger">
            <div class="flex-inline items-center justify-center">
              <svg
                class="mie2"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--ag-danger)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              Danger alert
            </div>
          </ag-alert>
          <ag-alert class="mbe2" borderedleft variant="monochrome">
            <div class="flex-inline items-center justify-center">
              <svg
                class="mie2"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--ag-text-primary)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              Monochrome alert
            </div>
          </ag-alert>
        </div>

        <div class="mbe4">
          <h2>Rounded</h2>
        </div>
        <div class="stacked">
          <ag-alert class="mbe2" rounded>Default alert</ag-alert>
          <ag-alert class="mbe2" rounded variant="success">Success alert</ag-alert>
          <ag-alert class="mbe2" rounded variant="info">Info alert</ag-alert>
          <ag-alert class="mbe2" rounded variant="primary">Primary alert</ag-alert>
          <ag-alert class="mbe2" rounded variant="warning">Warning alert</ag-alert>
          <ag-alert class="mbe2" rounded variant="error">Error alert</ag-alert>
          <ag-alert class="mbe2" rounded variant="danger">Danger alert</ag-alert>
          <ag-alert class="mbe2" rounded variant="monochrome">Monochrome alert</ag-alert>
        </div>

        <div class="mbe4">
          <h2>Dismissible</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Alerts can be dismissed by the user with a close button.
          </p>
        </div>
        <div class="stacked mbe4">
          \${this.showSuccessAlert
            ? html\`
                <ag-alert
                  class="mbe2"
                  variant="success"
                  dismissible
                  @alert-dismiss=\${() => (this.showSuccessAlert = false)}
                >
                  <strong>Success!</strong> Your changes have been saved. Click
                  the × to dismiss.
                </ag-alert>
              \`
            : html\`
                <button
                  @click=\${() => (this.showSuccessAlert = true)}
                  class="mbe2"
                  style="padding: 0.5rem 1rem; cursor: pointer;"
                >
                  Show Success Alert
                </button>
              \`}
          \${this.showWarningAlert
            ? html\`
                <ag-alert
                  class="mbe2"
                  variant="warning"
                  dismissible
                  rounded
                  @alert-dismiss=\${(e) => this.handleWarningDismiss(e)}
                >
                  <strong>Warning!</strong> This action may have unintended
                  consequences.
                </ag-alert>
              \`
            : html\`
                <button
                  @click=\${() => (this.showWarningAlert = true)}
                  style="padding: 0.5rem 1rem; cursor: pointer;"
                >
                  Show Warning Alert
                </button>
              \`}
        </div>

        <div class="mbe4">
          <h2>CSS Parts Customization</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Customize alert appearance using CSS Shadow Parts without breaking
            encapsulation.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-alert class="custom-gradient-alert mbe2">
            This alert uses a vibrant gradient background with custom shadows
          </ag-alert>
          <ag-alert class="custom-card-alert mbe2">
            Card-style alert with elevation and hover effect
          </ag-alert>
        </div>

        <style>
          /* CSS Parts customization examples */

          /* Gradient alert style */
          .custom-gradient-alert::part(ag-alert) {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1.5rem;
            border-radius: 12px;
            border: none;
            box-shadow: 0 8px 16px rgba(102, 126, 234, 0.3);
            font-weight: 600;
          }

          /* Card-style elevated alert */
          .custom-card-alert::part(ag-alert) {
            background: white;
            color: #333;
            padding: 1.5rem;
            border-radius: 16px;
            border: 1px solid #e5e7eb;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .custom-card-alert::part(ag-alert):hover {
            transform: translateY(-2px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
              0 10px 10px -5px rgba(0, 0, 0, 0.04);
          }
        </style>
      </section>
    \`;
  }
}

customElements.define('alert-lit-examples', AlertLitExamples);
`,K=`import { useState } from "react";
import { ReactAlert } from "agnosticui-core/alert/react";

export default function AlertReactExamples() {
  const [showSuccessAlert, setShowSuccessAlert] = useState(true);
  const [showWarningAlert, setShowWarningAlert] = useState(true);

  const handleWarningDismiss = (event) => {
    console.log("Warning dismissed, variant:", event.detail.variant);
    setShowWarningAlert(false);
  };

  return (
    <section>
      <div className="mbe4">
        <h2>Alerts</h2>
      </div>
      <div className="stacked">
        <ReactAlert className="mbe2">Default alert</ReactAlert>
        <ReactAlert className="mbe2" variant="success">
          Success alert
        </ReactAlert>
        <ReactAlert className="mbe2" variant="info">
          Info alert
        </ReactAlert>
        <ReactAlert className="mbe2" variant="primary">
          Primary alert
        </ReactAlert>
        <ReactAlert className="mbe2" variant="warning">
          Warning alert
        </ReactAlert>
        <ReactAlert className="mbe2" variant="error">
          Error alert
        </ReactAlert>
        <ReactAlert className="mbe2" variant="danger">
          Danger alert
        </ReactAlert>
        <ReactAlert className="mbe2" variant="monochrome">
          Monochrome alert
        </ReactAlert>
      </div>

      <div className="mbe4">
        <h2>Bordered</h2>
      </div>
      <div className="stacked">
        <ReactAlert className="mbe2" bordered>
          Default alert
        </ReactAlert>
        <ReactAlert className="mbe2" bordered variant="success">
          Success alert
        </ReactAlert>
        <ReactAlert className="mbe2" bordered variant="info">
          Info alert
        </ReactAlert>
        <ReactAlert className="mbe2" bordered variant="primary">
          Primary alert
        </ReactAlert>
        <ReactAlert className="mbe2" bordered variant="warning">
          Warning alert
        </ReactAlert>
        <ReactAlert className="mbe2" bordered variant="error">
          Error alert
        </ReactAlert>
        <ReactAlert className="mbe2" bordered variant="danger">
          Danger alert
        </ReactAlert>
        <ReactAlert className="mbe2" bordered variant="monochrome">
          Monochrome alert
        </ReactAlert>
      </div>

      <div className="mbe4">
        <h2>Bordered Left with Icon</h2>
      </div>
      <div className="stacked">
        <ReactAlert className="mbe2" borderedLeft>
          <div className="flex-inline items-center justify-center">
            <svg
              className="mie2"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--ag-secondary)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            Default alert
          </div>
        </ReactAlert>
        <ReactAlert className="mbe2" borderedLeft variant="success">
          <div className="flex-inline items-center justify-center">
            <svg
              className="mie2"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--ag-success)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            Success alert
          </div>
        </ReactAlert>
        <ReactAlert className="mbe2" borderedLeft variant="info">
          <div className="flex-inline items-center justify-center">
            <svg
              className="mie2"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--ag-secondary)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            Info alert
          </div>
        </ReactAlert>
        <ReactAlert className="mbe2" borderedLeft variant="primary">
          <div className="flex-inline items-center justify-center">
            <svg
              className="mie2"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--ag-primary)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            Primary alert
          </div>
        </ReactAlert>
        <ReactAlert className="mbe2" borderedLeft variant="warning">
          <div className="flex-inline items-center justify-center">
            <svg
              className="mie2"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--ag-warning)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            Warning alert
          </div>
        </ReactAlert>
        <ReactAlert className="mbe2" borderedLeft variant="error">
          <div className="flex-inline items-center justify-center">
            <svg
              className="mie2"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--ag-danger)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            Error alert
          </div>
        </ReactAlert>
        <ReactAlert className="mbe2" borderedLeft variant="danger">
          <div className="flex-inline items-center justify-center">
            <svg
              className="mie2"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--ag-danger)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            Danger alert
          </div>
        </ReactAlert>
        <ReactAlert className="mbe2" borderedLeft variant="monochrome">
          <div className="flex-inline items-center justify-center">
            <svg
              className="mie2"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--ag-text-primary)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            Monochrome alert
          </div>
        </ReactAlert>
      </div>

      <div className="mbe4">
        <h2>Rounded</h2>
      </div>
      <div className="stacked">
        <ReactAlert className="mbe2" rounded>
          Default alert
        </ReactAlert>
        <ReactAlert className="mbe2" rounded variant="success">
          Success alert
        </ReactAlert>
        <ReactAlert className="mbe2" rounded variant="info">
          Info alert
        </ReactAlert>
        <ReactAlert className="mbe2" rounded variant="primary">
          Primary alert
        </ReactAlert>
        <ReactAlert className="mbe2" rounded variant="warning">
          Warning alert
        </ReactAlert>
        <ReactAlert className="mbe2" rounded variant="error">
          Error alert
        </ReactAlert>
        <ReactAlert className="mbe2" rounded variant="danger">
          Danger alert
        </ReactAlert>
        <ReactAlert className="mbe2" rounded variant="monochrome">
          Monochrome alert
        </ReactAlert>
      </div>

      <div className="mbe4">
        <h2>Dismissible</h2>
        <p
          className="mbe2"
          style={{ color: "var(--ag-text-secondary)", fontSize: "0.875rem" }}
        >
          Alerts can be dismissed by the user with a close button.
        </p>
      </div>
      <div className="stacked mbe4">
        {showSuccessAlert && (
          <ReactAlert
            className="mbe2"
            variant="success"
            dismissible
            onAlertDismiss={() => setShowSuccessAlert(false)}
          >
            <strong>Success!</strong> Your changes have been saved. Click the ×
            to dismiss.
          </ReactAlert>
        )}
        {!showSuccessAlert && (
          <button
            onClick={() => setShowSuccessAlert(true)}
            className="mbe2"
            style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
          >
            Show Success Alert
          </button>
        )}

        {showWarningAlert && (
          <ReactAlert
            className="mbe2"
            variant="warning"
            dismissible
            rounded
            onAlertDismiss={handleWarningDismiss}
          >
            <strong>Warning!</strong> This action may have unintended
            consequences.
          </ReactAlert>
        )}
        {!showWarningAlert && (
          <button
            onClick={() => setShowWarningAlert(true)}
            style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
          >
            Show Warning Alert
          </button>
        )}
      </div>

      <div className="mbe4">
        <h2>CSS Parts Customization</h2>
        <p
          className="mbe2"
          style={{ color: "var(--ag-text-secondary)", fontSize: "0.875rem" }}
        >
          Customize alert appearance using CSS Shadow Parts without breaking
          encapsulation.
        </p>
      </div>
      <div className="stacked mbe4">
        <ReactAlert className="custom-gradient-alert mbe2">
          This alert uses a vibrant gradient background with custom shadows
        </ReactAlert>
        <ReactAlert className="custom-card-alert mbe2">
          Card-style alert with elevation and hover effect
        </ReactAlert>
      </div>

      {/* CSS Parts customization styles */}
      <style>{\`
        /* Gradient alert style */
        .custom-gradient-alert::part(ag-alert) {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 1.5rem;
          border-radius: 12px;
          border: none;
          box-shadow: 0 8px 16px rgba(102, 126, 234, 0.3);
          font-weight: 600;
        }

        /* Card-style elevated alert */
        .custom-card-alert::part(ag-alert) {
          background: white;
          color: #333;
          padding: 1.5rem;
          border-radius: 16px;
          border: 1px solid #e5e7eb;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .custom-card-alert::part(ag-alert):hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
      \`}</style>
    </section>
  );
}
`,Fs=JSON.parse('{"title":"Alert","description":"","frontmatter":{},"headers":[],"relativePath":"components/alert.md","filePath":"components/alert.md"}'),H={name:"components/alert.md"},ds=Object.assign(H,{setup(h){return(s,e)=>(r(),g("div",null,[e[1]||(e[1]=l("h1",{id:"alert",tabindex:"-1"},[n("Alert "),l("a",{class:"header-anchor",href:"#alert","aria-label":'Permalink to "Alert"'},"​")],-1)),i(v),e[2]||(e[2]=l("p",null,"Alerts are used to provide timely feedback to the user.",-1)),e[3]||(e[3]=l("h2",{id:"examples",tabindex:"-1"},[n("Examples "),l("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),i(w,{component:"alert","vue-code":o(_),"lit-code":o(J),"react-code":o(K)},{vue:a(()=>[i(G)]),lit:a(()=>[...e[0]||(e[0]=[l("alert-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),e[4]||(e[4]=q("",31))]))}});export{Fs as __pageData,ds as default};
