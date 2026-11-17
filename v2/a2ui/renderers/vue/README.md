# `@agnosticui/a2ui-vue`

Spec-compliant **A2UI `v1.0`** Vue 3 renderer (`<AgA2uiSurface>`) and `useA2uiSurface()` composable backed by `@agnosticui/a2ui-lit`.

## Quick Usage

```vue
<script setup lang="ts">
import { onMounted } from 'vue';
import 'agnosticui-core/styles/tokens.css';
import 'agnosticui-core/styles/tokens-dark.css';
import {
  AgA2uiSurface,
  useA2uiSurface,
  type A2uiWireMessage,
} from '@agnosticui/a2ui-vue';

const props = defineProps<{ messages: A2uiWireMessage[] }>();

const { surface, surfaceRef, processMessages } = useA2uiSurface({
  validateOnAction: true,
  onAction: (detail) => console.log('Validated A2UI action:', detail),
});

onMounted(() => {
  processMessages(props.messages);
});
</script>

<template>
  <AgA2uiSurface ref="surfaceRef" :surface="surface" />
</template>
```

## Local Development Workflow

`@agnosticui/a2ui-vue` depends on compiled types and runtime re-exports from `@agnosticui/a2ui-lit` (`../lit/dist`). Always build `renderers/lit` first when testing or building from the **repository root**:

```bash
# Build lit first, then test, build, and pack vue
(cd v2/a2ui/renderers/lit && npm test && npm run build) && \
(cd v2/a2ui/renderers/vue && npm test && npm run build && npm pack)
```
