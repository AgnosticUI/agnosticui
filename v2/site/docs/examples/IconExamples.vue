<template>
  <section>
    <div class="mbe4">
      <h3>Default Icon</h3>
      <p class="mbs2 mbe3">Basic icon with default sizing and neutral styling.</p>
      <div class="stacked-mobile">
        <VueIcon
          size="16"
          noFill
        >
          <Star />
        </VueIcon>
      </div>
    </div>

    <div class="mbe4">
      <h3>Sizes</h3>
      <p class="mbs2 mbe3">Different size variants for the icon wrapper and SVG.</p>
      <div class="stacked-mobile items-center mbe4">
        <VueIcon
          noFill
          size="14"
        >
          <Star />
        </VueIcon>
        <VueIcon
          noFill
          size="16"
        >
          <Star />
        </VueIcon>
        <VueIcon
          noFill
          size="20"
        >
          <Star />
        </VueIcon>
        <VueIcon
          noFill
          size="24"
        >
          <Star />
        </VueIcon>
        <VueIcon
          noFill
          size="32"
        >
          <Star />
        </VueIcon>
        <VueIcon
          noFill
          size="48"
        >
          <Star />
        </VueIcon>
      </div>
    </div>

    <div class="mbe4">
      <h3>Types</h3>
      <p class="mbs2 mbe3">Semantic types for color theming the icon.</p>
      <div class="stacked-mobile mbe4">
        <VueIcon
          noFill
          type="info"
          size="20"
        >
          <Star />
        </VueIcon>
        <VueIcon
          noFill
          type="success"
          size="20"
        >
          <Star />
        </VueIcon>
        <VueIcon
          noFill
          type="warning"
          size="20"
        >
          <Star />
        </VueIcon>
        <VueIcon
          noFill
          type="error"
          size="20"
        >
          <Star />
        </VueIcon>
        <VueIcon
          noFill
          type="action"
          size="20"
        >
          <Star />
        </VueIcon>
      </div>
    </div>

    <div class="mbe4">
      <h3>With Custom SVG</h3>
      <p class="mbs2 mbe3">Using the default slot to provide custom SVG content.</p>
      <div class="stacked-mobile mbe4">
        <VueIcon
          noFill
          size="24"
          type="error"
        >
          <Apple />
        </VueIcon>
        <VueIcon
          noFill
          size="24"
          type="warning"
        >
          <Zap />
        </VueIcon>
        <VueIcon
          noFill
          size="24"
          type="success"
        >
          <CalendarCheck />
        </VueIcon>
      </div>
    </div>

    <div class="mbe4">
      <h3>CSS Shadow Parts Customization</h3>
      <p class="mbs2 mbe3">
        Use CSS Shadow Parts to customize the icon's appearance without breaking encapsulation. The following examples are meant solely to show how to utilize CSS shadow parts to create custom icon styles.
      </p>
    </div>
    <div class="stacked-mobile mbe4">
      <VueIcon
        class="custom-icon-base"
        size="24"
      >
        <Star />
      </VueIcon>
      <VueIcon
        class="custom-minimal"
        size="32"
        noFill
        type="primary"
      >
        <CalendarCheck />
      </VueIcon>
    </div>
  </section>
</template>

<script setup lang="ts">
import { VueIcon } from "agnosticui-core/icon/vue";
import { Apple, CalendarCheck, Zap, Star } from "lucide-vue-next";
</script>

<style scoped>
/* CSS Shadow Parts customization examples */

.custom-icon-base::part(icon-base) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  padding: 0.4rem;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.custom-icon-base svg {
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  color: #b9c6ff;
  fill: none;
  stroke: currentColor;
}

.custom-minimal::part(icon-base) {
  border: 2px solid #e5e7eb;
  border-radius: 4px;
}
</style>
