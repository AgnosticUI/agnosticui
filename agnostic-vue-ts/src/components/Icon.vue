<template>
  <span
    ref="span"
    :class="iconClasses"
  >
    <slot />
  </span>
</template>
<script setup lang="ts">
import { ref, onMounted, useCssModule, computed } from "vue";
import { IconSize, IconType } from "./IconApi";

export interface IconProps {
  isSkinned?: boolean;
  size?: IconSize;
  type?: IconType;
}

const span = ref(null as HTMLElement | null);

const styles = useCssModule();

const props = withDefaults(defineProps<IconProps>(), {
  isSkinned: true,
  size: 18,
  type: "",
});

const iconClasses = computed(() => {
  return {
    // We're initially visually hiding the icon until we've had a
    // chance to add the icon-svg-* classes (otherwise we get FOUC)
    ["screenreader-only"]: true,
    [styles["icon-base"]]: !props.isSkinned,
    [styles["icon"]]: !!props.isSkinned,
    [styles[`icon-${props.type}`]]: !!props.type,
    [styles[`icon-${props.size}`]]: !!props.size,
  };
});

onMounted(() => {
  const svg = span?.value?.querySelector("svg");
  svg?.classList.add(styles["icon-svg"]);
  if (props.size) svg?.classList.add(styles[`icon-svg-${props.size}`]);
  if (props.type) svg?.classList.add(styles[`icon-svg-${props.type}`]);

  // Now that we've setup our SVG classes we can visually unhide the icon
  span?.value?.classList.remove("screenreader-only");
});
</script>
<style module>
.icon-base {
  display: inline-flex;
  text-align: center;

  /* Ensures no "stretching" of icons to reach 100% of container's width */
  max-width: 100%;

  /* Ensure SVGs don't have click events -- typically we want enclosing button to handle */
  pointer-events: none;
  user-select: none;
}

/* We need to make both the span and svg same height (span .icon-svg) */
.icon,
.icon-skin {
  width: var(--fluid-16);
  height: var(--fluid-16);
}

.icon-14 {
  width: var(--fluid-14);
  height: var(--fluid-14);
}

.icon-16 {
  width: var(--fluid-16);
  height: var(--fluid-16);
}

.icon-18 {
  width: var(--fluid-18);
  height: var(--fluid-18);
}

.icon-20 {
  width: var(--fluid-20);
  height: var(--fluid-20);
}

.icon-24,
.icon-svg-24 {
  width: var(--fluid-24);
  height: var(--fluid-24);
}

.icon-32 {
  width: var(--fluid-32);
  height: var(--fluid-32);
}

.icon-36 {
  width: var(--fluid-36);
  height: var(--fluid-36);
}

.icon-40 {
  width: var(--fluid-40);
  height: var(--fluid-40);
}

.icon-48 {
  width: var(--fluid-48);
  height: var(--fluid-48);
}

.icon-56 {
  width: var(--fluid-56);
  height: var(--fluid-56);
}

.icon-64 {
  width: var(--fluid-64);
  height: var(--fluid-64);
}

.icon-svg {
  width: var(--fluid-16);
  height: var(--fluid-16);
  fill: currentColor;
}

.icon-svg-14 {
  width: var(--fluid-14);
  height: var(--fluid-14);
}

.icon-svg-16 {
  width: var(--fluid-16);
  height: var(--fluid-16);
}

.icon-svg-18 {
  width: var(--fluid-18);
  height: var(--fluid-18);
}

.icon-svg-20 {
  width: var(--fluid-20);
  height: var(--fluid-20);
}

.icon-svg-24 {
  width: var(--fluid-24);
  height: var(--fluid-24);
}

.icon-svg-32 {
  width: var(--fluid-32);
  height: var(--fluid-32);
}

.icon-svg-36 {
  width: var(--fluid-36);
  height: var(--fluid-36);
}

.icon-svg-40 {
  width: var(--fluid-40);
  height: var(--fluid-40);
}

.icon-svg-48 {
  width: var(--fluid-48);
  height: var(--fluid-48);
}

.icon-svg-56 {
  width: var(--fluid-56);
  height: var(--fluid-56);
}

.icon-svg-64 {
  width: var(--fluid-64);
  height: var(--fluid-64);
}

.icon-svg-info {
  color: var(--agnostic-primary);
}

.icon-svg-action,
.icon-svg-success {
  color: var(--agnostic-action);
}

.icon-svg-warning {
  color: var(--agnostic-warning-border-accent);
}

.icon-svg-error {
  color: var(--agnostic-error);
}
</style>
