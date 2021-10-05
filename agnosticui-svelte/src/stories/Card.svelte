<script>
  export let isAnimated = false;
  export let isSkinned = true;
  export let isStacked = false;
  export let css = "";

  let klasses = [
    isSkinned ? "card" : "card-base",
    isAnimated ? "card-animated" : "",
    isStacked ? "card-stacked" : "",
    css ? `${css}` : "",
  ];
  klasses = klasses.filter((klass) => klass.length);
  klasses = klasses.join(" ");
</script>

<style>
  /**
 * Cards
 *
 * I drew some inspiration from the article on media-query less cards:
 * https://css-tricks.com/how-to-make-a-media-query-less-card-component/
 */
  .card,
  .card-base {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    position: relative;
    box-sizing: border-box;
    width: 100%;
  }

  .card,
  .card-skin {
    box-shadow: var(--agnosticui-card-boxshadow1-offset-x, 0)
        var(--agnosticui-card-boxshadow1-offset-y, 0.375rem)
        var(--agnosticui-card-boxshadow1-blur, 0.5625rem)
        var(--agnosticui-card-boxshadow1-color, rgba(6, 6, 6, 0.075)),
      var(--agnosticui-card-boxshadow2-offset-x, 0)
        var(--agnosticui-card-boxshadow2-offset-y, 0)
        var(--agnosticui-card-boxshadow2-blur, 1px)
        var(--agnosticui-card-boxshadow2-color, rgba(5, 5, 5, 0.1));
    border-radius: var(--agnosticui-card-border-radius, 4px);
    overflow: hidden;
  }

  .card:hover,
  .card-skin:hover {
    box-shadow: var(--agnosticui-card-boxshadow1-offset-x, 0)
        var(--agnosticui-card-boxshadow1-offset-y, 0.375rem)
        var(--agnosticui-card-boxshadow1-blur, 0.875rem)
        var(--agnosticui-card-boxshadow1-color, rgba(4, 4, 4, 0.1)),
      var(--agnosticui-card-boxshadow2-offset-x, 0)
        var(--agnosticui-card-boxshadow2-offset-y, 0)
        var(--agnosticui-card-boxshadow2-blur, 2px)
        var(--agnosticui-card-boxshadow2-color, rgba(3, 3, 3, 0.1));
  }

  /**
 * Animates the y position and box shadow on hover
 */
  .card-animated {
    transition: box-shadow ease-out 5s,
      transform var(--agnosticui-timing-fast)
        cubic-bezier(
          var(--agnosticui-card-cubic-1, 0.39),
          var(--agnosticui-card-cubic-2, 0.575),
          var(--agnosticui-card-cubic-3, 0.565),
          var(--agnosticui-card-cubic-4, 1)
        );
  }
  .card-animated:hover {
    transform: translateY(var(--agnosticui-card-translateY-hover, -3px));
    transition: box-shadow ease-out var(--agnosticui-timing-fast),
      transform var(--agnosticui-timing-slow)
        cubic-bezier(
          var(--agnosticui-card-cubic-1, 0.39),
          var(--agnosticui-card-cubic-2, 0.575),
          var(--agnosticui-card-cubic-3, 0.565),
          var(--agnosticui-card-cubic-4, 1)
        );
  }

  .card-stacked {
    flex-direction: column;
  }
</style>

<div class="{klasses}" on:click on:focus on:blur>
  <slot />
</div>
