# AgImage Component - Product Requirements Document

## Executive Summary

A lightweight, performant image component for our Lit-based UI library that solves cumulative layout shift (CLS), provides error recovery, and supports responsive images. Built on the principle of **"Do Less, Better"** - covering 95% of use cases with minimal maintenance burden.

---

## Design Philosophy

### Core Principles

1. **Opinionated on CLS prevention** - Aspect ratio management is non-negotiable
2. **Opinionated on error handling** - Always provide fallbackSrc option
3. **Flexible on styling** - CSS parts expose everything for customization
4. **Boring on animations** - Simple fade is sufficient; fancy effects via CSS parts
5. **Trust browser APIs** - Native lazy loading works (93% support)

### ROI Filter

Every feature must answer: **"Does this solve a real problem better than CSS/HTML can?"**

If users can achieve it via CSS parts or standard attributes, we don't build it in.

---

## Research Summary

### Sources Analyzed

1. **Heroui Image** - Excellent fallback handling and visual polish
2. **Quasar QImg** - Strong responsive patterns and aspect ratio management
3. **mui-image** - Advanced animations (ultimately too complex for our needs)
4. **Austin Gil's Article** - Performance-focused lazy loading techniques

### Key Findings

**High-Value Features** (Implemented):
- ✅ Fallback sources for broken images
- ✅ Automatic aspect ratio calculation
- ✅ Simple fade transitions
- ✅ Responsive `<picture>` sources
- ✅ Object fit/position controls
- ✅ Customizable loading/error slots

**Low-Value Features** (Rejected):
- ❌ 3-phase animations (fade + saturate + shift) - Complex, marginal benefit
- ❌ IntersectionObserver mode - Native `loading="lazy"` is sufficient
- ❌ Canvas-generated placeholders - CSS `aspect-ratio` prevents CLS without JS
- ❌ Built-in blur effects - Better as optional CSS part styling
- ❌ Built-in skeleton shimmer - Can be added via CSS if needed

---

## Technical Specification

### Component Props

```typescript
export interface AgImageProps {
  // REQUIRED
  src: string;           // Image source URL
  alt: string;           // Required for accessibility (enforced via TypeScript)

  // RESPONSIVE
  sources?: AgImageSource[];  // For <picture> element with multiple formats/sizes

  // LAYOUT (CLS Prevention)
  width?: number;        // Intrinsic width in pixels
  height?: number;       // Intrinsic height in pixels
  aspectRatio?: string;  // "16/9" format or auto-calculated from width/height

  // DISPLAY
  fit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';  // CSS object-fit
  position?: string;     // CSS object-position value (e.g., "top left", "center")

  // LOADING
  loading?: 'lazy' | 'eager';  // Native browser lazy loading (default: 'lazy')
  fade?: boolean;        // Simple opacity transition (default: false)
  duration?: number;     // Fade duration in ms (default: 200)

  // ERROR HANDLING
  fallbackSrc?: string;  // Backup image if src fails to load
}

export interface AgImageSource {
  srcset: string;        // Required for type safety
  type?: string;         // MIME type (e.g., "image/webp")
  media?: string;        // Media query (e.g., "(min-width: 768px)")
  sizes?: string;        // Sizes attribute for responsive sizing
}
```

### Design Tokens Required

Only 3 new tokens (all aliasing existing values):

```css
--ag-image-transition-duration: var(--ag-motion-medium);  /* 200ms */
--ag-image-bg-color: var(--ag-background-secondary);
--ag-image-fit: cover;  /* Default object-fit */
```

### CSS Shadow Parts

Exposed for user customization without component modification:

| Part | Description | Use Case |
|------|-------------|----------|
| `ag-img` | The `<img>` element | Custom transitions, transforms |
| `ag-placeholder` | Loading state overlay | Shimmer effects, blur |
| `ag-error` | Error state overlay | Custom error styling |

### Named Slots

