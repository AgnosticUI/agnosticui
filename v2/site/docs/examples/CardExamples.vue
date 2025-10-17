<template>
  <section>
    <div class="mbe4">
      <h3>Default Card</h3>
    </div>
    <div class="stacked-mobile">
      <VueCard>
        <h4>Card Title</h4>
        <p>This is a basic card with default styling (skinned with background and border).</p>
      </VueCard>
    </div>

    <div class="mbe4">
      <h3>Unskinned Card</h3>
    </div>
    <div class="stacked-mobile">
      <VueCard :is-skinned="false">
        <h4>Unskinned Card</h4>
        <p>No background or border applied. Useful for layout purposes.</p>
      </VueCard>
    </div>

    <div class="mbe4">
      <h3>Shadow Card</h3>
    </div>
    <div class="stacked-mobile">
      <VueCard :is-shadow="true">
        <h4>Card with Shadow</h4>
        <p>Hover over this card to see the enhanced shadow effect.</p>
      </VueCard>
    </div>

    <div class="mbe4">
      <h3>Animated Card</h3>
    </div>
    <div class="stacked-mobile">
      <VueCard :is-shadow="true" :is-animated="true">
        <h4>Animated Card</h4>
        <p>Hover to see smooth animation (translateY with shadow enhancement).</p>
      </VueCard>
    </div>

    <div class="mbe4">
      <h3>Rounded Card</h3>
    </div>
    <div class="stacked-mobile">
      <VueCard :is-rounded="true">
        <h4>Rounded Corners</h4>
        <p>This card has explicitly rounded corners.</p>
      </VueCard>
    </div>

    <div class="mbe4">
      <h3>Stacked Content</h3>
    </div>
    <div class="stacked-mobile">
      <VueCard :is-stacked="true">
        <h4>Stacked Content</h4>
        <p>First paragraph with automatic margin.</p>
        <p>Second paragraph with automatic margin.</p>
        <p>Third paragraph with automatic margin.</p>
      </VueCard>
    </div>

    <div class="mbe4">
      <h3>Variant Cards</h3>
    </div>
    <div class="stacked">
      <VueCard variant="success" class="mbe2">
        <h4>Success</h4>
        <p>Operation completed successfully!</p>
      </VueCard>
      <VueCard variant="info" class="mbe2">
        <h4>Information</h4>
        <p>Here's some helpful information for you.</p>
      </VueCard>
      <VueCard variant="error" class="mbe2">
        <h4>Error</h4>
        <p>Something went wrong. Please try again.</p>
      </VueCard>
      <VueCard variant="warning" class="mbe2">
        <h4>Warning</h4>
        <p>Please review this information carefully.</p>
      </VueCard>
    </div>

    <div class="mbe4">
      <h3>Card with Slots (Header and Footer)</h3>
    </div>
    <div class="stacked-mobile">
      <VueCard :is-shadow="true">
        <template #header>
          <div style="padding: 1rem; background: #f5f5f5; border-bottom: 1px solid #ddd;">
            <h4 style="margin: 0;">Card Header</h4>
          </div>
        </template>

        <div>
          <h5>Main Content</h5>
          <p>This card demonstrates the header, default, and footer slots.</p>
        </div>

        <template #footer>
          <div style="padding: 1rem; background: #f5f5f5; border-top: 1px solid #ddd; display: flex; gap: 0.5rem;">
            <button style="padding: 0.5rem 1rem;">Cancel</button>
            <button style="padding: 0.5rem 1rem; background: #007bff; color: white; border: none; border-radius: 4px;">
              Confirm
            </button>
          </div>
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
        <h4>Premium Card</h4>
        <p>This card combines multiple features: shadow, animation, rounded corners, and success variant.</p>
        <p>Hover to see the smooth animation effect!</p>
      </VueCard>
    </div>

    <div class="mbe4">
      <h3>Card Gallery</h3>
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem;">
      <VueCard :is-shadow="true" :is-animated="true">
        <h5>Card 1</h5>
        <p>Standard card with shadow and animation.</p>
      </VueCard>

      <VueCard :is-shadow="true" :is-animated="true" variant="success">
        <h5>Card 2</h5>
        <p>Success variant with shadow and animation.</p>
      </VueCard>

      <VueCard :is-shadow="true" :is-animated="true" variant="info">
        <h5>Card 3</h5>
        <p>Info variant with shadow and animation.</p>
      </VueCard>

      <VueCard :is-shadow="true" :is-animated="true" variant="error">
        <h5>Card 4</h5>
        <p>Error variant with shadow and animation.</p>
      </VueCard>

      <VueCard :is-shadow="true" :is-animated="true" variant="warning">
        <h5>Card 5</h5>
        <p>Warning variant with shadow and animation.</p>
      </VueCard>

      <VueCard :is-shadow="true" :is-animated="true" :is-rounded="true">
        <h5>Card 6</h5>
        <p>Rounded corners with shadow and animation.</p>
      </VueCard>
    </div>

    <div class="mbe4">
      <h3>Customized with CSS Shadow Parts</h3>
    </div>
    <div class="stacked-mobile">
      <VueCard :is-shadow="true" class="custom-parts-card">
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
import { defineComponent } from 'vue';
import { VueCard } from 'agnosticui-core/card/vue';

export default defineComponent({
  name: 'CardExamples',
  components: {
    VueCard,
  },
});
</script>

<style scoped>
.custom-parts-card::part(ag-card-wrapper) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
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
