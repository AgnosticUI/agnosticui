<script>
  export let customClasses = null;
  let klasses = ["flexgrid-container", customClasses ? customClasses : ""];
  klasses = klasses.filter((klass) => klass.length);
  klasses = klasses.join(" ");
</script>

<style>
:root {
  /**
 * Redefine this with --agnosticui-gutter-width: at the :root {} level in your
 * styles to opt-in and customize the grid gutters.
 */
  --agnosticui-default-gutter-width: 0; /* note: no gutters by default */
  --gutter-width: var(
    --agnosticui-gutter-width,
    var(--agnosticui-default-gutter-width)
  );
  --gutter-compensation: calc((var(--gutter-width) * 0.5) * -1);
  --half-gutter-width: calc((var(--gutter-width) * 0.5));
  --agnosticui-default-sm-min: 576px;
  --agnosticui-default-md-min: 768px;
  --agnosticui-default-lg-min: 992px;
  --agnosticui-default-xl-min: 1200px;
}

.flexgrid-container {
  box-sizing: border-box;
  margin-inline-start: auto;
  margin-inline-end: auto;
}

@media only screen and (min-width: 576px) {
  .flexgrid-container {
    width: var(--agnosticui-sm-min, var(--agnosticui-default-sm-min));
    max-width: 100%;
  }
}

@media only screen and (min-width: 768px) {
  .flexgrid-container {
    width: var(--agnosticui-md-min, var(--agnosticui-default-md-min));
    max-width: 100%;
  }
}

@media only screen and (min-width: 992px) {
  .flexgrid-container {
    width: var(--agnosticui-lg-min, var(--agnosticui-default-lg-min));
    max-width: 100%;
  }
}

@media only screen and (min-width: 1200px) {
  .flexgrid-container {
    width: var(--agnosticui-xl-min, var(--agnosticui-default-xl-min));
    max-width: 100%;
  }
}
</style>

<div class={klasses}>
  <slot />
</div>
