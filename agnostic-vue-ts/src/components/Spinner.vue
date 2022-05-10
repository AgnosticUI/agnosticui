<template>
  <div
    :class="spinnerClasses"
    role="status"
    aria-live="polite"
    aria-busy="true"
  >
    <span class="screenreader-only">{{ ariaLabel }}</span>
  </div>
</template>
<script setup lang="ts">
import { computed, useCssModule } from "vue";
export interface SpinnerProps {
  ariaLabel?: string;
  size?: "small" | "large" | "";
}

const styles = useCssModule();

const props = withDefaults(defineProps<SpinnerProps>(), {
  ariaLabel: "Loading…",
  size: "",
});

const spinnerClasses = computed(() => {
  return {
    [styles["spinner"]]: true,
    [styles[`spinner-${props.size}`]]: !!props.size,
  };
});
</script>

<style module>
.spinner {
  --spinner-color: var(--agnostic-spinner-color, var(--agnostic-dark));

  /**
   * Inspiration to utilize grid for this from
   * https://dockyard.com/blog/2020/03/02/accessible-loading-indicatorswith-no-extra-elements
   */
  display: grid;
  grid-template: "content" 100% / auto;
  place-items: center;
  box-sizing: border-box;
}

.spinner::before,
.spinner::after {
  grid-area: content;
  width: var(--fluid-32);
  height: var(--fluid-32);
  content: "";
  display: block;
  border-radius: 50%;
  border-width: 3px;
  border-style: solid;
}

.spinner-small::before,
.spinner-small::after {
  width: var(--fluid-24);
  height: var(--fluid-24);
  border-width: var(--fluid-2);
}

.spinner-large::before,
.spinner-large::after {
  width: var(--fluid-40);
  height: var(--fluid-40);
  border-width: var(--fluid-4);
}

.spinner-xlarge::before,
.spinner-xlarge::after {
  width: var(--fluid-56);
  height: var(--fluid-56);
  border-width: var(--fluid-6);
}

/**
 * Before is the muted background
 */
.spinner::before {
  opacity: 0%;
  border-color: var(--spinner-color);
}

/**
 * After is the inner "snake"
 */
.spinner::after {
  opacity: 0%;
  border-color: transparent var(--spinner-color) transparent transparent;
  transition: opacity 0.1s;
  pointer-events: none;
  animation: loading-circle 1s ease-in-out infinite;

  /* TODO Research the whole null transform hack. It is quite confusing to figure out if it
  is beneficial or detrimental: See
  https://newbedev.com/css-keyframe-animation-cpu-usage-is-high-should-it-be-this-way
  transform: translateZ(0);
  will-change: transform; */
}

/**
 * Setting aria-busy to true results in corresponding opacity change to visually show spinner.
 */
.spinner[aria-busy="true"]::before {
  opacity: 12%;
}

.spinner[aria-busy="true"]::after {
  opacity: 100%;
}

@keyframes loading-circle {
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion), (update: slow) {
  .spinner::after {
    transition-duration: 0.001ms !important;
  }
}

</style>
