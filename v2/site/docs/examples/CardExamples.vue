<template>
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
      <h2>Media Card (Top)</h2>
      <p class="mbs2 mbe3">Use <code>:has-media="true"</code> with <code>media-position="top"</code> for edge-to-edge media above the card content.</p>
    </div>
    <div class="stacked-mobile">
      <VueCard :has-media="true" media-position="top" rounded="md" :shadow="true" style="max-width: 400px;">
        <template #media>
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop"
            alt="Mountain landscape"
          />
        </template>
        <template #header>
          <h3 class="m0">Mountain Retreat</h3>
        </template>
        <p>A breathtaking mountain landscape captured at golden hour.</p>
        <template #footer>
          <VueButton>View Gallery</VueButton>
        </template>
      </VueCard>
    </div>

    <div class="mbe4">
      <h2>Media Card (Bottom)</h2>
      <p class="mbs2 mbe3">Use <code>media-position="bottom"</code> to render media below the card content.</p>
    </div>
    <div class="stacked-mobile">
      <VueCard :has-media="true" media-position="bottom" rounded="md" :shadow="true" style="max-width: 400px;">
        <template #header>
          <h3 class="m0">Mountain Retreat</h3>
        </template>
        <p>A breathtaking mountain landscape captured at golden hour.</p>
        <template #media>
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop"
            alt="Mountain landscape"
          />
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
</script>

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
