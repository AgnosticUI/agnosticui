# Combobox Component Specification

## Component Overview

The Combobox is an accessible autocomplete widget that combines a text input with a filterable dropdown list. It supports single and multi-selection, keyboard navigation, and follows W3C ARIA APG combobox patterns.

**Key Features:**
- Single and multi-select modes
- Real-time filtering (starts-with, contains, fuzzy)
- Keyboard-first navigation using aria-activedescendant
- Async option loading
- Composable with Input, Menu, and Tag components
- Full WCAG 2.1 AA compliance

## Component Hierarchy

```
ag-combobox (host)
├── .combobox-wrapper
│   ├── .combobox-label (conditional)
│   ├── .combobox-input-wrapper
│   │   ├── .combobox-tags (multiselect only)
│   │   │   └── ag-tag (repeated, removable)
│   │   ├── input[role="combobox"]
│   │   └── .combobox-toggle-button
│   ├── .combobox-listbox[role="listbox"]
│   │   ├── .combobox-option[role="option"] (repeated)
│   │   ├── .combobox-group (grouped options)
│   │   │   ├── .combobox-group-label
│   │   │   └── .combobox-option (repeated)
│   │   ├── .combobox-loading (loading state)
│   │   └── .combobox-no-results (empty state)
│   ├── .combobox-help-text (conditional)
│   └── .combobox-error-message (conditional)
└── .combobox-sr-announcer[aria-live="polite"] (visually hidden)
```

## Props Interface

```typescript
export interface ComboboxOption {
  value: string;
  label: string;
  disabled?: boolean;
  group?: string;
  // For rich content (future)
  icon?: string; // Generic icon/image URL or identifier
  description?: string;
  metadata?: Record<string, any>; // Flexible metadata for custom rendering
}

export interface ComboboxProps {
  // Data
  options: ComboboxOption[];
  value?: string | string[];
  defaultValue?: string | string[];
  placeholder?: string;

  // Label & Accessibility
  label?: string;
  labelHidden?: boolean;
  noLabel?: boolean;
  ariaLabel?: string;
  labelledBy?: string;
  helpText?: string;
  errorText?: string;
  id?: string;

  // Behavior
  multiple?: boolean;
  autocomplete?: 'list' | 'both' | 'none';
  filterMode?: 'startsWith' | 'contains' | 'fuzzy' | 'none';
  allowCustom?: boolean;
  clearable?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  invalid?: boolean;

  // UI Configuration
  size?: 'small' | 'default' | 'large';
  maxVisibleOptions?: number;
  maxTags?: number; // Multiselect only
  closeOnSelect?: boolean; // Default true for single, false for multi

  // Async & Loading
  loading?: boolean;
  loadingText?: string;
  noResultsText?: string;
  minSearchLength?: number;
  debounceMs?: number;

  // Callbacks
  onChange?: (event: ComboboxChangeEvent) => void;
  onSelect?: (event: ComboboxSelectEvent) => void;
  onRemove?: (event: ComboboxRemoveEvent) => void;
  onSearch?: (event: ComboboxSearchEvent) => void;
  onOpen?: (event: ComboboxOpenEvent) => void;
  onClose?: (event: ComboboxCloseEvent) => void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
}
```

## Events

```typescript
export interface ComboboxChangeEventDetail {
  value: string | string[];
  options: ComboboxOption[];
}
export type ComboboxChangeEvent = CustomEvent<ComboboxChangeEventDetail>;

export interface ComboboxSelectEventDetail {
  option: ComboboxOption;
  value: string | string[];
}
export type ComboboxSelectEvent = CustomEvent<ComboboxSelectEventDetail>;

export interface ComboboxRemoveEventDetail {
  option: ComboboxOption;
  value: string | string[];
}
export type ComboboxRemoveEvent = CustomEvent<ComboboxRemoveEventDetail>;

export interface ComboboxSearchEventDetail {
  searchTerm: string;
}
export type ComboboxSearchEvent = CustomEvent<ComboboxSearchEventDetail>;

export interface ComboboxOpenEventDetail {
  open: boolean;
}
export type ComboboxOpenEvent = CustomEvent<ComboboxOpenEventDetail>;

export interface ComboboxCloseEventDetail {
  open: boolean;
}
export type ComboboxCloseEvent = CustomEvent<ComboboxCloseEventDetail>;
```

