<script>
  export let isSkinned = true;
  export let isStacked = false;
  export let css = "";

  let klasses = [
    isSkinned ? "card" : "card-base",
    isStacked ? "card-stacked" : "",
    css ? `${css}` : ""
  ];
  klasses = klasses.filter(klass => klass.length);
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
  transition: color 0.75s, background-color 2s, translateY cubic-bezier(
    var(--agnosticui-card-cubic-1, 0.39),
    var(--agnosticui-card-cubic-2, 0.575),
    var(--agnosticui-card-cubic-3, 0.565),
    var(--agnosticui-card-cubic-4, 1)) 0.5s;
  box-shadow: 
    var(--agnosticui-card-boxshadow1-offset-x, 2px)
    var(--agnosticui-card-boxshadow1-offset-y, 6px)
    var(--agnosticui-card-boxshadow1-blur, 4px)
    var(--agnosticui-card-boxshadow1-color, rgba(0, 0, 0, 0.25)),
    var(--agnosticui-card-boxshadow2-offset-x, -2px)
    var(--agnosticui-card-boxshadow2-offset-y, -1px)
    var(--agnosticui-card-boxshadow2-blur, 6px)
    var(--agnosticui-card-boxshadow2-color, rgba(0, 0, 0, 0.15));

  transition: opacity 0.4s cubic-bezier(
    var(--agnosticui-card-cubic-1, 0.39),
    var(--agnosticui-card-cubic-2, 0.575),
    var(--agnosticui-card-cubic-3, 0.565),
    var(--agnosticui-card-cubic-4, 1));
	border-radius: var(--agnosticui-card-border-radius, 4px);
	overflow: hidden;
}

.card:hover,
.card-skin:hover {
  transform: translateY(var(--agnosticui-card-translateY-hover, -3px));
  transition: transform 0.4s cubic-bezier(
    var(--agnosticui-card-cubic-1, 0.39),
    var(--agnosticui-card-cubic-2, 0.575),
    var(--agnosticui-card-cubic-3, 0.565),
    var(--agnosticui-card-cubic-4, 1));
  box-shadow: 
    var(--agnosticui-card-boxshadow1-offset-x, 2px)
    var(--agnosticui-card-boxshadow1-offset-y, 6px)
    var(--agnosticui-card-boxshadow1-blur, 4px)
    var(--agnosticui-card-boxshadow-hover-color-from, rgba(0, 0, 0, 0.35)),
    var(--agnosticui-card-boxshadow2-offset-x, -2px)
    var(--agnosticui-card-boxshadow2-offset-y, -1px)
    var(--agnosticui-card-boxshadow2-blur, 6px)
    var(--agnosticui-card-boxshadow-hover-color-to, rgba(0, 0, 0, 0.25));
}

.card-stacked {
  flex-direction: column;
}
</style>

<div class={klasses}>
  <slot />
</div>
