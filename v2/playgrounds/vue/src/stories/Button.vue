<template>
  <VueButton
    :type="type"
    :variant="variant"
    :size="size === 'small' ? 'sm' : size === 'large' ? 'lg' : 'md'"
    :disabled="disabled"
    :loading="loading"
    :toggle="toggle"
    :pressed="pressed"
    :aria-label="ariaLabel"
    :aria-describedby="ariaDescribedby"
    :shape="shape"
    :bordered="bordered"
    :ghost="ghost"
    :link="link"
    :grouped="grouped"
    @click="onClick"
    @toggle="onToggle"
  >
    {{ label }}
  </VueButton>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import "agnosticui-core/button"; // Register the ag-button web component
import VueButton from "agnosticui-core/button/vue"; // Import the compiled VueButton module

const props = withDefaults(
  defineProps<{
    /**
     * The label of the button
     */
    label: string;
    /**
     * Button type for form behavior
     */
    type?: "button" | "submit" | "reset";
    /**
     * Visual variant of the button
     */
    variant?: "" | "primary" | "secondary" | "success" | "warning" | "danger";
    /**
     * Size of the button
     */
    size?: "small" | "medium" | "large";
    /**
     * Whether the button is disabled
     */
    disabled?: boolean;
    /**
     * Whether the button is in a loading state
     */
    loading?: boolean;
    /**
     * Whether the button is in toggle mode
     */
    toggle?: boolean;
    /**
     * Whether the toggle button is pressed
     */
    pressed?: boolean;
    /**
     * ARIA label for accessibility
     */
    ariaLabel?: string;
    /**
     * ARIA describedby for accessibility
     */
    ariaDescribedby?: string;
    /**
     * Shape variant of the button
     */
    shape?: "" | "capsule" | "rounded" | "circle" | "square" | "rounded-square";
    /**
     * Applies bordered style with transparent background
     */
    bordered?: boolean;
    /**
     * Applies ghost style with minimal padding
     */
    ghost?: boolean;
    /**
     * Applies link style with underline
     */
    link?: boolean;
    /**
     * Styles for buttons in a group
     */
    grouped?: boolean;
    /**
     * Background color of the button (not supported by VueButton, included for compatibility)
     */
    backgroundColor?: string;
  }>(),
  {
    type: "button",
    variant: "",
    size: "medium",
    disabled: false,
    loading: false,
    toggle: false,
    pressed: false,
    shape: "",
    bordered: false,
    ghost: false,
    link: false,
    grouped: false,
  }
);

const emit = defineEmits<{
  (e: "click", id: number): void;
  (e: "toggle", detail: { pressed: boolean }): void;
}>();

const onClick = () => {
  emit("click", 1);
};

const onToggle = (detail: { pressed: boolean }) => {
  emit("toggle", detail);
};
</script>
