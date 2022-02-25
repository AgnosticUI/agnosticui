<style>
  .header,
  .header-base {
    display: block;
  }

  .header-base :global(img),
  .header :global(img) {
    max-width: 100%;
    height: auto;
  }

  .header,
  .header-skin {
    background-color: var(
      --agnostic-header-background-color,
      var(--agnostic-light)
    );
    box-shadow: var(--agnostic-header-box-shadow-hor, 0)
      var(--agnostic-header-box-shadow-ver, 1px)
      var(--agnostic-header-box-shadow-blur, 5px)
      var(--agnostic-header-box-shadow-spread, 2px)
      var(--agnostic-header-box-shadow-color, rgb(0 0 0 / 10%));
    font-family: var(
      --agnostic-header-font-family,
      var(--agnostic-font-family-body)
    );
    border-bottom: 1px solid
      var(--agnostic-header-border-color, var(--agnostic-gray-light));
    padding-block-start: var(--agnostic-vertical-pad, 0.5rem);
    padding-block-end: var(--agnostic-vertical-pad, 0.5rem);
    padding-inline-start: var(--fluid-24);
    padding-inline-end: var(--fluid-24);
  }

  .header-content {
    width: var(--agnostic-header-content-width, 960px);
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: wrap column;
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

    .header-content {
      flex-direction: row;
      justify-content: space-between;
    }

    .header-content-start {
      justify-content: flex-start;
    }

    .header-content-end {
      justify-content: flex-end;
    }
  }
</style>

<script>
  export let isSticky = false;
  export let isSkinned = true;
  export let isHeaderContentStart = false;
  export let isHeaderContentEnd = false;
  export let css = "";

  const klasses = [
    isSkinned ? "header" : "header-base",
    isSticky ? "header-sticky" : "",
    css ? `${css}` : "",
  ]
    .filter((cl) => cl.length)
    .join(" ");

  const headerContentClasses = [
    "header-content",
    isHeaderContentStart ? "header-content-start" : "",
    isHeaderContentEnd ? "header-content-end" : "",
  ]
    .filter((cl) => cl.length)
    .join(" ");
</script>

<div class="{klasses}">
  <div class="{headerContentClasses}">
    <slot name="logoleft" />
    <slot />
    <slot name="logoright" />
  </div>
</div>
