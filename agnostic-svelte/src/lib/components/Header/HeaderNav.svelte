<style>
/* Goes on the <ul> */
.header-nav {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 960px) {
  .header-nav {
    flex-direction: row;
  }
}

</style>

<script>
  export let css = "";
  const containerClasses = [css ? `${css}` : ""].filter((c) => c.length);
</script>

<nav class={containerClasses}>
  <ul class="header-nav">
    <slot />
  </ul>
</nav>
