<template>
  <section>
    <div class="mbe4">
      <h3>Default Icon</h3>
      <p class="mbs2 mbe3">Basic icon with default sizing and neutral styling.</p>
      <div class="stacked-mobile">
        <VueIcon size="16">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </VueIcon>
      </div>
    </div>

    <div class="mbe4">
      <h3>Sizes</h3>
      <p class="mbs2 mbe3">Different size variants for the icon wrapper and SVG.</p>
      <div class="stacked-mobile items-center mbe4">
        <VueIcon size="14">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </VueIcon>
        <VueIcon size="16">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </VueIcon>
        <VueIcon size="20">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </VueIcon>
        <VueIcon size="24">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </VueIcon>
        <VueIcon size="32">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </VueIcon>
        <VueIcon size="48">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </VueIcon>
      </div>
    </div>

    <div class="mbe4">
      <h3>Types</h3>
      <p class="mbs2 mbe3">Semantic types for color theming the icon.</p>
      <div class="stacked-mobile mbe4">
        <VueIcon
          type="info"
          size="20"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </VueIcon>
        <VueIcon
          type="success"
          size="20"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </VueIcon>
        <VueIcon
          type="warning"
          size="20"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </VueIcon>
        <VueIcon
          type="error"
          size="20"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </VueIcon>
        <VueIcon
          type="action"
          size="20"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </VueIcon>
      </div>
    </div>

    <div class="mbe4">
      <h3>With Custom SVG</h3>
      <p class="mbs2 mbe3">Using the default slot to provide custom SVG content.</p>
      <div class="stacked-mobile mbe4">
        <VueIcon size="20">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </VueIcon>
        <VueIcon
          size="24"
          type="error"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 001-1v-4a1 1 0 00-1-1H9z"
            />
          </svg>
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
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </VueIcon>
      <VueIcon
        class="custom-glow"
        size="32"
        type="info"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 001-1v-4a1 1 0 00-1-1H9z"
          />
        </svg>
      </VueIcon>
      <VueIcon
        class="custom-minimal"
        size="20"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </VueIcon>
    </div>
  </section>
</template>

<script setup lang="ts">
import { VueIcon } from "agnosticui-core/icon/vue";
</script>

<style scoped>
/* CSS Shadow Parts customization examples */

.custom-icon-base::part(icon-base) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  padding: 0.5rem;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.custom-icon-base svg {
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.custom-glow::part(icon-base) {
  filter: drop-shadow(0 0 8px rgba(102, 126, 234, 0.5));
}

.custom-minimal::part(icon-base) {
  border: 2px solid #e5e7eb;
  border-radius: 4px;
}
</style>
