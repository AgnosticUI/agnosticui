import{A as F}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{v as g}from"./chunks/VueCard.iJ2alkB8.js";import{v as c}from"./chunks/VueButton.vue_vue_type_script_setup_true_lang-D1jGatE9.DjpUppN5.js";import{d as m,_ as u,C as p,c as k,o,j as a,G as t,w as i,a as l,ae as y,k as r}from"./chunks/framework.NAAYCHZu.js";import{F as C}from"./chunks/FrameworkExample.Z9eaTrCu.js";import{a as v,x as E}from"./chunks/Button.DkmThuAs.js";import"./chunks/createLucideIcon.B61Wqv9x.js";import"./chunks/slot.B17U6J5C.js";import"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import"./chunks/state-CovhUvdr.CfYrM0Q-.js";import"./chunks/sdk.m.DhOmSlC9.js";import"./chunks/Icon.BC5ob6Nk.js";const b=m({name:"CardExamples",components:{VueButton:c,VueCard:g}}),f={class:"stacked-mobile"},w={class:"stacked-mobile"},A={class:"stacked-mobile"},B={class:"stacked-mobile"},S={style:{display:"flex",gap:"0.5rem","justify-content":"flex-end"}},V={style:{display:"grid","grid-template-columns":"repeat(auto-fit, minmax(250px, 1fr))",gap:"1rem"}},q={class:"stacked-mobile"},D={class:"stacked"},R={class:"stacked-mobile"},x={class:"stacked-mobile"},P={style:{display:"grid","grid-template-columns":"repeat(auto-fill, minmax(280px, 1fr))",gap:"1.5rem"}},T={class:"stacked-mobile"};function H(d,s,e,W,j,G){const n=p("VueCard"),h=p("VueButton");return o(),k("section",null,[s[37]||(s[37]=a("div",{class:"mbe4"},[a("h2",null,"Default Card")],-1)),a("div",f,[t(n,null,{default:i(()=>[...s[0]||(s[0]=[a("p",null,"This is a basic card with default styling.",-1)])]),_:1})]),s[38]||(s[38]=a("div",{class:"mbe4"},[a("h2",null,"Card with Header")],-1)),a("div",w,[t(n,{shadow:!0},{header:i(()=>[...s[1]||(s[1]=[a("h3",{class:"m0"},"Product Details",-1)])]),default:i(()=>[s[2]||(s[2]=a("p",null,"This card demonstrates using the header slot to add a title section with visual separation.",-1))]),_:1})]),s[39]||(s[39]=a("div",{class:"mbe4"},[a("h2",null,"Shadow Card")],-1)),a("div",A,[t(n,{shadow:!0},{default:i(()=>[...s[3]||(s[3]=[a("h3",{class:"m0"},"Card with Shadow",-1),a("p",null,"Hover over this card to see the enhanced shadow effect.",-1)])]),_:1})]),s[40]||(s[40]=a("div",{class:"mbe4"},[a("h2",null,"Animated Card with Footer")],-1)),a("div",B,[t(n,{shadow:!0,animated:!0},{header:i(()=>[...s[4]||(s[4]=[a("h3",{class:"m0"},"Animated Card",-1)])]),footer:i(()=>[a("div",S,[t(h,null,{default:i(()=>[...s[5]||(s[5]=[l("View Details",-1)])]),_:1})])]),default:i(()=>[s[6]||(s[6]=a("p",null,"Hover to see smooth animation (translateY with shadow enhancement).",-1))]),_:1})]),s[41]||(s[41]=a("div",{class:"mbe4"},[a("h2",null,"Rounded Card Variants"),a("p",{class:"mbs2 mbe3"},"Cards can have different border radius sizes: small, medium, or large.")],-1)),a("div",V,[t(n,{rounded:"sm"},{default:i(()=>[...s[7]||(s[7]=[a("h3",{class:"m0"},"Small Rounded (sm)",-1),a("p",null,"Subtle rounded corners using --ag-radius-sm (0.25rem).",-1)])]),_:1}),t(n,{rounded:"md"},{default:i(()=>[...s[8]||(s[8]=[a("h3",{class:"m0"},"Medium Rounded (md)",-1),a("p",null,"Moderate rounded corners using --ag-radius-md (0.375rem).",-1)])]),_:1}),t(n,{rounded:"lg"},{default:i(()=>[...s[9]||(s[9]=[a("h3",{class:"m0"},"Large Rounded (lg)",-1),a("p",null,"Prominent rounded corners using --ag-radius-lg (1rem).",-1)])]),_:1})]),s[42]||(s[42]=a("div",{class:"mbe4"},[a("h2",null,"Stacked Content")],-1)),a("div",q,[t(n,{stacked:!0},{default:i(()=>[...s[10]||(s[10]=[a("h3",{class:"m0"},"Stacked Content",-1),a("p",null,"First paragraph with automatic margin.",-1),a("p",null,"Second paragraph with automatic margin.",-1),a("p",null,"Third paragraph with automatic margin.",-1)])]),_:1})]),s[43]||(s[43]=a("div",{class:"mbe4"},[a("h2",null,"Variant Cards")],-1)),a("div",D,[t(n,{variant:"success",class:"mbe2"},{default:i(()=>[...s[11]||(s[11]=[a("h3",{class:"m0"},"Success",-1),a("p",null,"Operation completed successfully!",-1)])]),_:1}),t(n,{variant:"info",class:"mbe2"},{default:i(()=>[...s[12]||(s[12]=[a("h3",{class:"m0"},"Information",-1),a("p",null,"Here's some helpful information for you.",-1)])]),_:1}),t(n,{variant:"error",class:"mbe2"},{default:i(()=>[...s[13]||(s[13]=[a("h3",{class:"m0"},"Error",-1),a("p",null,"Something went wrong. Please try again.",-1)])]),_:1}),t(n,{variant:"warning",class:"mbe2"},{default:i(()=>[...s[14]||(s[14]=[a("h3",{class:"m0"},"Warning",-1),a("p",null,"Please review this information carefully.",-1)])]),_:1}),t(n,{variant:"monochrome",class:"mbe2"},{default:i(()=>[...s[15]||(s[15]=[a("h3",{class:"m0"},"Monochrome",-1),a("p",null,"Clean and modern monochrome design.",-1)])]),_:1})]),s[44]||(s[44]=a("div",{class:"mbe4"},[a("h2",null,"Card with Slots (Header and Footer)")],-1)),a("div",R,[t(n,{shadow:!0},{header:i(()=>[...s[16]||(s[16]=[a("h3",{class:"m0"},"Card Header",-1)])]),footer:i(()=>[t(h,{variant:"secondary"},{default:i(()=>[...s[17]||(s[17]=[l("Cancel",-1)])]),_:1}),t(h,{variant:"primary",style:{"margin-left":"0.5rem"}},{default:i(()=>[...s[18]||(s[18]=[l(" Confirm ",-1)])]),_:1})]),default:i(()=>[s[19]||(s[19]=a("div",null,[a("h4",null,"Main Content"),a("p",null,"This card demonstrates the header, default, and footer slots.")],-1))]),_:1})]),s[45]||(s[45]=a("div",{class:"mbe4"},[a("h2",null,"Combined Features")],-1)),a("div",x,[t(n,{shadow:!0,animated:!0,rounded:"md",variant:"success"},{default:i(()=>[...s[20]||(s[20]=[a("h3",{class:"m0"},"Premium Card",-1),a("p",null,"This card combines multiple features: shadow, animation, rounded corners, and success variant.",-1),a("p",null,"Hover to see the smooth animation effect!",-1)])]),_:1})]),s[46]||(s[46]=a("div",{class:"mbe4"},[a("h2",null,"Card Gallery")],-1)),a("div",P,[t(n,{shadow:!0,animated:!0},{header:i(()=>[...s[21]||(s[21]=[a("h3",null,"Card 1",-1)])]),default:i(()=>[s[22]||(s[22]=a("p",null,"Standard card with header, shadow and animation.",-1))]),_:1}),t(n,{shadow:!0,animated:!0,variant:"success"},{default:i(()=>[...s[23]||(s[23]=[a("h4",null,"Card 2",-1),a("p",null,"Success variant with shadow and animation.",-1)])]),_:1}),t(n,{shadow:!0,animated:!0,variant:"info"},{header:i(()=>[...s[24]||(s[24]=[a("h4",null,"Card 3",-1)])]),footer:i(()=>[t(h,{variant:"monochrome",bordered:!0},{default:i(()=>[...s[25]||(s[25]=[l("Learn More",-1)])]),_:1})]),default:i(()=>[s[26]||(s[26]=a("p",null,"Info variant with header, shadow and animation.",-1))]),_:1}),t(n,{shadow:!0,animated:!0,variant:"error"},{default:i(()=>[...s[27]||(s[27]=[a("h4",null,"Card 4",-1),a("p",null,"Error variant with shadow and animation.",-1)])]),_:1}),t(n,{shadow:!0,animated:!0,variant:"warning"},{header:i(()=>[...s[28]||(s[28]=[a("h4",null,"Card 5",-1)])]),default:i(()=>[s[29]||(s[29]=a("p",null,"Warning variant with header.",-1))]),_:1}),t(n,{shadow:!0,animated:!0,rounded:"md"},{footer:i(()=>[t(h,{variant:"success"},{default:i(()=>[...s[30]||(s[30]=[l("Action",-1)])]),_:1})]),default:i(()=>[s[31]||(s[31]=a("h4",null,"Card 6",-1)),s[32]||(s[32]=a("p",null,"Rounded corners with shadow and animation.",-1))]),_:1})]),s[47]||(s[47]=a("div",{class:"mbe4"},[a("h2",null,"Customized with CSS Shadow Parts")],-1)),a("div",T,[t(n,{shadow:!0,class:"custom-parts-card"},{header:i(()=>[...s[33]||(s[33]=[a("h3",{style:{margin:"0",color:"white"}},"Customized with CSS Parts",-1)])]),footer:i(()=>[t(h,{variant:"monochrome",shape:"rounded"},{default:i(()=>[...s[34]||(s[34]=[l(" Learn More ",-1)])]),_:1})]),default:i(()=>[s[35]||(s[35]=a("p",null,"This card demonstrates CSS Shadow Parts customization.",-1)),s[36]||(s[36]=a("p",null,"The wrapper, header, content, and footer are styled using ::part() selectors.",-1))]),_:1})])])}const N=u(b,[["render",H],["__scopeId","data-v-60df859f"]]);class M extends v{createRenderRoot(){return this}render(){return E`
      <section>
        <!-- Default Card -->
        <div class="mbe4">
          <h2>Default Card</h2>
        </div>
        <div class="stacked-mobile">
          <ag-card>
            <p>This is a basic card with default styling.</p>
          </ag-card>
        </div>

        <!-- Card with Header -->
        <div class="mbe4">
          <h2>Card with Header</h2>
        </div>
        <div class="stacked-mobile">
          <ag-card shadow>
            <h3 slot="header" class="m0">Product Details</h3>
            <p>This card demonstrates using the header slot to add a title section with visual separation.</p>
          </ag-card>
        </div>

        <!-- Shadow Card -->
        <div class="mbe4">
          <h2>Shadow Card</h2>
        </div>
        <div class="stacked-mobile">
          <ag-card shadow>
            <h3 class="m0">Card with Shadow</h3>
            <p>Hover over this card to see the enhanced shadow effect.</p>
          </ag-card>
        </div>

        <!-- Animated Card with Footer -->
        <div class="mbe4">
          <h2>Animated Card with Footer</h2>
        </div>
        <div class="stacked-mobile">
          <ag-card shadow animated>
            <h3 slot="header" class="m0">Animated Card</h3>
            <p>Hover to see smooth animation (translateY with shadow enhancement).</p>
            <div slot="footer" style="display: flex; gap: 0.5rem; justify-content: flex-end;">
              <ag-button>View Details</ag-button>
            </div>
          </ag-card>
        </div>

        <!-- Rounded Card Variants -->
        <div class="mbe4">
          <h2>Rounded Card Variants</h2>
          <p class="mbs2 mbe3">Cards can have different border radius sizes: small, medium, or large.</p>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
          <ag-card rounded="sm">
            <h3 class="m0">Small Rounded (sm)</h3>
            <p>Subtle rounded corners using --ag-radius-sm (0.25rem).</p>
          </ag-card>
          <ag-card rounded="md">
            <h3 class="m0">Medium Rounded (md)</h3>
            <p>Moderate rounded corners using --ag-radius-md (0.375rem).</p>
          </ag-card>
          <ag-card rounded="lg">
            <h3 class="m0">Large Rounded (lg)</h3>
            <p>Prominent rounded corners using --ag-radius-lg (1rem).</p>
          </ag-card>
        </div>

        <!-- Stacked Content -->
        <div class="mbe4">
          <h2>Stacked Content</h2>
        </div>
        <div class="stacked-mobile">
          <ag-card stacked>
            <h3 class="m0">Stacked Content</h3>
            <p>First paragraph with automatic margin.</p>
            <p>Second paragraph with automatic margin.</p>
            <p>Third paragraph with automatic margin.</p>
          </ag-card>
        </div>

        <!-- Variant Cards -->
        <div class="mbe4">
          <h2>Variant Cards</h2>
        </div>
        <div class="stacked">
          <ag-card variant="success" class="mbe2">
            <h3 class="m0">Success</h3>
            <p>Operation completed successfully!</p>
          </ag-card>
          <ag-card variant="info" class="mbe2">
            <h3 class="m0">Information</h3>
            <p>Here's some helpful information for you.</p>
          </ag-card>
          <ag-card variant="error" class="mbe2">
            <h3 class="m0">Error</h3>
            <p>Something went wrong. Please try again.</p>
          </ag-card>
          <ag-card variant="warning" class="mbe2">
            <h3 class="m0">Warning</h3>
            <p>Please review this information carefully.</p>
          </ag-card>
          <ag-card variant="monochrome" class="mbe2">
            <h3 class="m0">Monochrome</h3>
            <p>Clean and modern monochrome design.</p>
          </ag-card>
        </div>

        <!-- Card with Slots (Header and Footer) -->
        <div class="mbe4">
          <h2>Card with Slots (Header and Footer)</h2>
        </div>
        <div class="stacked-mobile">
          <ag-card shadow>
            <h3 slot="header" class="m0">Card Header</h3>
            <div>
              <h4>Main Content</h4>
              <p>This card demonstrates the header, default, and footer slots.</p>
            </div>
            <div slot="footer">
              <ag-button variant="secondary">Cancel</ag-button>
              <ag-button variant="primary" style="margin-left: 0.5rem;">Confirm</ag-button>
            </div>
          </ag-card>
        </div>

        <!-- Combined Features -->
        <div class="mbe4">
          <h2>Combined Features</h2>
        </div>
        <div class="stacked-mobile">
          <ag-card shadow animated rounded="md" variant="success">
            <h3 class="m0">Premium Card</h3>
            <p>This card combines multiple features: shadow, animation, rounded corners, and success variant.</p>
            <p>Hover to see the smooth animation effect!</p>
          </ag-card>
        </div>

        <!-- Card Gallery -->
        <div class="mbe4">
          <h2>Card Gallery</h2>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem;">
          <ag-card shadow animated>
            <h3 slot="header">Card 1</h3>
            <p>Standard card with header, shadow and animation.</p>
          </ag-card>

          <ag-card shadow animated variant="success">
            <h4>Card 2</h4>
            <p>Success variant with shadow and animation.</p>
          </ag-card>

          <ag-card shadow animated variant="info">
            <h4 slot="header">Card 3</h4>
            <p>Info variant with header, shadow and animation.</p>
            <ag-button slot="footer" variant="monochrome" bordered>Learn More</ag-button>
          </ag-card>

          <ag-card shadow animated variant="error">
            <h4>Card 4</h4>
            <p>Error variant with shadow and animation.</p>
          </ag-card>

          <ag-card shadow animated variant="warning">
            <h4 slot="header">Card 5</h4>
            <p>Warning variant with header.</p>
          </ag-card>

          <ag-card shadow animated rounded="md">
            <h4>Card 6</h4>
            <p>Rounded corners with shadow and animation.</p>
            <ag-button slot="footer" variant="success">Action</ag-button>
          </ag-card>
        </div>

        <!-- Customized with CSS Shadow Parts -->
        <div class="mbe4">
          <h2>Customized with CSS Shadow Parts</h2>
        </div>
        <div class="stacked-mobile">
          <ag-card shadow class="custom-parts-card">
            <h3 slot="header" style="margin: 0; color: white;">Customized with CSS Parts</h3>
            <p>This card demonstrates CSS Shadow Parts customization.</p>
            <p>The wrapper, header, content, and footer are styled using ::part() selectors.</p>
            <ag-button slot="footer" variant="monochrome" shape="rounded">Learn More</ag-button>
          </ag-card>
        </div>
      </section>
    `}}customElements.define("card-lit-examples",M);const z=`<template>
  <section>
    <div class="mbe4">
      <h2>Default Card</h2>
    </div>
    <div class="stacked-mobile">
      <VueCard>
        <p>This is a basic card with default styling.</p>
      </VueCard>
    </div>

    <div class="mbe4">
      <h2>Card with Header</h2>
    </div>
    <div class="stacked-mobile">
      <VueCard :shadow="true">
        <template #header>
          <h3 class="m0">Product Details</h3>
        </template>
        <p>This card demonstrates using the header slot to add a title section with visual separation.</p>
      </VueCard>
    </div>

    <div class="mbe4">
      <h2>Shadow Card</h2>
    </div>
    <div class="stacked-mobile">
      <VueCard :shadow="true">
        <h3 class="m0">Card with Shadow</h3>
        <p>Hover over this card to see the enhanced shadow effect.</p>
      </VueCard>
    </div>

    <div class="mbe4">
      <h2>Animated Card with Footer</h2>
    </div>
    <div class="stacked-mobile">
      <VueCard
        :shadow="true"
        :animated="true"
      >
        <template #header>
          <h3 class="m0">Animated Card</h3>
        </template>
        <p>Hover to see smooth animation (translateY with shadow enhancement).</p>
        <template #footer>
          <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
            <VueButton>View Details</VueButton>
          </div>
        </template>
      </VueCard>
    </div>

    <div class="mbe4">
      <h2>Rounded Card Variants</h2>
      <p class="mbs2 mbe3">Cards can have different border radius sizes: small, medium, or large.</p>
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
      <VueCard rounded="sm">
        <h3 class="m0">Small Rounded (sm)</h3>
        <p>Subtle rounded corners using --ag-radius-sm (0.25rem).</p>
      </VueCard>
      <VueCard rounded="md">
        <h3 class="m0">Medium Rounded (md)</h3>
        <p>Moderate rounded corners using --ag-radius-md (0.375rem).</p>
      </VueCard>
      <VueCard rounded="lg">
        <h3 class="m0">Large Rounded (lg)</h3>
        <p>Prominent rounded corners using --ag-radius-lg (1rem).</p>
      </VueCard>
    </div>

    <div class="mbe4">
      <h2>Stacked Content</h2>
    </div>
    <div class="stacked-mobile">
      <VueCard :stacked="true">
        <h3 class="m0">Stacked Content</h3>
        <p>First paragraph with automatic margin.</p>
        <p>Second paragraph with automatic margin.</p>
        <p>Third paragraph with automatic margin.</p>
      </VueCard>
    </div>

    <div class="mbe4">
      <h2>Variant Cards</h2>
    </div>
    <div class="stacked">
      <VueCard
        variant="success"
        class="mbe2"
      >
        <h3 class="m0">Success</h3>
        <p>Operation completed successfully!</p>
      </VueCard>
      <VueCard
        variant="info"
        class="mbe2"
      >
        <h3 class="m0">Information</h3>
        <p>Here's some helpful information for you.</p>
      </VueCard>
      <VueCard
        variant="error"
        class="mbe2"
      >
        <h3 class="m0">Error</h3>
        <p>Something went wrong. Please try again.</p>
      </VueCard>
      <VueCard
        variant="warning"
        class="mbe2"
      >
        <h3 class="m0">Warning</h3>
        <p>Please review this information carefully.</p>
      </VueCard>
      <VueCard
        variant="monochrome"
        class="mbe2"
      >
        <h3 class="m0">Monochrome</h3>
        <p>Clean and modern monochrome design.</p>
      </VueCard>
    </div>

    <div class="mbe4">
      <h2>Card with Slots (Header and Footer)</h2>
    </div>
    <div class="stacked-mobile">
      <VueCard :shadow="true">
        <template #header>
          <h3 class="m0">Card Header</h3>
        </template>

        <div>
          <h4>Main Content</h4>
          <p>This card demonstrates the header, default, and footer slots.</p>
        </div>

        <template #footer>
          <VueButton variant="secondary">Cancel</VueButton>
          <VueButton
            variant="primary"
            style="margin-left: 0.5rem;"
          >
            Confirm
          </VueButton>
        </template>
      </VueCard>
    </div>

    <div class="mbe4">
      <h2>Combined Features</h2>
    </div>
    <div class="stacked-mobile">
      <VueCard
        :shadow="true"
        :animated="true"
        rounded="md"
        variant="success"
      >
        <h3 class="m0">Premium Card</h3>
        <p>This card combines multiple features: shadow, animation, rounded corners, and success variant.</p>
        <p>Hover to see the smooth animation effect!</p>
      </VueCard>
    </div>

    <div class="mbe4">
      <h2>Card Gallery</h2>
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem;">
      <VueCard
        :shadow="true"
        :animated="true"
      >
        <template #header>
          <h3>Card 1</h3>
        </template>
        <p>Standard card with header, shadow and animation.</p>
      </VueCard>

      <VueCard
        :shadow="true"
        :animated="true"
        variant="success"
      >
        <h4>Card 2</h4>
        <p>Success variant with shadow and animation.</p>
      </VueCard>

      <VueCard
        :shadow="true"
        :animated="true"
        variant="info"
      >
        <template #header>
          <h4>Card 3</h4>
        </template>
        <p>Info variant with header, shadow and animation.</p>
        <template #footer>
          <VueButton
            variant="monochrome"
            :bordered="true"
          >Learn More</VueButton>
        </template>
      </VueCard>

      <VueCard
        :shadow="true"
        :animated="true"
        variant="error"
      >
        <h4>Card 4</h4>
        <p>Error variant with shadow and animation.</p>
      </VueCard>

      <VueCard
        :shadow="true"
        :animated="true"
        variant="warning"
      >
        <template #header>
          <h4>Card 5</h4>
        </template>
        <p>Warning variant with header.</p>
      </VueCard>

      <VueCard
        :shadow="true"
        :animated="true"
        rounded="md"
      >
        <h4>Card 6</h4>
        <p>Rounded corners with shadow and animation.</p>
        <template #footer>
          <VueButton variant="success">Action</VueButton>
        </template>
      </VueCard>
    </div>

    <div class="mbe4">
      <h2>Customized with CSS Shadow Parts</h2>
    </div>
    <div class="stacked-mobile">
      <VueCard
        :shadow="true"
        class="custom-parts-card"
      >
        <template #header>
          <h3 style="margin: 0; color: white;">Customized with CSS Parts</h3>
        </template>

        <p>This card demonstrates CSS Shadow Parts customization.</p>
        <p>The wrapper, header, content, and footer are styled using ::part() selectors.</p>

        <template #footer>
          <VueButton
            variant="monochrome"
            shape="rounded"
          >
            Learn More
          </VueButton>
        </template>
      </VueCard>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueCard } from "agnosticui-core/card/vue";
