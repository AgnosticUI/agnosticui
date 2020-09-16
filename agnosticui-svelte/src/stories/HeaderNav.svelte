<script>
  export let css = "";
  let klasses = ["header-nav", css ? `${css}` : ""];
  klasses = klasses.filter(klass => klass.length);
  klasses = klasses.join(" ");
</script>

<style>
.header-nav {
  --agnosticui-default-header-color: #333333;
  --agnosticui-default-header-nav-spacing: 32px;
}

.header-nav :global(a) {
  color: var(--agnosticui-header-color, var(--agnosticui-default-header-color));
  text-decoration: none;
}

.header-nav :global(ul) {
  margin: 0;
  padding: 0;
}

.header-nav :global(li) {
  display: inline-block;
}

.header-nav :global(li:not(:last-child)) {
  margin-right: var(
    --agnosticui-header-nav-spacing,
    var(--agnosticui-default-header-nav-spacing)
  );
}
</style>

<nav class={klasses}>
  <slot />
</nav>
