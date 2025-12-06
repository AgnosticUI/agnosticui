# Checkbox Component - SpecSheet

## Overview
The Checkbox component is a custom-styled checkbox input that provides an accessible, themeable alternative to native browser checkbox inputs. It supports various sizes, theming options, and meets WAI-ARIA accessibility requirements.

## V1 Analysis & Feature Parity

### V1 Features (from specifications/v1)

The v1 Choice component provided checkbox functionality with:

1. **Sizes**: Small, default, and large variants
2. **Group Styling**: Fieldset-based grouping with border and padding
3. **Inline Layout**: Support for horizontal (inline) checkbox groups
4. **Disabled State**: Full disabled styling support
5. **Custom Styling**: Hidden native input with custom visual indicators (checkmark)
6. **Color Scheme**: Green (#08a880) background with white checkmark for checked state
7. **Focus States**: Custom focus ring styling
8. **Checkmark Animation**: Transform-based checkmark animation on check
9. **Accessibility**:
   - Uses fieldset/legend for grouping
   - Proper label associations
   - Support for hiding fieldset borders while maintaining semantic structure
   - Screen reader friendly

### V2 Enhancements

Building on v1, the v2 component adds:

1. **Theme Variants**:
   - `default` - Uses v1's green color (#1a7f37 from ag-tokens)
   - `primary` - Uses --ag-primary color scheme
   - `monochrome` - Black background with white checkmark (inverts in dark mode)
2. **Design Token Integration**: All colors use ag-tokens.css
3. **Dark Mode Support**: Automatic theme switching via ag-tokens-dark.css
4. **Shadow Parts**: Exposed for external customization
5. **Indeterminate State**: Support for tri-state checkboxes

## Component Specification

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | `''` | Name attribute for the checkbox input |
| `value` | `string` | `''` | Value of the checkbox input |
| `checked` | `boolean` | `false` | Whether the checkbox is checked |
| `indeterminate` | `boolean` | `false` | Whether the checkbox is in indeterminate state |
| `disabled` | `boolean` | `false` | Whether the checkbox is disabled |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Size of the checkbox |
| `theme` | `'default' \| 'primary' \| 'monochrome'` | `'default'` | Color theme variant |
| `labelText` | `string` | `''` | Label text for the checkbox |
| `labelPosition` | `'end' \| 'start'` | `'end'` | Position of label relative to checkbox |

### Events

| Event | Detail | Description |
|-------|--------|-------------|
| `ag-change` | `{ checked: boolean, value: string, name: string, indeterminate: boolean }` | Fired when the checked state changes |

### CSS Shadow Parts

| Part | Description |
|------|-------------|
| `ag-checkbox-wrapper` | The outer wrapper label element |
| `ag-checkbox-input` | The native checkbox input element |
| `ag-checkbox-indicator` | The custom visual checkbox indicator (box with checkmark) |
| `ag-checkbox-label` | The label text span |

### Slots

| Slot | Description |
|------|-------------|
| (default) | Optional slot content that replaces labelText prop |

## Accessibility Requirements

1. **Keyboard Support**:
   - Tab moves focus into and out of checkbox
   - Space toggles the checkbox state

2. **ARIA Attributes**:
   - Native checkbox input maintains focus and keyboard interaction
   - Label properly associated with input
   - `aria-checked="mixed"` for indeterminate state
   - When used in groups, wrap with fieldset/legend (consumer responsibility)

3. **Focus Management**:
   - Visible focus indicator using --ag-focus
   - Focus ring respects prefers-reduced-motion
   - High contrast mode support

## Visual Design

### Size Variants

- **Small**: 14px × 14px box, smaller text
- **Medium** (default): 16px × 16px box
- **Large**: 18px × 18px box, larger text

### Theme Variants

#### Default Theme
- **Unchecked**: White background, gray border (--ag-border)
- **Checked**: Green background (--ag-success) with white checkmark
- **Indeterminate**: Green background with white dash/minus
- **Dark Mode**: Maintains green theme with adjusted contrast

#### Primary Theme
- **Unchecked**: White background, primary border (--ag-primary-border)
- **Checked**: Primary background (--ag-primary) with white checkmark
- **Indeterminate**: Primary background with white dash
- **Dark Mode**: Uses dark mode primary colors

#### Monochrome Theme
- **Unchecked**: White background, black border (--ag-black)
- **Checked**: Black background (--ag-black) with white checkmark
- **Indeterminate**: Black background with white dash
- **Dark Mode**: Inverts - white background with black checkmark/dash

### States

1. **Default**: Unchecked, enabled
2. **Hover**: Subtle shadow or border change
3. **Focus**: Focus ring (--ag-focus) with --ag-focus-width offset
4. **Checked**: Filled box with animated checkmark
5. **Indeterminate**: Filled box with horizontal dash
6. **Disabled**: Reduced opacity, no pointer events
7. **Checked + Disabled**: Muted checked state

## Styling Patterns

### CSS Custom Properties Used

From ag-tokens.css:
- Spacing: --ag-space-* (1, 2, 3, 4)
- Border: --ag-border, --ag-border-subtle, --ag-border-width-1, --ag-border-width-2
- Colors: --ag-primary, --ag-success, --ag-black, --ag-white
- Focus: --ag-focus, --ag-focus-width, --ag-focus-offset
- Radius: --ag-radius-sm (for rounded corners)
- Motion: --ag-motion-fast (for checkmark animation)

### Layout Structure

```html
<label class="checkbox-wrapper" part="ag-checkbox-wrapper">
  <input type="checkbox" class="checkbox-input" part="ag-checkbox-input" />
  <span class="checkbox-indicator" part="ag-checkbox-indicator"></span>
  <span class="checkbox-label" part="ag-checkbox-label">Label Text</span>
</label>
```

### Checkmark Animation

The checkmark uses a CSS-drawn checkmark with transform animation:
- Initially scaled to 0
- Rotates 40deg and scales to 1 when checked
- Respects prefers-reduced-motion

### Key CSS Patterns

1. **Hidden Native Input**: Position absolute, opacity 0, maintains accessibility
2. **Custom Indicator**: Uses ::after pseudo-element for checkmark
3. **Checkmark**: Border-based checkmark (right and bottom borders, rotated)
4. **Focus Ring**: box-shadow using --ag-focus with proper offset
5. **Checked State**: `.checkbox-input:checked + .checkbox-indicator` selector pattern
6. **Indeterminate State**: `.checkbox-input:indeterminate + .checkbox-indicator::after`
7. **Disabled State**: `:host([disabled])` selector with reduced opacity
8. **Reduced Motion**: `@media (prefers-reduced-motion)` removes transitions

## Implementation Notes

1. **Boolean Attributes**: Use `:host([disabled])` NOT `:host([disabled="true"])`
2. **Design Tokens**: ONLY use tokens from ag-tokens.css - do NOT create new ones
3. **Shadow DOM**: Component uses shadow DOM with exposed parts
4. **Label Association**: Proper label wrapping for accessibility
5. **Group Usage**: Component is single checkbox; consumers wrap in fieldset for groups
6. **Theme Integration**: Respects `[data-theme="dark"]` automatically via tokens
7. **Indeterminate**: Set via JavaScript property, not HTML attribute

## Testing Requirements

### Unit Tests

1. **Props & Attributes**:
   - [ ] Renders with default props
   - [ ] All size variants render correctly
   - [ ] All theme variants render correctly
   - [ ] Checked state toggles properly
   - [ ] Indeterminate state renders correctly
   - [ ] Disabled state prevents interaction
   - [ ] Name and value attributes set correctly
   - [ ] Label text displays properly

2. **Events**:
   - [ ] ag-change event fires on state change
   - [ ] Event detail includes correct data
   - [ ] Disabled checkbox doesn't fire events
   - [ ] Indeterminate to checked transition works

3. **Accessibility**:
   - [ ] Native input is accessible
   - [ ] Label is properly associated
   - [ ] Focus management works
   - [ ] Keyboard navigation works
   - [ ] ARIA attributes are correct
   - [ ] aria-checked="mixed" for indeterminate

4. **CSS**:
   - [ ] Uses correct attribute selectors (not `[attr="true"]`)
   - [ ] Only uses existing design tokens
   - [ ] Shadow parts are exposed
   - [ ] Reduced motion respected
   - [ ] Checkmark animation works

### Visual Tests (Storybook)

1. All size variants
2. All theme variants
3. Checked/unchecked states
4. Indeterminate state
5. Disabled states
6. Focus states
7. Checkbox groups
8. Inline layouts
9. Dark mode variants
10. Checkmark animation

## Example Usage

### Basic Checkbox
```html
<ag-checkbox name="accept" value="yes" labelText="I accept terms"></ag-checkbox>
```

### Checkbox Group
```html
<fieldset>
  <legend>Select options</legend>
  <ag-checkbox name="options" value="1" labelText="Option 1"></ag-checkbox>
  <ag-checkbox name="options" value="2" labelText="Option 2" checked></ag-checkbox>
  <ag-checkbox name="options" value="3" labelText="Option 3"></ag-checkbox>
</fieldset>
```

### Themed Checkbox
```html
<ag-checkbox theme="primary" name="primary" value="1" labelText="Primary"></ag-checkbox>
<ag-checkbox theme="monochrome" name="mono" value="2" labelText="Monochrome"></ag-checkbox>
```

### Indeterminate Checkbox
```javascript
const checkbox = document.querySelector('ag-checkbox');
checkbox.indeterminate = true;
```

### Large Checkbox with Custom Styling
```html
<ag-checkbox
  size="large"
  name="custom"
  value="1"
  labelText="Custom Styled"
  class="my-checkbox">
</ag-checkbox>

<style>
.my-checkbox::part(ag-checkbox-indicator) {
  border-radius: 8px;
}
</style>
```

## References

- V1 Choice Component: specifications/v1/
- WAI-ARIA Checkbox Pattern: https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/
- Sara Soueidan's Guide: https://www.sarasoueidan.com/blog/inclusively-hiding-and-styling-checkboxes-and-radio-buttons/
- Heydon Pickering's Inclusive Components
