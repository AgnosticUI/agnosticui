<script>
  export let size = 14;
  export let type = ''; // 'info' | 'warning' | 'success' | 'error'

  const iconClasses = [
    "icon-svg",
    type ? `icon-svg-${type}` : "",
    size ? `icon-svg-${size}` : "",
  ]
    .filter((cls) => cls)
    .join(" ");
</script>
<svg class={iconClasses} {...$$restProps}>
  <slot />
</svg>
<style>
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
