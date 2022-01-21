<script>
  import { createEventDispatcher } from "svelte";

  export let uniqueId = "";
  export let name = "";
  export let labelCopy = "";
  export let options = [];
  export let size = "";
  export let multipleSize = 1;
  export let isMultiple = false;
  export let defaultOptionLabel = "Please select an option";
  export let isDisabled = false;
  export let isSkinned = true;
  export let css = "";

  let selected;

  const dispatch = createEventDispatcher();
  // This will emit an event object that has a event.detail prop
  // This will contain the value of the selected option value. See
  // https://svelte.dev/docs#createEventDispatcher
  const changeHandler = () => {
    dispatch("selected", selected);
  };

  const classes = [
    isSkinned ? "select" : "select-base",
    size ? `select-${size}` : "",
    css ? `${css}` : "",
  ]
    .filter((cl) => cl)
    .join(" ");

  const showDefaultOption = !isMultiple;

  function isMultipleAction(node) {
    if (isMultiple) {
      node.multiple = true;
    }
  }

</script>

<style>
.select,
.select-base {
  display: block;
  width: 100%;
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-appearance: none;
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -moz-appearance: none;
  appearance: none;
}

.select,
.select-skin {
  padding: var(--fluid-6) var(--fluid-32) var(--fluid-6) var(--fluid-12);
  -moz-padding-start: calc(var(--fluid-12) - 3px);
  font-size: var(--fluid-16);
  font-weight: 400;
  line-height: 1.5;
  color: var(--agnostic-dark);
  background-color: white;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23333330' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right var(--fluid-12) center;
  background-size: var(--fluid-16) var(--fluid-12);
  border: 1px solid var(--agnostic-select-border-color, var(--agnostic-gray-light));
  border-radius: var(--agnostic-radius);
  transition:
    border-color var(--agnostic-timing-fast) ease-in-out,
    box-shadow var(--agnostic-timing-fast) ease-in-out;
}

.select:focus {
  border-color: var(--agnostic-focus-ring-color);
  box-shadow: 0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);

  /* Needed for High Contrast mode */
  outline:
    var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style)
    var(--agnostic-focus-ring-outline-color);
  transition: box-shadow var(--agnostic-timing-fast) ease-out;
}

.select-base,
.select:disabled {
  background-color: var(--agnostic-disabled-bg);
}

.select-base,
.select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 var(--agnostic-dark);
}

@media (prefers-reduced-motion), (update: slow) {
  .select,
  .select-base,
  .select:focus {
    transition: none;
  }
}

.select-small {
  padding-top: var(--fluid-4);
  padding-bottom: var(--fluid-4);
  padding-left: var(--fluid-8);
  font-size: var(--fluid-14);
}

.select-large {
  padding-top: var(--fluid-8);
  padding-bottom: var(--fluid-8);
  padding-left: var(--fluid-16);
  font-size: var(--fluid-18);
}

</style>

<label class="screenreader-only" for="{uniqueId}"> {labelCopy} </label>
<select
  id="{uniqueId}"
  class="{classes}"
  name="{name}"
  disabled="{isDisabled}"
  use:isMultipleAction
  size="{multipleSize}"
  bind:value="{selected}"
  on:change="{changeHandler}"
>
  {#if showDefaultOption}
    <option value="select-option" disabled selected>
      {defaultOptionLabel}
    </option>
  {/if}
  {#each options as { value, label }, index}
    <option value="{value}">{label}</option>
  {/each}
</select>
