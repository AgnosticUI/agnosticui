<template>
  <section>
    <div class="mbe4">
      <h3>Default Rating</h3>
      <p class="mbs2 mbe3">A basic rating component.</p>
      <VueRating :value="3" />
    </div>

    <div class="mbe4">
      <h3>Half Precision</h3>
      <p class="mbs2 mbe3">Allows for half-star ratings.</p>
      <VueRating :value="2.5" precision="half" />
    </div>

    <div class="mbe4">
      <h3>Readonly</h3>
      <p class="mbs2 mbe3">A non-interactive rating display.</p>
      <VueRating :value="4" :readonly="true" />
    </div>

    <div class="mbe4">
      <h3>Allow Clear</h3>
      <p class="mbs2 mbe3">Clicking the current rating will clear it to 0.</p>
      <VueRating :value="3" :allow-clear="true" />
    </div>

    <div class="mbe4">
      <h3>Sizes</h3>
      <p class="mbs2 mbe3">Three size options: small, medium (default), and large.</p>
      <div class="mbe4" style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;">
        <VueRating size="sm" :value="3" />
        <VueRating size="md" :value="3" />
        <VueRating size="lg" :value="3" />
      </div>
    </div>

    <div class="mbe4">
      <h3>Variants</h3>
      <p class="mbs2 mbe3">Color variants for different contexts.</p>
      <div class="mbe4" style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;">
        <VueRating variant="primary" :value="3" />
        <VueRating variant="secondary" :value="3" />
        <VueRating variant="success" :value="3" />
        <VueRating variant="warning" :value="3" />
        <VueRating variant="danger" :value="3" />
        <VueRating variant="monochrome" :value="3" />
      </div>
    </div>

    <div class="mbe4">
      <h3>Event Handling</h3>
      <p class="mbs2 mbe3">Listen for `rating-change` and `rating-hover` events.</p>
      <div>
        <VueRating
          :value="eventValue"
          @rating-change="handleRatingChange"
          @rating-hover="handleRatingHover"
        />
        <div style="margin-top: 1rem; font-family: monospace; font-size: 0.875rem;">
          <p>Current Value: {{ eventValue }}</p>
          <p>Hover Value: {{ hoverValue }}</p>
          <p>Last Event: {{ lastEvent }}</p>
        </div>
      </div>
    </div>

    <div class="mbe4">
      <h3>Form Control Features</h3>
      <p class="mbs2 mbe3">
        Rating supports labels, helper text, validation, and label positioning for form integration.
      </p>
      <div style="max-width: 600px; display: flex; flex-direction: column; gap: 1.5rem;">
        <!-- Basic label -->
        <VueRating
          label="Product Rating"
          :value="3"
        />

        <!-- With help text -->
        <VueRating
          label="Service Quality"
          help-text="Rate the quality of service you received"
          :value="4"
        />

        <!-- Required field -->
        <VueRating
          label="Overall Experience"
          :required="true"
          help-text="This rating is required to submit your feedback"
          :value="0"
        />

        <!-- With error validation -->
        <VueRating
          label="Customer Support"
          :required="true"
          :invalid="true"
          error-message="Please provide a rating before submitting"
          :value="0"
        />

        <!-- Label positioning -->
        <VueRating
          label="Start Position"
          label-position="start"
          :value="3"
        />

        <VueRating
          label="End Position"
          label-position="end"
          :value="3"
        />
      </div>
    </div>

    <div class="mbe4">
      <h3>CSS Shadow Parts Customization</h3>
      <p class="mbs2 mbe3">
        Use CSS Shadow Parts to customize the component's appearance.
      </p>
      <VueRating :value="4" class="custom-rating" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { VueRating } from "agnosticui-core/rating/vue";
import type { RatingChangeEvent, RatingHoverEvent } from "agnosticui-core/rating/vue";

export default defineComponent({
  name: "RatingExamples",
  components: {
    VueRating,
  },
  setup() {
    const eventValue = ref(3);
    const hoverValue = ref(0);
    const lastEvent = ref('');

    const handleRatingChange = (e: RatingChangeEvent) => {
      eventValue.value = e.detail.newValue;
      lastEvent.value = `rating-change: oldValue=${e.detail.oldValue}, newValue=${e.detail.newValue}`;
    };

    const handleRatingHover = (e: RatingHoverEvent) => {
      hoverValue.value = e.detail.value;
      lastEvent.value = `rating-hover: phase=${e.detail.phase}, value=${e.detail.value}`;
    };

    return {
      eventValue,
      hoverValue,
      lastEvent,
      handleRatingChange,
      handleRatingHover,
    };
  }
});
</script>

<style>
/* CSS Shadow Parts customization examples */
.custom-rating::part(star-button) {
  padding: 0.25rem;
  border-radius: 50%;
  transition: background-color 0.2s ease;
}
.custom-rating::part(star-button):hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.custom-rating::part(star) {
  opacity: 0.8;
  transition: opacity 0.2s ease;
}
.custom-rating::part(star):hover {
  opacity: 1;
}
</style>
