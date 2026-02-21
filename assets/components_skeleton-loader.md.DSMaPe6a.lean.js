import{A as f}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{i as w,z as h,a as x,x as u}from"./chunks/Button.CFkPNK98.js";import{s as C}from"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d as F,c as k,o as g,r as S,K as L,p as A,v as q,P as D,s as E,_ as R,C as B,j as a,G as i,F as V,B as P,ae as N,a as m,w as v,k as c}from"./chunks/framework.NAAYCHZu.js";import{F as T}from"./chunks/FrameworkExample.Cm-JbUj-.js";import"./chunks/createLucideIcon.B61Wqv9x.js";import"./chunks/state-CovhUvdr.DWhhlYib.js";import"./chunks/sdk.m.DhOmSlC9.js";import"./chunks/Icon.DjToxxjJ.js";var I=Object.defineProperty,p=(s,e,n,l)=>{for(var r=void 0,o=s.length-1,t;o>=0;o--)(t=s[o])&&(r=t(e,n,r)||r);return r&&I(e,n,r),r};const y=class extends x{constructor(){super(),this.variant="text",this.effect="pulse",this.intensity="light"}connectedCallback(){super.connectedCallback(),this.hasAttribute("aria-hidden")||this.setAttribute("aria-hidden","true")}updated(e){super.updated(e),(e.has("width")||e.has("height")||e.has("variant"))&&this._updateDimensions()}_updateDimensions(){this.variant==="circular"?this.width&&!this.height?(this.style.height=this.width,this.style.width=this.width):this.height&&!this.width?(this.style.width=this.height,this.style.height=this.height):this.width&&this.height&&(this.style.width=this.width,this.style.height=this.height):(this.width&&(this.style.width=this.width),this.height&&(this.style.height=this.height))}render(){return u`<div class="skeleton-wrapper" part="ag-skeleton-wrapper"></div>`}};y.styles=w`
    :host {
      display: block;
      background-color: var(--ag-background-secondary);
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 1em;
    }

    /* Intensity variants */
    :host([intensity='light']) {
      background-color: var(--ag-background-secondary);
    }

    :host([intensity='medium']) {
      background-color: var(--ag-background-tertiary);
    }

    /* Variants */
    :host([variant='text']) {
      border-radius: var(--ag-radius-sm);
    }

    :host([variant='circular']) {
      border-radius: 50%;
    }

    :host([variant='rectangular']) {
      border-radius: 0;
    }

    :host([variant='rounded']) {
      border-radius: var(--ag-radius-md);
    }

    /* Effects */
    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
    }

    :host([effect='pulse']) {
      animation: pulse 1.5s infinite ease-in-out;
    }

    :host([effect='sheen'])::after {
      content: "";
      position: absolute;
      inset: 0;
      transform: translateX(-100%);
      background-image: linear-gradient(
        90deg,
        transparent 0%,
        var(--ag-background-primary) 20%,
        var(--ag-background-primary) 60%,
        transparent 100%
      );
      opacity: 0.3;
      animation: sheen 1.5s infinite;
    }

    @keyframes sheen {
      100% {
        transform: translateX(100%);
      }
    }

    :host([effect='none']) {
      animation: none;
    }

    /* Respect prefers-reduced-motion */
    @media (prefers-reduced-motion: reduce) {
      :host([effect='pulse']),
      :host([effect='sheen'])::after {
        animation: none;
      }
    }
  `;let d=y;p([h({type:String,reflect:!0})],d.prototype,"variant");p([h({type:String,reflect:!0})],d.prototype,"effect");p([h({type:String,reflect:!0})],d.prototype,"intensity");p([h({type:String,reflect:!0})],d.prototype,"width");p([h({type:String,reflect:!0})],d.prototype,"height");customElements.get("ag-skeleton-loader")||customElements.define("ag-skeleton-loader",d);const _=F({name:"VueSkeletonLoader",props:{variant:{type:String,default:"text"},effect:{type:String,default:"pulse"},intensity:{type:String,default:"light"},width:{type:String,default:void 0},height:{type:String,default:void 0}},setup(s){const e=A(null),n=()=>{const l=e.value;l&&(l.variant=s.variant,l.effect=s.effect,l.intensity=s.intensity,l.width=s.width,l.height=s.height)};return q(async()=>{await customElements.whenDefined("ag-skeleton-loader"),await D(),n()}),E(()=>{e.value&&n()}),{agComponent:e}}}),U=["variant","effect","intensity","width","height"];function z(s,e,n,l,r,o){return g(),k("ag-skeleton-loader",L({ref:"agComponent",variant:s.variant,effect:s.effect,intensity:s.intensity,width:s.width,height:s.height},s.$attrs),[S(s.$slots,"default")],16,U)}const M=C(_,[["render",z]]),W=F({name:"SkeletonLoaderExamples",components:{VueSkeletonLoader:M}}),$={class:"mbe4"},O={style:{width:"300px"}},j={class:"mbe4"},G={class:"flex items-center",style:{gap:"16px"}},K={class:"mbe4"},X={class:"mbe4"},J={class:"mbe4"},H={class:"flex",style:{gap:"24px","flex-wrap":"wrap"}},Q={class:"mbe4"},Y={class:"flex",style:{gap:"24px","flex-wrap":"wrap"}},Z={class:"mbe4"},ee={class:"flex",style:{gap:"16px",padding:"20px",border:"1px solid var(--ag-border)","border-radius":"var(--ag-radius-md)","max-width":"400px"}},ae={style:{flex:"1"}},te={class:"mbe4"},ie={style:{border:"1px solid var(--ag-border)","border-radius":"var(--ag-radius-md)",overflow:"hidden","max-width":"350px"}},se={style:{padding:"16px"}},ne={class:"mbe4"},le={style:{"max-width":"500px"}},re={style:{flex:"1"}},de={class:"mbe4"};function oe(s,e,n,l,r,o){const t=B("VueSkeletonLoader");return g(),k("section",null,[a("div",$,[e[0]||(e[0]=a("h2",null,"Text Skeleton",-1)),e[1]||(e[1]=a("p",{class:"mbs2 mbe3"}," Default text skeleton with subtle border radius, perfect for text placeholders. ",-1)),a("div",O,[i(t),i(t,{style:{"margin-top":"8px"}}),i(t,{style:{"margin-top":"8px",width:"60%"}})])]),a("div",j,[e[2]||(e[2]=a("h2",null,"Circular Skeleton",-1)),e[3]||(e[3]=a("p",{class:"mbs2 mbe3"}," Circular variant, ideal for avatar placeholders. ",-1)),a("div",G,[i(t,{variant:"circular",width:"40px",height:"40px"}),i(t,{variant:"circular",width:"60px",height:"60px"}),i(t,{variant:"circular",width:"80px",height:"80px"})])]),a("div",K,[e[4]||(e[4]=a("h2",null,"Rectangular Skeleton",-1)),e[5]||(e[5]=a("p",{class:"mbs2 mbe3"}," Rectangular variant with no border radius, perfect for images. ",-1)),i(t,{variant:"rectangular",width:"300px",height:"200px"})]),a("div",X,[e[6]||(e[6]=a("h2",null,"Rounded Skeleton",-1)),e[7]||(e[7]=a("p",{class:"mbs2 mbe3"}," Rounded variant with medium border radius, ideal for cards. ",-1)),i(t,{variant:"rounded",width:"300px",height:"200px"})]),a("div",J,[e[11]||(e[11]=a("h2",null,"Effects",-1)),e[12]||(e[12]=a("p",{class:"mbs2 mbe3"}," Different animation effects: pulse (default), sheen, and none. ",-1)),a("div",H,[a("div",null,[e[8]||(e[8]=a("h3",{class:"mbe2"},"Pulse",-1)),i(t,{effect:"pulse",width:"200px",height:"100px",variant:"rounded"})]),a("div",null,[e[9]||(e[9]=a("h3",{class:"mbe2"},"Sheen",-1)),i(t,{effect:"sheen",width:"200px",height:"100px",variant:"rounded"})]),a("div",null,[e[10]||(e[10]=a("h3",{class:"mbe2"},"None",-1)),i(t,{effect:"none",width:"200px",height:"100px",variant:"rounded"})])])]),a("div",Q,[e[15]||(e[15]=a("h2",null,"Intensity",-1)),e[16]||(e[16]=a("p",{class:"mbs2 mbe3"}," Light (default) uses --ag-background-secondary, medium uses --ag-background-tertiary. ",-1)),a("div",Y,[a("div",null,[e[13]||(e[13]=a("h3",{class:"mbe2"},"Light",-1)),i(t,{intensity:"light",width:"200px",height:"100px",variant:"rounded"})]),a("div",null,[e[14]||(e[14]=a("h3",{class:"mbe2"},"Medium",-1)),i(t,{intensity:"medium",width:"200px",height:"100px",variant:"rounded"})])])]),a("div",Z,[e[17]||(e[17]=a("h2",null,"User Profile Card Loading",-1)),e[18]||(e[18]=a("p",{class:"mbs2 mbe3"}," Real-world example showing a loading profile card. ",-1)),a("div",ee,[i(t,{variant:"circular",width:"60px",height:"60px"}),a("div",ae,[i(t,{width:"40%",height:"16px"}),i(t,{width:"60%",height:"14px",style:{"margin-top":"8px"}}),i(t,{width:"80%",height:"14px",style:{"margin-top":"8px"}})])])]),a("div",te,[e[19]||(e[19]=a("h2",null,"Article Card Loading",-1)),e[20]||(e[20]=a("p",{class:"mbs2 mbe3"}," Real-world example showing a loading article card. ",-1)),a("div",ie,[i(t,{variant:"rectangular",width:"100%",height:"200px"}),a("div",se,[i(t,{width:"60%",height:"20px"}),i(t,{width:"100%",height:"14px",style:{"margin-top":"12px"}}),i(t,{width:"100%",height:"14px",style:{"margin-top":"8px"}}),i(t,{width:"40%",height:"14px",style:{"margin-top":"8px"}})])])]),a("div",ne,[e[21]||(e[21]=a("h2",null,"List Loading",-1)),e[22]||(e[22]=a("p",{class:"mbs2 mbe3"}," Real-world example showing a loading list. ",-1)),a("div",le,[(g(),k(V,null,P(3,b=>a("div",{key:b,class:"flex items-center",style:{gap:"12px","margin-bottom":"16px"}},[i(t,{variant:"circular",width:"40px",height:"40px"}),a("div",re,[i(t,{width:"60%",height:"16px"}),i(t,{width:"40%",height:"14px",style:{"margin-top":"8px"}})])])),64))])]),a("div",de,[e[23]||(e[23]=a("h2",null,"CSS Shadow Parts Customization",-1)),e[24]||(e[24]=a("p",{class:"mbs2 mbe3"}," Use CSS Shadow Parts to customize the skeleton's appearance. ",-1)),i(t,{class:"custom-skeleton",width:"300px",height:"100px",variant:"rounded"})])])}const he=R(W,[["render",oe]]);class pe extends x{createRenderRoot(){return this}render(){return u`
      <section>
        <div class="mbe4">
          <h2>Text Skeleton</h2>
          <p class="mbs2 mbe3">
            Default text skeleton with subtle border radius, perfect for text placeholders.
          </p>
          <div style="width: 300px">
            <ag-skeleton-loader></ag-skeleton-loader>
            <ag-skeleton-loader style="margin-top: 8px"></ag-skeleton-loader>
            <ag-skeleton-loader style="margin-top: 8px; width: 60%"></ag-skeleton-loader>
          </div>
        </div>

        <div class="mbe4">
          <h2>Circular Skeleton</h2>
          <p class="mbs2 mbe3">
            Circular variant, ideal for avatar placeholders.
          </p>
          <div
            class="flex items-center"
            style="gap: 16px"
          >
            <ag-skeleton-loader
              variant="circular"
              width="40px"
              height="40px"
            ></ag-skeleton-loader>
            <ag-skeleton-loader
              variant="circular"
              width="60px"
              height="60px"
            ></ag-skeleton-loader>
            <ag-skeleton-loader
              variant="circular"
              width="80px"
              height="80px"
            ></ag-skeleton-loader>
          </div>
        </div>

        <div class="mbe4">
          <h2>Rectangular Skeleton</h2>
          <p class="mbs2 mbe3">
            Rectangular variant with no border radius, perfect for images.
          </p>
          <ag-skeleton-loader
            variant="rectangular"
            width="300px"
            height="200px"
          ></ag-skeleton-loader>
        </div>

        <div class="mbe4">
          <h2>Rounded Skeleton</h2>
          <p class="mbs2 mbe3">
            Rounded variant with medium border radius, ideal for cards.
          </p>
          <ag-skeleton-loader
            variant="rounded"
            width="300px"
            height="200px"
          ></ag-skeleton-loader>
        </div>

        <div class="mbe4">
          <h2>Effects</h2>
          <p class="mbs2 mbe3">
            Different animation effects: pulse (default), sheen, and none.
          </p>
          <div
            class="flex"
            style="gap: 24px; flex-wrap: wrap"
          >
            <div>
              <h3 class="mbe2">Pulse</h3>
              <ag-skeleton-loader
                effect="pulse"
                width="200px"
                height="100px"
                variant="rounded"
              ></ag-skeleton-loader>
            </div>
            <div>
              <h3 class="mbe2">Sheen</h3>
              <ag-skeleton-loader
                effect="sheen"
                width="200px"
                height="100px"
                variant="rounded"
              ></ag-skeleton-loader>
            </div>
            <div>
              <h3 class="mbe2">None</h3>
              <ag-skeleton-loader
                effect="none"
                width="200px"
                height="100px"
                variant="rounded"
              ></ag-skeleton-loader>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>Intensity</h2>
          <p class="mbs2 mbe3">
            Light (default) uses --ag-background-secondary, medium uses --ag-background-tertiary.
          </p>
          <div
            class="flex"
            style="gap: 24px; flex-wrap: wrap"
          >
            <div>
              <h3 class="mbe2">Light</h3>
              <ag-skeleton-loader
                intensity="light"
                width="200px"
                height="100px"
                variant="rounded"
              ></ag-skeleton-loader>
            </div>
            <div>
              <h3 class="mbe2">Medium</h3>
              <ag-skeleton-loader
                intensity="medium"
                width="200px"
                height="100px"
                variant="rounded"
              ></ag-skeleton-loader>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>User Profile Card Loading</h2>
          <p class="mbs2 mbe3">
            Real-world example showing a loading profile card.
          </p>
          <div
            class="flex"
            style="gap: 16px; padding: 20px; border: 1px solid var(--ag-border); border-radius: var(--ag-radius-md); max-width: 400px"
          >
            <ag-skeleton-loader
              variant="circular"
              width="60px"
              height="60px"
            ></ag-skeleton-loader>
            <div style="flex: 1">
              <ag-skeleton-loader
                width="40%"
                height="16px"
              ></ag-skeleton-loader>
              <ag-skeleton-loader
                width="60%"
                height="14px"
                style="margin-top: 8px"
              ></ag-skeleton-loader>
              <ag-skeleton-loader
                width="80%"
                height="14px"
                style="margin-top: 8px"
              ></ag-skeleton-loader>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>Article Card Loading</h2>
          <p class="mbs2 mbe3">
            Real-world example showing a loading article card.
          </p>
          <div style="border: 1px solid var(--ag-border); border-radius: var(--ag-radius-md); overflow: hidden; max-width: 350px">
            <ag-skeleton-loader
              variant="rectangular"
              width="100%"
              height="200px"
            ></ag-skeleton-loader>
            <div style="padding: 16px">
              <ag-skeleton-loader
                width="60%"
                height="20px"
              ></ag-skeleton-loader>
              <ag-skeleton-loader
                width="100%"
                height="14px"
                style="margin-top: 12px"
              ></ag-skeleton-loader>
              <ag-skeleton-loader
                width="100%"
                height="14px"
                style="margin-top: 8px"
              ></ag-skeleton-loader>
              <ag-skeleton-loader
                width="40%"
                height="14px"
                style="margin-top: 8px"
              ></ag-skeleton-loader>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>List Loading</h2>
          <p class="mbs2 mbe3">
            Real-world example showing a loading list.
          </p>
          <div style="max-width: 500px">
            ${[1,2,3].map(()=>u`
              <div
                class="flex items-center"
                style="gap: 12px; margin-bottom: 16px"
              >
                <ag-skeleton-loader
                  variant="circular"
                  width="40px"
                  height="40px"
                ></ag-skeleton-loader>
                <div style="flex: 1">
                  <ag-skeleton-loader
                    width="60%"
                    height="16px"
                  ></ag-skeleton-loader>
                  <ag-skeleton-loader
                    width="40%"
                    height="14px"
                    style="margin-top: 8px"
                  ></ag-skeleton-loader>
                </div>
              </div>
            `)}
          </div>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the skeleton's appearance.
          </p>
          <ag-skeleton-loader
            class="custom-skeleton"
            width="300px"
            height="100px"
            variant="rounded"
          ></ag-skeleton-loader>
        </div>
      </section>
    `}}customElements.define("skeleton-loader-lit-examples",pe);const ke=`<template>
  <section>
    <div class="mbe4">
      <h2>Text Skeleton</h2>
      <p class="mbs2 mbe3">
        Default text skeleton with subtle border radius, perfect for text placeholders.
      </p>
      <div style="width: 300px">
        <VueSkeletonLoader />
        <VueSkeletonLoader style="margin-top: 8px" />
        <VueSkeletonLoader style="margin-top: 8px; width: 60%" />
      </div>
    </div>

    <div class="mbe4">
      <h2>Circular Skeleton</h2>
      <p class="mbs2 mbe3">
        Circular variant, ideal for avatar placeholders.
      </p>
      <div
        class="flex items-center"
        style="gap: 16px"
      >
        <VueSkeletonLoader
          variant="circular"
          width="40px"
          height="40px"
        />
        <VueSkeletonLoader
          variant="circular"
          width="60px"
          height="60px"
        />
        <VueSkeletonLoader
          variant="circular"
          width="80px"
          height="80px"
        />
      </div>
    </div>

    <div class="mbe4">
      <h2>Rectangular Skeleton</h2>
      <p class="mbs2 mbe3">
        Rectangular variant with no border radius, perfect for images.
      </p>
      <VueSkeletonLoader
        variant="rectangular"
        width="300px"
        height="200px"
      />
    </div>

    <div class="mbe4">
      <h2>Rounded Skeleton</h2>
      <p class="mbs2 mbe3">
        Rounded variant with medium border radius, ideal for cards.
      </p>
      <VueSkeletonLoader
        variant="rounded"
        width="300px"
        height="200px"
      />
    </div>

    <div class="mbe4">
      <h2>Effects</h2>
      <p class="mbs2 mbe3">
        Different animation effects: pulse (default), sheen, and none.
      </p>
      <div
        class="flex"
        style="gap: 24px; flex-wrap: wrap"
      >
        <div>
          <h3 class="mbe2">Pulse</h3>
          <VueSkeletonLoader
            effect="pulse"
            width="200px"
            height="100px"
            variant="rounded"
          />
        </div>
        <div>
          <h3 class="mbe2">Sheen</h3>
          <VueSkeletonLoader
            effect="sheen"
            width="200px"
            height="100px"
            variant="rounded"
          />
        </div>
        <div>
          <h3 class="mbe2">None</h3>
          <VueSkeletonLoader
            effect="none"
            width="200px"
            height="100px"
            variant="rounded"
          />
        </div>
      </div>
    </div>

    <div class="mbe4">
      <h2>Intensity</h2>
      <p class="mbs2 mbe3">
        Light (default) uses --ag-background-secondary, medium uses --ag-background-tertiary.
      </p>
      <div
        class="flex"
        style="gap: 24px; flex-wrap: wrap"
      >
        <div>
          <h3 class="mbe2">Light</h3>
          <VueSkeletonLoader
            intensity="light"
            width="200px"
            height="100px"
            variant="rounded"
          />
        </div>
        <div>
          <h3 class="mbe2">Medium</h3>
          <VueSkeletonLoader
            intensity="medium"
            width="200px"
            height="100px"
            variant="rounded"
          />
        </div>
      </div>
    </div>

    <div class="mbe4">
      <h2>User Profile Card Loading</h2>
      <p class="mbs2 mbe3">
        Real-world example showing a loading profile card.
      </p>
      <div
        class="flex"
        style="gap: 16px; padding: 20px; border: 1px solid var(--ag-border); border-radius: var(--ag-radius-md); max-width: 400px"
      >
        <VueSkeletonLoader
          variant="circular"
          width="60px"
          height="60px"
        />
        <div style="flex: 1">
          <VueSkeletonLoader
            width="40%"
            height="16px"
          />
          <VueSkeletonLoader
            width="60%"
            height="14px"
            style="margin-top: 8px"
          />
          <VueSkeletonLoader
            width="80%"
            height="14px"
            style="margin-top: 8px"
          />
        </div>
      </div>
    </div>

    <div class="mbe4">
      <h2>Article Card Loading</h2>
      <p class="mbs2 mbe3">
        Real-world example showing a loading article card.
      </p>
      <div style="border: 1px solid var(--ag-border); border-radius: var(--ag-radius-md); overflow: hidden; max-width: 350px">
        <VueSkeletonLoader
          variant="rectangular"
          width="100%"
          height="200px"
        />
        <div style="padding: 16px">
          <VueSkeletonLoader
            width="60%"
            height="20px"
          />
          <VueSkeletonLoader
            width="100%"
            height="14px"
            style="margin-top: 12px"
          />
          <VueSkeletonLoader
            width="100%"
            height="14px"
            style="margin-top: 8px"
          />
          <VueSkeletonLoader
            width="40%"
            height="14px"
            style="margin-top: 8px"
          />
        </div>
      </div>
    </div>

    <div class="mbe4">
      <h2>List Loading</h2>
      <p class="mbs2 mbe3">
        Real-world example showing a loading list.
      </p>
      <div style="max-width: 500px">
        <div
          v-for="i in 3"
          :key="i"
          class="flex items-center"
          style="gap: 12px; margin-bottom: 16px"
        >
          <VueSkeletonLoader
            variant="circular"
            width="40px"
            height="40px"
          />
          <div style="flex: 1">
            <VueSkeletonLoader
              width="60%"
              height="16px"
            />
            <VueSkeletonLoader
              width="40%"
              height="14px"
              style="margin-top: 8px"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="mbe4">
      <h2>CSS Shadow Parts Customization</h2>
      <p class="mbs2 mbe3">
        Use CSS Shadow Parts to customize the skeleton's appearance.
      </p>
      <VueSkeletonLoader
        class="custom-skeleton"
        width="300px"
        height="100px"
        variant="rounded"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueSkeletonLoader } from "agnosticui-core/skeleton/vue";

