# Header Component Specification

## Overview

The Header component provides a semantic, accessible, and responsive page header with slots for branding/logo and navigation content. It supports sticky positioning, flexible content alignment, and follows responsive design principles.

## Component Analysis from V1

### V1 Features to Port

From analyzing the v1 implementation files, the following features should be included in v2:

1. **Semantic Structure**: Uses `<header>` element with nested content wrapper and navigation
2. **Logo/Brand Slot**: Dedicated area for brand identity (logo, text, link)
3. **Navigation Slot**: Area for navigation links/items
4. **Sticky Positioning**: Optional sticky header behavior
5. **Content Alignment**: Flexible justification options (start, end, space-between)
6. **Responsive Layout**:
   - Mobile: Stacked column layout, centered items
   - Desktop (≥960px): Horizontal row layout, space-between alignment
7. **Visual Styling**:
   - Box shadow for depth
   - Bottom border
   - Configurable background color
   - Padding control

### V1 Token Translation

V1 custom properties → V2 ag-tokens:
- `--agnostic-header-background-color` → `--ag-background-primary`
- `--agnostic-header-border-color` → `--ag-border`
- `--agnostic-header-color` → `--ag-text-primary`
- `--agnostic-vertical-pad` → `--ag-space-2` (0.5rem)
- `--fluid-24` → `--ag-space-6` (1.5rem)
- `--fluid-8` → `--ag-space-2` (0.5rem)
- `--fluid-32` → `--ag-space-8` (2rem)
- `--agnostic-gray-light` → `--ag-border-subtle`

## Accessibility Requirements

### WCAG Guidelines

1. **Semantic HTML**:
   - Use `<header>` element with appropriate landmark role
   - Use `<nav>` for navigation sections
   - Use proper heading hierarchy

2. **Keyboard Navigation**:
   - All interactive elements must be keyboard accessible
   - Maintain logical tab order
   - Support standard keyboard patterns

3. **Screen Reader Support**:
   - Provide accessible names for navigation landmarks
   - Support `aria-current="page"` for active links
   - Include visually hidden context where needed

4. **Color Contrast**:
   - Ensure text meets WCAG AA standards (4.5:1 minimum)
   - Link text must be distinguishable

5. **Focus Management**:
   - Visible focus indicators
   - Logical focus order

### Best Practices

- Use semantic `<header>` tag (provides implicit landmark)
- Include `<nav>` element for navigation items
- Support `aria-label` on navigation for context
- Maintain responsive touch targets (min 44x44px)
- Skip links for keyboard users (implemented by consumers)

## Component API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sticky` | `boolean` | `false` | Makes header sticky at viewport top |
| `contentJustify` | `'start' \| 'end' \| 'between' \| 'around' \| 'center'` | `'between'` | Controls content alignment in flex container |
| `isSkinned` | `boolean` | `true` | Applies default styling (shadow, border, padding) |

### Slots

| Slot | Description |
|------|-------------|
| `logo` | Content for logo/brand area (typically a link with logo) |
| (default) | Navigation content (typically a `<nav>` element) |

### CSS Shadow Parts

| Part | Description |
|------|-------------|
| `ag-header` | The outer `<header>` element |
| `ag-header-content` | The inner content wrapper div |

### Events

No custom events needed - relies on standard DOM events from slotted content.

## Implementation Requirements

### Core Component (_Header.ts)

1. **Template Structure**:
```html
<header class="header" part="ag-header">
  <div class="header-content" part="ag-header-content">
    <div class="header-logo">
      <slot name="logo"></slot>
    </div>
    <div class="header-nav">
      <slot></slot>
    </div>
  </div>
</header>
```

2. **Styling Requirements**:
   - Use flexbox for responsive layout
   - Mobile-first approach (column layout, then row at 960px breakpoint)
   - Apply design tokens from ag-tokens.css only
   - Support dark mode via existing tokens
   - Conditional classes based on props:
     - `:host([sticky])` for sticky positioning
     - Dynamic content justification classes
   - Box shadow: `0 1px 5px 2px rgb(0 0 0 / 10%)`
   - Bottom border using `--ag-border`
   - Background using `--ag-background-primary`

3. **Responsive Behavior**:
   - Mobile (<960px): Column layout, centered, stacked navigation
   - Desktop (≥960px): Row layout, space-between (or custom), horizontal navigation

4. **Dark Mode**:
   - All colors use design tokens
   - Automatically adapts when `data-theme="dark"` is set

### Testing Requirements (_Header.spec.ts)

Minimum 12 tests covering:

1. **Rendering**:
   - Renders with default props
   - Renders with logo slot content
   - Renders with navigation slot content
   - Renders with both slots

2. **Props**:
   - Applies sticky attribute correctly
   - Applies contentJustify variations
   - Toggles isSkinned styling

3. **CSS Selectors**:
   - Uses `:host([sticky])` not `:host([sticky="true"])`
   - Uses `:host([isSkinned])` correctly

4. **Accessibility**:
   - Uses semantic `<header>` element
   - Exposes correct shadow parts
   - Slots render correctly

5. **Styling**:
   - Design tokens are used (not hard-coded colors)
   - Responsive classes apply correctly

### Framework Wrappers

1. **React** (`Header.tsx`):
   - Use `@lit/react` wrapper
   - Export TypeScript types
   - Support React refs

2. **Vue** (`Header.vue`):
   - Follow standard Vue wrapper pattern with `ref="agComponent"`
   - Use `watchEffect` for prop syncing
   - Forward slots: `<slot name="logo" slot="logo" />` and default slot

## Visual Examples from V1

### Basic Header
- Logo on left (or centered on mobile)
- Navigation links on right (or below logo on mobile)
- Subtle shadow and border

### Sticky Header
- Stays at top of viewport during scroll
- Maintains z-index above content

### Content Alignment Variants
- `start`: Logo and nav aligned to start
- `end`: Logo and nav aligned to end
- `between`: Logo and nav with space between (default)
- `around`: Equal space around items

## Success Criteria

- [ ] Core component renders with both slots
- [ ] Sticky positioning works correctly
- [ ] Content alignment props work
- [ ] Responsive behavior (mobile/desktop) works
- [ ] All design tokens used (no hard-coded colors)
- [ ] Dark mode works automatically
- [ ] 12+ unit tests pass
- [ ] Accessibility requirements met
- [ ] Shadow parts exposed and documented
- [ ] Framework wrappers work in all three playgrounds
- [ ] Documentation complete with examples
