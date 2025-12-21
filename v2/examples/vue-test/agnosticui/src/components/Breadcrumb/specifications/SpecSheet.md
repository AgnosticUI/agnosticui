# Breadcrumb Component Specification Sheet

## Component Overview
The Breadcrumb component provides a navigation aid that helps users understand their current location within a website or application hierarchy. It displays the path from the root page to the current page as a list of clickable links.

## WAI-ARIA Requirements

### Core Accessibility Features
- **Navigation Landmark**: Contained within `<nav>` element with `aria-label="Breadcrumb"`
- **Semantic Structure**: Implemented as an ordered list (`<ol>`) with list items (`<li>`)
- **Current Page Indication**: Last link marked with `aria-current="page"`
- **Keyboard Navigation**: Standard tab navigation to links, Enter to activate

### ARIA Attributes
- `nav[aria-label="Breadcrumb"]` - Identifies the navigation landmark
- `a[aria-current="page"]` - Marks the current page link
- Optional: `aria-labelledby` for external labeling

## Component API Design

### Properties
```typescript
interface BreadcrumbItem {
  label: string;     // Display text for the breadcrumb
  href?: string;     // URL for navigation (optional for current page)
  current?: boolean; // Marks the current page
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];                                    // Array of breadcrumb items
  type?: 'default' | 'slash' | 'bullet' | 'arrow';          // Separator style
  ariaLabel?: string;                                         // Custom aria-label (default: "Breadcrumb")
}
```

### Events
```typescript
interface BreadcrumbEvents {
  'breadcrumb-click': {
    item: BreadcrumbItem;
    index: number;
    event: MouseEvent;
  };
}
```

## Visual Variations

### Separator Types
1. **Default** - Right chevron (›)
2. **Slash** - Forward slash (/)
3. **Arrow** - Right arrow (→)
4. **Bullet** - Bullet point (•)

### Styling Approach (Minimalist & Themeable)
- Minimal functional CSS for layout and structure
- CSS custom properties for theming
- Separator content handled via CSS `::before` pseudo-elements
- Flexible styling system using `--ag-*` semantic tokens

## HTML Structure
```html
<nav aria-label="Breadcrumb" class="ag-breadcrumb">
  <ol class="ag-breadcrumb__list">
    <li class="ag-breadcrumb__item">
      <a href="/home" class="ag-breadcrumb__link">Home</a>
    </li>
    <li class="ag-breadcrumb__item">
      <a href="/category" class="ag-breadcrumb__link">Category</a>
    </li>
    <li class="ag-breadcrumb__item">
      <a href="/current" class="ag-breadcrumb__link" aria-current="page">Current Page</a>
    </li>
  </ol>
</nav>
```

## CSS Architecture (V2 Semantic Tokens)
```css
:host {
  display: block;
}

.ag-breadcrumb__list {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;
  white-space: nowrap;
}

.ag-breadcrumb__item + .ag-breadcrumb__item {
  padding-inline-start: var(--ag-space-2);
}

.ag-breadcrumb__item + .ag-breadcrumb__item::before {
  padding-inline-end: var(--ag-space-2);
  color: var(--ag-text-secondary);
  content: "›";
}

/* Separator variants */
:host([type="slash"]) .ag-breadcrumb__item + .ag-breadcrumb__item::before {
  content: "/";
}

:host([type="arrow"]) .ag-breadcrumb__item + .ag-breadcrumb__item::before {
  content: "→";
}

:host([type="bullet"]) .ag-breadcrumb__item + .ag-breadcrumb__item::before {
  content: "•";
}

/* Current page styling */
.ag-breadcrumb__link[aria-current="page"] {
  color: var(--ag-text-primary);
  text-decoration: none;
}

/* Focus states */
.ag-breadcrumb__link:focus-visible {
  outline: var(--ag-focus-width, 2px) solid var(--ag-focus);
  outline-offset: var(--ag-focus-offset, 2px);
}
```

## Key Implementation Requirements

### Accessibility Compliance
- ✅ WAI-ARIA Breadcrumb pattern compliance
- ✅ Keyboard navigation support
- ✅ Screen reader compatibility
- ✅ Focus management with visible focus indicators
- ✅ Semantic HTML structure

### Minimalist & Themeable Philosophy
- Minimal visual styling - only structural CSS
- CSS custom properties for all themeable values
- Flexible separator system via CSS content
- No opinionated colors, fonts, or decorative styling

### V2 Integration
- Use `--ag-*` semantic design tokens exclusively
- Follow established Lit component patterns
- Comprehensive test coverage
- Multi-framework wrapper support (React, Vue, Svelte)

## Testing Requirements

### Unit Tests
- Component creation and rendering
- Property binding and updates
- Event dispatching on clicks
- ARIA attribute handling
- Separator type variations
- Current page marking

### Accessibility Tests
- ARIA compliance validation
- Keyboard navigation testing
- Screen reader compatibility
- Focus indicator verification
- Semantic structure validation

### Integration Tests
- Framework wrapper compatibility
- Event handling across frameworks
- SSR compatibility
- Theme token integration

## Usage Examples

### Basic Usage
```typescript
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Laptops", href: "/products/laptops", current: true }
];

// Lit component
<ag-breadcrumb .items=${breadcrumbs}></ag-breadcrumb>

// React
<ReactBreadcrumb items={breadcrumbs} />

// Vue
<VueBreadcrumb :items="breadcrumbs" />
```

### With Custom Separator
```typescript
<ag-breadcrumb .items=${breadcrumbs} type="slash"></ag-breadcrumb>
```

## Migration from V1
- Replace `routes` prop with `items`
- Update CSS class names to use `ag-breadcrumb` prefix
- Replace `--agnostic-*` tokens with `--ag-*` tokens
- Update separator types to match V2 naming conventions

This specification provides the foundation for implementing a robust, accessible, and flexible Breadcrumb component that aligns with both WAI-ARIA best practices and AgnosticUI v2 design principles.