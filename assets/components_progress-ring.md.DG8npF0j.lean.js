var y=Object.defineProperty;var b=(n,s,t)=>s in n?y(n,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[s]=t;var m=(n,s,t)=>b(n,typeof s!="symbol"?s+"":s,t);import{A as f}from"./chunks/AlphaWarning.yC7ZufpQ.js";import"./chunks/ProgressRing.Dc5tIlrn.js";import{s as x}from"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d as c,c as g,o as d,r as C,a as l,t as R,p as P,x as A,_ as B,C as k,j as i,G as e,w as r,ae as w,k as p}from"./chunks/framework.NAAYCHZu.js";import{v as E}from"./chunks/VueButton.vue_vue_type_script_setup_true_lang-D1jGatE9.DjpUppN5.js";import{F as z}from"./chunks/FrameworkExample.Z9eaTrCu.js";import{a as S,x as V}from"./chunks/Button.DkmThuAs.js";import"./chunks/createLucideIcon.B61Wqv9x.js";import"./chunks/state-CovhUvdr.CfYrM0Q-.js";import"./chunks/sdk.m.DhOmSlC9.js";import"./chunks/Icon.BC5ob6Nk.js";const I=c({name:"VueProgressRing",props:{value:{type:Number,default:0},size:{type:String,default:"medium"},variant:{type:String,default:"primary"},label:{type:String,default:"Progress"},noAnimation:{type:Boolean,default:!1}}}),D=[".value",".size",".variant",".label",".noAnimation"];function q(n,s,t,o,v,F){return d(),g("ag-progress-ring",{".value":n.value,".size":n.size,".variant":n.variant,".label":n.label,".noAnimation":n.noAnimation},[C(n.$slots,"default",{},()=>[l(R(n.value)+"%",1)])],40,D)}const T=x(I,[["render",q]]),N=c({name:"ProgressRingExamples",components:{VueProgressRing:T,VueButton:E},setup(){const n=P(0);let s=null;const t=()=>{s&&clearInterval(s),n.value=0,s=setInterval(()=>{n.value<100?n.value+=1:s&&(clearInterval(s),s=null)},30)},o=()=>{s&&(clearInterval(s),s=null),n.value=0};return A(()=>{s&&clearInterval(s)}),{animatedValue:n,startAnimation:t,resetAnimation:o}}}),U={class:"mbe4"},L={class:"mbe4"},W={style:{display:"flex",gap:"2rem","align-items":"center","flex-wrap":"wrap"}},$={class:"mbe4"},_={style:{display:"flex",gap:"2rem","align-items":"center","flex-wrap":"wrap"}},O={class:"mbe4"},G={style:{display:"flex",gap:"2rem","align-items":"center","flex-wrap":"wrap"}},j={style:{"text-align":"center"}},M={style:{"text-align":"center"}},J={style:{"text-align":"center"}},K={style:{"text-align":"center"}},H={style:{"text-align":"center"}},Q={class:"mbe4"},X={style:{display:"flex",gap:"2rem","align-items":"center","flex-wrap":"wrap"}},Y={class:"mbe4"},Z={class:"mbe4"},ss={class:"mbs6"},is={class:"mbe4"},es={class:"mbe4"},ns={style:{display:"grid","grid-template-columns":"repeat(auto-fit, minmax(150px, 1fr))",gap:"1.5rem"}},as={style:{padding:"1rem",border:"1px solid #e0e0e0","border-radius":"8px","text-align":"center"}},ts={style:{padding:"1rem",border:"1px solid #e0e0e0","border-radius":"8px","text-align":"center"}},rs={style:{padding:"1rem",border:"1px solid #e0e0e0","border-radius":"8px","text-align":"center"}};function ls(n,s,t,o,v,F){const a=k("VueProgressRing"),h=k("VueButton");return d(),g("section",null,[i("div",U,[s[0]||(s[0]=i("h2",null,"Default Progress Ring",-1)),s[1]||(s[1]=i("p",{class:"mbs2 mbe3"},"A basic progress ring component.",-1)),e(a,{value:75})]),i("div",L,[s[2]||(s[2]=i("h2",null,"Different Progress Values",-1)),s[3]||(s[3]=i("p",{class:"mbs2 mbe3"},"Progress rings showing various completion levels.",-1)),i("div",W,[e(a,{value:0}),e(a,{value:25}),e(a,{value:50}),e(a,{value:75}),e(a,{value:100})])]),i("div",$,[s[4]||(s[4]=i("h2",null,"Sizes",-1)),s[5]||(s[5]=i("p",{class:"mbs2 mbe3"},"Three size options: small, medium (default), and large.",-1)),i("div",_,[e(a,{size:"small",value:60}),e(a,{size:"medium",value:60}),e(a,{size:"large",value:60})])]),i("div",O,[s[11]||(s[11]=i("h2",null,"Variants",-1)),s[12]||(s[12]=i("p",{class:"mbs2 mbe3"},"Color variants for different contexts.",-1)),i("div",G,[i("div",j,[e(a,{variant:"primary",value:70}),s[6]||(s[6]=i("p",{style:{"margin-top":"0.5rem","font-size":"0.875rem"}},"Primary",-1))]),i("div",M,[e(a,{variant:"success",value:70}),s[7]||(s[7]=i("p",{style:{"margin-top":"0.5rem","font-size":"0.875rem"}},"Success",-1))]),i("div",J,[e(a,{variant:"warning",value:70}),s[8]||(s[8]=i("p",{style:{"margin-top":"0.5rem","font-size":"0.875rem"}},"Warning",-1))]),i("div",K,[e(a,{variant:"danger",value:70}),s[9]||(s[9]=i("p",{style:{"margin-top":"0.5rem","font-size":"0.875rem"}},"Danger",-1))]),i("div",H,[e(a,{variant:"info",value:70}),s[10]||(s[10]=i("p",{style:{"margin-top":"0.5rem","font-size":"0.875rem"}},"Info",-1))])])]),i("div",Q,[s[16]||(s[16]=i("h2",null,"Custom Labels",-1)),s[17]||(s[17]=i("p",{class:"mbs2 mbe3"},"Override the default slot to display custom content.",-1)),i("div",X,[e(a,{value:45},{default:r(()=>[...s[13]||(s[13]=[i("span",{style:{"font-size":"0.875rem","font-weight":"bold"}},"45/100",-1)])]),_:1}),e(a,{value:80,variant:"success"},{default:r(()=>[...s[14]||(s[14]=[i("span",{style:{"font-size":"1.25rem"}},"✓",-1)])]),_:1}),e(a,{value:30,variant:"warning"},{default:r(()=>[...s[15]||(s[15]=[i("span",{style:{"font-size":"0.75rem","text-align":"center"}},[l("Low"),i("br"),l("Storage")],-1)])]),_:1})])]),i("div",Y,[s[18]||(s[18]=i("h2",null,"No Animation",-1)),s[19]||(s[19]=i("p",{class:"mbs2 mbe3"},[l("Disable the fill animation with the "),i("code",null,"noAnimation"),l(" prop.")],-1)),e(a,{value:65,"no-animation":!0})]),i("div",Z,[s[22]||(s[22]=i("h2",null,"Animated Progress",-1)),s[23]||(s[23]=i("p",{class:"mbs2 mbe3"},"Progress ring with dynamic value updates.",-1)),i("div",null,[e(a,{value:n.animatedValue,variant:"info"},null,8,["value"]),i("div",ss,[e(h,{onClick:n.startAnimation,variant:"primary",bordered:"",grouped:""},{default:r(()=>[...s[20]||(s[20]=[l(" Start ",-1)])]),_:1},8,["onClick"]),e(h,{onClick:n.resetAnimation,variant:"primary",bordered:"",grouped:""},{default:r(()=>[...s[21]||(s[21]=[l(" Reset ",-1)])]),_:1},8,["onClick"])])])]),i("div",is,[s[24]||(s[24]=i("h2",null,"CSS Shadow Parts Customization",-1)),s[25]||(s[25]=i("p",{class:"mbs2 mbe3"}," Use CSS Shadow Parts to customize the component's appearance. ",-1)),e(a,{value:85,class:"custom-ring"})]),i("div",es,[s[32]||(s[32]=i("h2",null,"Real-world Example",-1)),s[33]||(s[33]=i("p",{class:"mbs2 mbe3"},"Progress rings in a dashboard-style layout.",-1)),i("div",ns,[i("div",as,[s[27]||(s[27]=i("h3",{style:{margin:"0 0 1rem 0","font-size":"0.875rem"}},"Tasks Complete",-1)),e(a,{value:85,variant:"success"},{default:r(()=>[...s[26]||(s[26]=[i("strong",null,"17/20",-1)])]),_:1})]),i("div",ts,[s[29]||(s[29]=i("h3",{style:{margin:"0 0 1rem 0","font-size":"0.875rem"}},"Storage Used",-1)),e(a,{value:68,variant:"warning"},{default:r(()=>[...s[28]||(s[28]=[i("strong",null,"68GB",-1)])]),_:1})]),i("div",rs,[s[31]||(s[31]=i("h3",{style:{margin:"0 0 1rem 0","font-size":"0.875rem"}},"CPU Usage",-1)),e(a,{value:42,variant:"info"},{default:r(()=>[...s[30]||(s[30]=[i("strong",null,"42%",-1)])]),_:1})])])])])}const os=B(N,[["render",ls]]);class u extends S{constructor(){super(),this.animatedValue=0,this.animationInterval=null}createRenderRoot(){return this}disconnectedCallback(){super.disconnectedCallback(),this.animationInterval&&clearInterval(this.animationInterval)}startAnimation(){this.animationInterval&&clearInterval(this.animationInterval),this.animatedValue=0,this.animationInterval=setInterval(()=>{this.animatedValue<100?this.animatedValue+=1:this.animationInterval&&(clearInterval(this.animationInterval),this.animationInterval=null)},30)}resetAnimation(){this.animationInterval&&(clearInterval(this.animationInterval),this.animationInterval=null),this.animatedValue=0}render(){return V`
      <section>
        <div class="mbe4">
          <h2>Default Progress Ring</h2>
          <p class="mbs2 mbe3">A basic progress ring component.</p>
          <ag-progress-ring value="75"></ag-progress-ring>
        </div>

        <div class="mbe4">
          <h2>Different Progress Values</h2>
          <p class="mbs2 mbe3">Progress rings showing various completion levels.</p>
          <div style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;">
            <ag-progress-ring value="0"></ag-progress-ring>
            <ag-progress-ring value="25"></ag-progress-ring>
            <ag-progress-ring value="50"></ag-progress-ring>
            <ag-progress-ring value="75"></ag-progress-ring>
            <ag-progress-ring value="100"></ag-progress-ring>
          </div>
        </div>

        <div class="mbe4">
          <h2>Sizes</h2>
          <p class="mbs2 mbe3">Three size options: small, medium (default), and large.</p>
          <div style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;">
            <ag-progress-ring size="small" value="60"></ag-progress-ring>
            <ag-progress-ring size="medium" value="60"></ag-progress-ring>
            <ag-progress-ring size="large" value="60"></ag-progress-ring>
          </div>
        </div>

        <div class="mbe4">
          <h2>Variants</h2>
          <p class="mbs2 mbe3">Color variants for different contexts.</p>
          <div style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;">
            <div style="text-align: center;">
              <ag-progress-ring variant="primary" value="70"></ag-progress-ring>
              <p style="margin-top: 0.5rem; font-size: 0.875rem;">Primary</p>
            </div>
            <div style="text-align: center;">
              <ag-progress-ring variant="success" value="70"></ag-progress-ring>
              <p style="margin-top: 0.5rem; font-size: 0.875rem;">Success</p>
            </div>
            <div style="text-align: center;">
              <ag-progress-ring variant="warning" value="70"></ag-progress-ring>
              <p style="margin-top: 0.5rem; font-size: 0.875rem;">Warning</p>
            </div>
            <div style="text-align: center;">
              <ag-progress-ring variant="danger" value="70"></ag-progress-ring>
              <p style="margin-top: 0.5rem; font-size: 0.875rem;">Danger</p>
            </div>
            <div style="text-align: center;">
              <ag-progress-ring variant="info" value="70"></ag-progress-ring>
              <p style="margin-top: 0.5rem; font-size: 0.875rem;">Info</p>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>Custom Labels</h2>
          <p class="mbs2 mbe3">Override the default slot to display custom content.</p>
          <div style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;">
            <ag-progress-ring value="45">
              <span style="font-size: 0.875rem; font-weight: bold;">45/100</span>
            </ag-progress-ring>
            <ag-progress-ring value="80" variant="success">
              <span style="font-size: 1.25rem;">✓</span>
            </ag-progress-ring>
            <ag-progress-ring value="30" variant="warning">
              <span style="font-size: 0.75rem; text-align: center;">Low<br />Storage</span>
            </ag-progress-ring>
          </div>
        </div>

        <div class="mbe4">
          <h2>No Animation</h2>
          <p class="mbs2 mbe3">Disable the fill animation with the <code>noAnimation</code> prop.</p>
          <ag-progress-ring value="65" no-animation></ag-progress-ring>
        </div>

        <div class="mbe4">
          <h2>Animated Progress</h2>
          <p class="mbs2 mbe3">Progress ring with dynamic value updates.</p>
          <div>
            <ag-progress-ring value=${this.animatedValue} variant="info"></ag-progress-ring>
            <div class="mbs6">
              <ag-button
                @click=${this.startAnimation}
                variant="primary"
                bordered
                grouped
              >
                Start
              </ag-button>
              <ag-button
                @click=${this.resetAnimation}
                variant="primary"
                bordered
                grouped
              >
                Reset
              </ag-button>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the component's appearance.
          </p>
          <ag-progress-ring value="85" class="custom-ring"></ag-progress-ring>
        </div>

        <div class="mbe4">
          <h2>Real-world Example</h2>
          <p class="mbs2 mbe3">Progress rings in a dashboard-style layout.</p>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1.5rem;">
            <div style="padding: 1rem; border: 1px solid #e0e0e0; border-radius: 8px; text-align: center;">
              <h3 style="margin: 0 0 1rem 0; font-size: 0.875rem;">Tasks Complete</h3>
              <ag-progress-ring value="85" variant="success">
                <strong>17/20</strong>
              </ag-progress-ring>
            </div>
            <div style="padding: 1rem; border: 1px solid #e0e0e0; border-radius: 8px; text-align: center;">
              <h3 style="margin: 0 0 1rem 0; font-size: 0.875rem;">Storage Used</h3>
              <ag-progress-ring value="68" variant="warning">
                <strong>68GB</strong>
              </ag-progress-ring>
            </div>
            <div style="padding: 1rem; border: 1px solid #e0e0e0; border-radius: 8px; text-align: center;">
              <h3 style="margin: 0 0 1rem 0; font-size: 0.875rem;">CPU Usage</h3>
              <ag-progress-ring value="42" variant="info">
                <strong>42%</strong>
              </ag-progress-ring>
            </div>
          </div>
        </div>
      </section>

      <style>
        /* CSS Shadow Parts customization examples */
        .custom-ring::part(track) {
          stroke: #e0e0e0;
          stroke-width: 6;
        }
        .custom-ring::part(indicator) {
          stroke: #667eea;
          stroke-width: 6;
          stroke-linecap: round;
          filter: drop-shadow(0 0 4px rgba(102, 126, 234, 0.5));
        }
        .custom-ring::part(label) {
          font-weight: bold;
          font-size: 1.5rem;
          color: #667eea;
        }
      </style>
    `}}m(u,"properties",{animatedValue:{type:Number}});customElements.define("progress-ring-lit-examples",u);const ps=`<template>
  <section>
    <div class="mbe4">
      <h2>Default Progress Ring</h2>
      <p class="mbs2 mbe3">A basic progress ring component.</p>
      <VueProgressRing :value="75" />
    </div>

    <div class="mbe4">
      <h2>Different Progress Values</h2>
      <p class="mbs2 mbe3">Progress rings showing various completion levels.</p>
      <div style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;">
        <VueProgressRing :value="0" />
        <VueProgressRing :value="25" />
        <VueProgressRing :value="50" />
        <VueProgressRing :value="75" />
        <VueProgressRing :value="100" />
      </div>
    </div>

    <div class="mbe4">
      <h2>Sizes</h2>
      <p class="mbs2 mbe3">Three size options: small, medium (default), and large.</p>
      <div style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;">
        <VueProgressRing
          size="small"
          :value="60"
        />
        <VueProgressRing
          size="medium"
          :value="60"
        />
        <VueProgressRing
          size="large"
          :value="60"
        />
      </div>
    </div>

    <div class="mbe4">
      <h2>Variants</h2>
      <p class="mbs2 mbe3">Color variants for different contexts.</p>
      <div style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;">
        <div style="text-align: center;">
          <VueProgressRing
            variant="primary"
            :value="70"
          />
          <p style="margin-top: 0.5rem; font-size: 0.875rem;">Primary</p>
        </div>
        <div style="text-align: center;">
          <VueProgressRing
            variant="success"
            :value="70"
          />
          <p style="margin-top: 0.5rem; font-size: 0.875rem;">Success</p>
        </div>
        <div style="text-align: center;">
          <VueProgressRing
            variant="warning"
            :value="70"
          />
          <p style="margin-top: 0.5rem; font-size: 0.875rem;">Warning</p>
        </div>
        <div style="text-align: center;">
          <VueProgressRing
            variant="danger"
            :value="70"
          />
          <p style="margin-top: 0.5rem; font-size: 0.875rem;">Danger</p>
        </div>
        <div style="text-align: center;">
          <VueProgressRing
            variant="info"
            :value="70"
          />
          <p style="margin-top: 0.5rem; font-size: 0.875rem;">Info</p>
        </div>
      </div>
    </div>

    <div class="mbe4">
      <h2>Custom Labels</h2>
      <p class="mbs2 mbe3">Override the default slot to display custom content.</p>
      <div style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;">
        <VueProgressRing :value="45">
          <span style="font-size: 0.875rem; font-weight: bold;">45/100</span>
        </VueProgressRing>
        <VueProgressRing
          :value="80"
          variant="success"
        >
          <span style="font-size: 1.25rem;">✓</span>
        </VueProgressRing>
        <VueProgressRing
          :value="30"
          variant="warning"
        >
          <span style="font-size: 0.75rem; text-align: center;">Low<br />Storage</span>
        </VueProgressRing>
      </div>
    </div>

    <div class="mbe4">
      <h2>No Animation</h2>
      <p class="mbs2 mbe3">Disable the fill animation with the <code>noAnimation</code> prop.</p>
      <VueProgressRing
        :value="65"
        :no-animation="true"
      />
    </div>

    <div class="mbe4">
      <h2>Animated Progress</h2>
      <p class="mbs2 mbe3">Progress ring with dynamic value updates.</p>
      <div>
        <VueProgressRing
          :value="animatedValue"
          variant="info"
        />
        <div class="mbs6">
          <VueButton
            @click="startAnimation"
            variant="primary"
            bordered
            grouped
          >
            Start
          </VueButton>
          <VueButton
            @click="resetAnimation"
            variant="primary"
            bordered
            grouped
          >
            Reset
          </VueButton>
        </div>
      </div>
    </div>

    <div class="mbe4">
      <h2>CSS Shadow Parts Customization</h2>
      <p class="mbs2 mbe3">
        Use CSS Shadow Parts to customize the component's appearance.
      </p>
      <VueProgressRing
        :value="85"
        class="custom-ring"
      />
    </div>

    <div class="mbe4">
      <h2>Real-world Example</h2>
      <p class="mbs2 mbe3">Progress rings in a dashboard-style layout.</p>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1.5rem;">
        <div style="padding: 1rem; border: 1px solid #e0e0e0; border-radius: 8px; text-align: center;">
          <h3 style="margin: 0 0 1rem 0; font-size: 0.875rem;">Tasks Complete</h3>
          <VueProgressRing
            :value="85"
            variant="success"
          >
            <strong>17/20</strong>
          </VueProgressRing>
        </div>
        <div style="padding: 1rem; border: 1px solid #e0e0e0; border-radius: 8px; text-align: center;">
          <h3 style="margin: 0 0 1rem 0; font-size: 0.875rem;">Storage Used</h3>
          <VueProgressRing
            :value="68"
            variant="warning"
          >
            <strong>68GB</strong>
          </VueProgressRing>
        </div>
        <div style="padding: 1rem; border: 1px solid #e0e0e0; border-radius: 8px; text-align: center;">
          <h3 style="margin: 0 0 1rem 0; font-size: 0.875rem;">CPU Usage</h3>
          <VueProgressRing
            :value="42"
            variant="info"
          >
            <strong>42%</strong>
          </VueProgressRing>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onUnmounted } from "vue";
