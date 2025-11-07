
<template>
  <ag-link ref="agComponent">
    <slot />
  </ag-link>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watchEffect } from 'vue';
import type { LinkProps } from '../core/_Link';

export default defineComponent({
  name: 'VueLink',
  props: {
    href: {
      type: String,
      default: '',
    },
    variant: {
      type: String as () => 'success' | 'warning' | 'danger' | '',
      default: '',
    },
    isButton: {
      type: Boolean,
      default: false,
    },
    external: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    ariaLabel: {
      type: String,
      default: '',
    },
  },
  emits: ['click', 'focus', 'blur'],
  setup(props, { emit }) {
    const agComponent = ref<HTMLElement & LinkProps | null>(null);

    onMounted(() => {
      if (agComponent.value) {
        // Set up event listeners to emit Vue events
        agComponent.value.addEventListener('click', (e) => emit('click', e));
        agComponent.value.addEventListener('focus', (e) => emit('focus', e));
        agComponent.value.addEventListener('blur', (e) => emit('blur', e));
      }
    });

    // Watch all props and sync them to the web component
    watchEffect(() => {
      if (agComponent.value) {
        agComponent.value.href = props.href;
        agComponent.value.variant = props.variant;
        agComponent.value.isButton = props.isButton;
        agComponent.value.external = props.external;
        agComponent.value.disabled = props.disabled;
        agComponent.value.ariaLabel = props.ariaLabel;
      }
    });

    return {
      agComponent,
    };
  },
});
</script>
