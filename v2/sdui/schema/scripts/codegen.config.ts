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

  // no-animation: hyphenated prop name is invalid as a JSX attribute and as a JS identifier
  AgProgressRing:       ['no-animation'],
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
  onPageChange:         'on_change',
};

/**
 * actionPayloadMap: maps function prop names to a JS expression that extracts
 * a serializable payload from the event argument (React + Lit default).
 *
 * When an event is listed here, the renderer emits a one-arg lambda
 *   `(e) => dispatch(node.alias, actions, <expr>)`
 * instead of the zero-arg form `() => dispatch(node.alias, actions)`.
 *
 * Per-component overrides in componentActionPayloadMap take priority.
 */
export const actionPayloadMap: Record<string, string> = {};

/**
 * vueActionPayloadMap: Vue-specific overrides for actionPayloadMap.
 * Vue wrappers emit detail directly (not wrapped in CustomEvent), so
 * handlers receive the detail object as the first argument, not a CustomEvent.
 * Per-component overrides in vueComponentActionPayloadMap take priority.
 */
export const vueActionPayloadMap: Record<string, string> = {};

/**
 * componentActionPayloadMap: per-component, per-sourceName payload expressions
 * for the React renderer. Takes priority over actionPayloadMap.
 *
 * All form input nodes emit { id: node.id, value: <current value> } so that
 * consumers can accumulate questionnaire answers without parsing DOM events.
 * node.id and node.<alias> are in scope in the generated lambda.
 */
export const componentActionPayloadMap: Record<string, Record<string, string>> = {
  AgCheckbox: {
    onChange: `{ id: node.id, value: (e as CustomEvent<{ checked: boolean; value: string }>).detail?.checked }`,
  },
  AgInput: {
    onChange: `{ id: node.id, value: ((e as unknown) as React.ChangeEvent<HTMLInputElement>).target?.value ?? ((e as unknown) as CustomEvent<{ value: string }>).detail?.value ?? '' }`,
  },
  AgRadio: {
    onChange: `{ id: node.id, value: (e as CustomEvent<{ value: string }>).detail?.value ?? '' }`,
  },
  AgSelect: {
    onChange: `{ id: node.id, value: ((e as unknown) as { value?: string | string[] })?.value ?? '' }`,
  },
  AgToggle: {
    onToggleChange: `{ id: node.id, value: (e as CustomEvent<{ checked: boolean; value: string }>).detail?.checked }`,
  },
  AgSelectionButtonGroup: {
    onSelectionChange: `{ id: node.id, value: (e as CustomEvent<{ value: string }>).detail?.value }`,
  },
  AgSelectionCardGroup: {
    onSelectionChange: `{ id: node.id, value: (e as CustomEvent<{ value: string }>).detail?.value }`,
  },
  AgSlider: {
    onChange: `{ id: node.id, value: (e as CustomEvent<{ value: number | [number, number] }>).detail?.value }`,
  },
  AgPagination: {
    onPageChange: `{ id: node.id, value: (e as CustomEvent<{ page: number }>).detail?.page }`,
  },
};

/**
 * vueComponentActionPayloadMap: per-component Vue payload expressions.
 * Vue wrappers emit detail as the first argument (not wrapped in CustomEvent).
 * All form inputs use the same { id, value } shape as React.
 */