import { VueProgressRing } from "agnosticui-core/progress-ring/vue";
import VueButton from "agnosticui-core/button/vue";

export default defineComponent({
  name: "ProgressRingExamples",
  components: {
    VueProgressRing,
    VueButton,
  },
  setup() {
    const animatedValue = ref(0);
    let animationInterval: number | null = null;

    const startAnimation = () => {
      if (animationInterval) {
        clearInterval(animationInterval);
      }

      animatedValue.value = 0;
      animationInterval = setInterval(() => {
        if (animatedValue.value < 100) {
          animatedValue.value += 1;
        } else {
          if (animationInterval) {
            clearInterval(animationInterval);
            animationInterval = null;
          }
        }
      }, 30);
    };

    const resetAnimation = () => {
      if (animationInterval) {
        clearInterval(animationInterval);
        animationInterval = null;
      }
      animatedValue.value = 0;
    };

    onUnmounted(() => {
      if (animationInterval) {
        clearInterval(animationInterval);
      }
    });

    return {
      animatedValue,
      startAnimation,
      resetAnimation,
    };
  },
});
<\/script>

<style>
/* CSS Shadow Parts customization examples */
.custom-ring::part(track) {
  stroke: #e0e0e0;
  stroke-width: 6;
}
.custom-ring::part(indicator) {
  stroke: #667eea;
  stroke-width: 6;
  stroke-linecap: round;
  filter: drop-shadow(0 0 4px rgba(102, 126, 234, 0.5));
}
.custom-ring::part(label) {
  font-weight: bold;
  font-size: 1.5rem;
  color: #667eea;
}
</style>
`,gs=`import { LitElement, html } from 'lit';
import 'agnosticui-core/progress-ring';
import 'agnosticui-core/button';

