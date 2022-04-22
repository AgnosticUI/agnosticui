<style>
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

</style>

<script>
  export let type = 14;
  export let size = 14;
  export let isSkinned = true;
  const iconClasses = [
    isSkinned ? "icon" : "icon-base",
    type ? `icon-${type}` : "",
    size ? `icon-${size}` : "",
  ]
    .filter((cls) => cls)
    .join(" ");
</script>

<span class={iconClasses}>
  <slot />
</span>
