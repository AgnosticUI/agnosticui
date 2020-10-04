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
  margin-right: initial;
}

.header-nav-item :global(a) {
  color: var(--agnosticui-header-color, var(--agnosticui-font-color));
  text-decoration: none;
}

@media (min-width: 960px) {
  .header-nav-item:not(:last-child) {
    margin-right: var(--agnosticui-header-nav-spacing, var(--Space-32));
  }
}
</style>

<li class={klasses}>
  <slot />
</li>
