# Breadcrumb Component Specification

*Single source of truth for all AgnosticUI v2 Breadcrumb implementation decisions*

## Component Overview

The Breadcrumb component provides an accessible, minimalist and themeable implementation of navigation breadcrumbs following WAI-ARIA APG patterns. It shows the user's current location within a site hierarchy and enables navigation to parent pages.

## AI-First Design Goals

- **Canonical Pattern**: Immutable `_Breadcrumb.ts` with experimental `Breadcrumb.ts`
- **AI Extensibility**: Clear patterns for AI-driven modifications and styling
- **Minimalist & Themeable**: Functional CSS only, completely styleable externally
- **Navigation First**: Clear hierarchical navigation with proper semantics

## Architecture

### Core Component
- `AgBreadcrumb` - Container for breadcrumb navigation with accessibility features

### File Structure
```
src/components/Breadcrumb/
├── core/
│   ├── _Breadcrumb.ts          # Canonical, upgrade-safe source
│   └── _Breadcrumb.spec.ts     # Comprehensive test suite
├── react/
│   └── ReactBreadcrumb.tsx    # React wrapper component
├── vue/
│   └── VueBreadcrumb.vue      # Vue 3 wrapper component
├── svelte/
│   └── SvelteBreadcrumb.js    # Svelte integration
└── spec.md                    # This specification
```

## Functional Requirements

### Core Behavior
- **Hierarchical Navigation**: Shows path from root to current page
- **Link Navigation**: Each breadcrumb item (except current) is clickable
- **Current Page Indication**: Last item represents current page (non-clickable)
- **Separator Display**: Visual separators between breadcrumb items
- **Responsive Behavior**: Handles overflow appropriately

### Breadcrumb Structure
- **Items**: Array of breadcrumb objects with text and optional href
- **Separators**: Configurable separator between items (default: "/")
- **Current Page**: Last item in breadcrumb trail (no link)

### Item Properties
```typescript
interface BreadcrumbItem {
  text: string;           // Display text
  href?: string;          // Link URL (optional for current page)
  ariaCurrent?: string;   // ARIA current indication
}
```

## WAI-ARIA APG Compliance (MANDATORY)

### Required Accessibility Features
- **Navigation Landmark**: Uses `<nav>` with proper labeling
- **Breadcrumb List**: Structured as ordered list (`<ol>`)
- **Current Page**: Marked with `aria-current="page"`
- **Navigation Label**: Clear aria-label for the navigation
- **Screen Reader**: Proper announcement of breadcrumb structure

### ARIA Attributes
- `role="navigation"` - Navigation landmark identification
- `aria-label="Breadcrumb"` - Clear navigation purpose
- `aria-current="page"` - Current page indication on last item
- Proper heading structure for page hierarchy

### Keyboard Interaction
- **Tab Navigation**: Standard link navigation
- **Enter/Space**: Activates breadcrumb links
- **No Special Keys**: Follows standard link behavior

### Screen Reader Experience
- Announces as "Breadcrumb navigation"
- Reads each item as a link (except current page)
- Current page announced with "current page" context

## Design Token Integration

### Core Styling
- **Text**: `var(--ag-text-primary)` for main text
- **Links**: `var(--ag-link-color)` for breadcrumb links
- **Current**: `var(--ag-text-secondary)` for current page
- **Separators**: `var(--ag-text-muted)` for visual separators

### Custom Properties
```css
/* Typography */
--breadcrumb-font-size: var(--ag-text-sm, 0.875rem);
--breadcrumb-line-height: var(--ag-leading-5, 1.25);

/* Colors */
--breadcrumb-text: var(--ag-text-primary);
--breadcrumb-link: var(--ag-link-color);
--breadcrumb-current: var(--ag-text-secondary);
--breadcrumb-separator: var(--ag-text-muted);

/* Spacing */
--breadcrumb-gap: var(--ag-space-2, 0.5rem);
--breadcrumb-padding: var(--ag-space-1, 0.25rem);

/* Interactive States */
--breadcrumb-link-hover: var(--ag-link-hover);
--breadcrumb-focus-ring: var(--ag-focus);
```

## Usage Patterns

