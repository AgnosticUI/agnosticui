---
title: Aspect Ratio
---

# Aspect Ratio

The AgnosticUI AspectRatio component provides an easy, modern way to reserve space for embedded content (videos, iframes, third-party widgets) while preserving a given aspect ratio. It leverages the native CSS `aspect-ratio` property and exposes a simple API.

<AspectRatioExamples />

<script setup>
import AspectRatioExamples from '../examples/AspectRatioExamples.vue'
</script>

## Usage

Basic usage requires providing `width` and `height` props which define the aspect ratio (e.g., `16` and `9` for widescreen). Optionally provide `max-width` to constrain the size.

```html
<ag-aspect-ratio .width="16" .height="9">
  <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0"></iframe>
</ag-aspect-ratio>
```

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

## Examples

See the example below for common patterns: responsive iframe, constrained max width, and a 1:1 square.
