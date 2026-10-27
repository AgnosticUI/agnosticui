# Loader

<AlphaWarning />

Loader component displays an animated three-dot status matrix to indicate background processing states or asynchronous data transit lifecycles.

## Examples

<FrameworkExample
  component="loader"
  :vue-code="vueCode"
  :lit-code="litCode"
  :react-code="reactCode"
>
  <template #vue>
    <LoaderExamples />
  </template>
  <template #lit>
    <loader-lit-examples></loader-lit-examples>
  </template>
</FrameworkExample>

## Server-Side Rendering (SSR) Fallback Layouts

AgnosticUI utilizes a dual-layer **Isomorphic Architecture** to support server-first workflows across all major modern meta-frameworks (e.g., Astro, Next.js, Nuxt, Remix, SvelteKit, TanStack Start). Below are zero-drift visual previews generated directly from our isolated server layout string engines before client-side hydration completes.

To understand how these static strings safely handle global cascade isolation, see our architectural guide: [How SSR Fallbacks Work](/docs/how-ssr-fallbacks-work).

### Standard Size Options Previews

<!-- Wrapped in structural grid containers to prevent layout collisions -->
<div class="ag-form-control-layout-stack" style="display: flex; align-items: center; gap: 2rem; margin-block: 1rem;">
  <LoaderFallbackPreview size="small" ariaLabel="Loading small assets..." />
  <LoaderFallbackPreview size="default" ariaLabel="Loading data..." />
  <LoaderFallbackPreview size="large" ariaLabel="Loading application engine..." />
</div>

<script setup>
import AlphaWarning from '../components/AlphaWarning.vue'
import LoaderExamples from '../examples/LoaderExamples.vue'
import LoaderFallbackPreview from '../examples/LoaderFallbackPreview.vue'
import FrameworkExample from '../.vitepress/theme/components/FrameworkExample.vue'
import '../examples/LoaderLitExamples.js'
import vueCode from '../examples/LoaderExamples.vue?raw'
import litCode from '../examples/LoaderLitExamples.js?raw'
import reactCode from '../examples/LoaderReactExamples.jsx?raw'
</script>

### Handling Dual-Class Token Lifecycle During Hydration

```vue
<!-- Default configuration fallback layout state -->
<LoaderFallbackPreview size="default" ariaLabel="Synchronizing updates..." />
```

Our server fallback engine outputs **both** raw unhashed namespace classes (`ag-loader-*`) and empty placeholder modular mappings (`styles.*`).

When your full-stack framework performs client-side hydration, the DOM reconciler checks for the presence of your compiled hash strings. Because the fallback engine pre-allocates these boundaries natively, client promotion completes with near-zero computation cost and eliminates Cumulative Layout Shift (CLS).

```vue
<!-- Hydration bound configuration layout -->
<LoaderFallbackPreview
  :size="isMobileViewport ? 'small' : 'large'"
  :ariaLabel="processingMessage || 'Loading account data...'"
/>
```

## Usage

::: tip
The framework examples below `import` AgnosticUI as an `npm` package. Alternatively, you can use the **CLI for complete control, AI/LLM visibility, and full code ownership**:
```bash
npx ag init --framework FRAMEWORK # react, vue, lit, svelte, etc.
npx ag add Loader
```
The CLI copies source code directly into your project, giving you full visibility and control. After running `npx ag add`, you'll receive exact import instructions.
:::

::: details Vue
```vue
<template>
  <VueLoader />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { VueLoader } from 'agnosticui-core/loader/vue';
export default defineComponent({
  components: { VueLoader }
});
</script>
```
:::

::: details React
```tsx
import { ReactLoader } from 'agnosticui-core/loader/react';
export default function Example() {
  return <ReactLoader />;
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/loader';
</script>
<ag-loader></ag-loader>
```
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `small` \| `default` \| `large` | `default` | Sets the dimensional scaling diameter of the loader dots. |
| `ariaLabel` | `string` | `Loading...` | The internal progress descriptive label for assistive screen reader navigation layers. |

## Variants

The `loader` component has `size` variants that include: `small`, `default`, and `large`.

## CSS Shadow Parts

| Part | Description |
|------|-------------|
| `ag-loader` | The main loader container element. |
| `ag-loader-label` | The screen reader text element. |

## Accessibility

- Explicitly handles `role="progressbar"` within an isolated text node boundary layer to notify assistive technologies of an active loading execution state.
- Supports customizable fallback announcements via the `ariaLabel` property, masking content safely inside screen-reader specific geometric layout frames.
- Automatically handles reduced motion systems (`prefers-reduced-motion`) by altering the animation timing thresholds to near-zero states instantly.

## When to Use

**Use Loader when:**
- Announcing background process executions where form control inputs or page context elements are blocked awaiting updates.
- Rendering skeleton container states or infinite scrolling card pagination updates.

**Consider alternatives when:**
- Displaying numeric, quantitative progression metrics or discrete sequence steps — use Progress fields instead.
