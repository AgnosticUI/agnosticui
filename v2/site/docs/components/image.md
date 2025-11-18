---
title: Image
---

# Image

The AgnosticUI Image component is a powerful, performant replacement for the native `<img>` tag. It intelligently adapts to your needs: provide a simple `src` to render an `<img>`, or add a `sources` prop to automatically generate a responsive `<picture>` element.

Beyond its flexibility, it provides built-in solutions for common image-handling challenges, including responsive sizing, preventing layout shift, lazy loading, and graceful error handling.

<ImageExamples />

<script setup>
import ImageExamples from '../examples/ImageExamples.vue'
</script>

## Usage

### Fixed vs. Responsive Images

Some examples on this page use the `width` and `height` props to set a fixed size for the image. This is intentional to demonstrate how to opt-out of responsive behavior. When you provide these props, the image will always render at that specific size. To make an image responsive, you must omit these props and follow the pattern described in the "Preventing Layout Shift" section below.

## Preventing Layout Shift

Cumulative Layout Shift (CLS) is a common web performance issue where content jumps as images load. The AgnosticUI Image component provides a simple and effective solution by allowing you to specify an image's aspect ratio.

The key is to **omit the `width` and `height` props** (which set a fixed size) and instead provide the `aspectRatio` prop while controlling the size with CSS.

### The Recipe for Responsive, No-Shift Images

1.  **Omit `width` and `height` Props**: Do not pass these props, as they are used to opt-into a fixed, non-responsive size.
2.  **Set a Fluid Width**: Use CSS to make the image's width responsive. This is best done with a `className`.
3.  **Provide the `aspectRatio` Prop**: Set this to the image's natural ratio (e.g., `aspectRatio="16/9"`).

When you follow this pattern, the browser reserves the correct vertical space for the image before it loads, preventing any layout jump.

<div class="language-css">
<pre><code><span class="token comment">/* In your CSS file */</span>
<span class="token selector">.responsive-image-container</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
</div>

```html
<ag-image
  class="responsive-image-container"
  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=800"
  alt="A beautiful landscape."
  aspectRatio="16/9"
></ag-image>
```

## Object Fit and Position

You can control how the image fits within its container using the `fit` and `position` props, which correspond to the `object-fit` and `object-position` CSS properties.

-   `fit`: Can be `'cover'`, `'contain'`, `'fill'`, `'none'`, or `'scale-down'`. Defaults to `'cover'`.
-   `position`: Any valid CSS position value, like `'top'`, `'center'`, `'bottom left'`. Defaults to `'center'`.

The "Contain" example below shows an image with `fit="contain"` inside a container with a background color to demonstrate how the image is contained without being cropped.

## Responsive Sources

For more advanced responsive use cases, you can provide different image sources for different screen sizes or formats using the `sources` prop. This creates a native `<picture>` element under the hood.

Each object in the `sources` array can have `srcset`, `media`, `type`, and `sizes` properties.

```html
<ag-image
  src="small-image.jpg"
  alt="A responsive image."
  aspectRatio="16/9"
  :sources="[
    { srcset: 'large-image.webp', type: 'image/webp', media: '(min-width: 1024px)' },
    { srcset: 'large-image.jpg', media: '(min-width: 1024px)' },
    { srcset: 'medium-image.webp', type: 'image/webp', media: '(min-width: 768px)' },
    { srcset: 'medium-image.jpg', media: '(min-width: 768px)' }
  ]"
></ag-image>
```

> **Best Practice: Consistent Aspect Ratios**
> To prevent layout shifts when the browser switches between different sources, ensure that all images (the default `src` and all images in the `sources` array) share the same aspect ratio. Also, consider serving modern, highly-compressed image formats like **AVIF** and **WebP** in your `sources` list for improved performance.

## Fallback Source

If the primary `src` fails to load, you can provide a `fallbackSrc`. The component will automatically attempt to load this backup image, preventing a broken image icon from appearing.

## Custom Placeholders and Errors

For a more tailored user experience, you can provide custom content to be displayed during loading or on error using named slots.

-   **`placeholder` slot**: Content in this slot is displayed while the image is loading. This is perfect for implementing custom skeleton loaders or low-quality image placeholders (LQIP) that match your site's design tokens.
-   **`error` slot**: Content in this slot is displayed if the image (and any fallback) fails to load.

