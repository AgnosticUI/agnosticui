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

  /* This allows an icon to sit in the vertical center regardless
  of if we've applied input-large or input-small */
  min-height: 100%;
}

.input-addon-left {
  left: var(--agnostic-input-side-padding);
}

.input-addon-right {
  right: var(--agnostic-input-side-padding);
}

</style>
  
  <script>
    export let css = "";
    export let addonLeft = false;
    export let addonRight = false;
    $: klasses = [
      addonLeft ? "input-addon-left" : "",
      addonRight ? "input-addon-right" : "",
      css ? `${css}` : "",
    ].filter(c => c).join(" ");
  </script>
  
  <div class={klasses}>
    <slot />
  </div>
  