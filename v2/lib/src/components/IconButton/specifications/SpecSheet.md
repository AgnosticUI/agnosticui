# IconButton Component - Comprehensive Specification

*Based on Sara Soueidan's accessible icon button guidelines and WAI-ARIA APG patterns*

## <¯ Component Purpose

A foundational icon-only button component that enables users to trigger actions using visual icons instead of text. Commonly used for close buttons (×), menu toggles (0), navigation controls, and compact interfaces where space is limited.

## =Ë Functional Requirements

### Core Functionality
- **Icon-Only Interface**: Primary visual communication through icons
- **Action Triggering**: Execute user-defined actions on activation
- **Accessible Labeling**: Provide clear accessible names for screen readers
- **State Management**: Handle normal, hover, focus, pressed, and disabled states
- **Icon Flexibility**: Support multiple icon types and sources

### Icon Button Types
1. **Close/Dismiss Button**: × symbol for closing dialogs, tooltips, etc.
2. **Menu Button**: 0 hamburger menu toggle
3. **Navigation Button**: Arrow icons for prev/next actions
4. **Action Button**: Edit, delete, save icons for quick actions
5. **Toggle Button**: Play/pause, expand/collapse states

### Icon Sources Supported
- **SVG Icons**: Preferred for scalability and accessibility
- **Unicode Symbols**: × 0  ’ ‘ “ for simple cases
- **Slotted Content**: Custom icon content via slots

## ( Keyboard Interaction Requirements

| Key | Action | Notes |
|-----|--------|-------|
| **Space** | Activates button | Primary activation method |
| **Enter** | Activates button | Alternative activation method |
| **Tab** | Moves focus to button | Standard focus navigation |
| **Shift + Tab** | Moves focus away from button | Reverse focus navigation |

### Focus Management
- **On activation**: Focus behavior depends on action context
  - **Dialog closing**: Focus returns to triggering element
  - **Menu opening**: Focus moves to first menu item
  - **Navigation**: Focus follows navigation direction
  - **No context change**: Focus remains on button

## <¨ Visual State Requirements

### Required Visual States
1. **Normal**: Default appearance with icon
2. **Hover**: Subtle background or icon color change
3. **Focus**: High-contrast focus ring (not relying on icon color)
4. **Active/Pressed**: Click feedback indication
5. **Disabled**: Reduced opacity, non-interactive state
6. **Loading**: Optional loading state for async actions

### Size Variants
- **xs**: 24px × 24px (16px icon)
- **sm**: 32px × 32px (20px icon)
- **md**: 40px × 40px (24px icon) - default
- **lg**: 48px × 48px (28px icon)
- **xl**: 56px × 56px (32px icon)

## =' ARIA Requirements

### Required Attributes
- **Role**: `button` (implicit with `<button>` element)
- **Accessible Name**: **CRITICAL** - One of:
  - `aria-label` attribute (preferred for icon-only buttons)
  - `aria-labelledby` referencing descriptive text
  - Visually hidden text content
  - SVG with accessible title

### Optional Attributes
- `aria-describedby`: Additional description if needed
- `aria-disabled="true"`: When action unavailable (prefer `disabled` attribute)
- `aria-pressed="true|false"`: For toggle icon buttons
- `aria-expanded="true|false"`: For menu/disclosure icon buttons

### Critical Accessibility Requirements
1. **MUST have accessible name** - icon alone is insufficient
2. **Icon MUST be hidden from screen readers** with `aria-hidden="true"`
3. **SVG icons MUST have `focusable="false"`** to prevent focus in IE
4. **Focus indicators MUST NOT rely on icon color** - use outline/background

## <× HTML Structure Requirements

### Semantic Foundation
```html
<!-- Preferred: aria-label approach -->
<button type="button" aria-label="Close dialog">
  <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24">
    <!-- icon content -->
  </svg>
</button>

<!-- Alternative: visually hidden text -->
<button type="button">
  <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24">
    <!-- icon content -->
  </svg>
  <span class="visually-hidden">Close dialog</span>
</button>
```

### Accessibility Guidelines (Sara Soueidan)
1. **Use semantic `<button>` element**
2. **Provide accessible name** via `aria-label` or hidden text
3. **Hide decorative icons** with `aria-hidden="true"`
4. **Prevent IE focus issues** with `focusable="false"` on SVG
5. **Use SVG over icon fonts** for better accessibility

