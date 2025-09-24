# Toggle Pattern: Accessibility Guidelines

## Overview
A toggle is a binary input widget that allows users to choose between two states: on or off. It differs from checkboxes and toggle buttons by exclusively supporting two states.

## Key Characteristics
- Represents a binary (on/off) input
- Label must remain constant regardless of state
- Semantically communicates state changes clearly

## Keyboard Interaction
- `Space`: Changes toggle state when focused
- `Enter` (Optional): Changes toggle state when focused

## ARIA Roles and Properties
### Required Attributes
- Role: `switch`
- Accessible Label via:
  - Visible text content
  - `aria-labelledby`
  - `aria-label`
- State Representation:
  - `aria-checked="true"` when on
  - `aria-checked="false"` when off

## Implementation Guidance
### Label Considerations
Choose semantics that best match the user interface context. Example:
- "Lights switch on" feels more natural than "Lights checkbox checked" for light controls
- "Lights checkbox checked" works better in a procedural checklist context

### Grouping Toggles
When presenting multiple toggles:
- Use `role="group"` with `aria-labelledby`
- Alternatively, use HTML `<fieldset>` with `<legend>`

### Additional Descriptive Text
- Use `aria-describedby` to reference supplementary explanatory text

## Recommended Examples
- Notification preferences
- Light/device control
- Accessibility setting toggles