| Slot | Purpose | Default Content |
|------|---------|-----------------|
| `placeholder` | Loading state content | Text: "Loading…" |
| `error` | Error state content | Text: "Failed to load image" |
| `caption` | Optional caption below image | None |

### Events

| Event | Detail | When Fired |
|-------|--------|------------|
| `ag-load` | None | Image successfully loaded |
| `ag-error` | None | Image failed to load |

---

## Implementation Details

### Aspect Ratio & Dimensions Logic

**Priority Order**:
1. Explicit `aspectRatio` prop (e.g., `"16/9"`)
2. Auto-calculate from `width`/`height` (if both provided)
3. No aspect ratio (image determines layout - **CLS risk**)

**Implementation**:
```typescript
// In updated() lifecycle:
if (this.aspectRatio) {
  this.style.aspectRatio = this.aspectRatio;
} else if (this.width && this.height) {
  this.style.aspectRatio = `${this.width} / ${this.height}`;
}
```

**Critical: Developer Responsibility**

The component **cannot validate** if your `width`/`height` match the actual image dimensions. You are responsible for providing accurate values:

| Scenario | CLS Prevention | Image Display | Recommendation |
|----------|----------------|---------------|----------------|
| ✅ Correct dimensions | Perfect | Perfect | **Always do this** |
| ⚠️ Wrong ratio | Perfect | Cropped/stretched via `fit` | Use `aspectRatio` override if intentional |
| ❌ No dimensions | **Failed** | Browser default | **Never ship without dimensions** |

**Examples**:

```html
<!-- ✅ CORRECT: Dimensions match actual image (1200x800px) -->
<ag-image 
  src="/photo.jpg" 
  alt="Photo"
  width="1200" 
  height="800">
</ag-image>

<!-- ✅ CORRECT: Explicit aspect ratio for art direction -->
<ag-image 
  src="/photo.jpg" 
  alt="Photo"
  aspectRatio="16/9"
  width="1200"
  fit="cover">
  <!-- Image will be cropped to 16:9, no CLS -->
</ag-image>

<!-- ⚠️ WARNING: Dimensions don't match image (will distort/crop) -->
<ag-image 
  src="/photo.jpg"  <!-- Actually 1200x800 -->
  alt="Photo"
  width="1200" 
  height="600">     <!-- Wrong! Will prevent CLS but crop image -->
</ag-image>

<!-- ❌ WRONG: Missing dimensions = CLS -->
<ag-image 
  src="/photo.jpg" 
  alt="Photo">
  <!-- Image will cause layout shift when loaded -->
</ag-image>
```

**Best Practices**:

1. **Always provide `width` and `height`** that match your image's intrinsic dimensions
2. Use `aspectRatio` override only for intentional cropping (with `fit="cover"`)
3. Get dimensions from your image CDN/CMS metadata, not guesses
4. Test in Lighthouse to verify zero CLS

**Why We Don't Auto-Detect**:
- Would require loading the image to read dimensions (defeats lazy loading)
- Adds async complexity and potential race conditions
- Server-side dimension detection is more reliable (do it at build time)

### Fallback Handling

```typescript
// In _onError():
private _onError() {
  this._errored = true;
  if (this.fallbackSrc) {
    const img = this.shadowRoot?.querySelector('img');
    if (img) img.src = this.fallbackSrc;
  }
  this.dispatchEvent(new CustomEvent('ag-error', { 
    bubbles: true, 
    composed: true 
  }));
}
```

### Fade Transition

```css
img {
  opacity: 0;
  transition: opacity var(--ag-image-transition-duration, 200ms) ease;
}

img.loaded {
  opacity: 1;
}
```

---

## Usage Examples

### Basic Usage

```html
<ag-image 
  src="/image.jpg" 
  alt="Product photo"
  width="800" 
  height="600">
</ag-image>
```

### Responsive with Art Direction

```html
<ag-image 
  src="/image.jpg" 
  alt="Hero image"
  .sources=${[
    { srcset: '/image-large.webp', type: 'image/webp', media: '(min-width: 1024px)' },
    { srcset: '/image-large.jpg', media: '(min-width: 1024px)' },
    { srcset: '/image-small.webp', type: 'image/webp' },
  ]}
  aspectRatio="16/9"
  fit="cover"
  fade>
</ag-image>
```

