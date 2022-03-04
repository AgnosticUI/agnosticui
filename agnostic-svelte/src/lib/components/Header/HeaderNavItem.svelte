<style>
.header-nav-item {
  display: inline-block;
}

.header-nav-item:not(:last-child) {
  margin-inline-end: initial;
  margin-block-end: var(--fluid-8);
}

.header-nav-item :global(a) {
  color: var(--agnostic-header-color, var(--agnostic-font-color));
}

@media (min-width: 960px) {
  .header-nav-item:not(:last-child) {
    margin-inline-end: var(--agnostic-header-nav-spacing, var(--fluid-32));
    margin-block-end: initial;
  }
}

</style>

<script>
  export let css = "";
  let klasses = ["header-nav-item", css ? `${css}` : ""];
  klasses = klasses.filter((klass) => klass.length);
  klasses = klasses.join(" ");
</script>

<li class="{klasses}">
  <slot />
</li>
