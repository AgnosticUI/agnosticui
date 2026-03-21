<template>
  <ag-avatar-fx
    ref="agComponent"
    :variant="variant"
    :size="size"
    :shape="shape"
    :aria-label="ariaLabel"
    :img-src="imgSrc"
    :img-alt="imgAlt"
    .text="text"
    :fx="fx"
    :fx-speed="fxSpeed"
    :fx-ease="fxEase"
    .fxDisabled="fxDisabled"
    v-bind="$attrs"
  >
    <slot />
  </ag-avatar-fx>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { AvatarSize, AvatarShape, AvatarVariant } from "../../Avatar/core/Avatar";
import type { AvatarFx } from "../core/AvatarFx";
import "../core/AvatarFx";

interface VueAvatarFxProps {
  text?: string;
  imgSrc?: string;
  imgAlt?: string;
  size?: AvatarSize;
  shape?: AvatarShape;
  variant?: AvatarVariant;
  ariaLabel?: string;
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

const props = withDefaults(defineProps<VueAvatarFxProps>(), {
  text: '',
  imgSrc: '',
  imgAlt: '',
  size: 'md',
  shape: 'circle',
  variant: 'default',
  ariaLabel: '',
  fxSpeed: 'md',
  fxEase: 'ease',
  fxDisabled: false,
});

const agComponent = ref<InstanceType<typeof AvatarFx> | null>(null);
</script>
