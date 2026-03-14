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
  AgToggle:             ['validationMessages'],
  AgRating:             ['validationMessages'],
  AgSelectionButtonGroup: ['validationMessages'],
  AgSelectionCardGroup: ['validationMessages'],

  // target: HTMLElement reference, not serializable
  AgScrollProgress:     ['target'],

  // offset: PaginationOffset (complex type); navigationLabels: NavigationLabels (complex object)
  AgPagination:         ['offset', 'navigationLabels'],

  // value: number | [number, number] tuple — not a simple JSON-serializable scalar
  AgSlider:             ['value'],
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
 * typeOverrides: explicit TS type + Zod expression for specific component props.
 * Use when the auto-detected type from the source interface is not what the SDUI
 * schema should expose (e.g. 'textarea' is a valid InputType in core but should
 * be rejected in SDUI — it creates a fundamentally different element).
 */
export const typeOverrides: Record<string, Record<string, { tsType: string; zodExpr: string }>> = {
  AgInput: {
    // InputType in core includes 'textarea'; SDUI treats textarea as a separate concern
    type: {
      tsType: "'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url' | 'date' | 'datetime-local' | 'month' | 'time' | 'week'",
      zodExpr: "z.enum(['text', 'password', 'email', 'number', 'search', 'tel', 'url', 'date', 'datetime-local', 'month', 'time', 'week'])",
    },
  },
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
  'Pagination',     // stateful current-page tracking (see issue #375 for SDUI pattern)
  'Popover',        // show/hide trigger management
  'ScrollProgress', // tracks live scroll position — purely behavioral
  'ScrollToButton', // scroll-detection behavioral component
  'Sidebar',        // open + collapsed state management
  'SidebarNav',     // no Props interface; pure slot composition
  'Slider',         // continuous value state requires two-way binding
  'Toast',          // autoDismiss + open/close lifecycle
  'VisuallyHidden', // no Props interface; pure slot wrapper
];
