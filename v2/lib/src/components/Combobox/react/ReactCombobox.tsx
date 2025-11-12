import * as React from 'react';
import { createComponent } from '@lit/react';
import { AgCombobox, type ComboboxProps, type ComboboxOption, type ComboboxChangeEvent, type ComboboxSelectEvent, type ComboboxSearchEvent, type ComboboxOpenEvent, type ComboboxCloseEvent } from '../core/Combobox';

/**
 * React-specific props for Combobox
 *
 * Following AgnosticUI v2 event conventions:
 * - Custom events are mapped via @lit/react's events object
 * - Native events (focus, blur) work automatically
 */
export interface ReactComboboxProps extends ComboboxProps {
  children?: React.ReactNode;
  className?: string;
  // Custom event handlers
  onChange?: (event: ComboboxChangeEvent) => void;
  onSelect?: (event: ComboboxSelectEvent) => void;
  onSearch?: (event: ComboboxSearchEvent) => void;
  onOpen?: (event: ComboboxOpenEvent) => void;
  onClose?: (event: ComboboxCloseEvent) => void;
  // Native events work automatically
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
}

// Create Combobox component with @lit/react
export const ReactCombobox = createComponent({
  tagName: 'ag-combobox',
  elementClass: AgCombobox,
  react: React,
  events: {
    // Map custom events to React event handlers
    onChange: 'change',
    onSelect: 'select',
    onSearch: 'search',
    onOpen: 'open',
    onClose: 'close',
    // Native events (focus, blur) work automatically, don't need mapping
  },
});

// Export types for convenience
export type { ComboboxOption, ComboboxChangeEvent, ComboboxSelectEvent, ComboboxSearchEvent, ComboboxOpenEvent, ComboboxCloseEvent };
