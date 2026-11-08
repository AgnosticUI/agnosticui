# Motion Utilities

AgnosticUI’s FX components natively broadcast their duration and easing parameters via CSS Custom Properties applied straight to their `:host` roots. 

By importing the optional `motion-utilities.css` bundle, you can tap directly into this cascading context tree. This allows Light DOM slotted elements (like custom icons or text blocks) to seamlessly coordinate with their parent component's active animation timeline with zero JavaScript overhead.

## Interactive Demos

<MotionUtilitiesExamples />

## Installation

Import the compiled motion utility stylesheet into your application's global style scope alongside your standard design tokens:

```js
// Import globally in your main application entry point (e.g., main.js, App.tsx)
import 'agnosticui-core/dist/styles/ag-tokens.css';
import 'agnosticui-core/dist/styles/motion-utilities.css';
```

---

## Core Usage Patterns

### 1. Automatic Component Synchronization (Slots)

Apply an `ag-fx-inherit-*` utility class to any native slotted element that's inside a native AgnosticUI FX component's custom element, and it automatically captures the parent’s active configuration! If you modify the parent's `fx-speed` or `fx-ease` attributes, the slotted child's animation physics adapt dynamically.

```html
<ag-button-fx fx="bounce" fx-speed="xl" fx-ease="spring-lg" variant="primary">
  Settings
  <!-- Apply the ag-fx-inherit-bounce utility class below to synchronize the icon -->
  <svg 
    slot="icon" 
    class="ag-fx-inherit-bounce"
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    stroke-width="2"
  >
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M12 1v6m0 6v6M5.6 5.6l4.2 4.2m4.2 4.2l4.2 4.2M1 12h6m6 0h6M5.6 18.4l4.2-4.2m4.2-4.2l4.2-4.2"></path>
  </svg>
</ag-button-fx>
```

### 2. Multi-Element Staggered Orchestra Pattern

Because motion parameters cascade through the native DOM tree, a single parent component container can orchestrate and run **completely different, synchronized physics tracks simultaneously** across separate light-DOM slotted nodes on hover.

```html
<ag-button-fx fx="pulse" fx-speed="lg" fx-ease="spring-md" variant="success">
  <!-- This icon scales organically via the pulse track -->
  <svg class="ag-fx-inherit-pulse">...</svg>
  
  <span>Action Status</span>
  
  <!-- While this icon simultaneously executes a vertical bounce trajectory -->
  <svg class="ag-fx-inherit-bounce">...</svg>
</ag-button-fx>
```

### 3. Component-Free Layout Orchestration (Fully Divorced)

If you want to coordinate high-end micro-interactions inside your own custom application layouts, e-commerce cards, or structural blocks completely independent of AgnosticUI web components, wrap them using the explicit `.ag-fx-trigger` class. 

This detaches the motion engine from the web component footprint completely, giving you clean, opt-in layout interaction boundaries using raw native elements:

```html
<!-- The custom wrapper container handles the interaction boundary -->
<div class="ag-fx-trigger my-custom-product-card">
  
  <!-- The promo badge scales up smoothly on container hover -->
  <span class="ag-fx-inherit-pulse custom-badge">PROMO</span>
  
  <div class="product-media-frame">
    <!-- The product vector shifts on container hover -->
    <svg class="ag-fx-inherit-jelly">...</svg>
  </div>

  <!-- A native anchor element responding to active click press-pops -->
  <a href="#add" class="ag-fx-inherit-press-pop buy-button">
    Quick Add
    <svg class="ag-fx-inherit-bounce">...</svg>
  </a>
</div>

<style>
  /* Optional: Override or feed custom timing down to the trigger element */
  .my-custom-product-card:hover {
    --ag-fx-duration: var(--ag-fx-duration-lg);
    --ag-fx-ease: var(--ag-fx-ease-spring-lg);
  }
</style>
```

---

## Utilities Matrix & Triggers

| Utility Class | Expected Context / Trigger State | Interaction Style Target | Performance |
| :--- | :--- | :--- | :--- |
| `.ag-fx-inherit-bounce` | `fx="bounce"` OR `.ag-fx-trigger:hover` | Vertical pop & spring shift | Fast ¹ |
| `.ag-fx-inherit-pulse` | `fx="pulse"` OR `.ag-fx-trigger:hover` | Symmetrical scale grow/shrink | Fast ¹ |
| `.ag-fx-inherit-jelly` | `fx="jelly"` OR `.ag-fx-trigger:hover` | Non-linear elastic morph | Fast ¹ |
| `.ag-fx-inherit-shimmer` | `fx="shimmer"` OR `.ag-fx-trigger:hover` | Moving linear gradient mask sweep | Moderate ² |
| `.ag-fx-inherit-glow` | `fx="glow"` OR `.ag-fx-trigger:hover` | Box-shadow blur intensity pulse | Moderate ² |
| `.ag-fx-inherit-flip` | `fx="flip"` OR `.ag-fx-trigger:hover` | 3D perspective Y-axis rotation | Fast ¹ |
| `.ag-fx-inherit-icon-reveal` | `fx="icon-reveal"` OR `.ag-fx-trigger:hover` | Dynamic circle path masking reveal | Moderate ² |
| `.ag-fx-inherit-ripple` | `fx="ripple"` OR `.ag-fx-trigger:hover` | Radial shadow expansion ring | Moderate ² |
| `.ag-fx-inherit-highlight-sweep` | `fx="highlight-sweep"` OR `.ag-fx-trigger:hover` | Horizontal specular background overlay | Fast ¹ |
| `.ag-fx-inherit-press-pop` | `fx="press-pop"` OR `.ag-fx-trigger:active` | Brief compression scale on active press | Fast ¹ |
| `.ag-fx-inherit-tilt-press` | `fx="tilt-press"` OR `.ag-fx-trigger:active` | 3D perspective X-axis surface tilt | Fast ¹ |
| `.ag-fx-inherit-slide-in` | *Triggers automatically on DOM layout mount tree* | Translation entrance fade from below | Fast ¹ |

---

**¹ Fast (GPU Composited):** These effects animate hardware-friendly transformation properties exclusively (`transform`, `opacity`). The browser processes them without causing layout shifts or page repaints, ensuring fluid rendering even on low-powered mobile devices.

**² Moderate (Paint Overhead):** These effects animate masking, clipping, or shadow geometry (`mask-position`, `clip-path`, `box-shadow`). While optimized, they require the browser to perform rendering paint calculations on each frame. For optimal performance, avoid running dozens of these complex loops simultaneously inside heavy, data-dense dashboards.

<script setup>
import MotionUtilitiesExamples from '../examples/MotionUtilitiesExamples.vue'
</script>
