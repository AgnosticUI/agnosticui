---
title: Aspect Ratio
---

# Aspect Ratio

<AlphaWarning />


The AgnosticUI AspectRatio component provides an easy, modern way to reserve space for embedded content (videos, iframes, third-party widgets) while preserving a given aspect ratio. It leverages the native CSS `aspect-ratio` property and exposes a simple API.

## Examples

<FrameworkExample
  component="aspect-ratio"
  :vue-code="vueCode"
  :lit-code="litCode"
  :react-code="reactCode"
>
  <template #vue>
    <AspectRatioExamples />
  </template>
  <template #lit>
    <aspect-ratio-lit-examples></aspect-ratio-lit-examples>
  </template>
</FrameworkExample>

<script setup>
import AlphaWarning from '../components/AlphaWarning.vue'
import AspectRatioExamples from '../examples/AspectRatioExamples.vue'
import FrameworkExample from '../.vitepress/theme/components/FrameworkExample.vue'
import '../examples/AspectRatioLitExamples.js'
import vueCode from '../examples/AspectRatioExamples.vue?raw'
import litCode from '../examples/AspectRatioLitExamples.js?raw'
import reactCode from '../examples/AspectRatioReactExamples.jsx?raw'
</script>

## Usage

::: tip
The framework examples below `import` AgnosticUI as an `npm` package. Alternatively, you can use the **CLI for complete control, AI/LLM visibility, and full code ownership**:
```bash
npx ag init --framework FRAMEWORK # react, vue, lit, svelte, etc.
npx ag add AspectRatio
```
The CLI copies source code directly into your project, giving you full visibility and control. After running `npx ag add`, you'll receive exact import instructions.
:::

::: details Vue

```vue
<template>
  <section>
    <VueAspectRatio :width="16" :height="9">
      <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0"></iframe>
    </VueAspectRatio>

    <VueAspectRatio :width="16" :height="9" :max-width="600">
      <div style="background: #ccc; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
        16:9 with max-width
      </div>
    </VueAspectRatio>

    <VueAspectRatio :width="1" :height="1">
      <div style="background: #667eea; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: white;">
        1:1 Square
      </div>
    </VueAspectRatio>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VueAspectRatio } from 'agnosticui-core/aspect-ratio/vue';

export default defineComponent({
  components: { VueAspectRatio }
});
</script>
```

:::

::: details React

```tsx
import { ReactAspectRatio } from 'agnosticui-core/aspect-ratio/react';

export default function Example() {
  return (
    <section>
      <ReactAspectRatio width={16} height={9}>
        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0"></iframe>
      </ReactAspectRatio>

      <ReactAspectRatio width={16} height={9} maxWidth={600}>
        <div style={{ background: '#ccc', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          16:9 with max-width
        </div>
      </ReactAspectRatio>

      <ReactAspectRatio width={1} height={1}>
        <div style={{ background: '#667eea', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
          1:1 Square
        </div>
      </ReactAspectRatio>
    </section>
  );
}
```

:::

::: details Lit (Web Components)

```html
<script type="module">
  import 'agnosticui-core/aspect-ratio';
</script>

<section>
  <ag-aspect-ratio .width="16" .height="9">
    <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0"></iframe>
  </ag-aspect-ratio>

  <ag-aspect-ratio .width="16" .height="9" .max-width="600">
    <div style="background: #ccc; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
      16:9 with max-width
    </div>
  </ag-aspect-ratio>

  <ag-aspect-ratio .width="1" .height="1">
    <div style="background: #667eea; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: white;">
      1:1 Square
    </div>
  </ag-aspect-ratio>
</section>
```

:::

### Why use `aspect-ratio`?

- Cleaner code than padding-top hacks
- Prevents layout shift by reserving correct space
- Native browser support across modern browsers

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `number` | `1` | Aspect ratio width (e.g., 16) |
| `height` | `number` | `1` | Aspect ratio height (e.g., 9) |
| `max-width` | `number` | `undefined` | Optional maximum width in pixels |

## CSS Parts

- `::part(ag-aspect-ratio)` - The ratio enforcement wrapper

