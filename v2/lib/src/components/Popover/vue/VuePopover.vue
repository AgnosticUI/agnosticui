<template>
  <ag-popover
    ref="agComponent"
    :placement="placement"
    :distance="distance"
    :skidding="skidding"
    :arrow="arrow"
    :disabled="disabled"
    :trigger-type="triggerType"
    :match-trigger-width="matchTriggerWidth"
    :show-close-button="showCloseButton"
    :close-label="closeLabel"
    :trap-focus="trapFocus"
    v-bind="$attrs"
  >
    <slot />
  </ag-popover>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  watchEffect,
  nextTick,
  type PropType,
} from "vue";
import type {
  PopoverProps,
  PopoverShowEvent,
  PopoverHideEvent,
} from "../core/Popover";
import type { Placement } from "@floating-ui/dom";
import "../core/Popover"; // Registers the ag-popover web component

export default defineComponent({
  name: "VuePopover",
  props: {
    placement: {
      type: String as PropType<Placement>,
      default: "bottom" as Placement,
    },
    distance: {
      type: Number,
      default: 8,
    },
    skidding: {
      type: Number,
      default: 0,
    },
    arrow: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    triggerType: {
      type: String as PropType<'click' | 'hover' | 'focus'>,
      default: 'click',
    },
    matchTriggerWidth: {
      type: Boolean,
      default: false,
    },
    showCloseButton: {
      type: Boolean,
      default: true,
    },
    closeLabel: {
      type: String,
      default: 'Close popover',
    },
    trapFocus: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['show', 'hide'],
  setup(props, { emit }) {
    const agComponent = ref<(HTMLElement & PopoverProps) | null>(null);

    const syncProps = () => {
      const webComponent = agComponent.value;
      if (!webComponent) return;

      webComponent.placement = props.placement;
      webComponent.distance = props.distance;
      webComponent.skidding = props.skidding;
      webComponent.arrow = props.arrow;
      webComponent.disabled = props.disabled;
      webComponent.triggerType = props.triggerType;
      webComponent.matchTriggerWidth = props.matchTriggerWidth;
      webComponent.showCloseButton = props.showCloseButton;
      webComponent.closeLabel = props.closeLabel;
      webComponent.trapFocus = props.trapFocus;
    };

    const handleShow = (event: Event) => {
      emit('show', event as PopoverShowEvent);
    };

    const handleHide = (event: Event) => {
      emit('hide', event as PopoverHideEvent);
    };

    onMounted(async () => {
      await customElements.whenDefined("ag-popover");
      await nextTick();
      syncProps();

      // Add event listeners
      const webComponent = agComponent.value;
      if (webComponent) {
        webComponent.addEventListener('show', handleShow);
        webComponent.addEventListener('hide', handleHide);
      }
    });

    watchEffect(() => {
      if (agComponent.value) {
        syncProps();
      }
    });

    return { agComponent };
  },
});
</script>