## ARIA Implementation

### Textbox (Input Element)

```html
<input
  role="combobox"
  aria-autocomplete="list"
  aria-controls="combobox-listbox-123"
  aria-expanded="true"
  aria-activedescendant="combobox-option-5"
  aria-haspopup="listbox"
  aria-labelledby="combobox-label-123"
  aria-describedby="combobox-helptext-123 combobox-error-123"
  aria-invalid="false"
  aria-required="false"
/>
```

### Listbox (Dropdown)

```html
<div
  role="listbox"
  id="combobox-listbox-123"
  aria-label="Suggestions"
  aria-multiselectable="false"
>
  <div
    role="option"
    id="combobox-option-1"
    aria-selected="false"
    aria-disabled="false"
  >
    Option Label
  </div>
</div>
```

### Multiselect Tags

```html
<div
  class="combobox-tags"
  role="region"
  aria-label="Selected items"
  aria-live="polite"
>
  <ag-tag
    removable
    role="button"
    aria-label="Remove California"
    tabindex="0"
  >
    California
  </ag-tag>
</div>
```

### Screen Reader Announcer

```html
<div
  class="combobox-sr-announcer"
  role="status"
  aria-live="polite"
  aria-atomic="true"
>
  <!-- Dynamic announcements -->
  California, 1 of 50
</div>
```

## State Management

### Internal State

```typescript
private _open: boolean = false;
private _searchTerm: string = '';
private _filteredOptions: ComboboxOption[] = [];
private _activeIndex: number = -1;
private _selectedOptions: ComboboxOption[] = [];
private _focusedTagIndex: number = -1;
```

### Computed Properties

```typescript
get isOpen(): boolean;
get activeOption(): ComboboxOption | null;
get activeOptionId(): string | null;
get hasSelection(): boolean;
get displayValue(): string;
get visibleOptions(): ComboboxOption[];
```

## Methods

### Public Methods

```typescript
// Focus management
focus(): void;
blur(): void;

// Listbox control
open(): void;
close(): void;
toggle(): void;

// Selection
selectOption(option: ComboboxOption): void;
removeOption(option: ComboboxOption): void;
clearSelection(): void;

// Filtering
setSearchTerm(term: string): void;
filterOptions(term: string): ComboboxOption[];
```

### Private Methods

```typescript
private _handleInputChange(e: Event): void;
private _handleInputKeyDown(e: KeyboardEvent): void;
private _handleOptionClick(option: ComboboxOption): void;
private _handleOptionKeyDown(e: KeyboardEvent): void;
private _handleTagRemove(option: ComboboxOption): void;
private _handleTagKeyDown(e: KeyboardEvent): void;
private _handleToggleClick(): void;
private _handleClickOutside(e: MouseEvent): void;

private _updateActiveIndex(delta: number): void;
private _scrollOptionIntoView(index: number): void;
private _announceOption(option: ComboboxOption): void;
private _filterOptions(): void;
private _getOptionId(index: number): string;
```

## Keyboard Interactions

### Input Focus State

| Key | Behavior |
|-----|----------|
| **Down Arrow** | Opens listbox; moves visual focus to first option |
| **Up Arrow** | Opens listbox; moves visual focus to last option |
| **Alt + Down** | Opens listbox without changing active option |
| **Enter** | If open: selects active option, closes (single-select). If closed: submits form |
| **Escape** | If open: closes listbox. If closed and has text: clears input. If multiselect and text empty: removes last tag |
| **Backspace** | (Multiselect) If input empty and tags exist: removes last tag, focuses it |
| **Tab** | Closes listbox if open; moves to next element |
| **Printable chars** | Opens listbox (if closed); filters options |