import VueButton from "agnosticui-core/button/vue";

export default defineComponent({
  name: "CardExamples",
  components: {
    VueButton,
    VueCard,
  },
});
<\/script>

<style scoped>
.custom-parts-card::part(ag-card-wrapper) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.custom-parts-card::part(ag-card-header) {
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}

.custom-parts-card::part(ag-card-content) {
  color: white;
  font-size: 1.1rem;
}

.custom-parts-card::part(ag-card-footer) {
  border-top: 2px solid rgba(255, 255, 255, 0.3);
  padding-top: 1rem;
  margin-top: 1rem;
}
</style>
`,L=`import { LitElement, html } from 'lit';
import 'agnosticui-core/card';
import 'agnosticui-core/button';

export class CardLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  render() {
    return html\`
      <section>
        <!-- Default Card -->
        <div class="mbe4">
          <h2>Default Card</h2>
        </div>
        <div class="stacked-mobile">
          <ag-card>
            <p>This is a basic card with default styling.</p>
          </ag-card>
        </div>

        <!-- Card with Header -->
        <div class="mbe4">
          <h2>Card with Header</h2>
        </div>
        <div class="stacked-mobile">
          <ag-card shadow>
            <h3 slot="header" class="m0">Product Details</h3>
            <p>This card demonstrates using the header slot to add a title section with visual separation.</p>
          </ag-card>
        </div>

        <!-- Shadow Card -->
        <div class="mbe4">
          <h2>Shadow Card</h2>
        </div>
        <div class="stacked-mobile">
          <ag-card shadow>
            <h3 class="m0">Card with Shadow</h3>
            <p>Hover over this card to see the enhanced shadow effect.</p>
          </ag-card>
        </div>

        <!-- Animated Card with Footer -->
        <div class="mbe4">
          <h2>Animated Card with Footer</h2>
        </div>
        <div class="stacked-mobile">
          <ag-card shadow animated>
            <h3 slot="header" class="m0">Animated Card</h3>
            <p>Hover to see smooth animation (translateY with shadow enhancement).</p>
            <div slot="footer" style="display: flex; gap: 0.5rem; justify-content: flex-end;">
              <ag-button>View Details</ag-button>
            </div>
          </ag-card>
        </div>

        <!-- Rounded Card Variants -->
        <div class="mbe4">
          <h2>Rounded Card Variants</h2>
          <p class="mbs2 mbe3">Cards can have different border radius sizes: small, medium, or large.</p>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
          <ag-card rounded="sm">
            <h3 class="m0">Small Rounded (sm)</h3>
            <p>Subtle rounded corners using --ag-radius-sm (0.25rem).</p>
          </ag-card>
          <ag-card rounded="md">
            <h3 class="m0">Medium Rounded (md)</h3>
            <p>Moderate rounded corners using --ag-radius-md (0.375rem).</p>
          </ag-card>
          <ag-card rounded="lg">
            <h3 class="m0">Large Rounded (lg)</h3>
            <p>Prominent rounded corners using --ag-radius-lg (1rem).</p>
          </ag-card>
        </div>

        <!-- Stacked Content -->
        <div class="mbe4">
          <h2>Stacked Content</h2>
        </div>
        <div class="stacked-mobile">
          <ag-card stacked>
            <h3 class="m0">Stacked Content</h3>
            <p>First paragraph with automatic margin.</p>
            <p>Second paragraph with automatic margin.</p>
            <p>Third paragraph with automatic margin.</p>
          </ag-card>
        </div>

        <!-- Variant Cards -->
        <div class="mbe4">
          <h2>Variant Cards</h2>
        </div>
        <div class="stacked">
          <ag-card variant="success" class="mbe2">
            <h3 class="m0">Success</h3>
            <p>Operation completed successfully!</p>
          </ag-card>
          <ag-card variant="info" class="mbe2">
            <h3 class="m0">Information</h3>
            <p>Here's some helpful information for you.</p>
          </ag-card>
          <ag-card variant="error" class="mbe2">
            <h3 class="m0">Error</h3>
            <p>Something went wrong. Please try again.</p>
          </ag-card>
          <ag-card variant="warning" class="mbe2">
            <h3 class="m0">Warning</h3>
            <p>Please review this information carefully.</p>
          </ag-card>
          <ag-card variant="monochrome" class="mbe2">
            <h3 class="m0">Monochrome</h3>
            <p>Clean and modern monochrome design.</p>
          </ag-card>
        </div>

        <!-- Card with Slots (Header and Footer) -->
        <div class="mbe4">
          <h2>Card with Slots (Header and Footer)</h2>
        </div>
        <div class="stacked-mobile">
          <ag-card shadow>
            <h3 slot="header" class="m0">Card Header</h3>
            <div>
              <h4>Main Content</h4>
              <p>This card demonstrates the header, default, and footer slots.</p>
            </div>
            <div slot="footer">
              <ag-button variant="secondary">Cancel</ag-button>
              <ag-button variant="primary" style="margin-left: 0.5rem;">Confirm</ag-button>
            </div>
          </ag-card>
        </div>

        <!-- Combined Features -->
        <div class="mbe4">
          <h2>Combined Features</h2>
        </div>
        <div class="stacked-mobile">
          <ag-card shadow animated rounded="md" variant="success">
            <h3 class="m0">Premium Card</h3>
            <p>This card combines multiple features: shadow, animation, rounded corners, and success variant.</p>
            <p>Hover to see the smooth animation effect!</p>
          </ag-card>
        </div>

        <!-- Card Gallery -->
        <div class="mbe4">
          <h2>Card Gallery</h2>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem;">
          <ag-card shadow animated>
            <h3 slot="header">Card 1</h3>
            <p>Standard card with header, shadow and animation.</p>
          </ag-card>

          <ag-card shadow animated variant="success">
            <h4>Card 2</h4>
            <p>Success variant with shadow and animation.</p>
          </ag-card>

          <ag-card shadow animated variant="info">
            <h4 slot="header">Card 3</h4>
            <p>Info variant with header, shadow and animation.</p>
            <ag-button slot="footer" variant="monochrome" bordered>Learn More</ag-button>
          </ag-card>

          <ag-card shadow animated variant="error">
            <h4>Card 4</h4>
            <p>Error variant with shadow and animation.</p>
          </ag-card>

          <ag-card shadow animated variant="warning">
            <h4 slot="header">Card 5</h4>
            <p>Warning variant with header.</p>
          </ag-card>

          <ag-card shadow animated rounded="md">
            <h4>Card 6</h4>
            <p>Rounded corners with shadow and animation.</p>
            <ag-button slot="footer" variant="success">Action</ag-button>
          </ag-card>
        </div>

        <!-- Customized with CSS Shadow Parts -->
        <div class="mbe4">
          <h2>Customized with CSS Shadow Parts</h2>
        </div>
        <div class="stacked-mobile">
          <ag-card shadow class="custom-parts-card">
            <h3 slot="header" style="margin: 0; color: white;">Customized with CSS Parts</h3>
            <p>This card demonstrates CSS Shadow Parts customization.</p>
            <p>The wrapper, header, content, and footer are styled using ::part() selectors.</p>
            <ag-button slot="footer" variant="monochrome" shape="rounded">Learn More</ag-button>
          </ag-card>
        </div>
      </section>
    \`;
  }
}

// Register the custom element
customElements.define('card-lit-examples', CardLitExamples);
`,I=`import { ReactCard } from "agnosticui-core/card/react";
import { ReactButton } from "agnosticui-core/button/react";

export default function CardReactExamples() {
  return (
    <section>
      {/* Default Card */}
      <div className="mbe4">
        <h2>Default Card</h2>
      </div>
      <div className="stacked-mobile">
        <ReactCard>
          <p>This is a basic card with default styling.</p>
        </ReactCard>
      </div>

      {/* Card with Header */}
      <div className="mbe4">
        <h2>Card with Header</h2>
      </div>
      <div className="stacked-mobile">
        <ReactCard shadow>
          <h3 slot="header" className="m0">Product Details</h3>
          <p>This card demonstrates using the header slot to add a title section with visual separation.</p>
        </ReactCard>
      </div>

      {/* Shadow Card */}
      <div className="mbe4">
        <h2>Shadow Card</h2>
      </div>
      <div className="stacked-mobile">
        <ReactCard shadow>
          <h3 className="m0">Card with Shadow</h3>
          <p>Hover over this card to see the enhanced shadow effect.</p>
        </ReactCard>
      </div>

      {/* Animated Card with Footer */}
      <div className="mbe4">
        <h2>Animated Card with Footer</h2>
      </div>
      <div className="stacked-mobile">
        <ReactCard shadow animated>
          <h3 slot="header" className="m0">Animated Card</h3>
          <p>Hover to see smooth animation (translateY with shadow enhancement).</p>
          <div slot="footer" style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
            <ReactButton>View Details</ReactButton>
          </div>
        </ReactCard>
      </div>

      {/* Rounded Card Variants */}
      <div className="mbe4">
        <h2>Rounded Card Variants</h2>
        <p className="mbs2 mbe3">Cards can have different border radius sizes: small, medium, or large.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
        <ReactCard rounded="sm">
          <h3 className="m0">Small Rounded (sm)</h3>
          <p>Subtle rounded corners using --ag-radius-sm (0.25rem).</p>
        </ReactCard>
        <ReactCard rounded="md">
          <h3 className="m0">Medium Rounded (md)</h3>
          <p>Moderate rounded corners using --ag-radius-md (0.375rem).</p>
        </ReactCard>
        <ReactCard rounded="lg">
          <h3 className="m0">Large Rounded (lg)</h3>
          <p>Prominent rounded corners using --ag-radius-lg (1rem).</p>
        </ReactCard>
      </div>

      {/* Stacked Content */}
      <div className="mbe4">
        <h2>Stacked Content</h2>
      </div>
      <div className="stacked-mobile">
        <ReactCard stacked>
          <h3 className="m0">Stacked Content</h3>
          <p>First paragraph with automatic margin.</p>
          <p>Second paragraph with automatic margin.</p>
          <p>Third paragraph with automatic margin.</p>
        </ReactCard>
      </div>

      {/* Variant Cards */}
      <div className="mbe4">
        <h2>Variant Cards</h2>
      </div>
      <div className="stacked">
        <ReactCard variant="success" className="mbe2">
          <h3 className="m0">Success</h3>
          <p>Operation completed successfully!</p>
        </ReactCard>
        <ReactCard variant="info" className="mbe2">
          <h3 className="m0">Information</h3>
          <p>Here's some helpful information for you.</p>
        </ReactCard>
        <ReactCard variant="error" className="mbe2">
          <h3 className="m0">Error</h3>
          <p>Something went wrong. Please try again.</p>
        </ReactCard>
        <ReactCard variant="warning" className="mbe2">
          <h3 className="m0">Warning</h3>
          <p>Please review this information carefully.</p>
        </ReactCard>
        <ReactCard variant="monochrome" className="mbe2">
          <h3 className="m0">Monochrome</h3>
          <p>Clean and modern monochrome design.</p>
        </ReactCard>
      </div>

      {/* Card with Slots (Header and Footer) */}
      <div className="mbe4">
        <h2>Card with Slots (Header and Footer)</h2>
      </div>
      <div className="stacked-mobile">
        <ReactCard shadow>
          <h3 slot="header" className="m0">Card Header</h3>
          <div>
            <h4>Main Content</h4>
            <p>This card demonstrates the header, default, and footer slots.</p>
          </div>
          <div slot="footer">
            <ReactButton variant="secondary">Cancel</ReactButton>
            <ReactButton variant="primary" style={{ marginLeft: "0.5rem" }}>
              Confirm
            </ReactButton>
          </div>
        </ReactCard>
      </div>

      {/* Combined Features */}
      <div className="mbe4">
        <h2>Combined Features</h2>
      </div>
      <div className="stacked-mobile">
        <ReactCard shadow animated rounded="md" variant="success">
          <h3 className="m0">Premium Card</h3>
          <p>This card combines multiple features: shadow, animation, rounded corners, and success variant.</p>
          <p>Hover to see the smooth animation effect!</p>
        </ReactCard>
      </div>

      {/* Card Gallery */}
      <div className="mbe4">
        <h2>Card Gallery</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
        <ReactCard shadow animated>
          <h3 slot="header">Card 1</h3>
          <p>Standard card with header, shadow and animation.</p>
        </ReactCard>

        <ReactCard shadow animated variant="success">
          <h4>Card 2</h4>
          <p>Success variant with shadow and animation.</p>
        </ReactCard>

        <ReactCard shadow animated variant="info">
          <h4 slot="header">Card 3</h4>
          <p>Info variant with header, shadow and animation.</p>
          <ReactButton slot="footer" variant="monochrome" bordered>
            Learn More
          </ReactButton>
        </ReactCard>

        <ReactCard shadow animated variant="error">
          <h4>Card 4</h4>
          <p>Error variant with shadow and animation.</p>
        </ReactCard>

        <ReactCard shadow animated variant="warning">
          <h4 slot="header">Card 5</h4>
          <p>Warning variant with header.</p>
        </ReactCard>

        <ReactCard shadow animated rounded="md">
          <h4>Card 6</h4>
          <p>Rounded corners with shadow and animation.</p>
          <ReactButton slot="footer" variant="success">
            Action
          </ReactButton>
        </ReactCard>
      </div>

      {/* Customized with CSS Shadow Parts */}
      <div className="mbe4">
        <h2>Customized with CSS Shadow Parts</h2>
      </div>
      <div className="stacked-mobile">
        <ReactCard shadow className="custom-parts-card">
          <h3 slot="header" style={{ margin: 0, color: "white" }}>
            Customized with CSS Parts
          </h3>
          <p>This card demonstrates CSS Shadow Parts customization.</p>
          <p>The wrapper, header, content, and footer are styled using ::part() selectors.</p>
          <ReactButton slot="footer" variant="monochrome" shape="rounded">
            Learn More
          </ReactButton>
        </ReactCard>
      </div>
    </section>
  );
}
`,ts=JSON.parse('{"title":"Card","description":"","frontmatter":{},"headers":[],"relativePath":"components/card.md","filePath":"components/card.md"}'),O={name:"components/card.md"},ns=Object.assign(O,{setup(d){return(s,e)=>(o(),k("div",null,[e[1]||(e[1]=a("h1",{id:"card",tabindex:"-1"},[l("Card "),a("a",{class:"header-anchor",href:"#card","aria-label":'Permalink to "Card"'},"​")],-1)),t(F),e[2]||(e[2]=a("p",null,"Card is a versatile container for grouping related content and actions. It provides a clean, visual structure for organizing information and can be customized with shadows, animations, color variants, and more.",-1)),e[3]||(e[3]=a("h2",{id:"examples",tabindex:"-1"},[l("Examples "),a("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),t(C,{component:"card","vue-code":r(z),"lit-code":r(L),"react-code":r(I)},{vue:i(()=>[t(N)]),lit:i(()=>[...e[0]||(e[0]=[a("card-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),e[4]||(e[4]=y("",35))]))}});export{ts as __pageData,ns as default};
