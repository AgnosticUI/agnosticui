# Radio Component - SpecSheet

## Overview
The Radio component is a custom-styled radio button input that provides an accessible, themeable alternative to native browser radio inputs. It supports various sizes, theming options, and meets WAI-ARIA accessibility requirements.

## V1 Analysis & Feature Parity

### V1 Features (from specifications/v1)

The v1 Choice component provided radio button functionality with:

1. **Sizes**: Small, default, and large variants
2. **Group Styling**: Fieldset-based grouping with border and padding
3. **Inline Layout**: Support for horizontal (inline) radio groups
4. **Disabled State**: Full disabled styling support
5. **Custom Styling**: Hidden native input with custom visual indicators
6. **Color Scheme**: Green (#08a880) fill color for checked state
7. **Focus States**: Custom focus ring styling
8. **Accessibility**:
   - Uses fieldset/legend for grouping
   - Proper label associations
   - Support for hiding fieldset borders while maintaining semantic structure
   - Screen reader friendly

### V2 Enhancements

Building on v1, the v2 component adds:

1. **Theme Variants**:
   - `default` - Uses v1's green color (#1a7f37 from ag-tokens)
   - `primary` - Uses --ag-primary color scheme
   - `monochrome` - Black circle on white background (inverts in dark mode)
2. **Design Token Integration**: All colors use ag-tokens.css
3. **Dark Mode Support**: Automatic theme switching via ag-tokens-dark.css
4. **Shadow Parts**: Exposed for external customization

## Component Specification

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | `''` | Name attribute for the radio input (required for grouping) |
| `value` | `string` | `''` | Value of the radio input |
| `checked` | `boolean` | `false` | Whether the radio is checked |
| `disabled` | `boolean` | `false` | Whether the radio is disabled |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Size of the radio button |
| `theme` | `'default' \| 'primary' \| 'monochrome'` | `'default'` | Color theme variant |
| `labelText` | `string` | `''` | Label text for the radio button |
| `labelPosition` | `'end' \| 'start'` | `'end'` | Position of label relative to radio |

### Events

| Event | Detail | Description |
|-------|--------|-------------|
| `ag-change` | `{ checked: boolean, value: string, name: string }` | Fired when the checked state changes |

### CSS Shadow Parts

| Part | Description |
|------|-------------|
| `ag-radio-wrapper` | The outer wrapper label element |
| `ag-radio-input` | The native radio input element |
| `ag-radio-indicator` | The custom visual radio indicator |
| `ag-radio-label` | The label text span |

### Slots

| Slot | Description |
|------|-------------|
| (default) | Optional slot content that replaces labelText prop |

## Accessibility Requirements

1. **Keyboard Support**:
   - Arrow keys navigate between radios in the same group
   - Tab moves focus into and out of the radio group
   - Space toggles the focused radio

2. **ARIA Attributes**:
   - Native radio input maintains focus and keyboard interaction
   - Label properly associated with input
   - When used in groups, wrap with fieldset/legend (consumer responsibility)

3. **Focus Management**:
   - Visible focus indicator using --ag-focus
   - Focus ring respects prefers-reduced-motion
   - High contrast mode support

## Visual Design

### Size Variants

- **Small**: 12px × 12px indicator, smaller text
- **Medium** (default): 14px × 14px indicator
- **Large**: 16px × 16px indicator, larger text

### Theme Variants

#### Default Theme
- **Unchecked**: White center, gray border (--ag-border)
- **Checked**: Green fill (--ag-success) with white center
- **Dark Mode**: Maintains green theme with adjusted contrast

#### Primary Theme
- **Unchecked**: White center, primary border (--ag-primary-border)
- **Checked**: Primary fill (--ag-primary)
- **Dark Mode**: Uses dark mode primary colors

#### Monochrome Theme
- **Unchecked**: White center, black border (--ag-black)
- **Checked**: Black fill (--ag-black) with white center
- **Dark Mode**: Inverts - white fill with black center

### States

1. **Default**: Unchecked, enabled
2. **Hover**: Subtle shadow or border change
3. **Focus**: Focus ring (--ag-focus) with --ag-focus-width offset
4. **Checked**: Filled circle indicator
5. **Disabled**: Reduced opacity, no pointer events
6. **Checked + Disabled**: Muted checked state

## Styling Patterns

### CSS Custom Properties Used

From ag-tokens.css:
- Spacing: --ag-space-* (1, 2, 3, 4)
- Border: --ag-border, --ag-border-subtle, --ag-border-width-1, --ag-border-width-2
- Colors: --ag-primary, --ag-success, --ag-black, --ag-white
- Focus: --ag-focus, --ag-focus-width, --ag-focus-offset
- Radius: --ag-radius-full (for circular indicator)
- Motion: --ag-motion-fast (for transitions)

### Layout Structure

```html
<label class="radio-wrapper" part="ag-radio-wrapper">
  <input type="radio" class="radio-input" part="ag-radio-input" />
  <span class="radio-indicator" part="ag-radio-indicator"></span>
  <span class="radio-label" part="ag-radio-label">Label Text</span>
</label>
```

### Key CSS Patterns

1. **Hidden Native Input**: Position absolute, opacity 0, maintains accessibility
2. **Custom Indicator**: CSS-generated using ::before/::after or dedicated element
3. **Focus Ring**: box-shadow using --ag-focus with proper offset
4. **Checked State**: `.radio-input:checked + .radio-indicator` selector pattern
5. **Disabled State**: `:host([disabled])` selector with reduced opacity
6. **Reduced Motion**: `@media (prefers-reduced-motion)` removes transitions

## Implementation Notes

1. **Boolean Attributes**: Use `:host([disabled])` NOT `:host([disabled="true"])`
2. **Design Tokens**: ONLY use tokens from ag-tokens.css - do NOT create new ones
3. **Shadow DOM**: Component uses shadow DOM with exposed parts
4. **Label Association**: Proper label wrapping for accessibility
5. **Group Usage**: Component is single radio; consumers wrap in fieldset for groups
6. **Theme Integration**: Respects `[data-theme="dark"]` automatically via tokens

## Testing Requirements

### Unit Tests

1. **Props & Attributes**:
   - [ ] Renders with default props
   - [ ] All size variants render correctly
   - [ ] All theme variants render correctly
   - [ ] Checked state toggles properly
   - [ ] Disabled state prevents interaction
   - [ ] Name and value attributes set correctly
   - [ ] Label text displays properly

2. **Events**:
   - [ ] ag-change event fires on state change
   - [ ] Event detail includes correct data
   - [ ] Disabled radio doesn't fire events

3. **Accessibility**:
   - [ ] Native input is accessible
   - [ ] Label is properly associated
   - [ ] Focus management works
   - [ ] Keyboard navigation works
   - [ ] ARIA attributes are correct

4. **CSS**:
   - [ ] Uses correct attribute selectors (not `[attr="true"]`)
   - [ ] Only uses existing design tokens
   - [ ] Shadow parts are exposed
   - [ ] Reduced motion respected

### Visual Tests (Storybook)

1. All size variants
2. All theme variants
3. Checked/unchecked states
4. Disabled states
5. Focus states
6. Radio groups (multiple radios with same name)
7. Inline layouts
8. Dark mode variants

## Example Usage

### Basic Radio
```html
<ag-radio name="option" value="1" labelText="Option 1"></ag-radio>
```

### Radio Group
```html
<fieldset>
  <legend>Choose an option</legend>
  <ag-radio name="group1" value="1" labelText="Option 1"></ag-radio>
  <ag-radio name="group1" value="2" labelText="Option 2" checked></ag-radio>
  <ag-radio name="group1" value="3" labelText="Option 3"></ag-radio>
</fieldset>
```

### Themed Radio
```html
<ag-radio theme="primary" name="theme" value="1" labelText="Primary"></ag-radio>
<ag-radio theme="monochrome" name="theme" value="2" labelText="Monochrome"></ag-radio>
```

### Large Radio with Custom Styling
```html
<ag-radio
  size="large"
  name="custom"
  value="1"
  labelText="Custom Styled"
  class="my-radio">
</ag-radio>

<style>
.my-radio::part(ag-radio-indicator) {
  border-width: 3px;
}
</style>
```

## References

- V1 Choice Component: specifications/v1/
- WAI-ARIA Radio Pattern: https://www.w3.org/WAI/ARIA/apg/patterns/radio/
- Sara Soueidan's Guide: https://www.sarasoueidan.com/blog/inclusively-hiding-and-styling-checkboxes-and-radio-buttons/
- Heydon Pickering's Inclusive Components