export default defineComponent({
  name: "SkeletonLoaderExamples",
  components: {
    VueSkeletonLoader,
  },
});
<\/script>

<style>
.custom-skeleton::part(ag-skeleton-wrapper) {
  background: linear-gradient(
    90deg,
    var(--ag-primary-light) 0%,
    var(--ag-primary) 50%,
    var(--ag-primary-light) 100%
  );
  background-size: 200% 100%;
  animation: custom-shimmer 2s infinite;
}

@keyframes custom-shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
`,ge=`import { LitElement, html } from 'lit';
import 'agnosticui-core/skeleton';

export class SkeletonLoaderLitExamples extends LitElement {
  // CRITICAL: Must include createRenderRoot() to use light DOM
  // Without this, global CSS utility classes won't work!
  createRenderRoot() {
    return this;
  }

  render() {
    return html\`
      <section>
        <div class="mbe4">
          <h2>Text Skeleton</h2>
          <p class="mbs2 mbe3">
            Default text skeleton with subtle border radius, perfect for text placeholders.
          </p>
          <div style="width: 300px">
            <ag-skeleton-loader></ag-skeleton-loader>
            <ag-skeleton-loader style="margin-top: 8px"></ag-skeleton-loader>
            <ag-skeleton-loader style="margin-top: 8px; width: 60%"></ag-skeleton-loader>
          </div>
        </div>

        <div class="mbe4">
          <h2>Circular Skeleton</h2>
          <p class="mbs2 mbe3">
            Circular variant, ideal for avatar placeholders.
          </p>
          <div
            class="flex items-center"
            style="gap: 16px"
          >
            <ag-skeleton-loader
              variant="circular"
              width="40px"
              height="40px"
            ></ag-skeleton-loader>
            <ag-skeleton-loader
              variant="circular"
              width="60px"
              height="60px"
            ></ag-skeleton-loader>
            <ag-skeleton-loader
              variant="circular"
              width="80px"
              height="80px"
            ></ag-skeleton-loader>
          </div>
        </div>

        <div class="mbe4">
          <h2>Rectangular Skeleton</h2>
          <p class="mbs2 mbe3">
            Rectangular variant with no border radius, perfect for images.
          </p>
          <ag-skeleton-loader
            variant="rectangular"
            width="300px"
            height="200px"
          ></ag-skeleton-loader>
        </div>

        <div class="mbe4">
          <h2>Rounded Skeleton</h2>
          <p class="mbs2 mbe3">
            Rounded variant with medium border radius, ideal for cards.
          </p>
          <ag-skeleton-loader
            variant="rounded"
            width="300px"
            height="200px"
          ></ag-skeleton-loader>
        </div>

        <div class="mbe4">
          <h2>Effects</h2>
          <p class="mbs2 mbe3">
            Different animation effects: pulse (default), sheen, and none.
          </p>
          <div
            class="flex"
            style="gap: 24px; flex-wrap: wrap"
          >
            <div>
              <h3 class="mbe2">Pulse</h3>
              <ag-skeleton-loader
                effect="pulse"
                width="200px"
                height="100px"
                variant="rounded"
              ></ag-skeleton-loader>
            </div>
            <div>
              <h3 class="mbe2">Sheen</h3>
              <ag-skeleton-loader
                effect="sheen"
                width="200px"
                height="100px"
                variant="rounded"
              ></ag-skeleton-loader>
            </div>
            <div>
              <h3 class="mbe2">None</h3>
              <ag-skeleton-loader
                effect="none"
                width="200px"
                height="100px"
                variant="rounded"
              ></ag-skeleton-loader>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>Intensity</h2>
          <p class="mbs2 mbe3">
            Light (default) uses --ag-background-secondary, medium uses --ag-background-tertiary.
          </p>
          <div
            class="flex"
            style="gap: 24px; flex-wrap: wrap"
          >
            <div>
              <h3 class="mbe2">Light</h3>
              <ag-skeleton-loader
                intensity="light"
                width="200px"
                height="100px"
                variant="rounded"
              ></ag-skeleton-loader>
            </div>
            <div>
              <h3 class="mbe2">Medium</h3>
              <ag-skeleton-loader
                intensity="medium"
                width="200px"
                height="100px"
                variant="rounded"
              ></ag-skeleton-loader>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>User Profile Card Loading</h2>
          <p class="mbs2 mbe3">
            Real-world example showing a loading profile card.
          </p>
          <div
            class="flex"
            style="gap: 16px; padding: 20px; border: 1px solid var(--ag-border); border-radius: var(--ag-radius-md); max-width: 400px"
          >
            <ag-skeleton-loader
              variant="circular"
              width="60px"
              height="60px"
            ></ag-skeleton-loader>
            <div style="flex: 1">
              <ag-skeleton-loader
                width="40%"
                height="16px"
              ></ag-skeleton-loader>
              <ag-skeleton-loader
                width="60%"
                height="14px"
                style="margin-top: 8px"
              ></ag-skeleton-loader>
              <ag-skeleton-loader
                width="80%"
                height="14px"
                style="margin-top: 8px"
              ></ag-skeleton-loader>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>Article Card Loading</h2>
          <p class="mbs2 mbe3">
            Real-world example showing a loading article card.
          </p>
          <div style="border: 1px solid var(--ag-border); border-radius: var(--ag-radius-md); overflow: hidden; max-width: 350px">
            <ag-skeleton-loader
              variant="rectangular"
              width="100%"
              height="200px"
            ></ag-skeleton-loader>
            <div style="padding: 16px">
              <ag-skeleton-loader
                width="60%"
                height="20px"
              ></ag-skeleton-loader>
              <ag-skeleton-loader
                width="100%"
                height="14px"
                style="margin-top: 12px"
              ></ag-skeleton-loader>
              <ag-skeleton-loader
                width="100%"
                height="14px"
                style="margin-top: 8px"
              ></ag-skeleton-loader>
              <ag-skeleton-loader
                width="40%"
                height="14px"
                style="margin-top: 8px"
              ></ag-skeleton-loader>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>List Loading</h2>
          <p class="mbs2 mbe3">
            Real-world example showing a loading list.
          </p>
          <div style="max-width: 500px">
            \${[1, 2, 3].map(() => html\`
              <div
                class="flex items-center"
                style="gap: 12px; margin-bottom: 16px"
              >
                <ag-skeleton-loader
                  variant="circular"
                  width="40px"
                  height="40px"
                ></ag-skeleton-loader>
                <div style="flex: 1">
                  <ag-skeleton-loader
                    width="60%"
                    height="16px"
                  ></ag-skeleton-loader>
                  <ag-skeleton-loader
                    width="40%"
                    height="14px"
                    style="margin-top: 8px"
                  ></ag-skeleton-loader>
                </div>
              </div>
            \`)}
          </div>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the skeleton's appearance.
          </p>
          <ag-skeleton-loader
            class="custom-skeleton"
            width="300px"
            height="100px"
            variant="rounded"
          ></ag-skeleton-loader>
        </div>
      </section>
    \`;
  }
}

// Register the custom element (at the bottom, NOT with decorator)
customElements.define('skeleton-loader-lit-examples', SkeletonLoaderLitExamples);
`,ce=`import { ReactSkeletonLoader } from "agnosticui-core/skeleton/react";

export default function SkeletonLoaderReactExamples() {
  return (
    <section>
      <div className="mbe4">
        <h2>Text Skeleton</h2>
        <p className="mbs2 mbe3">
          Default text skeleton with subtle border radius, perfect for text placeholders.
        </p>
        <div style={{ width: '300px' }}>
          <ReactSkeletonLoader />
          <ReactSkeletonLoader style={{ marginTop: '8px' }} />
          <ReactSkeletonLoader style={{ marginTop: '8px', width: '60%' }} />
        </div>
      </div>

      <div className="mbe4">
        <h2>Circular Skeleton</h2>
        <p className="mbs2 mbe3">
          Circular variant, ideal for avatar placeholders.
        </p>
        <div
          className="flex items-center"
          style={{ gap: '16px' }}
        >
          <ReactSkeletonLoader
            variant="circular"
            width="40px"
            height="40px"
          />
          <ReactSkeletonLoader
            variant="circular"
            width="60px"
            height="60px"
          />
          <ReactSkeletonLoader
            variant="circular"
            width="80px"
            height="80px"
          />
        </div>
      </div>

      <div className="mbe4">
        <h2>Rectangular Skeleton</h2>
        <p className="mbs2 mbe3">
          Rectangular variant with no border radius, perfect for images.
        </p>
        <ReactSkeletonLoader
          variant="rectangular"
          width="300px"
          height="200px"
        />
      </div>

      <div className="mbe4">
        <h2>Rounded Skeleton</h2>
        <p className="mbs2 mbe3">
          Rounded variant with medium border radius, ideal for cards.
        </p>
        <ReactSkeletonLoader
          variant="rounded"
          width="300px"
          height="200px"
        />
      </div>

      <div className="mbe4">
        <h2>Effects</h2>
        <p className="mbs2 mbe3">
          Different animation effects: pulse (default), sheen, and none.
        </p>
        <div
          className="flex"
          style={{ gap: '24px', flexWrap: 'wrap' }}
        >
          <div>
            <h3 className="mbe2">Pulse</h3>
            <ReactSkeletonLoader
              effect="pulse"
              width="200px"
              height="100px"
              variant="rounded"
            />
          </div>
          <div>
            <h3 className="mbe2">Sheen</h3>
            <ReactSkeletonLoader
              effect="sheen"
              width="200px"
              height="100px"
              variant="rounded"
            />
          </div>
          <div>
            <h3 className="mbe2">None</h3>
            <ReactSkeletonLoader
              effect="none"
              width="200px"
              height="100px"
              variant="rounded"
            />
          </div>
        </div>
      </div>

      <div className="mbe4">
        <h2>Intensity</h2>
        <p className="mbs2 mbe3">
          Light (default) uses --ag-background-secondary, medium uses --ag-background-tertiary.
        </p>
        <div
          className="flex"
          style={{ gap: '24px', flexWrap: 'wrap' }}
        >
          <div>
            <h3 className="mbe2">Light</h3>
            <ReactSkeletonLoader
              intensity="light"
              width="200px"
              height="100px"
              variant="rounded"
            />
          </div>
          <div>
            <h3 className="mbe2">Medium</h3>
            <ReactSkeletonLoader
              intensity="medium"
              width="200px"
              height="100px"
              variant="rounded"
            />
          </div>
        </div>
      </div>

      <div className="mbe4">
        <h2>User Profile Card Loading</h2>
        <p className="mbs2 mbe3">
          Real-world example showing a loading profile card.
        </p>
        <div
          className="flex"
          style={{ gap: '16px', padding: '20px', border: '1px solid var(--ag-border)', borderRadius: 'var(--ag-radius-md)', maxWidth: '400px' }}
        >
          <ReactSkeletonLoader
            variant="circular"
            width="60px"
            height="60px"
          />
          <div style={{ flex: 1 }}>
            <ReactSkeletonLoader
              width="40%"
              height="16px"
            />
            <ReactSkeletonLoader
              width="60%"
              height="14px"
              style={{ marginTop: '8px' }}
            />
            <ReactSkeletonLoader
              width="80%"
              height="14px"
              style={{ marginTop: '8px' }}
            />
          </div>
        </div>
      </div>

      <div className="mbe4">
        <h2>Article Card Loading</h2>
        <p className="mbs2 mbe3">
          Real-world example showing a loading article card.
        </p>
        <div style={{ border: '1px solid var(--ag-border)', borderRadius: 'var(--ag-radius-md)', overflow: 'hidden', maxWidth: '350px' }}>
          <ReactSkeletonLoader
            variant="rectangular"
            width="100%"
            height="200px"
          />
          <div style={{ padding: '16px' }}>
            <ReactSkeletonLoader
              width="60%"
              height="20px"
            />
            <ReactSkeletonLoader
              width="100%"
              height="14px"
              style={{ marginTop: '12px' }}
            />
            <ReactSkeletonLoader
              width="100%"
              height="14px"
              style={{ marginTop: '8px' }}
            />
            <ReactSkeletonLoader
              width="40%"
              height="14px"
              style={{ marginTop: '8px' }}
            />
          </div>
        </div>
      </div>

      <div className="mbe4">
        <h2>List Loading</h2>
        <p className="mbs2 mbe3">
          Real-world example showing a loading list.
        </p>
        <div style={{ maxWidth: '500px' }}>
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-center"
              style={{ gap: '12px', marginBottom: '16px' }}
            >
              <ReactSkeletonLoader
                variant="circular"
                width="40px"
                height="40px"
              />
              <div style={{ flex: 1 }}>
                <ReactSkeletonLoader
                  width="60%"
                  height="16px"
                />
                <ReactSkeletonLoader
                  width="40%"
                  height="14px"
                  style={{ marginTop: '8px' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mbe4">
        <h2>CSS Shadow Parts Customization</h2>
        <p className="mbs2 mbe3">
          Use CSS Shadow Parts to customize the skeleton's appearance.
        </p>
        <ReactSkeletonLoader
          className="custom-skeleton"
          width="300px"
          height="100px"
          variant="rounded"
        />
      </div>
    </section>
  );
}
`,Le=JSON.parse('{"title":"Skeleton Loader","description":"","frontmatter":{},"headers":[],"relativePath":"components/skeleton-loader.md","filePath":"components/skeleton-loader.md"}'),ue={name:"components/skeleton-loader.md"},Ae=Object.assign(ue,{setup(s){return(e,n)=>(g(),k("div",null,[n[1]||(n[1]=a("h1",{id:"skeleton-loader",tabindex:"-1"},[m("Skeleton Loader "),a("a",{class:"header-anchor",href:"#skeleton-loader","aria-label":'Permalink to "Skeleton Loader"'},"​")],-1)),i(f),n[2]||(n[2]=a("p",null,"Skeleton loader provides a visual placeholders while content is loading, improving perceived performance and user experience. It represents the approximate shape and size of the content that will appear.",-1)),n[3]||(n[3]=a("h2",{id:"examples",tabindex:"-1"},[m("Examples "),a("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),i(T,{component:"skeleton","vue-code":c(ke),"lit-code":c(ge),"react-code":c(ce)},{vue:v(()=>[i(he)]),lit:v(()=>[...n[0]||(n[0]=[a("skeleton-loader-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),n[4]||(n[4]=N("",26))]))}});export{Le as __pageData,Ae as default};
