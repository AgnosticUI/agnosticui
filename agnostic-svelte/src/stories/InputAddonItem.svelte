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
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;

  /* 38 / 16 */
  height: 2.375rem;
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
