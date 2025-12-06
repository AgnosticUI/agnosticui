# Combobox Component Research

## Overview

A Combobox is an input widget with an associated popup providing suggested values or options. It combines a text input with a listbox, enabling users to either select from a list or enter a custom value. This research synthesizes patterns from W3C ARIA APG, real-world implementations, and accessibility best practices.

## Component Composition

The Combobox will be composed from existing AgnosticUI v2 components:

- **Input** (`_Input.ts`): For the text input with typeahead functionality
- **Menu** (`_Menu.ts`): For the dropdown options list (acting as listbox)
- **Tag** (`_Tag.ts`): For multiselect mode, displaying selected items as removable tags

## Core Patterns

### 1. Autocomplete List (Primary Pattern)

The standard pattern where a listbox appears with filtered suggestions based on user input.

**Key Behaviors:**
- Listbox opens automatically when user types matching characters
- No automatic inline completion
- User must explicitly select from list or type complete value
- DOM focus remains on textbox while navigating suggestions

**Use Cases:**
- State/territory selection
- Search with suggestions
- Single-select dropdowns with filtering

### 2. Autocomplete Both (Advanced Pattern)

Combines dropdown list with inline text completion.

**Key Behaviors:**
- Dropdown list appears with suggestions
- First matching suggestion auto-completes inline after cursor
- Completion string is highlighted/selectable
- User can accept suggestion with Tab or continue typing

**Use Cases:**
- Search bars with auto-suggestion
- Command palettes
- Quick-entry forms

### 3. Multiselect Pattern

Extends combobox to allow multiple selections.

**Key Behaviors:**
- Selected items display as removable tags
- Input remains available for additional selections
- Tags can be removed via keyboard or click
- Selected items removed from available options

**Use Cases:**
- Category/tag selection
- Email recipient fields
- Filter builders

## ARIA Patterns

### Required ARIA Attributes

**Textbox (Input Element):**
```html
<input
  role="combobox"
  aria-autocomplete="list|both"
  aria-controls="listbox-id"
  aria-expanded="true|false"
  aria-activedescendant="active-option-id"
  aria-haspopup="listbox"
/>
```

**Listbox (Popup):**
```html
<ul role="listbox" id="listbox-id" aria-label="Suggestions">
  <li role="option" id="option-1" aria-selected="true|false">
    Option 1
  </li>
</ul>
```

**Multiselect Additions:**
```html
<input
  role="combobox"
  aria-autocomplete="list"
  aria-controls="listbox-id tags-container-id"
/>

<div id="tags-container-id" role="region" aria-label="Selected items">
  <button role="button" aria-label="Remove [item name]">
    [Tag content]
  </button>
</div>
```

### ARIA Attribute Behaviors

- **`aria-expanded`**: Set to `"true"` when listbox visible, `"false"` when hidden
- **`aria-activedescendant`**: References ID of visually focused option (not DOM focus)
- **`aria-selected`**: Only on the currently active option (`"true"`), removed from others
- **`aria-autocomplete`**: `"list"` for dropdown only, `"both"` for inline + dropdown

## Keyboard Interactions

### Textbox Focus

| Key | Behavior |
|-----|----------|
| **Down Arrow** | Opens listbox if closed; moves visual focus to first option |
| **Alt + Down Arrow** | Opens listbox without changing selection |
| **Up Arrow** | Opens listbox; moves visual focus to last option |
| **Enter** | If listbox open, accepts focused option and closes; if closed, submits form |
| **Escape** | If listbox open, closes listbox; if closed and has text, clears textbox |
| **Printable Characters** | Filters options based on typed characters |
| **Backspace** | (Multiselect) If input empty, removes last tag |

### Listbox Navigation (via aria-activedescendant)

| Key | Behavior |
|-----|----------|
| **Down/Up Arrow** | Moves visual focus between options (wraps at boundaries) |
| **Home/End** | Moves cursor in textbox to start/end |
| **Enter** | Selects focused option, closes listbox |
| **Escape** | Closes listbox, returns focus to textbox |
| **Printable Characters** | Types in textbox, filters results |
| **Tab** | Closes listbox, moves to next focusable element |

### Tag Focus (Multiselect)

| Key | Behavior |
|-----|----------|
| **Delete/Backspace** | Removes tag, focuses next/previous tag or input |
| **Arrow Keys** | Navigate between tags |
| **Escape** | Returns focus to input |

## Focus Management

### aria-activedescendant Pattern

