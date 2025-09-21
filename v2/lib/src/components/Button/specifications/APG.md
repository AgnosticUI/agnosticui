# WAI-ARIA APG Button Pattern Specification

**Source:** https://www.w3.org/WAI/ARIA/apg/patterns/button/
**Downloaded:** Retroactively dated - Downloaded prior to September 19, 2025
**APG Version:** Unknown (downloaded before date tracking implemented)

## Button Characteristics

- Enables users to trigger actions like submitting forms, opening dialogs, or performing operations
- Can be a standard button, toggle button, or menu button

## Keyboard Interaction

When focused, buttons respond to:
- **Space**: Activates the button
- **Enter**: Activates the button

### Post-activation Focus Management
Focus management depends on action context:
- **Opening a dialog**: Focus moves inside the dialog
- **Closing a dialog**: Focus typically returns to originating button
- **No context change**: Focus remains on the button

## ARIA Roles and Properties

### Required
- **Role**: `button`

### Accessible Label (one required)
- Text content
- `aria-labelledby`
- `aria-label`

### Optional Attributes
- `aria-describedby`: For function description
- `aria-disabled="true"`: When action unavailable
- `aria-pressed`: For toggle buttons (true/false)
- `aria-haspopup`: For menu buttons

## Key Accessibility Principles

- Button's visual style should match its functional role
- Maintain consistent labeling for toggle buttons
- Provide clear, descriptive interaction states

## Implementation Requirements

1. **Keyboard Support**: Space and Enter activation
2. **ARIA Compliance**: Proper role and labeling
3. **Focus Management**: Context-appropriate focus handling
4. **State Communication**: Clear disabled and pressed states
5. **Semantic HTML**: Use `<button>` element as foundation