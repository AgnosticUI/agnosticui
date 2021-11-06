<script>
  export let isRounded = false;
  export let isBorderAll = false;
  export let isBorderLeft = false;
  export let isBorderRight = false;
  export let isBorderTop = false;
  export let isBorderBottom = false;
  export let isBlockEnd = false;
  export let type = "";
  let typeClass;
  switch (type) {
    case "warning":
      typeClass = "alert-warning";
      break;
    case "error":
      typeClass = "alert-error";
      break;
    case "info":
      typeClass = "alert-info";
      break;
    case "success":
      typeClass = "alert-success";
      break;
    default:
      typeClass = "";
  }
  const classes = [
    "alert",
    typeClass,
    isRounded ? "alert-rounded" : "",
    isBorderAll ? "alert-border-all" : "",
    isBorderLeft ? "alert-border-left" : "",
    isBorderRight ? "alert-border-right" : "",
    isBorderTop ? "alert-border-top" : "",
    isBorderBottom ? "alert-border-bottom" : "",
    isBlockEnd ? "alert-end" : "",
  ]
    .filter((klass) => klass.length)
    .join(" ");
  const svgModifierClass = type ? `alert-${type}-icon` : "";
</script>

<style>
  .alert-base,
  .alert {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .alert-end {
    justify-content: flex-end;
  }
  .alert-skin,
  .alert {
    padding: var(--agnostic-side-padding);
    background: var(--agnostic-gray-light);
  }

  .alert-icon {
    color: var(--agnostic-gray-mid-dark);
    margin-inline-end: var(--fluid-8);
    /* Ensures our icon doesn't flex grow or shrink */
    flex: 0 0 var(--fluid-24);
  }

  .alert-border-top {
    border-top: var(--fluid-8) solid var(--agnostic-gray-mid-dark);
  }
  .alert-border-left {
    border-left: var(--fluid-8) solid var(--agnostic-gray-mid-dark);
  }
  .alert-border-bottom {
    border-bottom: var(--fluid-8) solid var(--agnostic-gray-mid-dark);
  }
  .alert-border-right {
    border-right: var(--fluid-8) solid var(--agnostic-gray-mid-dark);
  }

  .alert-border-all {
    border: var(--fluid-2) solid var(--agnostic-gray-mid-dark);
  }

  .alert-rounded {
    border-radius: var(
      --agnostic-alert-radius,
      var(--agnostic-radius, 0.25rem)
    );
  }

  .alert-warning {
    background: var(--agnostic-warning-light);
    color: var(--agnostic-primary-dark);
  }
  .alert-warning-icon {
    color: var(--agnostic-warning-border-accent);
    margin-inline-end: var(--fluid-8);
    /* Ensures our icon doesn't flex grow or shrink */
    flex: 0 0 var(--fluid-24);
  }
  .alert-warning.alert-border-top {
    border-top-color: var(--agnostic-warning-border-accent);
  }
  .alert-warning.alert-border-left {
    border-left-color: var(--agnostic-warning-border-accent);
  }
  .alert-warning.alert-border-bottom {
    border-bottom-color: var(--agnostic-warning-border-accent);
  }
  .alert-warning.alert-border-right {
    border-right-color: var(--agnostic-warning-border-accent);
  }
  .alert-warning.alert-border-all {
    border: var(--fluid-2) solid var(--agnostic-warning-border);
  }

  .alert-info {
    background: var(--agnostic-primary-light);
    color: var(--agnostic-primary-dark);
  }
  .alert-info-icon {
    color: var(--agnostic-primary-dark);
    margin-inline-end: var(--fluid-8);
    /* Ensures our icon doesn't flex grow or shrink */
    flex: 0 0 var(--fluid-24);
  }

  .alert-info.alert-border-top {
    border-top-color: var(--agnostic-primary-dark);
  }
  .alert-info.alert-border-left {
    border-left-color: var(--agnostic-primary-dark);
  }
  .alert-info.alert-border-bottom {
    border-bottom-color: var(--agnostic-primary-dark);
  }
  .alert-info.alert-border-right {
    border-right-color: var(--agnostic-primary-dark);
  }
  .alert-info.alert-border-all {
    border: var(--fluid-2) solid var(--agnostic-primary-border);
  }

  .alert-error {
    background: var(--agnostic-error-light);
    color: var(--agnostic-error-dark);
  }
  .alert-error-icon {
    color: var(--agnostic-error-dark);
    margin-inline-end: var(--fluid-8);
    /* Ensures our icon doesn't flex grow or shrink */
    flex: 0 0 var(--fluid-24);
  }
  .alert-error.alert-border-top {
    border-top-color: var(--agnostic-error-dark);
  }
  .alert-error.alert-border-left {
    border-left-color: var(--agnostic-error-dark);
  }
  .alert-error.alert-border-bottom {
    border-bottom-color: var(--agnostic-error-dark);
  }
  .alert-error.alert-border-right {
    border-right-color: var(--agnostic-error-dark);
  }
  .alert-error.alert-border-all {
    border: var(--fluid-2) solid var(--agnostic-error-border);
  }

  .alert-success {
    background: var(--agnostic-action-light);
    color: var(--agnostic-action-from);
  }
  .alert-success-icon {
    color: var(--agnostic-ation-from);
    margin-inline-end: var(--fluid-8);
    /* Ensures our icon doesn't flex grow or shrink */
    flex: 0 0 var(--fluid-24);
  }
  .alert-success.alert-border-top {
    border-top-color: var(--agnostic-action-from);
  }
  .alert-success.alert-border-left {
    border-left-color: var(--agnostic-action-from);
  }
  .alert-success.alert-border-bottom {
    border-bottom-color: var(--agnostic-action-from);
  }
  .alert-success.alert-border-right {
    border-right-color: var(--agnostic-action-from);
  }
  .alert-success.alert-border-all {
    border: var(--fluid-2) solid var(--agnostic-action-border);
  }
</style>

<div class="{classes}" role="alert">
  <svg
    class="alert-icon {svgModifierClass}"
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
  >
    <path d="M0 0h24v24H0z" fill="none"></path>
    <path
      fill="currentColor"
      d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
    ></path>
  </svg>
  <slot />
</div>
