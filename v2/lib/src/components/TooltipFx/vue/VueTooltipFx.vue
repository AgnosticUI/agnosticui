<template>
  <ag-tooltip-fx
    ref="tooltipRef"
    :content="content"
    :placement="placement"
    :distance="distance"
    :skidding="skidding"
    :trigger="trigger"
    .disabled="disabled"
    :fx="fx"
    :fx-speed="fxSpeed"
    :fx-ease="fxEase"
    .fxDisabled="fxDisabled"
    @show="handleShow"
    @hide="handleHide"
    v-bind="$attrs"
  >
    <slot />
  </ag-tooltip-fx>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type {
  TooltipProps,
  TooltipShowEventDetail,
  TooltipHideEventDetail,
} from "../../Tooltip/core/Tooltip";
import type { TooltipFx } from "../core/TooltipFx";
import "../core/TooltipFx";

interface VueTooltipFxProps extends Omit<TooltipProps, "onShow" | "onHide"> {
  fx?: string;
  fxSpeed?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fxEase?:
    | 'ease'
    | 'ease-in'
    | 'ease-out'
    | 'ease-in-out'
    | 'bounce'
    | 'spring-sm'
    | 'spring-md'
    | 'spring-lg';
  fxDisabled?: boolean;
}

withDefaults(defineProps<VueTooltipFxProps>(), {
  content: '',
  placement: 'top',
  distance: 8,
  skidding: 0,
  trigger: 'hover focus',
  disabled: false,
  fxSpeed: 'md',
  fxEase: 'ease',
  fxDisabled: false,
});

const emit = defineEmits<{
  show: [detail: TooltipShowEventDetail];
  hide: [detail: TooltipHideEventDetail];
}>();

const tooltipRef = ref<
  InstanceType<typeof TooltipFx> & {
    show: () => void;
    hide: () => void;
    toggle: () => void;
  }
>();

const handleShow = (event: Event) => {
  const showEvent = event as CustomEvent<TooltipShowEventDetail>;
  emit('show', showEvent.detail);
};

const handleHide = (event: Event) => {
  const hideEvent = event as CustomEvent<TooltipHideEventDetail>;
  emit('hide', hideEvent.detail);
};

const show = () => {
  tooltipRef.value?.show();
};

const hide = () => {
  tooltipRef.value?.hide();
};

const toggle = () => {
  tooltipRef.value?.toggle();
};

defineExpose({ show, hide, toggle });
</script>
