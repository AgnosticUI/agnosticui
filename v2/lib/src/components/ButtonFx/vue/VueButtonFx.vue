
<template>
  <ag-button-fx ref="agComponent">
    <slot />
  </ag-button-fx>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue';
import type { ButtonFxProps } from '../core/_ButtonFx';

export default defineComponent({
  name: 'VueButtonFx',
  props: {
    // Define props here
  },
  setup(props, { emit }) {
    const agComponent = ref<HTMLElement & ButtonFxProps | null>(null);

    onMounted(() => {
      if (agComponent.value) {
        // TODO: Set up event listeners to emit Vue events
        // agComponent.value.addEventListener('event-name', (e) => emit('eventName', e.detail));
        
        // TODO: Sync props
        Object.keys(props).forEach(prop => {
          if (props[prop] !== undefined) {
            agComponent.value[prop] = props[prop];
          }
        });
      }
    });

    // TODO: Watch props for changes and update the web component
    // watch(() => props.someProp, (newValue) => {
    //   if (agComponent.value) {
    //     agComponent.value.someProp = newValue;
    //   }
    // });

    return {
      agComponent,
    };
  },
});
</script>