AgnosticUI Combobox will use the `aria-activedescendant` pattern:

1. **DOM focus never leaves the textbox input**
2. Visual focus indicated by `aria-activedescendant` + CSS styling
3. JavaScript must scroll active option into view (browsers don't do this automatically)
4. More predictable screen reader behavior than roving tabindex

**Implementation Notes:**
- Update `aria-activedescendant` to ID of visually focused option
- Apply visual focus styles via `aria-selected="true"` or data attribute
- Programmatically scroll option into view when changed
- Critical for users with screen magnification

### Roving Focus Alternative (Not Used)

While valid, roving `tabindex` on options introduces complexity:
- Focus management when typing in textbox
- Requires explicit focus() calls
- Less consistent screen reader announcements
- More complex for multiselect scenarios

## Component States

### Visual States
- **Default**: Textbox empty, listbox closed
- **Typing**: User entering text, listbox opening with filtered results
- **Navigating**: Arrow keys moving through options
- **Selected**: Option chosen, listbox closes, value populates textbox
- **Empty Results**: No matches found for filter
- **Disabled**: Component non-interactive
- **Error**: Invalid input or validation failure

### Data States
- **Uncontrolled**: Component manages own state (value, open/closed)
- **Controlled**: Parent manages state via props and callbacks
- **Loading**: Async options being fetched
- **Filtered**: Options list filtered by search term

## Filtering Strategies

### 1. Starts With (Default)
```typescript
const filtered = options.filter(opt =>
  opt.label.toLowerCase().startsWith(searchTerm.toLowerCase())
);
```

**Pros:** Intuitive, performant, predictable order
**Use Case:** Short lists, predictable data (states, countries)

### 2. Contains (Substring Match)
```typescript
const filtered = options.filter(opt =>
  opt.label.toLowerCase().includes(searchTerm.toLowerCase())
);
```

**Pros:** More forgiving, finds partial matches
**Use Case:** Longer labels, varied terminology

### 3. Fuzzy Match
```typescript
// Matches characters in order but not necessarily contiguous
// "cal" matches "California", "Central America"
```

**Pros:** Very forgiving, handles typos
**Cons:** Requires library, more complex ordering
**Use Case:** Large datasets, user-error prone scenarios

### 4. Server-Side Filtering
```typescript
// Options fetched asynchronously based on search term
```

**Pros:** Handles massive datasets, real-time data
**Cons:** Network latency, loading states
**Use Case:** Dynamic data, APIs, large catalogs

## Mobile & Touch Considerations

### Virtual Keyboard
- Listbox must remain visible when keyboard appears
- Consider `scrollIntoView()` to keep input visible
- Test on iOS Safari (most restrictive) and Android Chrome

### Touch Interactions
- Include toggle button (even if `tabindex="-1"`) for touch users
- Ensure touch targets meet 44x44px minimum
- Support scroll gestures in listbox
- Handle touch outside to close (like Escape key)

### Small Screens
- Limit visible options (8-10 max) to avoid overwhelming UI
- Consider modal/fullscreen mode on mobile
- Ensure adequate spacing between options (min 8px)

## Accessibility Requirements

### Screen Reader Announcements

**On open:**
> "Listbox expanded. X suggestions available. [First option name], 1 of X"

**On navigation:**
> "[Option name], N of X"

**On selection:**
> "[Option name] selected. Listbox collapsed."

**On empty results:**
> "0 suggestions available"

### Implementation with aria-live

For Safari/VoiceOver compatibility, supplement `aria-activedescendant` with:

```html
<div role="status" aria-live="polite" aria-atomic="true" class="sr-only">
  {currentOption}, {index} of {total}
</div>
```

### Visual Requirements

**Focus Indicators:**
- Minimum 2px outline with 2px offset (WCAG 2.4.7)
- Contrast ratio 3:1 against adjacent colors (WCAG 2.4.11)

**Color Independence:**
- Selection state must be indicated beyond color alone
- Use icons, borders, or patterns as secondary indicators

**High Contrast Mode:**
- Use `currentColor` for borders/icons
- Test in Windows High Contrast Mode
- Avoid gradient backgrounds

## Component API Design

### Props

```typescript
interface ComboboxProps {
  // Data
  options: ComboboxOption[];
  value?: string | string[]; // Single or multi
  placeholder?: string;

  // Behavior
  multiple?: boolean;
  autocomplete?: 'list' | 'both' | 'none';
  filterMode?: 'startsWith' | 'contains' | 'fuzzy' | 'none';
  allowCustom?: boolean; // Allow values not in options
  clearable?: boolean;
  disabled?: boolean;

  // Async
  loading?: boolean;
  onSearch?: (term: string) => void | Promise<void>;

  // Callbacks
  onChange?: (value: string | string[]) => void;
  onSelect?: (option: ComboboxOption) => void;
  onRemove?: (option: ComboboxOption) => void;

  // UI
  size?: 'small' | 'default' | 'large';
  maxVisibleOptions?: number;
  noResultsText?: string;
  loadingText?: string;

  // Accessibility
  label?: string;
  helpText?: string;
  errorText?: string;
  id?: string;
}

interface ComboboxOption {
  value: string;
  label: string;
  disabled?: boolean;
  group?: string; // For grouped options
}
```

### Events

```typescript
interface ComboboxEvents {
  'change': CustomEvent<{ value: string | string[] }>;
  'select': CustomEvent<{ option: ComboboxOption }>;
  'remove': CustomEvent<{ option: ComboboxOption }>;
  'search': CustomEvent<{ term: string }>;
  'open': CustomEvent<void>;
  'close': CustomEvent<void>;
}
```

## Implementation Strategy

### Phase 1: Core Single-Select (MVP)
1. Input integration with typeahead
2. Menu integration for listbox
3. Filtering (starts-with and contains)
4. Keyboard navigation (arrows, enter, escape)
5. aria-activedescendant focus management
6. Basic styling with design tokens

### Phase 2: Enhanced Features
1. Multiselect with Tag integration
2. Tag removal with keyboard/mouse
3. Autocomplete "both" (inline completion)
4. Grouped options support
5. Custom values (allowCustom)
6. Loading states

### Phase 3: Advanced
1. Async filtering with debounce
2. Fuzzy matching
3. Virtual scrolling for large lists
4. Mobile-optimized modal mode
5. Rich option content (avatars, descriptions)

## Design Token Requirements

All styling must use `--ag-*` custom properties. Required tokens:

### Existing Tokens (Available)
- `--ag-font-size-sm`, `--ag-font-size-base`
- `--ag-space-2`, `--ag-space-3`, `--ag-space-4`
- `--ag-border`, `--ag-border-width-1`
- `--ag-radius-sm`, `--ag-radius-md`
- `--ag-background-primary`, `--ag-background-secondary`
- `--ag-text-primary`, `--ag-text-secondary`
- `--ag-focus-ring-color`, `--ag-focus-ring-width`
- `--ag-shadow-sm`, `--ag-shadow-md`
- `--ag-z-index-dropdown`, `--ag-z-index-modal`

### New Tokens Needed
- `--ag-combobox-listbox-max-height` (default: `300px`)
- `--ag-combobox-option-padding` (default: `var(--ag-space-3) var(--ag-space-4)`)
- `--ag-combobox-option-selected-bg` (default: `var(--ag-blue-100)`)
- `--ag-combobox-option-hover-bg` (default: `var(--ag-background-tertiary)`)

## Testing Requirements

### Unit Tests
- Option filtering (all modes)
- Keyboard navigation
- Selection/deselection
- Tag removal (multiselect)
- ARIA attribute updates

### Integration Tests
- Input + Menu coordination
- Tag + Input coordination
- Async option loading
- Form integration

### Accessibility Tests
- Screen reader announcements (NVDA, JAWS, VoiceOver)
- Keyboard-only navigation
- High contrast mode
- Screen magnification (zoom)
- Touch/mobile devices

## References

1. [W3C ARIA APG: Combobox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)
2. [W3C Example: Autocomplete List](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-list/)
3. [W3C Example: Autocomplete Both](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-both/)
4. [Accessible Combobox Implementation](https://github.com/junjizhi/accessible-combobox)
5. [Make Things Accessible: Combobox Guide](https://www.makethingsaccessible.com/guides/accessible-site-search-with-combobox-suggestions/)
6. [AgnosticUI v2: Input Component](../Input/core/_Input.ts)
7. [AgnosticUI v2: Menu Component](../Menu/core/_Menu.ts)
8. [AgnosticUI v2: Tag Component](../Tag/core/_Tag.ts)

## Next Steps

1. Create `SpecSheet.md` based on this research
2. Implement core `_Combobox.ts` with Input + Menu integration
3. Add multiselect support with Tag integration
4. Create framework wrappers (Vue, React, Lit)
5. Build comprehensive examples and stories
6. Write user documentation