### With Fallback and Custom Error

```html
<ag-image 
  src="/user-avatar.jpg" 
  alt="User profile"
  fallbackSrc="/default-avatar.png"
  width="200" 
  height="200">
  <div slot="error">
    <icon-user></icon-user>
    <p>Profile photo unavailable</p>
  </div>
</ag-image>
```

### Custom Placeholder Styling

```css
ag-image::part(ag-placeholder) {
  background: linear-gradient(90deg, 
    var(--ag-background-secondary) 25%, 
    var(--ag-background-primary) 50%, 
    var(--ag-background-secondary) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

---

## Accessibility Requirements

- ✅ `alt` prop is required via TypeScript (enforced at compile time)
- ✅ Loading/error states include appropriate ARIA labels
- ✅ Decorative placeholders use `aria-hidden="true"`
- ✅ Error slot has `role="alert"` for screen reader announcements
- ✅ Keyboard navigation not needed (images are non-interactive)

---

## Performance Characteristics

### What This Prevents

| Problem | Solution | Impact |
|---------|----------|---------|
| Cumulative Layout Shift | aspect-ratio + width/height | ✅ Improved CLS score |
| Broken image icons | fallbackSrc prop | ✅ Better UX |
| Large image downloads | Native lazy loading | ✅ Faster initial page load |
| Jarring image pop-in | Optional fade transition | ✅ Smoother perceived performance |

### Browser Support

| Feature | Support | Fallback Behavior |
|---------|---------|-------------------|
| `loading="lazy"` | 93% | Loads eagerly on unsupported browsers |
| `aspect-ratio` | 92% | Falls back to explicit width/height |
| `<picture>` | 97% | Falls back to `<img src>` |
| CSS `object-fit` | 97% | Image may not crop correctly |

**Target**: Graceful degradation for legacy browsers, full support for evergreen browsers.

---

## Implementation Roadmap

### Phase 1: MVP (Ship First) - 2 days
Core props: `src`, `alt`, `width`, `height`, `aspectRatio`, `fit`, `position`, `loading`, `fade`, `fallbackSrc`, `sources[]`

**Covers 95% of use cases**

### Phase 2: Performance Tuning (If needed) - 1 day
Advanced attributes: `fetchpriority`, `decoding`, `crossorigin`

**For power users optimizing LCP**

### Phase 3: Advanced Features (Probably never)
Built-in blur, shift animations, skeleton, IntersectionObserver

**Users can add via CSS parts if needed**

---

## Comparison to Rejected Approach

We initially explored a feature-rich implementation with:
- 3-phase animations (fade + saturate + shift)
- IntersectionObserver-based lazy loading
- Canvas-generated placeholders
- Built-in blur effects
- Skeleton shimmer animations

**Why We Rejected It**:

| Feature | Problem | Better Solution |
|---------|---------|-----------------|
| 3-phase animation | Complex CSS coordination, prone to jank | Simple fade transition |
| IntersectionObserver | Adds complexity, requires polyfill | Native `loading="lazy"` |
| Canvas placeholders | Runtime overhead, unnecessary with CSS | CSS `aspect-ratio` |
| Built-in blur | Renders extra DOM, GPU-intensive | Optional via CSS parts |
| Skeleton shimmer | Built-in animation adds complexity | User-added via CSS if desired |

**Result**: 30% less code, faster time-to-interactive, easier debugging, lower maintenance burden.

---

## Anticipated Questions & Answers

**Q: "Can I add blur effects to placeholders?"**  
A: Yes! Use CSS parts:
```css
ag-image::part(ag-placeholder) { filter: blur(10px); }
```

**Q: "What about skeleton shimmer animations?"**  
A: Add via CSS parts - see Usage Examples section above.

**Q: "Can I retry failed images?"**  
A: Listen to the `ag-error` event and handle retry logic externally.

**Q: "Why not IntersectionObserver for better lazy loading control?"**  
A: Native `loading="lazy"` has 93% browser support and is simpler. IntersectionObserver adds complexity for minimal benefit in 2025.

**Q: "Can I use this with a CDN for responsive images?"**  
A: Yes! Use the `sources` prop with your CDN's URL patterns and `srcset` syntax.

---

## Success Metrics

### Must Have
- ✅ Zero CLS issues in Lighthouse audits
- ✅ Fallback handling prevents broken image icons
- ✅ Component size < 5KB (minified + gzipped)
- ✅ TypeScript compilation enforces required `alt` prop

### Nice to Have
- ✅ 95%+ of users don't need to customize beyond props
- ✅ Advanced users can achieve any visual effect via CSS parts
- ✅ No GitHub issues about missing basic features
- ✅ Minimal maintenance burden (< 1 hour/month)

---

## Maintenance Philosophy

**When to Add Features**:
- User requests the same feature 3+ times
- Feature solves a problem that can't be solved with CSS
- Feature has clear ROI and low maintenance cost

**When to Reject Features**:
- Can be achieved via CSS parts
- Benefits only edge cases (< 5% of users)
- Adds significant complexity or bundle size
- Duplicates existing browser capabilities

---

## Open Questions

1. Should we add `fetchpriority="high"` prop for above-the-fold images in Phase 2?
2. Do we need a `decoding="async"` prop, or is the default sufficient?
3. Should `fade` be enabled by default, or opt-in?

---

## Troubleshooting Guide

### Problem: Images are cropped or stretched

**Cause**: Your `width`/`height` props don't match the actual image dimensions.

**Solution**:
```html
<!-- Get real dimensions from your image file/CDN -->
<ag-image 
  src="/photo.jpg" 
  alt="Photo"
  width="1200"  <!-- Match actual image -->
  height="800"  <!-- Match actual image -->
