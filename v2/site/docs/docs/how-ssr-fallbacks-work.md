# How SSR Fallbacks Work

AgnosticUI components utilize a dual-layer **Isomorphic Architecture** engineered to eliminate visual bugs, flash artifacts, and Cumulative Layout Shift (CLS) across modern full-stack meta-frameworks (e.g., Astro, Next.js, Nuxt, Remix, SvelteKit, TanStack Start).

Understanding this mechanics is essential if you are auditing core assets or using our CLI to eject source components straight into your local workspace (`npx ag add`).

## The Core Challenge: The Pre-Hydration FOUC (Flash of Unstyled Content)

In a traditional Single Page Application (SPA), components and their accompanying styles are bundle-loaded and parsed synchronously by the browser. However, server-first architectures operate under a distinct execution timeline mismatch:

1. **The Server Phase:** The server evaluates template scripts on request and streams raw HTML text markup to the browser immediately.
2. **The Client Phase:** The browser reads and parses the raw HTML nodes, but the actual application JavaScript bundle containing your compiled CSS Module stylesheet hash definitions is still downloading, unpacking, or executing asynchronously in the background.

During this multi-millisecond network transmission gap, the browser is forced to leak default User-Agent browser properties to the screen. This creates a severe **Flash of Unstyled Content (FOUC)** and spikes your Cumulative Layout Shift (CLS) metrics before hydration completes.

## The AgnosticUI Solution: Dual-Class Alignment

To bridge this pre-hydration gap safely without polluting your project's global cascade or duplicating stylesheet string arrays inside JavaScript templates, AgnosticUI uses a colocated hybrid selector pipeline.

Every primitive fallback layout target emits **two classes side-by-side** onto the DOM nodes:

```html
<!-- Example of emitted isomorphic layout markup -->
<label class="_checkboxWrapper_abc123 ag-checkbox-wrapper"></label>
```

### Layer A: The Hashed Scoped Module (Post-Hydration)

Selectors like `_checkboxWrapper_abc123` are compiled dynamically by your bundler's CSS Modules engine. Once the client bundle finishes booting up, these tokens take full control of active browser interactions, hover modifiers, and color states.

### Layer B: The Unhashed Global Namespace (Pre-Hydration)

Selectors like `ag-checkbox-wrapper` are stable, predictable, flat text strings. They are securely isolated behind our global `.ag-` prefix bounding box to guarantee zero collision leaks with your application's custom stylesheets.

Because your design system bundle includes these safe global fallback targets at the application root, the browser parses the unhydrated HTML string and paints baseline layout geometry **instantly on page load before hydration even begins.**

## Lifecycle Breakdown

```shell
┌────────────────────────────────────────┐
│        PHASE 1: SERVER STREAM          │
├────────────────────────────────────────┤
│ Server emits dual-class markup strings │
└────────────────────────────────────────┘
                    │
                    ▼
┌────────────────────────────────────────┐
│       PRE-HYDRATION PAINT (DOM)        │
├────────────────────────────────────────┤
│ Browser reads text sequentially and    │
│ paints instantly via safe .ag- sheet   │
└────────────────────────────────────────┘
                    │
                    ▼
┌────────────────────────────────────────┐
│       PHASE 2: CLIENT HYDRATION        │
├────────────────────────────────────────┤
│ Framework JS bundle boots up in window │
└────────────────────────────────────────┘
                    │
                    ▼
┌────────────────────────────────────────┐
│    LIGHTWEIGHT PROMOTION ACTIVATION    │
├────────────────────────────────────────┤
│ DOM diff engine binds event listeners  │
│ smoothly onto pre-allocated hashes     │
└────────────────────────────────────────┘
```

By pre-allocating both layers side-by-side, full-stack frameworks can complete DOM reconciliation and client promotion with near-zero computation costs, ensuring a seamless user experience across the web ecosystem.
