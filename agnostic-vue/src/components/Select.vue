<template>
  <label
    :class="$style['select']"
    class="screenreader-only"
    :for="uniqueId"
  >{{ labelCopy }} </label>
  <select
    :id="uniqueId"
    :name="name"
    :value="value"
    :class="selectClasses"
    :disabled="isDisabled"
    :multiple="isMultiple"
    :size="isMultiple && multipleSize"
    @input="$emit('input', $event.target.value)"
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
<script>
export default {
  name: "AgSelect",
  props: {
    uniqueId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    labelCopy: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    size: {
      type: String,
      required: false,
      default: "",
      validator: (value) => ["small", "large", ""].includes(value),
    },
    multipleSize: {
      type: Number,
      required: false,
      default: 1,
    },
    isMultiple: {
      type: Boolean,
      required: false,
      default: false,
    },
    defaultOptionLabel: {
      type: String,
      required: false,
      default: "Please select an option",
    },
    isDisabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ["input"],
  data() {
    return {
      value: "",
    };
  },
  computed: {
    showDefaultOption() {
      return !this.isMultiple;
    },
    selectClasses() {
      return {
        [this.$style["select"]]: true,
        [this.$style[`select-${this.size}`]]: !!this.size,
      };
    },
  },
  // created() {
  //   this.value = this.options ? this.options[0] : "select-option";
  // },
};
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
  background-color: white;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23333330' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right var(--fluid-12) center;
  background-size: var(--fluid-16) var(--fluid-12);
  border: 1px solid var(--agnostic-checkbox-border-color, var(--agnostic-gray-light));
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

@media (prefers-reduced-motion: reduce) {
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