```html
<ag-image src="..." alt="...">
  <div slot="placeholder">
    <!-- Your custom loading spinner or skeleton UI -->
  </div>
</ag-image>

<ag-image src="broken-image.jpg" alt="...">
  <div slot="error">
    <!-- Your custom error message or icon -->
  </div>
</ag-image>
```

## Styling

While inline `style` is supported, the recommended approach for styling is to use standard CSS with the `class` attribute.

### CSS Parts

For deeper customization, the Image component exposes several CSS Parts that allow you to style its internal elements from outside:

-   `::part(ag-img)`: The `<img>` element itself.
-   `::part(ag-placeholder)`: The container for the placeholder content.
-   `::part(ag-error)`: The container for the error content.

```css
.custom-styled-image::part(ag-img) {
  border-radius: 12px;
  border: 2px solid var(--ag-primary-light);
}
```

## Props

| Prop          | Type                                                 | Default     | Description                                                                                             |
|---------------|------------------------------------------------------|-------------|---------------------------------------------------------------------------------------------------------|
| `src`         | `string`                                             | `''`        | **Required.** The primary image source URL.                                                             |
| `alt`         | `string`                                             | `''`        | **Required.** Alternative text for accessibility.                                                       |
| `aspectRatio` | `string`                                             | `undefined` | The image's aspect ratio (e.g., "16/9"). Used to prevent layout shift on responsive images.             |
| `sources`     | `AgImageSource[]`                                    | `[]`        | An array of source objects to create a `<picture>` element for responsive images.                       |
| `width`       | `number`                                             | `undefined` | Sets a fixed width in pixels, opting out of responsiveness.                                             |
| `height`      | `number`                                             | `undefined` | Sets a fixed height in pixels.                                                                          |
| `fit`         | `'cover' \| 'contain' \| 'fill' \| 'none' \| 'scale-down'` | `'cover'`   | Defines how the image fits its container. Corresponds to `object-fit`.                                  |
| `position`    | `string`                                             | `'center'`  | Defines the image's position within its container. Corresponds to `object-position`.                    |
| `loading`     | `'lazy' \| 'eager'`                                  | `'lazy'`    | Sets the native browser loading strategy.                                                               |
| `fade`        | `boolean`                                            | `false`     | If `true`, the image will fade in smoothly on load.                                                     |
| `duration`    | `number`                                             | `200`       | The duration of the fade-in transition in milliseconds.                                                 |
| `fallbackSrc` | `string`                                             | `undefined` | A backup image URL to load if the primary `src` fails.                                                  |

## Best Practices & Implementation Details

For those curious about the web standards at play, this section explains the "why" behind the `ag-image` component's design and how it aligns with modern best practices for 2025.

### Two Core Methods for Preventing CLS

There are two primary, best-practice methods to prevent layout shifts from images:

1.  **Intrinsic Sizing (The Classic Method)**: The simplest approach is to set `width` and `height` attributes directly on an `<img>` tag. The browser uses these to calculate the aspect ratio before the image loads. You then make it responsive with CSS: `<img src="..." width="1200" height="800" style="width: 100%; height: auto;">`. This is a great baseline for simple use cases.

2.  **CSS `aspect-ratio` (The Modern Component Method)**: For dynamic or component-based designs, the more powerful method is to apply the `aspect-ratio` CSS property directly to the image container. This is the primary method used by the `ag-image` component.

The `ag-image` component embraces the modern `aspect-ratio` method because it provides more robust control within a component architecture, especially when dealing with frameworks like React, Vue, or Svelte.

### Why the Component Uses `height: 100%`

Internally, the `<ag-image>` component acts as a container.

1.  When you provide the `aspectRatio` prop, the `<ag-image>` container gets the `aspect-ratio` style, reserving the correct space on the page.
2.  The inner `<img>` element is styled with `width: 100%` and `height: 100%`.

This tells the image to completely fill the pre-sized "box" created by its container. This pattern is crucial for making the `fit` prop (`object-fit`) work correctly, giving you precise control over whether the image should `cover` the box (cropping itself) or be `contain`ed within it (letterboxing)—a level of flexibility not easily achieved with the older `height: auto` method.
