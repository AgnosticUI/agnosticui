<template>
  <ag-image
    ref="agImageRef"
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
import { ref, watchEffect, onMounted } from "vue";
import type { AgImage, AgImageProps, AgImageSource } from "../core/Image";
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

// Template ref for ag-image element
const agImageRef = ref<AgImage | null>(null);

// Sync sources array prop to web component (arrays can't be passed via attributes)
onMounted(() => {
  watchEffect(() => {
    if (agImageRef.value && props.sources) {
      agImageRef.value.sources = props.sources;
    }
  });
});

// Define emits
const emit = defineEmits<{
  "ag-load": [];
  "ag-error": [];
}>();

// Event handlers
const handleLoad = (_event: Event) => {
  emit("ag-load");
};

const handleError = (_event: Event) => {
  emit("ag-error");
};
</script>