export class ProgressRingLitExamples extends LitElement {
  static properties = {
    animatedValue: { type: Number }
  };

  constructor() {
    super();
    this.animatedValue = 0;
    this.animationInterval = null;
  }

  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
    }
  }

  startAnimation() {
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
    }

    this.animatedValue = 0;
    this.animationInterval = setInterval(() => {
      if (this.animatedValue < 100) {
        this.animatedValue += 1;
      } else {
        if (this.animationInterval) {
          clearInterval(this.animationInterval);
          this.animationInterval = null;
        }
      }
    }, 30);
  }

  resetAnimation() {
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
      this.animationInterval = null;
    }
    this.animatedValue = 0;
  }

  render() {
    return html\`
      <section>
        <div class="mbe4">
          <h2>Default Progress Ring</h2>
          <p class="mbs2 mbe3">A basic progress ring component.</p>
          <ag-progress-ring value="75"></ag-progress-ring>
        </div>

        <div class="mbe4">
          <h2>Different Progress Values</h2>
          <p class="mbs2 mbe3">Progress rings showing various completion levels.</p>
          <div style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;">
            <ag-progress-ring value="0"></ag-progress-ring>
            <ag-progress-ring value="25"></ag-progress-ring>
            <ag-progress-ring value="50"></ag-progress-ring>
            <ag-progress-ring value="75"></ag-progress-ring>
            <ag-progress-ring value="100"></ag-progress-ring>
          </div>
        </div>

        <div class="mbe4">
          <h2>Sizes</h2>
          <p class="mbs2 mbe3">Three size options: small, medium (default), and large.</p>
          <div style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;">
            <ag-progress-ring size="small" value="60"></ag-progress-ring>
            <ag-progress-ring size="medium" value="60"></ag-progress-ring>
            <ag-progress-ring size="large" value="60"></ag-progress-ring>
          </div>
        </div>

        <div class="mbe4">
          <h2>Variants</h2>
          <p class="mbs2 mbe3">Color variants for different contexts.</p>
          <div style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;">
            <div style="text-align: center;">
              <ag-progress-ring variant="primary" value="70"></ag-progress-ring>
              <p style="margin-top: 0.5rem; font-size: 0.875rem;">Primary</p>
            </div>
            <div style="text-align: center;">
              <ag-progress-ring variant="success" value="70"></ag-progress-ring>
              <p style="margin-top: 0.5rem; font-size: 0.875rem;">Success</p>
            </div>
            <div style="text-align: center;">
              <ag-progress-ring variant="warning" value="70"></ag-progress-ring>
              <p style="margin-top: 0.5rem; font-size: 0.875rem;">Warning</p>
            </div>
            <div style="text-align: center;">
              <ag-progress-ring variant="danger" value="70"></ag-progress-ring>
              <p style="margin-top: 0.5rem; font-size: 0.875rem;">Danger</p>
            </div>
            <div style="text-align: center;">
              <ag-progress-ring variant="info" value="70"></ag-progress-ring>
              <p style="margin-top: 0.5rem; font-size: 0.875rem;">Info</p>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>Custom Labels</h2>
          <p class="mbs2 mbe3">Override the default slot to display custom content.</p>
          <div style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;">
            <ag-progress-ring value="45">
              <span style="font-size: 0.875rem; font-weight: bold;">45/100</span>
            </ag-progress-ring>
            <ag-progress-ring value="80" variant="success">
              <span style="font-size: 1.25rem;">✓</span>
            </ag-progress-ring>
            <ag-progress-ring value="30" variant="warning">
              <span style="font-size: 0.75rem; text-align: center;">Low<br />Storage</span>
            </ag-progress-ring>
          </div>
        </div>

        <div class="mbe4">
          <h2>No Animation</h2>
          <p class="mbs2 mbe3">Disable the fill animation with the <code>noAnimation</code> prop.</p>
          <ag-progress-ring value="65" no-animation></ag-progress-ring>
        </div>

        <div class="mbe4">
          <h2>Animated Progress</h2>
          <p class="mbs2 mbe3">Progress ring with dynamic value updates.</p>
          <div>
            <ag-progress-ring value=\${this.animatedValue} variant="info"></ag-progress-ring>
            <div class="mbs6">
              <ag-button
                @click=\${this.startAnimation}
                variant="primary"
                bordered
                grouped
              >
                Start
              </ag-button>
              <ag-button
                @click=\${this.resetAnimation}
                variant="primary"
                bordered
                grouped
              >
                Reset
              </ag-button>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the component's appearance.
          </p>
          <ag-progress-ring value="85" class="custom-ring"></ag-progress-ring>
        </div>

        <div class="mbe4">
          <h2>Real-world Example</h2>
          <p class="mbs2 mbe3">Progress rings in a dashboard-style layout.</p>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1.5rem;">
            <div style="padding: 1rem; border: 1px solid #e0e0e0; border-radius: 8px; text-align: center;">
              <h3 style="margin: 0 0 1rem 0; font-size: 0.875rem;">Tasks Complete</h3>
              <ag-progress-ring value="85" variant="success">
                <strong>17/20</strong>
              </ag-progress-ring>
            </div>
            <div style="padding: 1rem; border: 1px solid #e0e0e0; border-radius: 8px; text-align: center;">
              <h3 style="margin: 0 0 1rem 0; font-size: 0.875rem;">Storage Used</h3>
              <ag-progress-ring value="68" variant="warning">
                <strong>68GB</strong>
              </ag-progress-ring>
            </div>
            <div style="padding: 1rem; border: 1px solid #e0e0e0; border-radius: 8px; text-align: center;">
              <h3 style="margin: 0 0 1rem 0; font-size: 0.875rem;">CPU Usage</h3>
              <ag-progress-ring value="42" variant="info">
                <strong>42%</strong>
              </ag-progress-ring>
            </div>
          </div>
        </div>
      </section>

      <style>
        /* CSS Shadow Parts customization examples */
        .custom-ring::part(track) {
          stroke: #e0e0e0;
          stroke-width: 6;
        }
        .custom-ring::part(indicator) {
          stroke: #667eea;
          stroke-width: 6;
          stroke-linecap: round;
          filter: drop-shadow(0 0 4px rgba(102, 126, 234, 0.5));
        }
        .custom-ring::part(label) {
          font-weight: bold;
          font-size: 1.5rem;
          color: #667eea;
        }
      </style>
    \`;
  }
}

// Register the custom element
customElements.define('progress-ring-lit-examples', ProgressRingLitExamples);
`,ds=`import { useState, useEffect, useRef } from "react";
import { ReactProgressRing } from "agnosticui-core/progress-ring/react";
import { ReactButton } from "agnosticui-core/button/react";

export default function ProgressRingReactExamples() {
  const [animatedValue, setAnimatedValue] = useState(0);
  const animationIntervalRef = useRef(null);

  useEffect(() => {
    return () => {
      if (animationIntervalRef.current) {
        clearInterval(animationIntervalRef.current);
      }
    };
  }, []);

  const startAnimation = () => {
    if (animationIntervalRef.current) {
      clearInterval(animationIntervalRef.current);
    }

    setAnimatedValue(0);
    animationIntervalRef.current = setInterval(() => {
      setAnimatedValue((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          if (animationIntervalRef.current) {
            clearInterval(animationIntervalRef.current);
            animationIntervalRef.current = null;
          }
          return prev;
        }
      });
    }, 30);
  };

  const resetAnimation = () => {
    if (animationIntervalRef.current) {
      clearInterval(animationIntervalRef.current);
      animationIntervalRef.current = null;
    }
    setAnimatedValue(0);
  };

  return (
    <section>
      <div className="mbe4">
        <h2>Default Progress Ring</h2>
        <p className="mbs2 mbe3">A basic progress ring component.</p>
        <ReactProgressRing value={75} />
      </div>

      <div className="mbe4">
        <h2>Different Progress Values</h2>
        <p className="mbs2 mbe3">Progress rings showing various completion levels.</p>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}>
          <ReactProgressRing value={0} />
          <ReactProgressRing value={25} />
          <ReactProgressRing value={50} />
          <ReactProgressRing value={75} />
          <ReactProgressRing value={100} />
        </div>
      </div>

      <div className="mbe4">
        <h2>Sizes</h2>
        <p className="mbs2 mbe3">Three size options: small, medium (default), and large.</p>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}>
          <ReactProgressRing size="small" value={60} />
          <ReactProgressRing size="medium" value={60} />
          <ReactProgressRing size="large" value={60} />
        </div>
      </div>

      <div className="mbe4">
        <h2>Variants</h2>
        <p className="mbs2 mbe3">Color variants for different contexts.</p>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ textAlign: "center" }}>
            <ReactProgressRing variant="primary" value={70} />
            <p style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>Primary</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <ReactProgressRing variant="success" value={70} />
            <p style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>Success</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <ReactProgressRing variant="warning" value={70} />
            <p style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>Warning</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <ReactProgressRing variant="danger" value={70} />
            <p style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>Danger</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <ReactProgressRing variant="info" value={70} />
            <p style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>Info</p>
          </div>
        </div>
      </div>

      <div className="mbe4">
        <h2>Custom Labels</h2>
        <p className="mbs2 mbe3">Override the default slot to display custom content.</p>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}>
          <ReactProgressRing value={45}>
            <span style={{ fontSize: "0.875rem", fontWeight: "bold" }}>45/100</span>
          </ReactProgressRing>
          <ReactProgressRing value={80} variant="success">
            <span style={{ fontSize: "1.25rem" }}>✓</span>
          </ReactProgressRing>
          <ReactProgressRing value={30} variant="warning">
            <span style={{ fontSize: "0.75rem", textAlign: "center" }}>
              Low<br />Storage
            </span>
          </ReactProgressRing>
        </div>
      </div>

      <div className="mbe4">
        <h2>No Animation</h2>
        <p className="mbs2 mbe3">
          Disable the fill animation with the <code>noAnimation</code> prop.
        </p>
        <ReactProgressRing value={65} noAnimation={true} />
      </div>

      <div className="mbe4">
        <h2>Animated Progress</h2>
        <p className="mbs2 mbe3">Progress ring with dynamic value updates.</p>
        <div>
          <ReactProgressRing value={animatedValue} variant="info" />
          <div className="mbs6">
            <ReactButton
              onClick={startAnimation}
              variant="primary"
              bordered
              grouped
            >
              Start
            </ReactButton>
            <ReactButton
              onClick={resetAnimation}
              variant="primary"
              bordered
              grouped
            >
              Reset
            </ReactButton>
          </div>
        </div>
      </div>

      <div className="mbe4">
        <h2>CSS Shadow Parts Customization</h2>
        <p className="mbs2 mbe3">
          Use CSS Shadow Parts to customize the component's appearance.
        </p>
        <ReactProgressRing value={85} className="custom-ring" />
      </div>

      <div className="mbe4">
        <h2>Real-world Example</h2>
        <p className="mbs2 mbe3">Progress rings in a dashboard-style layout.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1.5rem" }}>
          <div style={{ padding: "1rem", border: "1px solid #e0e0e0", borderRadius: "8px", textAlign: "center" }}>
            <h3 style={{ margin: "0 0 1rem 0", fontSize: "0.875rem" }}>Tasks Complete</h3>
            <ReactProgressRing value={85} variant="success">
              <strong>17/20</strong>
            </ReactProgressRing>
          </div>
          <div style={{ padding: "1rem", border: "1px solid #e0e0e0", borderRadius: "8px", textAlign: "center" }}>
            <h3 style={{ margin: "0 0 1rem 0", fontSize: "0.875rem" }}>Storage Used</h3>
            <ReactProgressRing value={68} variant="warning">
              <strong>68GB</strong>
            </ReactProgressRing>
          </div>
          <div style={{ padding: "1rem", border: "1px solid #e0e0e0", borderRadius: "8px", textAlign: "center" }}>
            <h3 style={{ margin: "0 0 1rem 0", fontSize: "0.875rem" }}>CPU Usage</h3>
            <ReactProgressRing value={42} variant="info">
              <strong>42%</strong>
            </ReactProgressRing>
          </div>
        </div>
      </div>
    </section>
  );
}
`,Ps=JSON.parse('{"title":"Progress Ring","description":"","frontmatter":{},"headers":[],"relativePath":"components/progress-ring.md","filePath":"components/progress-ring.md"}'),hs={name:"components/progress-ring.md"},As=Object.assign(hs,{setup(n){return(s,t)=>(d(),g("div",null,[t[1]||(t[1]=i("h1",{id:"progress-ring",tabindex:"-1"},[l("Progress Ring "),i("a",{class:"header-anchor",href:"#progress-ring","aria-label":'Permalink to "Progress Ring"'},"​")],-1)),e(f),t[2]||(t[2]=i("p",null,"The Progress Ring component provides a circular progress indicator that can display determinate or indeterminate progress states. It's highly customizable with different sizes, colors, and animation options.",-1)),t[3]||(t[3]=i("h2",{id:"examples",tabindex:"-1"},[l("Examples "),i("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),e(z,{component:"progress-ring","vue-code":p(ps),"lit-code":p(gs),"react-code":p(ds)},{vue:r(()=>[e(os)]),lit:r(()=>[...t[0]||(t[0]=[i("progress-ring-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),t[4]||(t[4]=w("",17))]))}});export{Ps as __pageData,As as default};
