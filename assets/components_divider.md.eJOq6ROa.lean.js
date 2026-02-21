import{A as E}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{i as b,z as F,a as u,x as m}from"./chunks/Button.CFkPNK98.js";import{o as D}from"./chunks/slot.B17U6J5C.js";import{s as A}from"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d as C,c as v,o as c,r as B,K as x,p as S,v as z,P as y,s as q,_ as V,C as w,j as s,G as t,w as e,a as n,ae as R,k as o}from"./chunks/framework.NAAYCHZu.js";import{F as P}from"./chunks/FrameworkExample.Cm-JbUj-.js";import"./chunks/createLucideIcon.B61Wqv9x.js";import"./chunks/state-CovhUvdr.DWhhlYib.js";import"./chunks/sdk.m.DhOmSlC9.js";import"./chunks/Icon.DjToxxjJ.js";var L=Object.defineProperty,g=(h,i,l,d)=>{for(var r=void 0,p=h.length-1,a;p>=0;p--)(a=h[p])&&(r=a(i,l,r)||r);return r&&L(i,l,r),r};const f=class extends u{constructor(){super(),this.vertical=!1,this.justify="center",this.size="default",this.variant="default",this.hasContent=!1}handleSlotChange(i){this.hasContent=D(i.target)}getClasses(){const i=["divider"];return this.vertical&&i.push("divider-vertical"),this.justify!=="center"&&!this.vertical&&i.push(`divider-justify-${this.justify}`),this.size!=="default"&&i.push(`divider-${this.size}`),this.variant!=="default"&&i.push(`divider-${this.variant}`),i.join(" ")}render(){const i=this.vertical?"vertical":"horizontal",l=this.hasContent?"divider-content divider-has-content":"divider-content";return m`
      <div
        class="${this.getClasses()}"
        part="ag-divider"
        role="separator"
        aria-orientation="${i}"
      >
        <span class="${l}" part="ag-divider-content">
          <slot @slotchange=${this.handleSlotChange}></slot>
        </span>
      </div>
    `}};f.styles=b`
    :host {
      display: block;
    }

    :host([is-vertical]) {
      align-self: stretch;
    }

    .divider {
      display: flex;
      justify-content: center;
      align-items: center;
      white-space: nowrap;
      width: 100%;
    }

    .divider::before,
    .divider::after {
      content: '';
      background-color: var(--ag-border);
      height: var(--ag-border-width-2);
      flex-grow: 1;
    }

    /* Sizes - Horizontal */
    .divider-small::before,
    .divider-small::after {
      height: var(--ag-border-width-1);
    }

    .divider-large::before,
    .divider-large::after {
      height: var(--ag-border-width-3);
    }

    .divider-xlarge::before,
    .divider-xlarge::after {
      height: 4px;
    }

    /* Justify */
    .divider-justify-end::after,
    .divider-justify-start::before {
      flex-grow: 0;
      flex-basis: 3%;
    }

    /* Content */
    .divider-has-content {
      padding-inline-start: var(--ag-space-4);
      padding-inline-end: var(--ag-space-4);
    }

    /* Vertical */
    .divider-vertical {
      height: 100%;
      margin: 0 var(--ag-space-4);
      width: var(--ag-space-4);
      flex-direction: column;
    }

    .divider-vertical::before,
    .divider-vertical::after {
      width: var(--ag-border-width-2);
      height: auto;  /* Override the fixed height for vertical growth */
    }

    /* Sizes - Vertical */
    .divider-vertical.divider-small::before,
    .divider-vertical.divider-small::after {
      width: var(--ag-border-width-1);
    }

    .divider-vertical.divider-large::before,
    .divider-vertical.divider-large::after {
      width: var(--ag-border-width-3);
    }

    .divider-vertical.divider-xlarge::before,
    .divider-vertical.divider-xlarge::after {
      width: 4px;
    }

    .divider-vertical .divider-has-content {
      padding-inline-start: var(--ag-space-6);
      padding-inline-end: var(--ag-space-6);
      padding-block-start: var(--ag-space-3);
      padding-block-end: var(--ag-space-3);
    }

    /* Variants */
    .divider-warning::before,
    .divider-warning::after {
      background-color: var(--ag-warning);
    }

    .divider-warning .divider-content {
      color: var(--ag-text-primary);
    }

    .divider-error::before,
    .divider-error::after {
      background-color: var(--ag-danger);
    }

    .divider-error .divider-content {
      color: var(--ag-text-primary);
    }

    .divider-success::before,
    .divider-success::after {
      background-color: var(--ag-success);
    }

    .divider-success .divider-content {
      color: var(--ag-text-primary);
    }

    .divider-info::before,
    .divider-info::after {
      background-color: var(--ag-info);
    }

    .divider-info .divider-content {
      color: var(--ag-text-primary);
    }

    .divider-monochrome::before,
    .divider-monochrome::after {
      background-color: var(--ag-text-primary);
    }

    .divider-monochrome .divider-content {
      color: var(--ag-text-primary);
    }
  `;let k=f;g([F({type:Boolean,attribute:"is-vertical",reflect:!0})],k.prototype,"vertical");g([F({type:String,reflect:!0})],k.prototype,"justify");g([F({type:String,reflect:!0})],k.prototype,"size");g([F({type:String,reflect:!0})],k.prototype,"variant");g([F({type:Boolean,state:!0})],k.prototype,"hasContent");customElements.get("ag-divider")||customElements.define("ag-divider",k);const N=C({name:"VueDivider",props:{vertical:{type:Boolean,default:!1},justify:{type:String,default:"center"},size:{type:String,default:"default"},variant:{type:String,default:"default"}},setup(h){const i=S(null),l=()=>{const d=i.value;d&&(d.vertical=h.vertical,d.justify=h.justify,d.size=h.size,d.variant=h.variant)};return z(async()=>{var r;await customElements.whenDefined("ag-divider"),await y(),l(),await y();const d=i.value;if(d){const p=(r=d.shadowRoot)==null?void 0:r.querySelector("slot");p&&p.dispatchEvent(new Event("slotchange"))}}),q(()=>{i.value&&l()}),{agComponent:i}}});function j(h,i,l,d,r,p){return c(),v("ag-divider",x({ref:"agComponent"},h.$attrs),[B(h.$slots,"default")],16)}const H=A(N,[["render",j]]),T=C({name:"DividerExamples",components:{VueDivider:H}}),I={class:"mbe4"},$={class:"mbe4"},J={class:"mbe4",style:{display:"flex","min-height":"200px"}},U={class:"mbe4"},M={class:"mbe4",style:{display:"flex",gap:"1rem","min-height":"150px"}},X={class:"mbe4"},W={class:"mbe4"},O={style:{display:"flex","min-height":"150px"}};function Y(h,i,l,d,r,p){const a=w("VueDivider");return c(),v("section",null,[i[44]||(i[44]=s("div",{class:"mbe4"},[s("h2",null,"Horizontal Dividers")],-1)),s("div",I,[i[0]||(i[0]=s("p",null,"Content above the divider",-1)),t(a),i[1]||(i[1]=s("p",null,"Content below the divider",-1))]),i[45]||(i[45]=s("div",{class:"mbe4"},[s("h2",null,"Horizontal with Content")],-1)),s("div",$,[t(a,null,{default:e(()=>[...i[2]||(i[2]=[n("Centered (default)",-1)])]),_:1}),i[5]||(i[5]=s("div",{class:"mbe2"},null,-1)),t(a,{justify:"start"},{default:e(()=>[...i[3]||(i[3]=[n("Justify Start",-1)])]),_:1}),i[6]||(i[6]=s("div",{class:"mbe2"},null,-1)),t(a,{justify:"end"},{default:e(()=>[...i[4]||(i[4]=[n("Justify End",-1)])]),_:1})]),i[46]||(i[46]=s("div",{class:"mbe4"},[s("h2",null,"Vertical Dividers")],-1)),s("div",J,[i[9]||(i[9]=s("p",{style:{flex:"1"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",-1)),t(a,{vertical:""},{default:e(()=>[...i[7]||(i[7]=[n("Yes",-1)])]),_:1}),i[10]||(i[10]=s("p",{style:{flex:"1"}},"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",-1)),t(a,{vertical:""},{default:e(()=>[...i[8]||(i[8]=[n("Sir!",-1)])]),_:1}),i[11]||(i[11]=s("p",{style:{flex:"1"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",-1))]),i[47]||(i[47]=s("div",{class:"mbe4"},[s("h2",null,"Sizes - Horizontal")],-1)),s("div",U,[t(a,{size:"small"},{default:e(()=>[...i[12]||(i[12]=[n("Small",-1)])]),_:1}),i[16]||(i[16]=s("div",{class:"mbe2"},null,-1)),t(a,{size:"default"},{default:e(()=>[...i[13]||(i[13]=[n("Default",-1)])]),_:1}),i[17]||(i[17]=s("div",{class:"mbe2"},null,-1)),t(a,{size:"large"},{default:e(()=>[...i[14]||(i[14]=[n("Large",-1)])]),_:1}),i[18]||(i[18]=s("div",{class:"mbe2"},null,-1)),t(a,{size:"xlarge"},{default:e(()=>[...i[15]||(i[15]=[n("XLarge",-1)])]),_:1})]),i[48]||(i[48]=s("div",{class:"mbe4"},[s("h2",null,"Sizes - Vertical")],-1)),s("div",M,[i[23]||(i[23]=s("p",{style:{flex:"1"}},"Content",-1)),t(a,{vertical:"",size:"small"},{default:e(()=>[...i[19]||(i[19]=[n("Sm",-1)])]),_:1}),i[24]||(i[24]=s("p",{style:{flex:"1"}},"Content",-1)),t(a,{vertical:"",size:"default"},{default:e(()=>[...i[20]||(i[20]=[n("Def",-1)])]),_:1}),i[25]||(i[25]=s("p",{style:{flex:"1"}},"Content",-1)),t(a,{vertical:"",size:"large"},{default:e(()=>[...i[21]||(i[21]=[n("Lg",-1)])]),_:1}),i[26]||(i[26]=s("p",{style:{flex:"1"}},"Content",-1)),t(a,{vertical:"",size:"xlarge"},{default:e(()=>[...i[22]||(i[22]=[n("XL",-1)])]),_:1}),i[27]||(i[27]=s("p",{style:{flex:"1"}},"Content",-1))]),i[49]||(i[49]=s("div",{class:"mbe4"},[s("h2",null,"Variants")],-1)),s("div",X,[t(a,{variant:"default"},{default:e(()=>[...i[28]||(i[28]=[n("Default",-1)])]),_:1}),i[34]||(i[34]=s("div",{class:"mbe2"},null,-1)),t(a,{variant:"success"},{default:e(()=>[...i[29]||(i[29]=[n("Success",-1)])]),_:1}),i[35]||(i[35]=s("div",{class:"mbe2"},null,-1)),t(a,{variant:"info"},{default:e(()=>[...i[30]||(i[30]=[n("Info",-1)])]),_:1}),i[36]||(i[36]=s("div",{class:"mbe2"},null,-1)),t(a,{variant:"warning"},{default:e(()=>[...i[31]||(i[31]=[n("Warning",-1)])]),_:1}),i[37]||(i[37]=s("div",{class:"mbe2"},null,-1)),t(a,{variant:"error"},{default:e(()=>[...i[32]||(i[32]=[n("Error",-1)])]),_:1}),i[38]||(i[38]=s("div",{class:"mbe2"},null,-1)),t(a,{variant:"monochrome"},{default:e(()=>[...i[33]||(i[33]=[n("Monochrome",-1)])]),_:1})]),i[50]||(i[50]=s("div",{class:"mbe4"},[s("h2",null,"CSS Shadow Parts Customization"),s("p",{class:"mbs2 mbe3"}," Use CSS Shadow Parts to customize the divider's appearance without affecting the component's internal styling. ")],-1)),s("div",W,[t(a,{class:"custom-divider-dotted"},{default:e(()=>[...i[39]||(i[39]=[n("Dotted Pattern",-1)])]),_:1}),i[43]||(i[43]=s("div",{class:"mbe4"},null,-1)),s("div",O,[i[41]||(i[41]=s("p",{style:{flex:"1"}},"Custom vertical gradient divider on the right",-1)),t(a,{class:"custom-divider-vertical",vertical:""},{default:e(()=>[...i[40]||(i[40]=[n("Custom",-1)])]),_:1}),i[42]||(i[42]=s("p",{style:{flex:"1"}},"Styled with CSS Shadow Parts",-1))])])])}const G=V(T,[["render",Y]]);class K extends u{createRenderRoot(){return this}render(){return m`
      <style>
        .custom-divider-dotted::part(ag-divider)::before,
        .custom-divider-dotted::part(ag-divider)::after {
          background: repeating-linear-gradient(
            90deg,
            #10b981 0,
            #10b981 10px,
            transparent 10px,
            transparent 20px
          );
          height: 3px;
        }

        .custom-divider-vertical::part(ag-divider)::before,
        .custom-divider-vertical::part(ag-divider)::after {
          background: linear-gradient(180deg, #ef4444 0%, #fbbf24 100%);
          width: var(--ag-space-1);
        }

        .custom-divider-vertical::part(ag-divider-content) {
          font-family: "Courier New", monospace;
          letter-spacing: 2px;
          font-weight: 700;
        }
      </style>

      <section>
        <!-- Horizontal Dividers -->
        <div class="mbe4">
          <h2>Horizontal Dividers</h2>
        </div>
        <div class="mbe4">
          <p>Content above the divider</p>
          <ag-divider></ag-divider>
          <p>Content below the divider</p>
        </div>

        <!-- Horizontal with Content -->
        <div class="mbe4">
          <h2>Horizontal with Content</h2>
        </div>
        <div class="mbe4">
          <ag-divider>Centered (default)</ag-divider>
          <div class="mbe2"></div>
          <ag-divider justify="start">Justify Start</ag-divider>
          <div class="mbe2"></div>
          <ag-divider justify="end">Justify End</ag-divider>
        </div>

        <!-- Vertical Dividers -->
        <div class="mbe4">
          <h2>Vertical Dividers</h2>
        </div>
        <div class="mbe4" style="display: flex; min-height: 200px;">
          <p style="flex: 1;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <ag-divider is-vertical>Yes</ag-divider>
          <p style="flex: 1;">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
          <ag-divider is-vertical>Sir!</ag-divider>
          <p style="flex: 1;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <!-- Sizes - Horizontal -->
        <div class="mbe4">
          <h2>Sizes - Horizontal</h2>
        </div>
        <div class="mbe4">
          <ag-divider size="small">Small</ag-divider>
          <div class="mbe2"></div>
          <ag-divider size="default">Default</ag-divider>
          <div class="mbe2"></div>
          <ag-divider size="large">Large</ag-divider>
          <div class="mbe2"></div>
          <ag-divider size="xlarge">XLarge</ag-divider>
        </div>

        <!-- Sizes - Vertical -->
        <div class="mbe4">
          <h2>Sizes - Vertical</h2>
        </div>
        <div class="mbe4" style="display: flex; gap: 1rem; min-height: 150px;">
          <p style="flex: 1;">Content</p>
          <ag-divider is-vertical size="small">Sm</ag-divider>
          <p style="flex: 1;">Content</p>
          <ag-divider is-vertical size="default">Def</ag-divider>
          <p style="flex: 1;">Content</p>
          <ag-divider is-vertical size="large">Lg</ag-divider>
          <p style="flex: 1;">Content</p>
          <ag-divider is-vertical size="xlarge">XL</ag-divider>
          <p style="flex: 1;">Content</p>
        </div>

        <!-- Variants -->
        <div class="mbe4">
          <h2>Variants</h2>
        </div>
        <div class="mbe4">
          <ag-divider variant="default">Default</ag-divider>
          <div class="mbe2"></div>
          <ag-divider variant="success">Success</ag-divider>
          <div class="mbe2"></div>
          <ag-divider variant="info">Info</ag-divider>
          <div class="mbe2"></div>
          <ag-divider variant="warning">Warning</ag-divider>
          <div class="mbe2"></div>
          <ag-divider variant="error">Error</ag-divider>
          <div class="mbe2"></div>
          <ag-divider variant="monochrome">Monochrome</ag-divider>
        </div>

        <!-- CSS Shadow Parts Customization -->
        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the divider's appearance without affecting the component's internal styling.
          </p>
        </div>
        <div class="mbe4">
          <ag-divider class="custom-divider-dotted">Dotted Pattern</ag-divider>
          <div class="mbe4"></div>
          <div style="display: flex; min-height: 150px;">
            <p style="flex: 1;">Custom vertical gradient divider on the right</p>
            <ag-divider class="custom-divider-vertical" is-vertical>Custom</ag-divider>
            <p style="flex: 1;">Styled with CSS Shadow Parts</p>
          </div>
        </div>
      </section>
    `}}customElements.define("divider-lit-examples",K);const Q=`<template>
  <section>
    <div class="mbe4">
      <h2>Horizontal Dividers</h2>
    </div>
    <div class="mbe4">
      <p>Content above the divider</p>
      <VueDivider />
      <p>Content below the divider</p>
    </div>

    <div class="mbe4">
      <h2>Horizontal with Content</h2>
    </div>
    <div class="mbe4">
      <VueDivider>Centered (default)</VueDivider>
      <div class="mbe2"></div>
      <VueDivider justify="start">Justify Start</VueDivider>
      <div class="mbe2"></div>
      <VueDivider justify="end">Justify End</VueDivider>
    </div>

    <div class="mbe4">
      <h2>Vertical Dividers</h2>
    </div>
    <div
      class="mbe4"
      style="display: flex; min-height: 200px;"
    >
      <p style="flex: 1;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <VueDivider vertical>Yes</VueDivider>
      <p style="flex: 1;">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
      <VueDivider vertical>Sir!</VueDivider>
      <p style="flex: 1;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>

    <div class="mbe4">
      <h2>Sizes - Horizontal</h2>
    </div>
    <div class="mbe4">
      <VueDivider size="small">Small</VueDivider>
      <div class="mbe2"></div>
      <VueDivider size="default">Default</VueDivider>
      <div class="mbe2"></div>
      <VueDivider size="large">Large</VueDivider>
      <div class="mbe2"></div>
      <VueDivider size="xlarge">XLarge</VueDivider>
    </div>

    <div class="mbe4">
      <h2>Sizes - Vertical</h2>
    </div>
    <div
      class="mbe4"
      style="display: flex; gap: 1rem; min-height: 150px;"
    >
      <p style="flex: 1;">Content</p>
      <VueDivider
        vertical
        size="small"
      >Sm</VueDivider>
      <p style="flex: 1;">Content</p>
      <VueDivider
        vertical
        size="default"
      >Def</VueDivider>
      <p style="flex: 1;">Content</p>
      <VueDivider
        vertical
        size="large"
      >Lg</VueDivider>
      <p style="flex: 1;">Content</p>
      <VueDivider
        vertical
        size="xlarge"
      >XL</VueDivider>
      <p style="flex: 1;">Content</p>
    </div>

    <div class="mbe4">
      <h2>Variants</h2>
    </div>
    <div class="mbe4">
      <VueDivider variant="default">Default</VueDivider>
      <div class="mbe2"></div>
      <VueDivider variant="success">Success</VueDivider>
      <div class="mbe2"></div>
      <VueDivider variant="info">Info</VueDivider>
      <div class="mbe2"></div>
      <VueDivider variant="warning">Warning</VueDivider>
      <div class="mbe2"></div>
      <VueDivider variant="error">Error</VueDivider>
      <div class="mbe2"></div>
      <VueDivider variant="monochrome">Monochrome</VueDivider>
    </div>

    <div class="mbe4">
      <h2>CSS Shadow Parts Customization</h2>
      <p class="mbs2 mbe3">
        Use CSS Shadow Parts to customize the divider's appearance without affecting the component's internal styling.
      </p>
    </div>
    <div class="mbe4">
      <VueDivider class="custom-divider-dotted">Dotted Pattern</VueDivider>
      <div class="mbe4"></div>
      <div style="display: flex; min-height: 150px;">
        <p style="flex: 1;">Custom vertical gradient divider on the right</p>
        <VueDivider
          class="custom-divider-vertical"
          vertical
        >Custom</VueDivider>
        <p style="flex: 1;">Styled with CSS Shadow Parts</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueDivider } from "agnosticui-core/divider/vue";

