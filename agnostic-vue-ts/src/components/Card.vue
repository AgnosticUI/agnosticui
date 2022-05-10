<template>
  <div :class="classes">
    <slot />
  </div>
</template>
<script setup lang="ts">
import { computed, useCssModule } from "vue";

export interface CardProps {
  css?: string;
  type?: "success" | "info" | "error" | "warning" | "";
  isSkinned?: boolean;
  isAnimated?: boolean;
  isStacked?: boolean;
  isShadow?: boolean;
  isBorder?: boolean;
  isRounded?: boolean;
}

const styles = useCssModule();

const props = withDefaults(defineProps<CardProps>(), {
  css: "",
  type: "",
  isSkinned: true,
});

const classes = computed(() => ({
  // If skinned we use .card which includes .card-base and .card-skin
  [styles.card]: props.isSkinned,
  // Otherwise only the .card-base
  [styles["card-base"]]: !props.isSkinned,
  [styles["card-animated"]]: props.isAnimated,
  [styles["card-rounded"]]: props.isRounded,
  [styles["card-border"]]: props.isBorder,
  [styles["card-shadow"]]: props.isShadow,
  [styles["card-stacked"]]: props.isStacked,
  [styles[`card-${props.type}`]]: !!props.type,
  [`${props.css}`]: !!props.css,
}));
</script>

<style module>
/**
 * Cards
 *
 * I drew some inspiration from the article on media-query less cards:
 * https://css-tricks.com/how-to-make-a-media-query-less-card-component/
 */
.card,
.card-base {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}

.card-border {
  border: 1px solid var(--agnostic-card-border-color, var(--agnostic-gray-light));
}

.card-rounded {
  border-radius: var(--agnostic-radius, 0.25rem);
}

.card-shadow {
  box-shadow:
    var(--agnostic-card-boxshadow1-offset-x, 0)
    var(--agnostic-card-boxshadow1-offset-y, 0.375rem)
    var(--agnostic-card-boxshadow1-blur, 0.5625rem)
    var(--agnostic-card-boxshadow1-color, rgb(6 6 6 / 7.5%)),
    var(--agnostic-card-boxshadow2-offset-x, 0) var(--agnostic-card-boxshadow2-offset-y, 0)
    var(--agnostic-card-boxshadow2-blur, 1px)
    var(--agnostic-card-boxshadow2-color, rgb(5 5 5 / 10%));
  border-radius: var(--agnostic-card-border-radius, var(--agnostic-radius, 0.25rem));
  overflow: hidden;
}

.card-shadow:hover {
  box-shadow:
    var(--agnostic-card-boxshadow1-offset-x, 0)
    var(--agnostic-card-boxshadow1-offset-y, 0.375rem)
    var(--agnostic-card-boxshadow1-blur, 0.875rem)
    var(--agnostic-card-boxshadow1-color, rgb(4 4 4 / 10%)),
    var(--agnostic-card-boxshadow2-offset-x, 0) var(--agnostic-card-boxshadow2-offset-y, 0)
    var(--agnostic-card-boxshadow2-blur, 2px)
    var(--agnostic-card-boxshadow2-color, rgb(3 3 3 / 10%));
}

/**
 * Animates the y position and box shadow on hover
 */
.card-animated {
  transition:
    box-shadow ease-out 5s,
    transform var(--agnostic-timing-fast)
    cubic-bezier(
      var(--agnostic-card-cubic-1, 0.39),
      var(--agnostic-card-cubic-2, 0.575),
      var(--agnostic-card-cubic-3, 0.565),
      var(--agnostic-card-cubic-4, 1)
    );
}

.card-animated:hover {
  transform: translateY(var(--agnostic-card-translate-y-hover, -3px));
  transition:
    box-shadow ease-out var(--agnostic-timing-fast),
    transform var(--agnostic-timing-slow)
    cubic-bezier(
      var(--agnostic-card-cubic-1, 0.39),
      var(--agnostic-card-cubic-2, 0.575),
      var(--agnostic-card-cubic-3, 0.565),
      var(--agnostic-card-cubic-4, 1)
    );
}

@media (prefers-reduced-motion), (update: slow) {
  .card-animated,
  .card-animated:hover {
    transition-duration: 0.001ms !important;
  }
}

.card-stacked {
  flex-direction: column;
}

.card-success {
  background: var(--agnostic-action-light);
  color: var(--agnostic-action-dark);
}

.card-info {
  background: var(--agnostic-primary-light);
  color: var(--agnostic-primary-dark);
}

.card-error {
  background: var(--agnostic-error-light);
  color: var(--agnostic-error-dark);
}

.card-warning {
  background: var(--agnostic-warning-light);
  color: var(--agnostic-warning-dark);
}

</style>
