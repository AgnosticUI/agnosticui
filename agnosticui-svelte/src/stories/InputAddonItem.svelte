<script>
  export let css = "";
  export let addonLeft = false;
  export let addonRight = false;
  let klasses = [
    addonLeft ? "input-addon-left" : "",
    addonRight ? "input-addon-right" : "",
    css ? `${css}` : "",
  ];
  klasses = klasses.filter((klass) => klass.length);
  klasses = klasses.join(" ");
</script>

<style>
/*
* Input addons e.g. icons inside the input
*/
.input-addon-right,
.input-addon-left {
  /* Maybe I should have defined another css prop for addon adjustments but trying
  to avoid any extra variable explosion there--will need to keep an eye on this */
  --addon-padding: calc(var(--agnosticui-input-side-padding) * 1.5);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.input-addon-left {
  left: var(--addon-padding);
}

.input-addon-right {
  right: var(--addon-padding);
}

</style>

<div class="{klasses}">
  <slot />
</div>
