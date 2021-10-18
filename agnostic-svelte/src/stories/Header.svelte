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
      var(--agnostic-header-box-shadow-color, rgba(0, 0, 0, 0.1));
    font-family: var(
      --agnostic-header-font-family,
      var(--agnostic-font-family)
    );
    border-bottom: 1px solid
      var(--agnostic-header-border-color, var(--agnostic-gray-light));
    padding-block-start: var(--agnostic-vertical-pad, 0.5rem);
    padding-block-end: var(--agnostic-vertical-pad, 0.5rem);
    padding-inline-start: var(--agnostic-side-padding, 0.75rem);
    padding-inline-end: var(--agnostic-side-padding, 0.75rem);
  }

  .header-content {
    width: var(--agnostic-header-content-width, 960px);
    max-width: 100%;
    margin: 0 auto;
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

    .header-content {
      flex-direction: row;
      justify-content: space-between;
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
