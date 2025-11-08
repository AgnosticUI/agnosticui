<template>
  <section>
    <div class="mbe4">
      <h3>Text Skeleton</h3>
      <p class="mbs2 mbe3">
        Default text skeleton with subtle border radius, perfect for text placeholders.
      </p>
      <div style="width: 300px">
        <VueSkeleton />
        <VueSkeleton style="margin-top: 8px" />
        <VueSkeleton style="margin-top: 8px; width: 60%" />
      </div>
    </div>

    <div class="mbe4">
      <h3>Circular Skeleton</h3>
      <p class="mbs2 mbe3">
        Circular variant, ideal for avatar placeholders.
      </p>
      <div class="flex items-center" style="gap: 16px">
        <VueSkeleton variant="circular" width="40px" height="40px" />
        <VueSkeleton variant="circular" width="60px" height="60px" />
        <VueSkeleton variant="circular" width="80px" height="80px" />
      </div>
    </div>

    <div class="mbe4">
      <h3>Rectangular Skeleton</h3>
      <p class="mbs2 mbe3">
        Rectangular variant with no border radius, perfect for images.
      </p>
      <VueSkeleton variant="rectangular" width="300px" height="200px" />
    </div>

    <div class="mbe4">
      <h3>Rounded Skeleton</h3>
      <p class="mbs2 mbe3">
        Rounded variant with medium border radius, ideal for cards.
      </p>
      <VueSkeleton variant="rounded" width="300px" height="200px" />
    </div>

    <div class="mbe4">
      <h3>Effects</h3>
      <p class="mbs2 mbe3">
        Different animation effects: pulse (default), sheen, and none.
      </p>
      <div class="flex" style="gap: 24px; flex-wrap: wrap">
        <div>
          <h4 class="mbe2">Pulse</h4>
          <VueSkeleton effect="pulse" width="200px" height="100px" variant="rounded" />
        </div>
        <div>
          <h4 class="mbe2">Sheen</h4>
          <VueSkeleton effect="sheen" width="200px" height="100px" variant="rounded" />
        </div>
        <div>
          <h4 class="mbe2">None</h4>
          <VueSkeleton effect="none" width="200px" height="100px" variant="rounded" />
        </div>
      </div>
    </div>

    <div class="mbe4">
      <h3>Intensity</h3>
      <p class="mbs2 mbe3">
        Light (default) uses --ag-background-secondary, medium uses --ag-background-tertiary.
      </p>
      <div class="flex" style="gap: 24px; flex-wrap: wrap">
        <div>
          <h4 class="mbe2">Light</h4>
          <VueSkeleton intensity="light" width="200px" height="100px" variant="rounded" />
        </div>
        <div>
          <h4 class="mbe2">Medium</h4>
          <VueSkeleton intensity="medium" width="200px" height="100px" variant="rounded" />
        </div>
      </div>
    </div>

    <div class="mbe4">
      <h3>User Profile Card Loading</h3>
      <p class="mbs2 mbe3">
        Real-world example showing a loading profile card.
      </p>
      <div
        class="flex"
        style="gap: 16px; padding: 20px; border: 1px solid var(--ag-border); border-radius: var(--ag-radius-md); max-width: 400px"
      >
        <VueSkeleton variant="circular" width="60px" height="60px" />
        <div style="flex: 1">
          <VueSkeleton width="40%" height="16px" />
          <VueSkeleton width="60%" height="14px" style="margin-top: 8px" />
          <VueSkeleton width="80%" height="14px" style="margin-top: 8px" />
        </div>
      </div>
    </div>

    <div class="mbe4">
      <h3>Article Card Loading</h3>
      <p class="mbs2 mbe3">
        Real-world example showing a loading article card.
      </p>
      <div
        style="border: 1px solid var(--ag-border); border-radius: var(--ag-radius-md); overflow: hidden; max-width: 350px"
      >
        <VueSkeleton variant="rectangular" width="100%" height="200px" />
        <div style="padding: 16px">
          <VueSkeleton width="60%" height="20px" />
          <VueSkeleton width="100%" height="14px" style="margin-top: 12px" />
          <VueSkeleton width="100%" height="14px" style="margin-top: 8px" />
          <VueSkeleton width="40%" height="14px" style="margin-top: 8px" />
        </div>
      </div>
    </div>

    <div class="mbe4">
      <h3>List Loading</h3>
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
          <VueSkeleton variant="circular" width="40px" height="40px" />
          <div style="flex: 1">
            <VueSkeleton width="60%" height="16px" />
            <VueSkeleton width="40%" height="14px" style="margin-top: 8px" />
          </div>
        </div>
      </div>
    </div>

    <div class="mbe4">
      <h3>CSS Shadow Parts Customization</h3>
      <p class="mbs2 mbe3">
        Use CSS Shadow Parts to customize the skeleton's appearance.
      </p>
      <VueSkeleton class="custom-skeleton" width="300px" height="100px" variant="rounded" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueSkeleton } from "agnosticui-core/skeleton/vue";

export default defineComponent({
  name: "SkeletonLoaderExamples",
  components: {
    VueSkeleton,
  },
});
</script>

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
