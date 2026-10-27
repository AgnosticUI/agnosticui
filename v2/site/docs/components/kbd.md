# Keyboard Input (Kbd)

Keyboard input allows a user to identify system macros, short keys, and console commands using typography optimized for physical key representations.

## Examples

<FrameworkExample component="kbd" :vue-code="vueCode" :lit-code="litCode" :react-code="reactCode">
  <template #vue>
    <KbdExamples />
  </template>
  <template #lit>
    <kbd-lit-examples></kbd-lit-examples>
  </template>
</FrameworkExample>

## Server-Side Rendering (SSR) Fallback Layouts

AgnosticUI utilizes a dual-layer **Isomorphic Architecture** to support server-first workflows across all major modern meta-frameworks (e.g., Astro, Next.js, Nuxt, Remix, SvelteKit, TanStack Start). Below are zero-drift visual previews generated directly from our isolated server layout string engines before client-side hydration completes.

To understand how these static strings safely handle global cascade isolation, see our architectural guide: [How SSR Fallbacks Work](/docs/how-ssr-fallbacks-work).

### Standard Key Captures & Previews

<!-- Wrapped in structural grid containers to prevent layout collisions -->
<div class="ag-form-control-layout-stack" style="display: flex; gap: 0.75rem; align-items: center; margin-block: 1rem;">
  <KbdFallbackPreview label="Ctrl" />
  <KbdFallbackPreview label="Shift" />
  <KbdFallbackPreview label="Alt" />
</div>

### Single-Character Proportional Squares

<div style="margin-block: 1rem; display: flex; gap: 0.5rem; align-items: center;">
  <KbdFallbackPreview label="⌘" size="sm" />
  <KbdFallbackPreview label="A" size="md" />
  <KbdFallbackPreview label="K" size="lg" />
</div>

### Contextual Style Variants

<div class="ag-form-control-layout-stack" style="display: flex; gap: 0.75rem; align-items: center; margin-block: 1rem;">
  <KbdFallbackPreview label="Primary Key" variant="primary" />
  <KbdFallbackPreview label="Success Trigger" variant="success" />
  <KbdFallbackPreview label="Inverted Monolithic" variant="monochrome" background="true" />
</div>

<script setup>
import KbdExamples from '../examples/KbdExamples.vue'
import KbdFallbackPreview from '../examples/KbdFallbackPreview.vue'
import FrameworkExample from '../.vitepress/theme/components/FrameworkExample.vue'
import '../examples/KbdLitExamples.js'
import vueCode from '../examples/KbdExamples.vue?raw'
import litCode from '../examples/KbdLitExamples.js?raw'
import reactCode from '../examples/KbdReactExamples.jsx?raw'
</script>

### Handling Dual-Class Token Lifecycle During Hydration

```vue
<!-- Default configuration fallback layout state -->
<KbdFallbackPreview label="Ctrl" />
```

Our server fallback engine outputs **both** raw unhashed namespace classes (`ag-kbd-*`) and empty placeholder modular mappings (`styles.*`).

When your full-stack framework performs client-side hydration, the DOM reconciler checks for the presence of your compiled hash strings. Because the fallback engine pre-allocates these boundaries natively, client promotion completes with near-zero computation cost and eliminates Cumulative Layout Shift (CLS).

```vue
<!-- Hydration bound configuration layout -->
<KbdFallbackPreview
  :label="activeShortcut || '-'"
  :variant="activeShortcut ? 'primary' : 'default'"
  :background="isKeyPressed"
/>
```

## Usage

::: tip
The framework examples below `import` AgnosticUI as an `npm` package. Alternatively, you can use the **CLI for complete control, AI/LLM visibility, and full code ownership**:

```bash
npx ag init --framework FRAMEWORK # react, vue, lit, svelte, etc.
npx ag add Kbd
```

The CLI copies source code directly into your project, giving you full visibility and control. After running `npx ag add`, you'll receive exact import instructions.
:::

::: details Vue

```vue
<template>
  <section>
    <VueKbd label="Ctrl" />
    <VueKbd label="⌘" size="sm" />
    <VueKbd label="Shift" variant="primary" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueKbd } from "agnosticui-core/kbd/vue";

export default defineComponent({
  components: { VueKbd },
});
</script>
```

:::

::: details React

```tsx
import { ReactKbd } from "agnosticui-core/kbd/react";

export default function Example() {
  return (
    <section style={{ display: 'flex', gap: '8px' }}>
      <ReactKbd label="Ctrl" />
      <ReactKbd label="⌘" size="sm" />
      <ReactKbd label="Shift" variant="primary" />
    </section>
  );
}
```

:::

::: details Lit (Web Components)

```html
<script type="module">
  import "agnosticui-core/kbd";
</script>

<section>
  <ag-kbd>Ctrl</ag-kbd>
  <ag-kbd size="sm">⌘</ag-kbd>
  <ag-kbd variant="primary">Shift</ag-kbd>
</section>
```

:::

## Props

| Prop         | Type                                                                                                          | Default     | Description                                                                     |
| ------------ | ------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------- |
| `variant`    | `'default' \| 'primary' \| 'secondary' \| 'info' \| 'warning' \| 'success' \| 'danger' \| 'error' \| 'monochrome'` | `'default'` | Background color styling variant matching standard framework typography markers |
| `size`       | `'sm' \| 'md' \| 'lg'`                                                                                        | `'md'`      | Overall dimensional height and horizontal padding constraints                  |
| `bordered`   | `boolean`                                                                                                     | `true`      | Surrounds the perimeter box container with a low-contrast boundary line         |
| `background` | `boolean`                                                                                                     | `false`     | Activates a darkened ambient backing surface for increased character contrast   |

## Accessibility

- Font family scales cleanly behind native `monospace` stacks for uniform system glyph formatting.
- Automatically flags single character content streams to align square width-to-height properties for physical keyboard layouts.
- Preserves layout ratios natively if combined within screen-reader accessible control structures.

## CSS Shadow Parts

The Kbd component exposes the following CSS Shadow Parts for custom styling:

| Part             | Description                         |
| ---------------- | ----------------------------------- |
| `ag-kbd-wrapper` | The inner root hardware element tag |

## When to Use

**Use Kbd when:**
- Mapping keyboard macro actions inside application workflow panels.
- Explaining system terminal script run targets inside development document articles.
- Detailing shortcut commands alongside operational instructions.

**Consider alternatives when:**
- Requiring an interactive, clickable link action element — use Button instead.
- Rendering inline syntax code blocks or multiple variables blocks — use Code or Pre blocks instead.