export default defineComponent({
  name: "DividerExamples",
  components: {
    VueDivider,
  },
});
<\/script>

<style>
.custom-divider-dotted::part(ag-divider)::before,
.custom-divider-dotted::part(ag-divider)::after {
  background: repeating-linear-gradient(
    90deg,
    #10b981 0,
    #10b981 10px,
    transparent 10px,
    transparent 20px
  );
  height: 3px;
}

.custom-divider-vertical::part(ag-divider)::before,
.custom-divider-vertical::part(ag-divider)::after {
  background: linear-gradient(180deg, #ef4444 0%, #fbbf24 100%);
  width: var(--ag-space-1);
}

.custom-divider-vertical::part(ag-divider-content) {
  font-family: "Courier New", monospace;
  letter-spacing: 2px;
  font-weight: 700;
}
</style>
`,Z=`import { LitElement, html } from 'lit';
import 'agnosticui-core/divider';

export class DividerLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  render() {
    return html\`
      <style>
        .custom-divider-dotted::part(ag-divider)::before,
        .custom-divider-dotted::part(ag-divider)::after {
          background: repeating-linear-gradient(
            90deg,
            #10b981 0,
            #10b981 10px,
            transparent 10px,
            transparent 20px
          );
          height: 3px;
        }

        .custom-divider-vertical::part(ag-divider)::before,
        .custom-divider-vertical::part(ag-divider)::after {
          background: linear-gradient(180deg, #ef4444 0%, #fbbf24 100%);
          width: var(--ag-space-1);
        }

        .custom-divider-vertical::part(ag-divider-content) {
          font-family: "Courier New", monospace;
          letter-spacing: 2px;
          font-weight: 700;
        }
      </style>

      <section>
        <!-- Horizontal Dividers -->
        <div class="mbe4">
          <h2>Horizontal Dividers</h2>
        </div>
        <div class="mbe4">
          <p>Content above the divider</p>
          <ag-divider></ag-divider>
          <p>Content below the divider</p>
        </div>

        <!-- Horizontal with Content -->
        <div class="mbe4">
          <h2>Horizontal with Content</h2>
        </div>
        <div class="mbe4">
          <ag-divider>Centered (default)</ag-divider>
          <div class="mbe2"></div>
          <ag-divider justify="start">Justify Start</ag-divider>
          <div class="mbe2"></div>
          <ag-divider justify="end">Justify End</ag-divider>
        </div>

        <!-- Vertical Dividers -->
        <div class="mbe4">
          <h2>Vertical Dividers</h2>
        </div>
        <div class="mbe4" style="display: flex; min-height: 200px;">
          <p style="flex: 1;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <ag-divider is-vertical>Yes</ag-divider>
          <p style="flex: 1;">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
          <ag-divider is-vertical>Sir!</ag-divider>
          <p style="flex: 1;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <!-- Sizes - Horizontal -->
        <div class="mbe4">
          <h2>Sizes - Horizontal</h2>
        </div>
        <div class="mbe4">
          <ag-divider size="small">Small</ag-divider>
          <div class="mbe2"></div>
          <ag-divider size="default">Default</ag-divider>
          <div class="mbe2"></div>
          <ag-divider size="large">Large</ag-divider>
          <div class="mbe2"></div>
          <ag-divider size="xlarge">XLarge</ag-divider>
        </div>

        <!-- Sizes - Vertical -->
        <div class="mbe4">
          <h2>Sizes - Vertical</h2>
        </div>
        <div class="mbe4" style="display: flex; gap: 1rem; min-height: 150px;">
          <p style="flex: 1;">Content</p>
          <ag-divider is-vertical size="small">Sm</ag-divider>
          <p style="flex: 1;">Content</p>
          <ag-divider is-vertical size="default">Def</ag-divider>
          <p style="flex: 1;">Content</p>
          <ag-divider is-vertical size="large">Lg</ag-divider>
          <p style="flex: 1;">Content</p>
          <ag-divider is-vertical size="xlarge">XL</ag-divider>
          <p style="flex: 1;">Content</p>
        </div>

        <!-- Variants -->
        <div class="mbe4">
          <h2>Variants</h2>
        </div>
        <div class="mbe4">
          <ag-divider variant="default">Default</ag-divider>
          <div class="mbe2"></div>
          <ag-divider variant="success">Success</ag-divider>
          <div class="mbe2"></div>
          <ag-divider variant="info">Info</ag-divider>
          <div class="mbe2"></div>
          <ag-divider variant="warning">Warning</ag-divider>
          <div class="mbe2"></div>
          <ag-divider variant="error">Error</ag-divider>
          <div class="mbe2"></div>
          <ag-divider variant="monochrome">Monochrome</ag-divider>
        </div>

        <!-- CSS Shadow Parts Customization -->
        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the divider's appearance without affecting the component's internal styling.
          </p>
        </div>
        <div class="mbe4">
          <ag-divider class="custom-divider-dotted">Dotted Pattern</ag-divider>
          <div class="mbe4"></div>
          <div style="display: flex; min-height: 150px;">
            <p style="flex: 1;">Custom vertical gradient divider on the right</p>
            <ag-divider class="custom-divider-vertical" is-vertical>Custom</ag-divider>
            <p style="flex: 1;">Styled with CSS Shadow Parts</p>
          </div>
        </div>
      </section>
    \`;
  }
}

// Register the custom element
customElements.define('divider-lit-examples', DividerLitExamples);
`,_=`import { ReactDivider } from "agnosticui-core/divider/react";

export default function DividerReactExamples() {
  return (
    <section>
      {/* Horizontal Dividers */}
      <div className="mbe4">
        <h2>Horizontal Dividers</h2>
      </div>
      <div className="mbe4">
        <p>Content above the divider</p>
        <ReactDivider />
        <p>Content below the divider</p>
      </div>

      {/* Horizontal with Content */}
      <div className="mbe4">
        <h2>Horizontal with Content</h2>
      </div>
      <div className="mbe4">
        <ReactDivider>Centered (default)</ReactDivider>
        <div className="mbe2"></div>
        <ReactDivider justify="start">Justify Start</ReactDivider>
        <div className="mbe2"></div>
        <ReactDivider justify="end">Justify End</ReactDivider>
      </div>

      {/* Vertical Dividers */}
      <div className="mbe4">
        <h2>Vertical Dividers</h2>
      </div>
      <div className="mbe4" style={{ display: "flex", minHeight: "200px" }}>
        <p style={{ flex: 1 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ReactDivider vertical>Yes</ReactDivider>
        <p style={{ flex: 1 }}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium.
        </p>
        <ReactDivider vertical>Sir!</ReactDivider>
        <p style={{ flex: 1 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Sizes - Horizontal */}
      <div className="mbe4">
        <h2>Sizes - Horizontal</h2>
      </div>
      <div className="mbe4">
        <ReactDivider size="small">Small</ReactDivider>
        <div className="mbe2"></div>
        <ReactDivider size="default">Default</ReactDivider>
        <div className="mbe2"></div>
        <ReactDivider size="large">Large</ReactDivider>
        <div className="mbe2"></div>
        <ReactDivider size="xlarge">XLarge</ReactDivider>
      </div>

      {/* Sizes - Vertical */}
      <div className="mbe4">
        <h2>Sizes - Vertical</h2>
      </div>
      <div className="mbe4" style={{ display: "flex", gap: "1rem", minHeight: "150px" }}>
        <p style={{ flex: 1 }}>Content</p>
        <ReactDivider vertical size="small">
          Sm
        </ReactDivider>
        <p style={{ flex: 1 }}>Content</p>
        <ReactDivider vertical size="default">
          Def
        </ReactDivider>
        <p style={{ flex: 1 }}>Content</p>
        <ReactDivider vertical size="large">
          Lg
        </ReactDivider>
        <p style={{ flex: 1 }}>Content</p>
        <ReactDivider vertical size="xlarge">
          XL
        </ReactDivider>
        <p style={{ flex: 1 }}>Content</p>
      </div>

      {/* Variants */}
      <div className="mbe4">
        <h2>Variants</h2>
      </div>
      <div className="mbe4">
        <ReactDivider variant="default">Default</ReactDivider>
        <div className="mbe2"></div>
        <ReactDivider variant="success">Success</ReactDivider>
        <div className="mbe2"></div>
        <ReactDivider variant="info">Info</ReactDivider>
        <div className="mbe2"></div>
        <ReactDivider variant="warning">Warning</ReactDivider>
        <div className="mbe2"></div>
        <ReactDivider variant="error">Error</ReactDivider>
        <div className="mbe2"></div>
        <ReactDivider variant="monochrome">Monochrome</ReactDivider>
      </div>

      {/* CSS Shadow Parts Customization */}
      <div className="mbe4">
        <h2>CSS Shadow Parts Customization</h2>
        <p className="mbs2 mbe3">
          Use CSS Shadow Parts to customize the divider's appearance without
          affecting the component's internal styling.
        </p>
      </div>
      <div className="mbe4">
        <ReactDivider className="custom-divider-dotted">Dotted Pattern</ReactDivider>
        <div className="mbe4"></div>
        <div style={{ display: "flex", minHeight: "150px" }}>
          <p style={{ flex: 1 }}>Custom vertical gradient divider on the right</p>
          <ReactDivider className="custom-divider-vertical" vertical>
            Custom
          </ReactDivider>
          <p style={{ flex: 1 }}>Styled with CSS Shadow Parts</p>
        </div>
      </div>
    </section>
  );
}
`,Fi=JSON.parse('{"title":"Divider","description":"","frontmatter":{},"headers":[],"relativePath":"components/divider.md","filePath":"components/divider.md"}'),ii={name:"components/divider.md"},gi=Object.assign(ii,{setup(h){return(i,l)=>(c(),v("div",null,[l[1]||(l[1]=s("h1",{id:"divider",tabindex:"-1"},[n("Divider "),s("a",{class:"header-anchor",href:"#divider","aria-label":'Permalink to "Divider"'},"​")],-1)),t(E),l[2]||(l[2]=s("p",null,"Divider components visually separate content in your application. They support both horizontal and vertical orientations, optional text or icon content, and can be customized with different sizes and color variants.",-1)),l[3]||(l[3]=s("h2",{id:"examples",tabindex:"-1"},[n("Examples "),s("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),t(P,{component:"divider","vue-code":o(Q),"lit-code":o(Z),"react-code":o(_)},{vue:e(()=>[t(G)]),lit:e(()=>[...l[0]||(l[0]=[s("divider-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),l[4]||(l[4]=R("",34))]))}});export{Fi as __pageData,gi as default};
