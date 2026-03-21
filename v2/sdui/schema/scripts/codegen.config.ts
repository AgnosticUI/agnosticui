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
 * noUndefinedProps: props that must NOT be passed as `undefined` to the React
 * renderer because they are `reflect: true` @property decorators used in CSS
 * attribute selectors (e.g. :host([size="md"])) that set CSS custom properties.
 * Passing `undefined` via @lit/react removes the attribute, breaking the CSS
 * variable chain even when the component has constructor defaults.
 *
 * The codegen emits a conditional spread for these:
 *   {...(node.size !== undefined ? { size: node.size } : {})}
 * instead of the normal:
 *   size={node.size}
 */
export const noUndefinedProps: Record<string, string[]> = {
  // size drives --toggle-width/--handle-size used in the checked transform
  // variant drives checked-state color selectors
  AgToggle:  ['size', 'variant'],

  // value binding sets native input.value; undefined coerces to string "undefined"
  // size drives input sizing CSS selectors
  AgInput:   ['value', 'size'],
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
  // SelectionCardGroup selection change — fires with detail.value as payload
  onSelectionChange:    'on_change',
};

/**
 * actionPayloadMap: maps function prop names to a JS expression that extracts
 * a serializable payload from the event argument.
 *
 * When an event is listed here, the renderer emits a one-arg lambda
 *   `(e) => dispatch(node.alias, actions, <expr>)`
 * instead of the zero-arg form `() => dispatch(node.alias, actions)`.
 *
 * The expression is evaluated in a context where `e` is the raw event.
 */
export const actionPayloadMap: Record<string, string> = {
  // SelectionChangeEvent.detail.value is the selected card's value string
  onSelectionChange: '(e as CustomEvent<{value: string}>).detail.value',
};

/**
 * vueActionPayloadMap: Vue-specific overrides for actionPayloadMap.
 * Vue wrappers emit detail directly (not wrapped in CustomEvent), so
 * handlers receive the detail object as the first argument, not a CustomEvent.
 */
export const vueActionPayloadMap: Record<string, string> = {
  // Vue emits detail directly: e IS the SelectionChangeEventDetail
  onSelectionChange: '(e as unknown as {value: string}).value',
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

  // badge content is always child nodes (text, icons)
  AgBadge:         'children',
  AgBadgeFx:       'children',

  // overlay/modal components — slot content authored as child nodes
  AgDialog:        'children',
  AgDrawer:        'children',
  AgPopover:       'children',

  // container components that wrap child nodes
  AgAccordion:          'children',
  AgAlert:              'children',
  AgCard:               'children',
  AgFieldset:           'children',
  AgHeader:             'children',
  AgKbd:                'children',
  AgLink:               'children',
  AgMark:               'children',
  AgMessageBubble:      'children',
  AgProgress:           'children',
  AgSelectionButton:    'children',
  AgSelectionButtonGroup: 'children',
  AgSelectionCard:      'children',
  AgSelectionCardGroup: 'children',
  AgTag:                'children',
  AgTabs:               'children',
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
  AgRating: {
    // Rating.variant in core is '' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    // ts-morph resolves the RatingVariant alias differently — lock it down explicitly.
    variant: {
      tsType: "'primary' | 'secondary' | 'success' | 'warning' | 'danger'",
      zodExpr: "z.enum(['primary', 'secondary', 'success', 'warning', 'danger'])",
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

/**
 * RendererPrimitive: a hand-maintained node type that is renderer-only.
 * No _Xxx.ts source file exists in v2/lib/src/components/ for these.
 * The codegen appends them verbatim after the discovered-component output.
 */
export interface RendererPrimitive {
  /** Component name without 'Ag' prefix, e.g. 'Text' */
  name: string;
  /** Verbatim block to append to schema.ts (must export AgXxxSchema) */
  schemaBlock: string;
  /** Verbatim block to append to types.ts (must export interface AgXxxNode) */
  typesBlock: string;
  /** Verbatim React renderer switch case */
  reactCase: string;
  /** Verbatim Vue renderer switch case */
  vueCase: string;
  /** Verbatim Lit renderer switch case */
  litCase: string;
}

/**
 * rendererPrimitives: renderer-only node types that have no AgnosticUI core
 * component counterpart. Add new primitives here to have them preserved across
 * codegen runs.
 */
export const rendererPrimitives: RendererPrimitive[] = [
  {
    name: 'Text',
    schemaBlock:
`export const AgTextSchema = z.object({
  id: z.string(),
  component: z.literal('AgText'),
  text: z.string(),
  el: z.enum(['p', 'span', 'h1', 'h2', 'h3', 'h4', 'label']).optional(),
  children: z.array(z.string()).optional(),
}).strict();`,
    typesBlock:
`export interface AgTextNode {
  id: string;
  component: 'AgText';
  text: string;
  el?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'label';
  children?: string[];
}`,
    reactCase:
`    case 'AgText': {
      const Tag = node.el ?? 'span';
      return <Tag key={node.id}>{node.text}</Tag>;
    }`,
    vueCase:
`    case 'AgText':
      return h(node.el ?? 'span', { key: node.id }, node.text ?? '');`,
    litCase:
`    case 'AgText': {
      const _text = node.text ?? '';
      switch (node.el ?? 'span') {
        case 'p': return html\`<p>\${_text}</p>\`;
        case 'h1': return html\`<h1>\${_text}</h1>\`;
        case 'h2': return html\`<h2>\${_text}</h2>\`;
        case 'h3': return html\`<h3>\${_text}</h3>\`;
        case 'h4': return html\`<h4>\${_text}</h4>\`;
        case 'label': return html\`<label>\${_text}</label>\`;
        default: return html\`<span>\${_text}</span>\`;
      }
    }`,
  },
];