### Basic Breadcrumb
```html
<ag-breadcrumb>
  <a href="/">Home</a>
  <a href="/products">Products</a>
  <a href="/products/electronics">Electronics</a>
  <span aria-current="page">Smartphones</span>
</ag-breadcrumb>
```

### Programmatic Breadcrumb
```javascript
const breadcrumb = document.querySelector('ag-breadcrumb');
breadcrumb.items = [
  { text: 'Home', href: '/' },
  { text: 'Documentation', href: '/docs' },
  { text: 'Components', href: '/docs/components' },
  { text: 'Breadcrumb' } // Current page (no href)
];
```

### Custom Separator
```html
<ag-breadcrumb separator="›">
  <a href="/">Home</a>
  <a href="/blog">Blog</a>
  <span aria-current="page">Article Title</span>
</ag-breadcrumb>
```

### With Icon Separators
```html
<ag-breadcrumb>
  <a href="/">
    <svg slot="separator"><!-- Home icon --></svg>
    Home
  </a>
  <a href="/products">Products</a>
  <span aria-current="page">Product Details</span>
</ag-breadcrumb>
```

## Framework Integration

### React Wrapper
- **Component**: `ReactBreadcrumb`
- **Props**: TypeScript interfaces for items array
- **Navigation**: React Router integration support
- **Events**: Standard React onClick handlers

### Vue Wrapper
- **Component**: `VueBreadcrumb`
- **Props**: Vue 3 Composition API support
- **Router**: Vue Router integration
- **Reactivity**: Full reactive items binding

### Svelte Integration
- **Direct Usage**: Web component works natively
- **SvelteKit**: Router integration examples
- **Prop Binding**: Reactive items updates

## Testing Requirements

### Unit Tests
- ✅ Breadcrumb item rendering
- ✅ Link generation with href attributes
- ✅ Current page indication (aria-current)
- ✅ Separator rendering
- ✅ Custom separator support
- ✅ Items array handling
- ✅ Accessibility attributes
- ✅ Navigation structure
- ✅ Responsive behavior

### Integration Tests
- ✅ React wrapper functionality
- ✅ Vue wrapper functionality
- ✅ Svelte integration
- ✅ Router integration patterns
- ✅ Cross-framework consistency

### Accessibility Tests
- ✅ Screen reader announcement
- ✅ Navigation landmark identification
- ✅ Current page indication
- ✅ Keyboard navigation
- ✅ ARIA attribute validation
- ✅ Semantic structure verification

## Quality Assurance

### Current Status
- **Implementation**: Complete with comprehensive navigation features
- **Testing**: Full test coverage across all scenarios
- **Framework Support**: React, Vue, Svelte wrappers implemented
- **Accessibility**: WAI-ARIA compliant breadcrumb navigation
- **Playground**: Interactive demos with theme switching

### Recent Improvements
- **Theme Integration**: Proper light/dark theme support
- **Playground Polish**: Clean theming without hardcoded colors
- **Framework Consistency**: Unified behavior across React, Vue, Svelte

### Responsive Behavior
- **Overflow Handling**: Graceful handling of long breadcrumb trails
- **Mobile Optimization**: Appropriate sizing for touch interfaces
- **Wrapping**: Intelligent line wrapping for narrow viewports

### Known Limitations
- No built-in truncation for very long breadcrumb trails (by design)
- Custom icon support requires external icon library integration
- No built-in dropdown for collapsed breadcrumbs (keep simple)

## SEO and Navigation Benefits

### Structured Data
- Supports schema.org breadcrumb markup
- Enhances search engine understanding
- Improves page hierarchy communication

### User Experience
- Clear navigation context
- Enables quick navigation to parent pages
- Reduces cognitive load for complex sites

## External References

- [WAI-ARIA APG Breadcrumb Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/)
- [MDN Navigation Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav)
- [Schema.org BreadcrumbList](https://schema.org/BreadcrumbList)

## Changelog

### v2.0.0-dev (Current)
- ✅ Initial implementation with full accessibility
- ✅ Framework wrappers for React, Vue, Svelte
- ✅ Comprehensive test coverage
- ✅ Minimalist and themeable styling approach
- ✅ Design token integration
- ✅ Responsive breadcrumb behavior
- ✅ Theme system integration
- ✅ Playground demos with proper theming