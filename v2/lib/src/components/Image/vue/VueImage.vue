<template>
  <ag-image
    ref="imageRef"
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    :aspect-ratio="aspectRatio"
    :fit="fit"
    :position="position"
    :loading="loading"
    .fade="fade"
    :duration="duration"
    :fallback-src="fallbackSrc"
    @ag-load="handleLoad"
    @ag-error="handleError"
    v-bind="$attrs"
  >
    <slot
      name="placeholder"
      slot="placeholder"
    />
    <slot
      name="error"
      slot="error"
    />
    <slot />
  </ag-image>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type {
  AgImageProps,
  AgImageSource,
  ImageLoadEvent,
  ImageErrorEvent,
} from "../core/Image";
import "../core/Image"; // Registers the ag-image web component

// Define props interface (omit function props since wrapper uses emits)
export interface VueImageProps extends Omit<AgImageProps, "sources"> {
  sources?: AgImageSource[];
}

// Define props with defaults
const props = withDefaults(defineProps<VueImageProps>(), {
  src: "",
  alt: "",
  fit: "cover",
  position: "center",
  loading: "lazy",
  fade: false,
  duration: 200,
});

// Define emits
const emit = defineEmits<{
  "ag-load": [];
  "ag-error": [];
}>();

// Template ref
const imageRef = ref<HTMLElement>();

// Event handlers
const handleLoad = (event: Event) => {
  emit("ag-load");
};

const handleError = (event: Event) => {
  emit("ag-error");
};
</script>
