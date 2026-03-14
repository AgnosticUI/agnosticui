// v2/schema/scripts/codegen.config.ts
// Update this file when runtime-state props change in core interfaces.
// Function-typed props (onClick, onChange, etc.) are auto-detected by the
// codegen via ts-morph — do NOT list them here.

/**
 * omitConfig: non-function props to exclude per component.
 * Only needed for props that are runtime-stateful or render-internal
 * and cannot be auto-detected by type inspection.
 *
 * Do NOT list function-typed props here — they are handled automatically.
 * Keys use the Ag-prefixed SDUI name (e.g. AgButton, not Button).
 */
export const omitConfig: Record<string, string[]> = {
  // toggle: mode requiring JS to track press state; pressed: current toggle state
  AgButton:      ['toggle', 'pressed'],
  AgButtonFx:    ['toggle', 'pressed'],

  // indeterminate: tri-state requiring JS to set; theme: internal CSS theming hook
  AgCheckbox:    ['indeterminate', 'theme'],

  // pressed: current toggle state
  AgIconButton:  ['pressed'],
  AgIconButtonFx: ['pressed'],

  // validationMessages: complex nested object; errorMessage covers SDUI needs
  AgToggle:      ['validationMessages'],
};

/**
 * actionAliasMap: maps function prop names to their SDUI string alias replacements.
 * When the codegen finds a function-typed prop whose name appears here, it
 * emits an optional string prop with the alias name instead of dropping it entirely.
 * Function props NOT in this map are silently dropped (low-level browser events
 * like onFocus, onBlur, onInput, onShow, onHide are not SDUI-actionable).
 */
export const actionAliasMap: Record<string, string> = {
  onClick:              'on_click',
  onChange:             'on_change',
  onToggleChange:       'on_change',
  onIconButtonClick:    'on_click',
  onIconButtonActivate: 'on_activate',
  onTagRemove:          'on_remove',
  onAlertDismiss:       'on_dismiss',
  onBreadcrumbClick:    'on_click',
  onToggle:             'on_toggle',
};

/**
 * skipComponents: component directory names to exclude from all generated output.
 * These require controlled runtime state that cannot be expressed in a static node.
 */
export const skipComponents: string[] = [
  'Collapsible',    // requires open/close state
  'Combobox',       // complex filtering + multi-select state
  'Dialog',         // lifecycle-driven open/close
  'Drawer',         // lifecycle-driven open/close
  'Menu',           // complex open + selected-value state
  'Popover',        // show/hide trigger management
  'ScrollToButton', // scroll-detection behavioral component
  'Sidebar',        // open + collapsed state management
  'SidebarNav',     // no Props interface; pure slot composition
  'Toast',          // autoDismiss + open/close lifecycle
  'VisuallyHidden', // no Props interface; pure slot wrapper
];
