<script>
  export let css = "";
  let klasses = ["header-nav", css ? `${css}` : ""];
  klasses = klasses.filter((klass) => klass.length);
  klasses = klasses.join(" ");
</script>

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

<nav>
  <ul class="{klasses}">
    <slot />
  </ul>
</nav>