export const vueComponentActionPayloadMap: Record<string, Record<string, string>> = {
  AgCheckbox: {
    onChange: `{ id: node.id, value: (e as unknown as { checked?: boolean })?.checked }`,
  },
  AgInput: {
    onChange: `{ id: node.id, value: (e as unknown as { value?: string; target?: { value?: string } })?.value ?? (e as unknown as { target?: { value?: string } })?.target?.value ?? '' }`,
  },
  AgRadio: {
    onChange: `{ id: node.id, value: (e as unknown as { value?: string })?.value ?? '' }`,
  },
  AgSelect: {
    onChange: `{ id: node.id, value: (e as unknown as { value?: string | string[] })?.value ?? '' }`,
  },
  AgToggle: {
    onToggleChange: `{ id: node.id, value: (e as unknown as { checked?: boolean })?.checked }`,
  },
  AgSelectionButtonGroup: {
    onSelectionChange: `{ id: node.id, value: (e as unknown as { value?: string })?.value }`,
  },
  AgSelectionCardGroup: {
    onSelectionChange: `{ id: node.id, value: (e as unknown as { value?: string })?.value }`,
  },
  AgSlider: {
    onChange: `{ id: node.id, value: (e as unknown as { value?: number | [number, number] })?.value }`,
  },
  AgPagination: {
    onPageChange: `{ id: node.id, value: (e as unknown as { page?: number })?.page }`,
  },
};

/**
 * litComponentActionPayloadMap: per-component Lit payload expressions.
 * Lit fires native CustomEvents from web components.
 * All form inputs use the same { id, value } shape as React.
 */
