<template>
  <div :class="classes">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'agnosticui-card',
  props: {
    css: {
      type: String,
      default: ''
    },
    isSkinned: {
      type: Boolean,
      default: true,
    },
    isStacked : {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    classes() {
      return {
        // If skinned we use .card which includes .card-base and .card-skin
        [this.$style.card]: this.isSkinned,
        // Otherwise only the .card-base
        [this.$style['card-base']]: !this.isSkinned,
        [this.$style['card-stacked']]: this.isStacked,
        [`${this.css}`]: !!this.css
      }
    }
  }
}
</script>

<style module>
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
  --agnosticui-default-card-border-radius: 4px;
  --agnosticui-default-card-translateY-hover: -3px;
  /* Box Shadow properties in css custom properties examples here:
  https://css-tricks.com/now-css-custom-properties-thing-value-parts-can-changed-individually/ */
  --agnosticui-default-card-boxshadow1-offset-x: 2px;
  --agnosticui-default-card-boxshadow1-offset-y: 6px;
  --agnosticui-default-card-boxshadow1-blur: 4px;
  --agnosticui-default-card-boxshadow1-spread: 0;
  /* Here's an example of what our app, Peleton, will need to do to override */
  /* --agnosticui-card-boxshadow1-color: rgba(58, 115, 141, 0.25); */
  --agnosticui-default-card-boxshadow1-color: rgba(0, 0, 0, 0.25);
  --agnosticui-default-card-boxshadow2-offset-x: -2px;
  --agnosticui-default-card-boxshadow2-offset-y: -1px;
  --agnosticui-default-card-boxshadow2-blur: 6px;
  --agnosticui-default-card-boxshadow2-spread: 0;
  /* Here's an example of what our app, Peleton, will need to do to override */
  /* --agnosticui-card-boxshadow2-color: rgba(58, 115, 141, 0.15); */
  --agnosticui-default-card-boxshadow2-color: rgba(0, 0, 0, 0.15);
  /* Here's an example of what our app, Peleton, will need to do to override */
  /* --agnosticui-card-boxshadow-hover-color-from: rgba(58, 115, 141, 0.35); */
  --agnosticui-default-card-boxshadow-hover-color-from: rgba(0, 0, 0, 0.35);
  /* Here's an example of what our app, Peleton, will need to do to override */
  /* --agnosticui-card-boxshadow-hover-color-to: rgba(58, 115, 141, 0.25); */
  --agnosticui-default-card-boxshadow-hover-color-to: rgba(0, 0, 0, 0.25);

  /* Indivual properties of: cubic-bezier(0.39, 0.575, 0.565, 1) */
  --agnosticui-default-card-cubic-1: 0.39;
  --agnosticui-default-card-cubic-2: 0.575;
  --agnosticui-default-card-cubic-3: 0.565;
  --agnosticui-default-card-cubic-4: 1;

  transition: color 0.75s, background-color 2s, translateY cubic-bezier(
    var(--agnosticui-card-cubic-1, var(--agnosticui-default-card-cubic-1)),
    var(--agnosticui-card-cubic-2, var(--agnosticui-default-card-cubic-2)),
    var(--agnosticui-card-cubic-3, var(--agnosticui-default-card-cubic-3)),
    var(--agnosticui-card-cubic-4, var(--agnosticui-default-card-cubic-4))) 0.5s;
  box-shadow: 
    var(--agnosticui-card-boxshadow1-offset-x, var(--agnosticui-default-card-boxshadow1-offset-x))
    var(--agnosticui-card-boxshadow1-offset-y, var(--agnosticui-default-card-boxshadow1-offset-y))
    var(--agnosticui-card-boxshadow1-blur, var(--agnosticui-default-card-boxshadow1-blur))
    var(--agnosticui-card-boxshadow1-color, var(--agnosticui-default-card-boxshadow1-color)),
    var(--agnosticui-card-boxshadow2-offset-x, var(--agnosticui-default-card-boxshadow2-offset-x))
    var(--agnosticui-card-boxshadow2-offset-y, var(--agnosticui-default-card-boxshadow2-offset-y))
    var(--agnosticui-card-boxshadow2-blur, var(--agnosticui-default-card-boxshadow2-blur))
    var(--agnosticui-card-boxshadow2-color, var(--agnosticui-default-card-boxshadow2-color));

  transition: opacity 0.4s cubic-bezier(
    var(--agnosticui-card-cubic-1, var(--agnosticui-default-card-cubic-1)),
    var(--agnosticui-card-cubic-2, var(--agnosticui-default-card-cubic-2)),
    var(--agnosticui-card-cubic-3, var(--agnosticui-default-card-cubic-3)),
    var(--agnosticui-card-cubic-4, var(--agnosticui-default-card-cubic-4)));
	border-radius: var(--agnosticui-card-border-radius, var(--agnosticui-default-card-border-radius));
	overflow: hidden;
}

.card:hover,
.card-skin:hover {
  transform: translateY(var(--agnosticui-card-translateY-hover, var(--agnosticui-default-card-translateY-hover)));
  transition: transform 0.4s cubic-bezier(
    var(--agnosticui-card-cubic-1, var(--agnosticui-default-card-cubic-1)),
    var(--agnosticui-card-cubic-2, var(--agnosticui-default-card-cubic-2)),
    var(--agnosticui-card-cubic-3, var(--agnosticui-default-card-cubic-3)),
    var(--agnosticui-card-cubic-4, var(--agnosticui-default-card-cubic-4)));
  box-shadow: 
    var(--agnosticui-card-boxshadow1-offset-x, var(--agnosticui-default-card-boxshadow1-offset-x))
    var(--agnosticui-card-boxshadow1-offset-y, var(--agnosticui-default-card-boxshadow1-offset-y))
    var(--agnosticui-card-boxshadow1-blur, var(--agnosticui-default-card-boxshadow1-blur))
    var(--agnosticui-card-boxshadow-hover-color-from, var(--agnosticui-default-card-boxshadow-hover-color-from)),
    var(--agnosticui-card-boxshadow2-offset-x, var(--agnosticui-default-card-boxshadow2-offset-x))
    var(--agnosticui-card-boxshadow2-offset-y, var(--agnosticui-default-card-boxshadow2-offset-y))
    var(--agnosticui-card-boxshadow2-blur, var(--agnosticui-default-card-boxshadow2-blur))
    var(--agnosticui-card-boxshadow-hover-color-to, var(--agnosticui-default-card-boxshadow-hover-color-to));
}

.card-stacked {
  flex-direction: column;
}
</style>