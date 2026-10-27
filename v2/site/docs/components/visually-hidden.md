---
title: VisuallyHidden
---

# VisuallyHidden

<AlphaWarning />

A utility component to visually hide content while keeping it accessible to screen readers. This is a common pattern for accessibility, often implemented with a CSS class like `.sr-only` or `.visually-hidden`. This component provides a declarative way to achieve the same result.

<FrameworkExample component="visually-hidden" :vue-code="vueCode" :lit-code="litCode" :react-code="reactCode"><template #vue><VisuallyHiddenExamples /></template><template #lit><visually-hidden-lit-examples></visually-hidden-lit-examples></template></FrameworkExample>

## Server-Side Rendering (SSR) Fallback Layouts

AgnosticUI utilizes a dual-layer **Isomorphic Architecture** to support server-first workflows across all major modern meta-frameworks (e.g., Astro, Next.js, Nuxt, Remix, SvelteKit, TanStack Start). Below are zero-drift visual previews generated directly from our isolated server layout string engines before client-side hydration completes.

To understand how these static strings safely handle global cascade isolation, see our architectural guide: [How SSR Fallbacks Work](/docs/how-ssr-fallbacks-work).

<VisuallyHiddenFallbackPreview />

### Handling Dual-Class Token Lifecycle During Hydration

Mapping unhashed global classes (`ag-visually-hidden`) side-by-side with modular mappings (`styles.*`) eliminates Cumulative Layout Shift (CLS). The server-rendered baseline elements match root asset sheets immediately on network arrival to render placeholders before the main application JavaScript bundle finishes downloading or executing in the background.

<script setup>
import AlphaWarning from '../components/AlphaWarning.vue'
import VisuallyHiddenExamples from '../examples/VisuallyHiddenExamples.vue'
import FrameworkExample from '../.vitepress/theme/components/FrameworkExample.vue'
import VisuallyHiddenFallbackPreview from '../examples/VisuallyHiddenFallbackPreview.vue'
import '../examples/VisuallyHiddenLitExamples.js'
import vueCode from '../examples/VisuallyHiddenExamples.vue?raw'
import litCode from '../examples/VisuallyHiddenLitExamples.js?raw'
import reactCode from '../examples/VisuallyHiddenReactExamples.jsx?raw'
</script>

## Props

This component does not have any props. It simply wraps the content you provide to it in the default slot.

## Events

This component does not emit any events.

## Accessibility

The `VisuallyHidden` component is an accessibility utility. It helps provide context to screen reader users that might be visually apparent to sighted users. A common use case is providing a text label for an icon-only button. The content remains in the accessibility tree and can be read by assistive technologies, but it is positioned off-screen so it is not visible.
