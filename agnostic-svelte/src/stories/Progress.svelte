<script>
  export let value = 0;
  export let max;
  export let css = "";

  let klasses = ["progress", css ? `${css}` : ""];
  klasses = klasses.filter((klass) => klass.length);
  klasses = klasses.join(" ");
</script>

<style>
  /* https://stackoverflow.com/questions/45507970/how-can-i-change-the-color-of-a-progress-bar-value-in-html */
  /**
 * Most examples show styling directly to the <progress> element itself. However,
 * my tests (chrome, ff, safari on mac mini 2020), showed it's perfectly possibly
 * to use a class selector instead. The reason I'd prefer that here, is that I can
 * then use CSS Modules composes against .progress (e.g. for React/Vue components)
 */
  .progress {
    -webkit-appearance: none;
    height: var(--agnostic-progress-height, var(--fluid-10, 0.625rem));
    width: 100%;
    border: none;
    /* Next couple of rules are required to be here for FF (but not chrome) */
    background-color: var(
      --agnostic-progress-background,
      var(--agnostic-gray-light, #ededed)
    );
    border-radius: var(--agnostic-progress-radius, var(--fluid-10, 0.625rem));
  }

  .progress[value]::-webkit-progress-bar {
    /* In my tests chrome requires this whereas FF wants it on the progress {} rule */
    background-color: var(
      --agnostic-progress-background,
      var(--agnostic-gray-light, #ededed)
    );
    border-radius: var(--agnostic-progress-radius, var(--fluid-10, 0.625rem));
  }

  .progress[value]::-webkit-progress-value {
    background-color: var(
      --agnostic-progress-fill-color,
      var(--agnostic-primary, #077acb)
    );
    border-radius: var(--agnostic-progress-radius, var(--fluid-10, 0.625rem));
  }

  .progress[value]::-moz-progress-bar {
    background-color: var(
      --agnostic-progress-fill-color,
      var(--agnostic-primary, #077acb)
    );
    border-radius: var(--agnostic-progress-radius, var(--fluid-10, 0.625rem));
  }

  .progress[value]::-ms-fill {
    background-color: var(
      --agnostic-progress-fill-color,
      var(--agnostic-primary, #077acb)
    );
    border-radius: var(--agnostic-progress-radius, var(--fluid-10, 0.625rem));
  }
</style>

<progress class="{klasses}" value="{value}" max="{max}"></progress>