### Listbox Open State (via aria-activedescendant)

| Key | Behavior |
|-----|----------|
| **Down Arrow** | Moves visual focus to next option (wraps to first) |
| **Up Arrow** | Moves visual focus to previous option (wraps to last) |
| **Home** | Moves visual focus to first option |
| **End** | Moves visual focus to last option |
| **Enter** | Selects active option; closes listbox (if closeOnSelect) |
| **Space** | (Alternative) Selects active option |
| **Escape** | Closes listbox; returns focus to input |
| **Tab** | Selects active option (if any); closes listbox; moves to next element |
| **Printable chars** | Filters options; resets active index |

### Tag Focus State (Multiselect)

| Key | Behavior |
|-----|----------|
| **Delete / Backspace** | Removes focused tag; focuses previous tag or input |
| **Right Arrow** | Moves focus to next tag (or input if last) |
| **Left Arrow** | Moves focus to previous tag |
| **Escape** | Returns focus to input |
| **Enter / Space** | Removes focused tag |

## Styling Architecture

### CSS Custom Properties

```css
:host {
  /* Component sizing */
  --combobox-min-width: 200px;
  --combobox-max-width: 100%;

  /* Listbox */
  --combobox-listbox-max-height: 300px;
  --combobox-listbox-min-width: var(--combobox-min-width);

  /* Options */
  --combobox-option-padding: var(--ag-space-3) var(--ag-space-4);
  --combobox-option-gap: var(--ag-space-1);
  --combobox-option-selected-bg: var(--ag-blue-100);
  --combobox-option-hover-bg: var(--ag-background-tertiary);
  --combobox-option-focus-bg: var(--ag-blue-50);
  --combobox-option-disabled-opacity: 0.5;

  /* Tags (multiselect) */
  --combobox-tag-gap: var(--ag-space-2);
  --combobox-tag-padding: var(--ag-space-2);

  /* Toggle button */
  --combobox-toggle-size: var(--ag-space-6);
  --combobox-toggle-padding: var(--ag-space-2);
}
```

### Size Variants

```css
/* Small */
:host([size="small"]) {
  --combobox-option-padding: var(--ag-space-2) var(--ag-space-3);
  --combobox-toggle-size: var(--ag-space-5);
  font-size: var(--ag-font-size-sm);
}

/* Large */
:host([size="large"]) {
  --combobox-option-padding: var(--ag-space-4) var(--ag-space-5);
  --combobox-toggle-size: var(--ag-space-7);
  font-size: var(--ag-font-size-lg);
}
```

### Component States

```css
/* Disabled */
:host([disabled]) {
  opacity: var(--ag-opacity-disabled);
  cursor: not-allowed;
}

/* Invalid */
:host([invalid]) .combobox-input-wrapper {
  border-color: var(--ag-danger);
}

/* Open */
:host([open]) .combobox-listbox {
  display: block;
}

/* Focus */
.combobox-input:focus {
  outline: var(--ag-focus-ring-width) solid var(--ag-focus-ring-color);
  outline-offset: var(--ag-focus-ring-offset);
}
```

### Option States

```css
/* Active (keyboard navigation) */
.combobox-option[aria-selected="true"] {
  background-color: var(--combobox-option-focus-bg);
  position: relative;
}

.combobox-option[aria-selected="true"]::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: var(--ag-space-1);
  background-color: var(--ag-primary);
}

/* Hover */
.combobox-option:hover:not([aria-disabled="true"]) {
  background-color: var(--combobox-option-hover-bg);
  cursor: pointer;
}

/* Disabled */
.combobox-option[aria-disabled="true"] {
  opacity: var(--combobox-option-disabled-opacity);
  cursor: not-allowed;
}

/* Selected (multiselect) */
.combobox-option.is-selected {
  background-color: var(--combobox-option-selected-bg);
  font-weight: var(--ag-font-weight-semibold);
}

.combobox-option.is-selected::after {
  content: '✓';
  margin-left: auto;
  color: var(--ag-primary);
}
```

