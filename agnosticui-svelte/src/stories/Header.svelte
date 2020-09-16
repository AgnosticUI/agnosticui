<script>
  export let isSticky = false;
  export let isSkinned = true;
  export let css = "";

  let klasses = [
    isSkinned ? "header" : "header-base",
    isSticky ? "header-sticky" : "",
    css ? `${css}` : ""
  ];

  klasses = klasses.filter(klass => klass.length);
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
  --agnosticui-default-header-font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Open Sans", "Ubuntu", "Fira Sans", Helvetica, "Droid Sans",
  "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
  "Segoe UI Symbol";
  --agnosticui-default-header-box-shadow-hor: 0px;
  --agnosticui-default-header-box-shadow-ver: 1px;
  --agnosticui-default-header-box-shadow-blur: 5px;
  --agnosticui-default-header-box-shadow-spread: 2px;
  --agnosticui-default-header-box-shadow-color: rgba(0, 0, 0, 0.1);
  --agnosticui-default-header-mobile-height: 96px;
  --agnosticui-default-header-height: 64px;
  --agnosticui-default-header-content-width: 960px;
  --agnosticui-default-header-border-color: #e9e9e9;
  --agnosticui-default-header-background-color: #ffffff;

  background-color: var(
    --agnosticui-header-background-color,
    var(--agnosticui-default-header-background-color)
  );
  box-shadow: var(
      --agnosticui-header-box-shadow-hor,
      var(--agnosticui-default-header-box-shadow-hor)
    )
    var(
      --agnosticui-header-box-shadow-ver,
      var(--agnosticui-default-header-box-shadow-ver)
    )
    var(
      --agnosticui-header-box-shadow-blur,
      var(--agnosticui-default-header-box-shadow-blur)
    )
    var(
      --agnosticui-header-box-shadow-spread,
      var(--agnosticui-default-header-box-shadow-spread)
    )
    var(
      --agnosticui-header-box-shadow-color,
      var(--agnosticui-default-header-box-shadow-color)
    );
  height: var(
    --agnosticui-header-mobile-height,
    var(--agnosticui-default-header-mobile-height)
  );
  font-family: var(
    --agnosticui-header-font-family,
    var(--agnosticui-default-header-font-family)
  );
  border-bottom: 1px solid
    var(
      --agnosticui-header-border-color,
      var(--agnosticui-default-header-border-color)
    );
}

.header-content {
  width: var(
    --agnosticui-header-content-width,
    var(--agnosticui-default-header-content-width)
  );
  max-width: 100%;
  margin: 0 auto;
}

.header .header-content {
  display: flex;
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
  position: sticky;
  top: 0;
  z-index: 10;
}

@media (min-width: 599px) {
  .header {
    height: var(
      --agnosticui-header-height,
      var(--agnosticui-default-header-height)
    );
  }
}

@media (min-width: 960px) {
  .header .header-content {
    justify-content: space-between;
  }
}
</style>

<div class={klasses}>
  <div class="header-content">
    <slot name="logoleft" />
    <slot />
    <slot name="logoright" />
  </div>
</div>
