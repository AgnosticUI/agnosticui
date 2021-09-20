<script>
  export let isSticky = false;
  export let isSkinned = true;
  export let css = "";

  let klasses = [
    isSkinned ? "header" : "header-base",
    isSticky ? "header-sticky" : "",
    css ? `${css}` : "",
  ];

  klasses = klasses.filter((klass) => klass.length);
  klasses = klasses.join(" ");
</script>

<style>
.header,
.header-base {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.header-base :global(img),
.header :global(img) {
  max-width: 100%;
  height: auto;
}

.header,
.header-skin {
  background-color: var(--agnosticui-header-background-color, var(--agnosticui-light));
  box-shadow: var(--agnosticui-header-box-shadow-hor, 0)
    var(--agnosticui-header-box-shadow-ver, 1px) var(--agnosticui-header-box-shadow-blur, 5px)
    var(--agnosticui-header-box-shadow-spread, 2px)
    var(--agnosticui-header-box-shadow-color, rgba(0, 0, 0, 0.1));
  height: var(--agnosticui-header-mobile-height, 128px);
  font-family: var(--agnosticui-header-font-family, var(--agnosticui-font-family));
  border-bottom: 1px solid var(--agnosticui-header-border-color, var(--agnosticui-gray-light));
}

.header-content {
  width: var(--agnosticui-header-content-width, 960px);
  max-width: 100%;
  margin: 0 auto;
}

.header .header-content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

/**
 * If you make your header sticky, you should likely consider that jump links
 * e.g. <h1 id="Jump-Here">... will tuck underneath the header! Here's a recommendation
 * for how to circumnavigate this issue via scroll-margin-top:
  h1[id],
  h2[id],
  h3[id],
  h4[id],
  h5[id],
  h6[id] {
    scroll-margin-top: 80px;
  }
 * In this case I have a 64px tall header so I've added 16px for clearance -- you'll need
 * to curate your own use case, but scroll-margin-top is super useful for this use case.
 */

.header-sticky {
  position: relative;
  top: 0;
  z-index: 10;
}

@media (min-width: 960px) {
  .header-sticky {
    position: sticky;
  }

  .header .header-content {
    flex-direction: row;
    justify-content: space-between;
  }
  .header {
    height: var(--agnosticui-header-height, var(--fluid-64));
  }
}

</style>

<div class="{klasses}">
  <div class="header-content">
    <slot name="logoleft" />
    <slot />
    <slot name="logoright" />
  </div>
</div>