## Component Integration

### Integration with Input Component

The Combobox uses the Input component internally but overrides certain behaviors:

```typescript
import { AgInput } from '../../Input/core/_Input';

// In Combobox render:
html`
  <ag-input
    .value=${this._searchTerm}
    .placeholder=${this.placeholder}
    .size=${this.size}
    .disabled=${this.disabled}
    .readonly=${this.readonly}
    .noLabel=${true}
    @input=${this._handleInputChange}
    @keydown=${this._handleInputKeyDown}
    @focus=${this._handleInputFocus}
    @blur=${this._handleInputBlur}
  ></ag-input>
`

// Post-render: Add combobox ARIA attributes
this._inputElement?.setAttribute('role', 'combobox');
this._inputElement?.setAttribute('aria-autocomplete', this.autocomplete);
this._inputElement?.setAttribute('aria-controls', this._listboxId);
```

### Integration with Menu Component

The Combobox adapts Menu's structure for listbox rendering:

```typescript
// Use Menu's styling patterns but render custom markup
// Menu provides positioning, z-index, and dropdown patterns
// Combobox adds role="listbox" and aria-activedescendant management

// Reference Menu's CSS for:
// - Dropdown positioning (absolute, z-index)
// - Shadow/border styling
// - Scroll behavior
```

### Integration with Tag Component

For multiselect mode, render ag-tag for each selected option:

```typescript
html`
  <div class="combobox-tags">
    ${this._selectedOptions.map((opt, index) => html`
      <ag-tag
        removable
        .variant=${''}
        @tag-remove=${() => this._handleTagRemove(opt)}
        @keydown=${(e: KeyboardEvent) => this._handleTagKeyDown(e, index)}
        tabindex=${this._focusedTagIndex === index ? '0' : '-1'}
        role="button"
        aria-label="Remove ${opt.label}"
      >
        ${opt.label}
      </ag-tag>
    `)}
  </div>
`
```

## Filtering Implementation

### Starts With (Default)

```typescript
private _filterStartsWith(options: ComboboxOption[], term: string): ComboboxOption[] {
  const lowerTerm = term.toLowerCase();
  return options.filter(opt =>
    opt.label.toLowerCase().startsWith(lowerTerm)
  );
}
```

### Contains

```typescript
private _filterContains(options: ComboboxOption[], term: string): ComboboxOption[] {
  const lowerTerm = term.toLowerCase();
  return options.filter(opt =>
    opt.label.toLowerCase().includes(lowerTerm)
  );
}
```

### Fuzzy (Simplified)

```typescript
private _filterFuzzy(options: ComboboxOption[], term: string): ComboboxOption[] {
  const lowerTerm = term.toLowerCase().replace(/\s/g, '');
  return options.filter(opt => {
    const lowerLabel = opt.label.toLowerCase().replace(/\s/g, '');
    let termIndex = 0;

    for (let i = 0; i < lowerLabel.length && termIndex < lowerTerm.length; i++) {
      if (lowerLabel[i] === lowerTerm[termIndex]) {
        termIndex++;
      }
    }

    return termIndex === lowerTerm.length;
  });
}
```

### None (Server-side)

```typescript
// Options filtered externally, passed via options prop
// Component just displays provided options
private _filterNone(options: ComboboxOption[], term: string): ComboboxOption[] {
  return options; // No client-side filtering
}
```

## Async Loading Pattern

```typescript
private async _handleSearch(term: string): Promise<void> {
  // Debounce search
  clearTimeout(this._searchDebounceTimeout);

  this._searchDebounceTimeout = setTimeout(async () => {
    // Emit search event for parent to handle
    this.dispatchEvent(new CustomEvent('search', {
      detail: { searchTerm: term },
      bubbles: true,
      composed: true
    }));

    // Parent updates options prop with results
    // Component sets loading state during fetch
  }, this.debounceMs);
}

// Usage in parent:
<ag-combobox
  .options=${this.searchResults}
  .loading=${this.isSearching}
  @search=${async (e) => {
    this.isSearching = true;
    this.searchResults = await fetchResults(e.detail.searchTerm);
    this.isSearching = false;
  }}
>
</ag-combobox>
```

