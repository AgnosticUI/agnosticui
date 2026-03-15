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
 * like onFocus, onBlur, onInput are not SDUI-actionable).
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
  // Dialog / Drawer open-close lifecycle
  onDialogOpen:         'on_open',
  onDialogClose:        'on_close',
  onDialogCancel:       'on_cancel',
  onDrawerOpen:         'on_open',
  onDrawerClose:        'on_close',
  onDrawerCancel:       'on_cancel',
  // Popover show/hide
  onShow:               'on_show',
  onHide:               'on_hide',
};

/**
 * rendererSlotConfig: controls how each component renders its content in the
 * three framework renderers.
 *
 *  'label-child' — renders node.label as text content (with node.children override)
 *  'children'    — renders child nodes recursively into the default slot
 *  'none'        — self-contained; no slot content emitted (default)
 *
 * Components not listed here default to 'none'.
 */
export type RendererSlot = 'label-child' | 'children' | 'none';

export const rendererSlotConfig: Record<string, RendererSlot> = {
  // label is the button/link text — rendered as slot content, not a prop
  AgButton:        'label-child',
  AgButtonFx:      'label-child',

  // overlay/modal components — slot content authored as child nodes
  AgDialog:        'children',
  AgDrawer:        'children',
  AgPopover:       'children',

  // container components that wrap child nodes
  AgAccordion:     'children',
  AgAlert:         'children',
  AgCard:          'children',
  AgFieldset:      'children',
  AgHeader:        'children',
  AgKbd:           'children',
  AgLink:          'children',
  AgMark:          'children',
  AgMessageBubble: 'children',
  AgProgress:      'children',
  AgTag:           'children',
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
  AgDialog: {
    // EdgePosition is a local type alias; spell it out for a self-contained SDUI schema
    drawerPosition: {
      tsType: "'top' | 'bottom' | 'start' | 'end'",
      zodExpr: "z.enum(['top', 'bottom', 'start', 'end'])",
    },
  },
  AgPopover: {
    // Placement is imported from @floating-ui/dom; ts-morph cannot resolve external types in CI
    placement: {
      tsType: "'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end'",
      zodExpr: "z.enum(['top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end'])",
    },
  },
  AgTooltip: {
    // Placement is imported from @floating-ui/dom; ts-morph cannot resolve external types in CI
    placement: {
      tsType: "'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end'",
      zodExpr: "z.enum(['top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end'])",
    },
  },
};

/**
 * reactPropRenames: JSX attribute name overrides for the React renderer.
 * Used when a Lit element property name conflicts with a standard HTML attribute
 * that @lit/react exposes under a different name in its TypeScript types.
 *
 * Example: Lit stores 'ariaLabel' as a property but @lit/react expects the
 * standard HTML 'aria-label' attribute. The SDUI schema keeps 'ariaLabel' so
 * LLMs can set it; the React renderer emits 'aria-label' so tsc passes.
 */
export const reactPropRenames: Record<string, string> = {
  ariaLabel: 'aria-label',
};

/**
 * vueDefaultImportComponents: component names whose agnosticui-core Vue export
 * resolves to the compiled component file directly (not an index.js re-export),
 * so they must be imported as a default rather than a named export.
 *
 * Example: agnosticui-core/button/vue points to VueButton.js (default only).
 * All other components use index.js which re-exports a named { VueName }.
 */
export const vueDefaultImportComponents: string[] = [
  'Button', // package.json maps ./button/vue → VueButton.js (default only, no named VueButton)
];

/**
 * skipComponents: component directory names to exclude from all generated output.
 * These require controlled runtime state that cannot be expressed in a static node.
 */
export const skipComponents: string[] = [
  'Collapsible',    // requires open/close state
  'Combobox',       // complex filtering + multi-select state (deferred — see issue #375)
  'Menu',           // complex open + selected-value state (deferred — see issue #375)
  'Pagination',     // stateful current-page tracking (deferred — see issue #375)
  'ScrollProgress', // tracks live scroll position — purely behavioral
  'ScrollToButton', // scroll-detection behavioral component
  'Sidebar',        // open + collapsed state management (deferred — see issue #375)
  'SidebarNav',     // no Props interface; pure slot composition
  'Slider',         // continuous value state requires two-way binding (deferred — see issue #375)
  'Toast',          // autoDismiss + open/close lifecycle (deferred — see issue #375)
  'VisuallyHidden', // no Props interface; pure slot wrapper
];
