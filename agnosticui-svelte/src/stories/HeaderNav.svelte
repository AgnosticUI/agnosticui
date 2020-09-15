<script>
  export let css = "";
  let klasses = ["header-nav", css ? `${css}` : ""];
  klasses = klasses.filter(klass => klass.length);
  klasses = klasses.join(" ");
</script>

<style>
.header-nav {
  --agnostic-default-header-color: #333333;
  --agnostic-default-header-nav-spacing: 32px;
}

.header-nav :global(a) {
  color: var(--agnostic-header-color, var(--agnostic-default-header-color));
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
    --agnostic-header-nav-spacing,
    var(--agnostic-default-header-nav-spacing)
  );
}
</style>

<nav class={klasses}>
  <slot />
</nav>