## Accessibility Features

### Screen Reader Announcements

```typescript
private _announceOption(option: ComboboxOption): void {
  const activeIndex = this._filteredOptions.indexOf(option);
  const total = this._filteredOptions.length;
  const message = `${option.label}, ${activeIndex + 1} of ${total}`;

  // Update aria-live region
  if (this._srAnnouncer) {
    this._srAnnouncer.textContent = message;
  }
}

private _announceNoResults(): void {
  if (this._srAnnouncer) {
    this._srAnnouncer.textContent = this.noResultsText || 'No results found';
  }
}
```

### Focus Management

```typescript
private _scrollOptionIntoView(index: number): void {
  if (index < 0 || index >= this._filteredOptions.length) return;

  const optionId = this._getOptionId(index);
  const optionEl = this.shadowRoot?.getElementById(optionId);

  if (optionEl && this._listboxElement) {
    // Scroll into view with padding
    const listboxRect = this._listboxElement.getBoundingClientRect();
    const optionRect = optionEl.getBoundingClientRect();

    if (optionRect.bottom > listboxRect.bottom) {
      optionEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    } else if (optionRect.top < listboxRect.top) {
      optionEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }
}
```

### High Contrast Mode

```css
/* Windows High Contrast Mode support */
@media (forced-colors: active) {
  .combobox-option[aria-selected="true"] {
    outline: 2px solid CanvasText;
    outline-offset: -2px;
  }

  .combobox-option:hover {
    outline: 2px solid Highlight;
  }

  .combobox-toggle-button {
    border: 1px solid ButtonText;
  }
}
```

## Variants & Examples

### Basic Single-Select

```html
<ag-combobox
  label="State"
  placeholder="Select a state..."
  .options=${states}
  @change=${(e) => console.log(e.detail.value)}
>
</ag-combobox>
```

### Multiselect

```html
<ag-combobox
  label="Select multiple states"
  placeholder="Type to search..."
  multiple
  .options=${states}
  .value=${['CA', 'NY', 'TX']}
  @change=${(e) => console.log(e.detail.value)}
>
</ag-combobox>
```

### Async Search

```html
<ag-combobox
  label="Search users"
  placeholder="Type to search..."
  filter-mode="none"
  .options=${searchResults}
  .loading=${isSearching}
  .debounceMs=${300}
  @search=${handleSearch}
>
</ag-combobox>
```

### Grouped Options

```html
<ag-combobox
  label="Select a city"
  .options=${[
    { value: 'sf', label: 'San Francisco', group: 'California' },
    { value: 'la', label: 'Los Angeles', group: 'California' },
    { value: 'nyc', label: 'New York', group: 'New York' }
  ]}
>
</ag-combobox>
```

### Custom Values Allowed

```html
<ag-combobox
  label="Tags"
  placeholder="Add tags..."
  multiple
  allow-custom
  .options=${suggestedTags}
>
</ag-combobox>
```

## Testing Requirements

### Unit Tests

- [ ] Filtering (all modes: startsWith, contains, fuzzy)
- [ ] Single selection
- [ ] Multi selection
- [ ] Tag removal
- [ ] Keyboard navigation (all keys)
- [ ] ARIA attribute updates
- [ ] Open/close behavior
- [ ] Click outside to close
- [ ] Disabled state
- [ ] Loading state

### Integration Tests

- [ ] Input + listbox coordination
- [ ] Tag + input coordination
- [ ] Async option loading
- [ ] Form integration
- [ ] Value synchronization (controlled mode)

### Accessibility Tests

- [ ] Screen reader announcements (NVDA, JAWS, VoiceOver)
- [ ] Keyboard-only navigation
- [ ] aria-activedescendant updates
- [ ] High contrast mode
- [ ] Screen magnification (200% zoom)
- [ ] Touch/mobile interactions

## CSS Parts API