export const litComponentActionPayloadMap: Record<string, Record<string, string>> = {
  AgCheckbox: {
    onChange: `{ id: node.id, value: (e as CustomEvent<{ checked: boolean; value: string }>).detail?.checked }`,
  },
  AgInput: {
    onChange: `{ id: node.id, value: (e as CustomEvent<{ value: string }>).detail?.value ?? (e as unknown as { target?: { value?: string } }).target?.value ?? '' }`,
  },
  AgRadio: {
    onChange: `{ id: node.id, value: (e as CustomEvent<{ value: string }>).detail?.value ?? '' }`,
  },
  AgSelect: {
    onChange: `{ id: node.id, value: (e as CustomEvent<{ value: string | string[] }>).detail?.value ?? '' }`,
  },
  AgToggle: {
    onToggleChange: `{ id: node.id, value: (e as CustomEvent<{ checked: boolean; value: string }>).detail?.checked }`,
  },
  AgSelectionButtonGroup: {
    onSelectionChange: `{ id: node.id, value: (e as CustomEvent<{ value: string }>).detail?.value }`,
  },
  AgSelectionCardGroup: {
    onSelectionChange: `{ id: node.id, value: (e as CustomEvent<{ value: string }>).detail?.value }`,
  },
  AgSlider: {
    onChange: `{ id: node.id, value: (e as CustomEvent<{ value: number | [number, number] }>).detail?.value }`,
  },
  AgPagination: {
    onPageChange: `{ id: node.id, value: (e as CustomEvent<{ page: number }>).detail?.page }`,
  },
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
  AgPagination: {
    // PaginationJustify includes '' (empty string) which Zod handles as a union not an enum
    justify: {
      tsType: "'start' | 'center' | 'end' | ''",
      zodExpr: "z.union([z.enum(['start', 'center', 'end']), z.literal('')])",
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
 * skipComponents: component directory names to exclude from all generated output.
 * These require controlled runtime state that cannot be expressed in a static node.
 */
export const skipComponents: string[] = [
  // Collapsible is handled as a rendererPrimitive (named summary slot requires manual case)
  'Collapsible',

  // Deferred: complex state not expressible in a static fixture (see sub-issues of #460)
  'Combobox',       // complex filtering + multi-select state (see #470)
  'Flex',           // multi-component family (FlexContainer/FlexRow/FlexCol/FlexInline) — no single ReactFlex/VueFlex wrapper
  'Menu',           // complex open + selected-value state
  'Sidebar',        // open + collapsed state management
  'Toast',          // autoDismiss + open/close lifecycle

  // Permanently skipped: no meaningful SDUI use case
  'ScrollProgress', // tracks live scroll position via a DOM target ref — not serializable
  'ScrollToButton', // scroll-detection behavioral component, no content to drive
  'SidebarNav',     // no Props interface; pure slot composition
  'VisuallyHidden', // no Props interface; pure slot wrapper
];

/**
 * RendererPrimitive: a hand-maintained node type that may or may not have a
 * corresponding _Xxx.ts source file. Used for components that need manual
 * renderer cases (e.g. named-slot components like Collapsible) or pure
 * renderer primitives with no core component (e.g. Text).
 * The codegen appends the cases verbatim after the discovered-component output.
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
  /** Optional import line to inject into the React renderer (e.g. named import from agnosticui-core) */
  reactImport?: string;
  /** Optional import line to inject into the Vue renderer */
  vueImport?: string;
  /** Optional import line to inject into the Lit renderer (e.g. side-effect import) */
  litImport?: string;
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
  {
    name: 'Collapsible',
    reactImport: `import { ReactCollapsible } from 'agnosticui-core/collapsible/react';`,
    vueImport: `import { VueCollapsible } from 'agnosticui-core/collapsible/vue';`,
    litImport: `import 'agnosticui-core/collapsible';`,
    schemaBlock:
`export const AgCollapsibleSchema = z.object({
  id: z.string(),
  component: z.literal('AgCollapsible'),
  summary: z.string().optional(),
  open: z.boolean().optional(),
  bordered: z.boolean().optional(),
  shadow: z.boolean().optional(),
  useChevron: z.boolean().optional(),
  useX: z.boolean().optional(),
  useMinus: z.boolean().optional(),
  noIndicator: z.boolean().optional(),
  on_toggle: z.string().optional(),
  children: z.array(z.string()).optional(),
}).strict();`,
    typesBlock:
`export interface AgCollapsibleNode {
  id: string;
  component: 'AgCollapsible';
  summary?: string;
  open?: boolean;
  bordered?: boolean;
  shadow?: boolean;
  useChevron?: boolean;
  useX?: boolean;
  useMinus?: boolean;
  noIndicator?: boolean;
  on_toggle?: string;
  children?: string[];
}`,
    reactCase:
`    case 'AgCollapsible':
      return (
        <ReactCollapsible
          key={node.id}
          open={node.open}
          bordered={node.bordered}
          shadow={node.shadow}
          useChevron={node.useChevron}
          useX={node.useX}
          useMinus={node.useMinus}
          noIndicator={node.noIndicator}
          onToggle={(e) => dispatch(node.on_toggle, actions, { id: node.id, value: e.detail?.open })}
        >
          {node.summary && <span slot="summary">{node.summary}</span>}
          {renderChildren(node.children)}
        </ReactCollapsible>
      );`,
    vueCase:
`    case 'AgCollapsible':
      return h(VueCollapsible, {
        key: node.id,
        open: node.open ?? false,
        bordered: node.bordered,
        shadow: node.shadow,
        useChevron: node.useChevron,
        useX: node.useX,
        useMinus: node.useMinus,
        noIndicator: node.noIndicator,
        onToggle: (e: unknown) => doDispatch(node.on_toggle, actions, { id: node.id, value: (e as CustomEvent<{ open: boolean }>).detail?.open }),
      }, {
        ...(node.summary ? { summary: () => h('span', {}, node.summary!) } : {}),
        default: () => renderChildren(node.children),
      });`,
    litCase:
`    case 'AgCollapsible': {
      const _col_summary = node.summary;
      return html\`<ag-collapsible
        .open=\${node.open ?? false}
        .bordered=\${node.bordered ?? false}
        .shadow=\${node.shadow ?? false}
        .useChevron=\${node.useChevron ?? true}
        .useX=\${node.useX ?? false}
        .useMinus=\${node.useMinus ?? false}
        .noIndicator=\${node.noIndicator ?? false}
        .onToggle=\${(e: CustomEvent<{ open: boolean }>) => doDispatch(node.on_toggle, actions, { id: node.id, value: e.detail?.open })}
      >\${_col_summary ? html\`<span slot="summary">\${_col_summary}</span>\` : nothing}\${renderChildren(node.children)}</ag-collapsible>\`;
    }`,
  },
];