>
</ag-image>
```

**Prevention**: Use build-time tools to extract dimensions:
```javascript
// Example with Sharp (Node.js)
const metadata = await sharp('photo.jpg').metadata();
// { width: 1200, height: 800 }
```

### Problem: Layout shifts still occurring

**Cause**: Missing `width` and `height` props.

**Solution**: Always provide both dimensions:
```html
<!-- ❌ WRONG -->
<ag-image src="/photo.jpg" alt="Photo"></ag-image>

<!-- ✅ CORRECT -->
<ag-image src="/photo.jpg" alt="Photo" width="800" height="600"></ag-image>
```

**Verification**: Run Lighthouse audit - CLS score should be 0.

### Problem: Image doesn't fill container

**Cause**: Intrinsic dimensions don't match desired display size.

**Solution**: Use `aspectRatio` with `fit="cover"`:
```html
<!-- Force image into 16:9 container -->
<ag-image 
  src="/photo.jpg" 
  alt="Photo"
  aspectRatio="16/9"
  fit="cover"
  width="800"
  style="width: 100%; height: auto;">
</ag-image>
```

### Problem: Fallback image not showing on error

**Cause**: `fallbackSrc` prop not set or also failing to load.

**Solution**:
```html
<!-- Use a reliable local fallback -->
<ag-image 
  src="/remote-image.jpg" 
  alt="Photo"
  fallbackSrc="/assets/placeholder.png"
  width="800" 
  height="600">
</ag-image>
```

**Debug**: Listen to `ag-error` event to verify it's firing:
```javascript
image.addEventListener('ag-error', (e) => {
  console.error('Image failed to load:', image.src);
});
```

---

## Conclusion

This pragmatic implementation provides:
- ✅ Rock-solid foundation for 95% of use cases
- ✅ Extensible via CSS parts for edge cases
- ✅ Minimal maintenance burden
- ✅ Fast, accessible, performant by default
- ✅ Zero dependency on external libraries

**We're shipping the boring, bulletproof version.** Users will appreciate the stability and performance.
