<style>
.icon-base > :global(svg),
.icon > :global(svg) {
  display: inline-flex;
  text-align: center;

  /* Ensures no "stretching" of icons to reach 100% of container's width */
  max-width: 100%;

  /* Ensure SVGs don't have click events -- typically we want enclosing button to handle */
  pointer-events: none;
  user-select: none;
}

.icon-skin,
/* We need to make both the span and svg same height (span > svg) */
.icon,
.icon > :global(svg) {
  width: var(--fluid-16);
  height: var(--fluid-16);
}

.icon > :global(svg) {
  fill: currentColor;
}

.icon-14,
.icon-14 > :global(svg) {
  width: var(--fluid-14);
  height: var(--fluid-14);
}

.icon-16,
.icon-16 > :global(svg) {
  width: var(--fluid-16);
  height: var(--fluid-16);
}

.icon-18,
.icon-18 > :global(svg) {
  width: var(--fluid-18);
  height: var(--fluid-18);
}

.icon-20,
.icon-20 > :global(svg) {
  width: var(--fluid-20);
  height: var(--fluid-20);
}

.icon-24,
.icon-24 > :global(svg) {
  width: var(--fluid-24);
  height: var(--fluid-24);
}

.icon-32,
.icon-32 > :global(svg) {
  width: var(--fluid-32);
  height: var(--fluid-32);
}

.icon-36,
.icon-36 > :global(svg) {
  width: var(--fluid-36);
  height: var(--fluid-36);
}

.icon-40,
.icon-40 > :global(svg) {
  width: var(--fluid-40);
  height: var(--fluid-40);
}

.icon-48,
.icon-48 > :global(svg) {
  width: var(--fluid-48);
  height: var(--fluid-48);
}

.icon-56,
.icon-56 > :global(svg) {
  width: var(--fluid-56);
  height: var(--fluid-56);
}

.icon-64,
.icon-64 > :global(svg) {
  width: var(--fluid-64);
  height: var(--fluid-64);
}

.icon-info > :global(svg) {
  color: var(--agnostic-primary);
}

.icon-success > :global(svg) {
  color: var(--agnostic-action);
}

.icon-warning > :global(svg) {
  color: var(--agnostic-warning-border-accent);
}

.icon-error > :global(svg) {
  color: var(--agnostic-error);
}

</style>

<script>
  export let type = [];
  export let size = [];
  export let isSkinned = true;
  const iconClasses = [
    isSkinned ? "icon" : "icon-base",
    type ? `icon-${type}` : "",
    size ? `icon-${size}` : "",
  ]
    .filter((cls) => cls)
    .join(" ");
</script>

<span class="{iconClasses}">
  <slot />
</span>