```css
/* Exposed CSS Parts for customization */
::part(ag-combobox-wrapper) { /* .combobox-wrapper */ }
::part(ag-combobox-label) { /* .combobox-label */ }
::part(ag-combobox-input-wrapper) { /* .combobox-input-wrapper */ }
::part(ag-combobox-input) { /* input element */ }
::part(ag-combobox-tags) { /* .combobox-tags */ }
::part(ag-combobox-toggle-button) { /* .combobox-toggle-button */ }
::part(ag-combobox-listbox) { /* .combobox-listbox */ }
::part(ag-combobox-option) { /* .combobox-option */ }
::part(ag-combobox-group) { /* .combobox-group */ }
::part(ag-combobox-group-label) { /* .combobox-group-label */ }
::part(ag-combobox-loading) { /* .combobox-loading */ }
::part(ag-combobox-no-results) { /* .combobox-no-results */ }
::part(ag-combobox-help-text) { /* .combobox-help-text */ }
::part(ag-combobox-error-message) { /* .combobox-error-message */ }
```

## Implementation Phases

### Phase 1: MVP (Core Single-Select)
- [ ] Basic input with role="combobox"
- [ ] Listbox rendering with role="listbox"
- [ ] Keyboard navigation (arrows, enter, escape)
- [ ] aria-activedescendant focus management
- [ ] Filtering: startsWith and contains
- [ ] Single selection
- [ ] Basic styling with design tokens
- [ ] Screen reader announcements

### Phase 2: Enhanced Features
- [ ] Multiselect mode
- [ ] Tag integration for selected items
- [ ] Tag removal (keyboard + mouse)
- [ ] Grouped options
- [ ] Custom values (allowCustom)
- [ ] Clearable button
- [ ] Size variants (small, default, large)
- [ ] Loading states

### Phase 3: Advanced
- [ ] Async filtering with debounce
- [ ] Fuzzy matching
- [ ] Virtual scrolling (large lists)
- [ ] Autocomplete "both" (inline + list)
- [ ] Rich option content (icons, descriptions)
- [ ] Mobile-optimized modal mode
- [ ] Framework wrappers (Vue, React)

## Design Token Dependencies

### Existing Tokens (Available)
```css
--ag-font-size-sm
--ag-font-size-base
--ag-font-size-lg
--ag-space-1, --ag-space-2, --ag-space-3, --ag-space-4, --ag-space-5
--ag-border, --ag-border-width-1
--ag-radius-sm, --ag-radius-md
--ag-background-primary, --ag-background-secondary, --ag-background-tertiary
--ag-text-primary, --ag-text-secondary
--ag-focus-ring-color, --ag-focus-ring-width, --ag-focus-ring-offset
--ag-shadow-sm, --ag-shadow-md, --ag-shadow-lg
--ag-z-index-dropdown
--ag-blue-50, --ag-blue-100
--ag-primary, --ag-danger, --ag-success, --ag-warning, --ag-info
--ag-opacity-disabled
```

### New Tokens Required (Add to theme-registry)
```css
/* Combobox-specific tokens */
--ag-combobox-listbox-max-height: 300px;
--ag-combobox-option-padding: var(--ag-space-3) var(--ag-space-4);
--ag-combobox-option-selected-bg: var(--ag-blue-100);
--ag-combobox-option-hover-bg: var(--ag-background-tertiary);
--ag-combobox-option-focus-bg: var(--ag-blue-50);
```

## Related Components

- [Input Component](../Input/core/_Input.ts) - Text input foundation
- [Menu Component](../Menu/core/_Menu.ts) - Dropdown patterns
- [Tag Component](../Tag/core/_Tag.ts) - Removable tags for multiselect
- [Floating UI](https://floating-ui.com/) - Dropdown positioning

## References

1. [W3C ARIA APG: Combobox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)
2. [Research Document](./research.md)
3. [AgnosticUI v2 Component Development Workflow](../../../docs2/COMPONENT_DEVELOPMENT_WORKFLOW.md)
