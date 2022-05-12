<template>
  <label
    :class="styles['select']"
    class="screenreader-only"
    :for="uniqueId"
  >{{ labelCopy }} </label>
  <select
    :id="uniqueId"
    :name="name"
    :value="modelValue"
    :class="selectClasses()"
    :disabled="isDisabled"
    :multiple="isMultiple"
    :size="isMultiple && multipleSize ? multipleSize : undefined"
    @input="updateValue"
  >
    <option
      v-if="showDefaultOption"
      disabled
      value=""
    >
      {{ defaultOptionLabel }}
    </option>
    <option
      v-for="(option, i) in options"
      :key="i"
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>
<script setup lang="ts">
import { computed, useCssModule, ref } from "vue";
import { SelectSize, SelectOption } from "./SelectApi";

export interface SelectProps {
  uniqueId: string;
  name: string;
  labelCopy: string;
  options: SelectOption[];
  size?: SelectSize;
  multipleSize?: number;
  isMultiple?: boolean;
  defaultOptionLabel?: string;
  isDisabled?: boolean;
}

const props = withDefaults(defineProps<SelectProps>(), {
  defaultOptionLabel: "Please select an option",
  isMultiple: false,
  multipleSize: 1,
  size: "",
});

const modelValue = ref(props.isMultiple ? [] : "");

const emit = defineEmits<{
  (event: "selected", selectedValue: any): void;
}>();

/**
 * We check if isMultiple because that will result in an arrow of selectedValues
 * Regardless of single or multi we emit "selected" with the selected option(s).
 */
const updateValue = (ev) => {
  modelValue.value = ev.target.value;
  if (props.isMultiple) {
    const selectedValues = Array.from(ev.target.selectedOptions).map(
      (opt: any) => opt.value
    );
    emit("selected", selectedValues);
  } else {
    emit("selected", modelValue.value);
  }
};

const styles = useCssModule();

const selectClasses = () => {
  return {
    [styles["select"]]: true,
    [styles[`select-${props.size}`]]: !!props.size,
  };
};

const showDefaultOption = computed(() => {
  return !props.isMultiple;
});
</script>
<style module>
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
  border: 1px solid var(--agnostic-select-border-color, var(--agnostic-gray-light));
  border-radius: var(--agnostic-radius);
  transition:
    border-color var(--agnostic-timing-fast) ease-in-out,
    box-shadow var(--agnostic-timing-fast) ease-in-out;
}

/* Only shows the down arrow SVG if in single mode */
.select:not([multiple]) {
  background-color: inherit;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23333330' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right var(--fluid-12) center;
  background-size: var(--fluid-16) var(--fluid-12);
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
