# Button Component - Comprehensive Specification

*Consolidated from WAI-ARIA APG and BBC GEL guidelines*

## 🎯 Component Purpose

A foundational interactive element that enables users to trigger actions like submitting forms, opening dialogs, canceling operations, or performing any user-initiated action.

## 📋 Functional Requirements

### Core Functionality
- **Action Triggering**: Execute user-defined actions on activation
- **State Management**: Handle normal, hover, focus, pressed, and disabled states
- **Type Variants**: Support different button types (button, submit, reset)
- **Toggle Support**: Optional toggle behavior with `aria-pressed` state

### Button Types
1. **Standard Button**: Performs immediate actions
2. **Submit Button**: Submits form data
3. **Reset Button**: Resets form to initial state
4. **Toggle Button**: Switches between on/off states
5. **Menu Button**: Opens dropdown/menu (future consideration)

## ⌨️ Keyboard Interaction Requirements

| Key | Action | Notes |
|-----|--------|-------|
| **Space** | Activates button | Primary activation method |
| **Enter** | Activates button | Alternative activation method |
| **Tab** | Moves focus to button | Standard focus navigation |
| **Shift + Tab** | Moves focus away from button | Reverse focus navigation |

### Focus Management
- **On activation**: Focus behavior depends on action context
  - **Dialog opening**: Focus moves inside dialog
  - **Dialog closing**: Focus returns to triggering button
  - **Form submission**: Focus management per form behavior
  - **No context change**: Focus remains on button

## 🎨 Visual State Requirements

### Required Visual States
1. **Normal**: Default appearance
2. **Hover**: Mouse over indication
3. **Focus**: Keyboard focus indication (outline/ring)
4. **Active/Pressed**: Click/activation feedback
5. **Disabled**: Non-interactive state
6. **Loading**: Action in progress (optional)

### Toggle Button States
- **Unpressed**: `aria-pressed="false"`
- **Pressed**: `aria-pressed="true"`
- Clear visual distinction between states

## 🔧 ARIA Requirements

### Required Attributes
- **Role**: `button` (implicit with `<button>` element)
- **Accessible Name**: One of:
  - Text content (preferred)
  - `aria-labelledby`
  - `aria-label` (avoid per BBC guidance)

### Optional Attributes
- `aria-describedby`: Additional description
- `aria-disabled="true"`: When action unavailable (prefer `disabled` attribute)
- `aria-pressed="true|false"`: For toggle buttons
- `aria-expanded="true|false"`: For menu buttons (future)
- `aria-haspopup`: For menu buttons (future)

## 🏗️ HTML Structure Requirements

### Semantic Foundation
```html
<!-- Preferred: Semantic button element -->
<button type="button|submit|reset">
  Button Text
</button>

<!-- Alternative: Non-semantic with ARIA -->
<div role="button" tabindex="0">
  Button Text
</div>
```

### Accessibility Guidelines
1. **Prefer semantic `<button>` element**
2. **Use visible text labels** (not icon-only)
3. **Include `type` attribute** for clarity
4. **Provide clear, descriptive text**

## 🎛️ Component Variants

### Visual Variants
- **Primary**: Main call-to-action styling
- **Secondary**: Secondary action styling
- **Ghost/Outline**: Subtle, outline-only styling
- **Danger**: Destructive action warning
- **Link**: Text-only, link-like appearance

### Size Variants
- **xs**: Extra small (mobile-friendly)
- **sm**: Small
- **md**: Medium (default)
- **lg**: Large
- **xl**: Extra large

### State Variants
- **Normal**: Default interactive state
- **Disabled**: Non-interactive state
- **Loading**: Action in progress

## 🔒 Accessibility Compliance

### WCAG 2.1 Requirements
- **Keyboard Access**: Full keyboard operability
- **Focus Indication**: Clear focus indicators
- **Color Contrast**: Sufficient contrast ratios
- **Text Alternatives**: Meaningful button labels
- **Consistent Behavior**: Predictable interaction patterns

### APG Compliance Checklist
- [ ] Semantic `<button>` element used
- [ ] Space and Enter key activation
- [ ] Proper focus management
- [ ] Clear accessible name
- [ ] Appropriate ARIA attributes
- [ ] Visual state indicators
- [ ] Disabled state handling

### BBC GEL Compliance
- [ ] Text labels preferred over icons
- [ ] Correct semantic HTML usage
- [ ] High contrast mode support
- [ ] Predictable behavior patterns
- [ ] Clear state communication

## 🧪 Testing Requirements

### Manual Testing
1. **Keyboard Navigation**: Tab to button, activate with Space/Enter
2. **Screen Reader**: Verify button is announced correctly
3. **Visual States**: Confirm all states are visually distinct
4. **High Contrast**: Test in high contrast modes
5. **Touch Interaction**: Verify touch activation works

### Automated Testing
1. **Accessibility**: axe-core compliance
2. **Keyboard Events**: Space and Enter activation
3. **ARIA Attributes**: Correct attribute values
4. **Focus Management**: Proper focus behavior
5. **State Management**: Toggle state transitions

## 🏛️ Architecture Decisions

### Implementation Approach
- **Foundation**: Semantic `<button>` element
- **Web Component**: Lit-based implementation
- **Almost Headless**: Functional CSS only
- **External Dependencies**: None required
- **Progressive Enhancement**: Works without JavaScript

### Extension Points
- **CSS Parts**: For external styling
- **CSS Custom Properties**: For theming
- **Slot Content**: For flexible content composition
- **Event System**: Custom events for interactions

### Performance Considerations
- **Lightweight**: Minimal CSS and JavaScript
- **Fast Rendering**: Efficient DOM updates
- **Bundle Size**: Optimize for production
- **Memory Usage**: Clean up event listeners

## 📐 Implementation Complexity

**Assessment**: 🟡 **Foundation Level**
- **Estimated Timeline**: 2-3 hours
- **External Dependencies**: None
- **APG Complexity**: Moderate (multiple states, focus management)
- **Testing Scope**: Comprehensive (5+ interaction patterns)

## 🔄 Success Criteria

### Functional Success
- [ ] All button types work correctly
- [ ] Keyboard interaction fully functional
- [ ] Visual states clearly communicated
- [ ] Toggle functionality (when enabled)
- [ ] Form integration works properly

### Accessibility Success
- [ ] 100% APG compliance
- [ ] 100% BBC GEL compliance
- [ ] Zero axe-core violations
- [ ] Screen reader compatibility
- [ ] Keyboard-only operability

### Quality Success
- [ ] Almost headless architecture
- [ ] Clean ejection with `agui eject button`
- [ ] Comprehensive test coverage
- [ ] Gold standard pattern followed
- [ ] Documentation complete

---

**This specification provides the complete foundation for implementing a production-ready, APG-compliant Button component following AgnosticUI v2's gold standard pattern.**