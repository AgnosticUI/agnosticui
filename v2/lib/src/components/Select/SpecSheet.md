# Select Component Specification

## Overview
The Select component is a lightly styled native HTML `<select>` element that provides consistent styling across browsers while maintaining native functionality and accessibility. It supports single and multiple selection modes, size variants, and disabled states.

## V1 Analysis

### Features from V1
- **Native select element**: Uses browser's built-in `<select>` with custom styling
- **Appearance reset**: Removes default browser styling with `-webkit-appearance: none`
- **Custom dropdown arrow**: SVG arrow icon for single select mode (not shown in multiple mode)
- **Size variants**: Small, default, and large sizes
- **States**: Default, disabled, focus
- **Multiple select**: Native `multiple` attribute support with `size` attribute
- **Accessibility**: Maintains all native select accessibility features

### V1 CSS Classes
- `.select` / `.select-skin` - Base styled select
- `.select-base` - Base structural styles (no skin)
- `.select-small` - Small size variant
- `.select-large` - Large size variant

### V1 Token Mapping to V2

| V1 Token | V2 Token | Notes |
|----------|----------|-------|
| `--fluid-6` | `--ag-space-2` | Vertical padding |
| `--fluid-12` | `--ag-space-3` | Left padding |
| `--fluid-32` | `--ag-space-8` | Right padding (for arrow) |
| `--fluid-16` | `--ag-font-size-base` | Font size |
| `--fluid-14` | `--ag-font-size-small` | Small size font |
| `--fluid-18` | `--ag-font-size-large` | Large size font |
| `--fluid-4` | `--ag-space-1` | Small vertical padding |
| `--fluid-8` | `--ag-space-2` | Large vertical padding / small left padding |
| `--agnostic-dark` | `--ag-text-primary` | Text color |
| `--agnostic-select-border-color` | `--ag-border` | Border color |
| `--agnostic-gray-light` | `--ag-border` | Fallback border |
| `--agnostic-radius` | `--ag-radius-md` | Border radius |
| `--agnostic-timing-fast` | `--ag-transition-fast` | Transition timing |
| `--agnostic-focus-ring-color` | `--ag-focus-ring-color` | Focus ring |
| `--agnostic-focus-ring-outline-width` | `--ag-focus-ring-outline-width` | Focus outline width |
| `--agnostic-focus-ring-outline-style` | `--ag-focus-ring-outline-style` | Focus outline style |
| `--agnostic-focus-ring-outline-color` | `--ag-focus-ring-outline-color` | Focus outline color |
| `--agnostic-disabled-bg` | `--ag-disabled-bg` | Disabled background |

## Component API

### Props
- `size?: 'small' | 'large'` - Size variant of the select
- `multiple?: boolean` - Enable multiple selection
- `disabled?: boolean` - Disable the select
- `name?: string` - Form name attribute
- `value?: string` - Selected value (single mode)
- `multipleSize?: number` - Size attribute for multiple select (visible options)

### Slots
- Default slot - For `<option>` elements

### Events
- `change` - Emitted when selection changes with `{ value: string | string[] }` detail

### CSS Shadow Parts
- `ag-select` - The select element itself

## Accessibility Requirements

1. **Native Semantics**: Use native `<select>` element to maintain browser accessibility
2. **Label Association**: Support proper label association (id/for relationship)
3. **Keyboard Navigation**: Native keyboard support (arrow keys, Enter, Space, Escape)
4. **Screen Reader Support**: Native screen reader announcements
5. **Disabled State**: Proper `disabled` attribute and `aria-disabled`
6. **Focus Management**: Clear focus indicator matching design system
7. **High Contrast Mode**: Focus outline visible in high contrast mode

## Design Notes

1. **Dropdown Arrow**: Custom SVG arrow only shows in single-select mode
2. **Multiple Select**: No custom arrow, shows native multi-select list
3. **Browser Consistency**: Appearance reset ensures consistent styling
4. **Responsive**: 100% width by default, adapts to container
5. **Motion**: Respects `prefers-reduced-motion` for transitions

## Implementation Notes

1. **Web Component**: Wrap native `<select>` in custom element
2. **Slot Content**: Allow consumers to provide `<option>` elements
3. **SVG Arrow**: Embed as data URI in CSS background-image
4. **Focus Ring**: Use box-shadow for focus ring, outline for high contrast
5. **Size Attribute**: Map `multipleSize` prop to native `size` attribute for multiple selects
