# IconButton Component Specification

*Single source of truth for all AgnosticUI v2 IconButton implementation decisions*

## Component Overview

The IconButton component provides an accessible, minimalist and themeable implementation of icon-only buttons following WAI-ARIA APG patterns and Sara Soueidan's accessibility guidelines. It supports multiple icon sources (SVG, Unicode, slots) with proper semantic labeling.

## AI-First Design Goals

- **Canonical Pattern**: Immutable `_IconButton.ts` with experimental `IconButton.ts`
- **AI Extensibility**: Clear patterns for AI-driven modifications and styling
- **Minimalist & Themeable**: Functional CSS only, completely styleable externally
- **Accessibility First**: Required accessible labeling with comprehensive screen reader support

## Architecture

### Core Component
- `AgIconButton` - Single Lit-based web component for icon-only interactions

### File Structure
```
src/components/IconButton/
├── core/
│   ├── _IconButton.ts           # Canonical, upgrade-safe source
│   └── _IconButton.spec.ts      # Comprehensive test suite
├── react/
│   ├── ReactIconButton.tsx     # React wrapper component
│   └── ReactIconButton.spec.tsx # React-specific tests
├── vue/
│   ├── VueIconButton.vue       # Vue 3 wrapper component
│   └── VueIconButton.spec.ts   # Vue-specific tests
├── svelte/
│   └── SvelteIconButtonDemo.svelte # Svelte integration demo
└── spec.md                     # This specification
```

## Functional Requirements

### Basic Behavior
- **Single Action**: Performs one specific action when activated
- **Icon Display**: Shows only an icon (no text label visible)
- **Accessible Name**: MUST have accessible label via `label` property
- **State Communication**: Communicates state through ARIA attributes

### Icon Sources (Priority Order)
1. **Slotted Content**: Custom SVG or icon components (highest priority)
2. **Unicode Property**: Simple unicode symbols (☰, ×, ⚙, etc.)
3. **Icon Property**: Icon identifier for icon systems

### Size Variants
- `xs` - Extra small (1.5rem / 24px)
- `sm` - Small (2rem / 32px)
- `md` - Medium (2.5rem / 40px) - Default
- `lg` - Large (3rem / 48px)
- `xl` - Extra large (3.5rem / 56px)

### Visual Variants
- `ghost` - Transparent background (default)
- `primary` - Primary brand styling
- `secondary` - Secondary gray styling
- `danger` - Destructive action styling

### States
- `disabled` - Non-interactive state
- `loading` - Shows loading indicator
- `pressed` - Toggle state for pressed/unpressed buttons

## WAI-ARIA APG Compliance (MANDATORY)

### Required Accessibility Features
- **Semantic Button**: Uses `<button>` element foundation
- **Accessible Name**: `aria-label` attribute is REQUIRED
- **Keyboard Navigation**: Space/Enter activation
- **Focus Management**: Visible focus indicator
- **Screen Reader**: Proper announcement of label and state

### ARIA Attributes
- `aria-label` - Required accessible name
- `aria-pressed` - For toggle buttons (true/false/undefined)
- `aria-disabled` - For disabled state
- `aria-hidden="true"` - On icon content to prevent double-reading

### Keyboard Interaction
- `Space` - Activates the button
- `Enter` - Activates the button
- `Tab` - Moves focus to/from button

## Design Token Integration

### Core Colors
- **Default Text**: `var(--ag-text-locked, #374151)` - Ensures proper contrast
- **Hover Background**: `var(--ag-background-secondary, #f3f4f6)`
- **Hover Text**: `var(--ag-text-locked, #374151)` - Consistent dark text
- **Focus Ring**: `var(--ag-focus, #2563eb)` - High contrast blue

### Recent Improvements (2024-09)
- **Contrast Fix**: Updated from `--ag-text` to `--ag-text-locked` for better contrast
- **Hover States**: Proper dark text on light hover backgrounds
- **Theme Consistency**: Works correctly in both light and dark themes

### Custom Properties
```css
/* Size Control */
--icon-button-size: var(--ag-space-10, 2.5rem);

/* Color Customization */
--icon-button-bg: transparent;
--icon-button-color: var(--ag-text-locked, #374151);
--icon-button-hover-bg: var(--ag-background-secondary, #f3f4f6);
--icon-button-hover-color: var(--ag-text-locked, #374151);
--icon-button-pressed-bg: var(--ag-primary, #2563eb);
--icon-button-pressed-color: var(--ag-on-primary, #ffffff);

/* Border and Spacing */
--icon-button-radius: var(--ag-radius-sm, 0.25rem);
```

## Usage Patterns

### Basic Icon Button
```html
<ag-icon-button label="Close dialog">
  <svg><!-- Close icon --></svg>
</ag-icon-button>
```

### Unicode Symbol
```html
<ag-icon-button label="Menu" unicode="☰"></ag-icon-button>
```

### Toggle Button
```html
<ag-icon-button
  label="Toggle favorites"
  pressed="true"
  variant="primary">
  <svg><!-- Heart icon --></svg>
</ag-icon-button>
```

### Loading State
```html
<ag-icon-button
  label="Saving..."
  loading="true"
  disabled="true">
  <svg><!-- Save icon --></svg>
</ag-icon-button>
```

## Framework Integration

### React Wrapper
- **Component**: `ReactIconButton`
- **Props**: TypeScript interfaces for all properties
- **Events**: Standard React onClick handlers
- **Ref Support**: Forward refs to underlying web component

### Vue Wrapper
- **Component**: `VueIconButton`
- **Props**: Vue 3 Composition API support
- **Events**: Vue event system integration
- **Reactivity**: Full reactive property binding

### Svelte Integration
- **Direct Usage**: Web component works natively
- **Event Binding**: `on:icon-button-click` custom events
- **Prop Binding**: Reactive property updates

## Testing Requirements

### Unit Tests
- ✅ Property setting and reflection
- ✅ Icon source priority (slot > unicode > icon)
- ✅ Accessibility attribute presence
- ✅ Keyboard interaction
- ✅ Event dispatching
- ✅ Size variant rendering
- ✅ State management (disabled, loading, pressed)

### Integration Tests
- ✅ React wrapper functionality
- ✅ Vue wrapper functionality
- ✅ Svelte integration
- ✅ Cross-framework consistency

### Accessibility Tests
- ✅ Screen reader announcement
- ✅ Keyboard navigation
- ✅ Focus management
- ✅ Color contrast (recent improvement)
- ✅ ARIA attribute validation

## Quality Assurance

### Recent Quality Improvements
- **September 2024**: Fixed white text on white background hover issue
- **Token System**: Integrated `--ag-text-locked` for consistent contrast
- **Playground**: Added curated favorite button colors (red, yellow, blue)
- **Cross-Framework**: Consistent behavior across React, Vue, Svelte

### Known Limitations
- Icon loading/error states not implemented
- No built-in tooltip integration (by design - use separate Tooltip component)
- Custom icon system integration requires external implementation

## External References

- [WAI-ARIA APG Button Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/)
- [Sara Soueidan Icon Button Accessibility](https://www.sarasoueidan.com/blog/accessible-icon-buttons/)
- [MDN Button Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)

## Changelog

### v2.0.0-dev (Current)
- ✅ Initial implementation with full accessibility
- ✅ Framework wrappers for React, Vue, Svelte
- ✅ Comprehensive test coverage
- ✅ Minimalist and themeable styling approach
- ✅ Design token integration
- ✅ Contrast improvements with `--ag-text-locked`
- ✅ Playground demos with curated colors