## <› Component API Design

### Properties
```typescript
interface IconButtonProps {
  // Required
  label: string;                    // Accessible name (aria-label)

  // Icon source options
  icon?: string;                    // Icon identifier/name
  unicode?: string;                 // Unicode symbol (×, 0, etc.)

  // Appearance
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';

  // States
  disabled?: boolean;
  pressed?: boolean;               // For toggle buttons
  loading?: boolean;               // For async actions

  // Button behavior
  type?: 'button' | 'submit' | 'reset';
}
```

### Slots
- **Default slot**: Custom icon content
- **loading**: Custom loading indicator

### Events
- `click`: Button activation
- `focus`: Focus received
- `blur`: Focus lost

## =Ð Implementation Complexity

**Assessment**: =á **Foundation Level**
- **Estimated Timeline**: 3-4 hours
- **External Dependencies**: None required
- **Accessibility Complexity**: High (critical accessible naming requirements)
- **Testing Scope**: Comprehensive (accessibility focus, multiple icon types)

## = Accessibility Compliance

### WCAG 2.1 Requirements
- **Keyboard Access**: Full keyboard operability
- **Focus Indication**: Clear focus indicators independent of icon
- **Color Contrast**: Icon and background meet contrast requirements
- **Text Alternatives**: Meaningful accessible names required
- **Consistent Behavior**: Predictable interaction patterns

### Sara Soueidan Compliance Checklist
- [ ] Semantic `<button>` element used
- [ ] Accessible name provided via `aria-label` or hidden text
- [ ] Icon hidden from screen readers with `aria-hidden="true"`
- [ ] SVG has `focusable="false"` attribute
- [ ] Focus indicators don't rely on icon color
- [ ] Space and Enter key activation work
- [ ] Button purpose is clear from accessible name

### APG Compliance Checklist
- [ ] Button role and semantics correct
- [ ] Keyboard activation functional
- [ ] Focus management appropriate for action
- [ ] State communication via ARIA when needed
- [ ] Visual states clearly distinguishable

## >ê Testing Requirements

### Manual Testing
1. **Keyboard Navigation**: Tab to button, activate with Space/Enter
2. **Screen Reader**: Verify accessible name is announced clearly
3. **Visual States**: Confirm all states work with different icons
4. **Icon Rendering**: Test SVG, Unicode, and slotted content
5. **Focus Indicators**: Verify focus ring visibility on all variants

### Automated Testing
1. **Accessibility**: axe-core compliance (zero violations)
2. **Keyboard Events**: Space and Enter activation
3. **ARIA Attributes**: Correct accessible name computation
4. **Icon Accessibility**: Proper aria-hidden and focusable attributes
5. **State Management**: Toggle and loading states

## <Û Architecture Decisions

### Implementation Approach
- **Foundation**: Semantic `<button>` element
- **Web Component**: Lit-based implementation
- **Almost Headless**: Functional CSS only (positioning, states)
- **Icon Agnostic**: Support multiple icon sources
- **Accessibility First**: Prioritize accessible naming

### Icon Strategy
1. **Primary**: SVG icons with `aria-hidden="true"`
2. **Fallback**: Unicode symbols for simple cases
3. **Flexible**: Slot support for custom icons
4. **Consistent**: Standardized sizing and positioning

### Extension Points
- **CSS Parts**: For external styling
- **CSS Custom Properties**: For theming
- **Slot Content**: For custom icons
- **Event System**: Custom events for interactions

## = Success Criteria

### Functional Success
- [ ] All icon types render correctly
- [ ] Accessible names work properly
- [ ] Keyboard interaction fully functional
- [ ] Visual states clearly communicated
- [ ] Toggle functionality (when enabled)

### Accessibility Success
- [ ] 100% Sara Soueidan pattern compliance
- [ ] Zero axe-core violations
- [ ] Screen reader announces meaningful names
- [ ] Keyboard-only operability confirmed
- [ ] Focus indicators independent of icon color

### Quality Success
- [ ] Almost headless architecture
- [ ] Clean ejection with `agui eject iconbutton`
- [ ] Comprehensive test coverage
- [ ] Multiple icon source support
- [ ] Semantic token integration

---

**This specification provides the complete foundation for implementing a production-ready, accessible IconButton component following Sara Soueidan's best practices and AgnosticUI v2's gold standard pattern.**