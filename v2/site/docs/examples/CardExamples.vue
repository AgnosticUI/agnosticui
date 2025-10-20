<template>
  <section>
    <div class="mbe4">
      <h3>Default Card</h3>
    </div>
    <div class="stacked-mobile">
      <VueCard>
        <p>This is a basic card with default styling (skinned with background and border).</p>
      </VueCard>
    </div>

    <div class="mbe4">
      <h3>Card with Header</h3>
    </div>
    <div class="stacked-mobile">
      <VueCard :is-shadow="true">
        <template #header>
          <h4 class="m0">Product Details</h4>
        </template>
        <p>This card demonstrates using the header slot to add a title section with visual separation.</p>
      </VueCard>
    </div>

    <div class="mbe4">
      <h3>Unskinned Card</h3>
    </div>
    <div class="stacked-mobile">
      <VueCard :is-skinned="false">
        <h4 class="m0">Unskinned Card</h4>
        <p>No background or border applied. Useful for layout purposes or to customize the styling.</p>
      </VueCard>
    </div>

    <div class="mbe4">
      <h3>Shadow Card</h3>
    </div>
    <div class="stacked-mobile">
      <VueCard :is-shadow="true">
        <h4 class="m0">Card with Shadow</h4>
        <p>Hover over this card to see the enhanced shadow effect.</p>
      </VueCard>
    </div>

    <div class="mbe4">
      <h3>Animated Card with Footer</h3>
    </div>
    <div class="stacked-mobile">
      <VueCard
        :is-shadow="true"
        :is-animated="true"
      >
        <template #header>
          <h4 class="m0">Animated Card</h4>
        </template>
        <p>Hover to see smooth animation (translateY with shadow enhancement).</p>
        <template #footer>
          <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
            <button style="padding: 0 1rem;">View Details</button>
          </div>
        </template>
      </VueCard>
    </div>

    <div class="mbe4">
      <h3>Rounded Card</h3>
    </div>
    <div class="stacked-mobile">
      <VueCard :is-rounded="true">
        <h4 class="m0">Rounded Corners</h4>
        <p>This card has explicitly rounded corners.</p>
      </VueCard>
    </div>

    <div class="mbe4">
      <h3>Stacked Content</h3>
    </div>
    <div class="stacked-mobile">
      <VueCard :is-stacked="true">
        <h4 class="m0">Stacked Content</h4>
        <p>First paragraph with automatic margin.</p>
        <p>Second paragraph with automatic margin.</p>
        <p>Third paragraph with automatic margin.</p>
      </VueCard>
    </div>

    <div class="mbe4">
      <h3>Variant Cards</h3>
    </div>
    <div class="stacked">
      <VueCard
        variant="success"
        class="mbe2"
      >
        <h4 class="m0">Success</h4>
        <p>Operation completed successfully!</p>
      </VueCard>
      <VueCard
        variant="info"
        class="mbe2"
      >
        <h4 class="m0">Information</h4>
        <p>Here's some helpful information for you.</p>
      </VueCard>
      <VueCard
        variant="error"
        class="mbe2"
      >
        <h4 class="m0">Error</h4>
        <p>Something went wrong. Please try again.</p>
      </VueCard>
      <VueCard
        variant="warning"
        class="mbe2"
      >
        <h4 class="m0">Warning</h4>
        <p>Please review this information carefully.</p>
      </VueCard>
    </div>

    <div class="mbe4">
      <h3>Card with Slots (Header and Footer)</h3>
    </div>
    <div class="stacked-mobile">
      <VueCard :is-shadow="true">
        <template #header>
          <h4 class="m0">Card Header</h4>
        </template>

        <div>
          <h5>Main Content</h5>
          <p>This card demonstrates the header, default, and footer slots.</p>
        </div>

        <template #footer>
          <button style="padding: 0.5rem 1rem;">Cancel</button>
          <button style="padding: 0.5rem 1rem; background: #007bff; color: white; border: none; border-radius: 4px;">
            Confirm
          </button>
        </template>
      </VueCard>
    </div>

    <div class="mbe4">
      <h3>Combined Features</h3>
    </div>
    <div class="stacked-mobile">
      <VueCard
        :is-shadow="true"
        :is-animated="true"
        :is-rounded="true"
        variant="success"
      >
        <h4 class="m0">Premium Card</h4>
        <p>This card combines multiple features: shadow, animation, rounded corners, and success variant.</p>
        <p>Hover to see the smooth animation effect!</p>
      </VueCard>
    </div>

    <div class="mbe4">
      <h3>Card Gallery</h3>
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem;">
      <VueCard
        :is-shadow="true"
        :is-animated="true"
      >
        <template #header>
          <h5>Card 1</h5>
        </template>
        <p>Standard card with header, shadow and animation.</p>
      </VueCard>

      <VueCard
        :is-shadow="true"
        :is-animated="true"
        variant="success"
      >
        <h5>Card 2</h5>
        <p>Success variant with shadow and animation.</p>
      </VueCard>

      <VueCard
        :is-shadow="true"
        :is-animated="true"
        variant="info"
      >
        <template #header>
          <h5>Card 3</h5>
        </template>
        <p>Info variant with header, shadow and animation.</p>
        <template #footer>
          <button style="padding: 0.25rem 0.75rem; font-size: 0.875rem;">Learn More</button>
        </template>
      </VueCard>

      <VueCard
        :is-shadow="true"
        :is-animated="true"
        variant="error"
      >
        <h5>Card 4</h5>
        <p>Error variant with shadow and animation.</p>
      </VueCard>

      <VueCard
        :is-shadow="true"
        :is-animated="true"
        variant="warning"
      >
        <template #header>
          <h5>Card 5</h5>
        </template>
        <p>Warning variant with header.</p>
      </VueCard>

      <VueCard
        :is-shadow="true"
        :is-animated="true"
        :is-rounded="true"
      >
        <h5>Card 6</h5>
        <p>Rounded corners with shadow and animation.</p>
        <template #footer>
          <button style="padding: 0.25rem 0.75rem; font-size: 0.875rem;">Action</button>
        </template>
      </VueCard>
    </div>

    <div class="mbe4">
      <h3>Customized with CSS Shadow Parts</h3>
    </div>
    <div class="stacked-mobile">
      <VueCard
        :is-shadow="true"
        class="custom-parts-card"
      >
        <template #header>
          <h4 style="margin: 0; color: white;">Customized with CSS Parts</h4>
        </template>

        <p>This card demonstrates CSS Shadow Parts customization.</p>
        <p>The wrapper, header, content, and footer are styled using ::part() selectors.</p>

        <template #footer>
          <button style="padding: 0.5rem 1rem; background: white; color: #667eea; border: none; border-radius: 4px; cursor: pointer;">
            Learn More
          </button>
        </template>
      </VueCard>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueCard } from "agnosticui-core/card/vue";

export default defineComponent({
  name: "CardExamples",
  components: {
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
