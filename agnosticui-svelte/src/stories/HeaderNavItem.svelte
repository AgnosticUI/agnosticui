<script>
  export let css = "";
  let klasses = ["header-nav-item", css ? `${css}` : ""];
  klasses = klasses.filter((klass) => klass.length);
  klasses = klasses.join(" ");
</script>

<style>
.header-nav-item {
  display: inline-block;
}
.header-nav-item:not(:last-child) {
  margin-inline-end: initial;
  margin-block-end: var(--Space-8);
}

.header-nav-item :global(a) {
  color: var(--agnosticui-header-color, var(--agnosticui-font-color));
  text-decoration: none;
}

@media (min-width: 960px) {
  .header-nav-item:not(:last-child) {
    margin-inline-end: var(--agnosticui-header-nav-spacing, var(--Space-32));
    margin-block-end: initial;
  }
}
</style>

<li class={klasses}>
  <slot />
</li>
