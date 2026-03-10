import { LitElement, html, nothing, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import type { AgNode } from '@agnosticui/schema';

// Register AgnosticUI core custom elements
import 'agnosticui-core/button';
import 'agnosticui-core/card';
import 'agnosticui-core/input';
import 'agnosticui-core/select';
import 'agnosticui-core/checkbox';
import 'agnosticui-core/toggle';

type Actions = Record<string, (payload?: unknown) => void>;

/**
 * Create an action dispatcher bound to a given actions map.
 *
 * This is the XSS boundary: only aliases present in the map are called;
 * unknown aliases are silently ignored. No eval(), no dynamic code execution.
 */
export function createDispatcher(actions: Actions) {
  return (alias?: string): void => {
    if (alias) actions[alias]?.();
  };
}

function doDispatch(alias: string | undefined, actions: Actions): void {
  if (alias) actions[alias]?.();
}

function renderNode(
  node: AgNode,
  nodeMap: Map<string, AgNode>,
  actions: Actions,
): TemplateResult | typeof nothing {
  const renderChildren = (childIds?: string[]) =>
    (childIds ?? []).map(id => {
      const child = nodeMap.get(id);
      return child ? renderNode(child, nodeMap, actions) : nothing;
    });

  switch (node.component) {
    case 'AgButton':
      return html`<ag-button
        .variant=${node.variant ?? ''}
        .size=${node.size ?? 'md'}
        .disabled=${node.disabled ?? false}
        .loading=${node.loading ?? false}
        .type=${node.type ?? 'button'}
        @click=${() => doDispatch(node.on_click, actions)}
      >${node.children?.length ? renderChildren(node.children) : (node.label ?? '')}</ag-button>`;

    case 'AgCard':
      return html`<ag-card
        .shadow=${node.shadow ?? false}
        .animated=${node.animated ?? false}
        .stacked=${node.stacked ?? false}
        .rounded=${node.rounded ?? ''}
        .variant=${node.variant ?? ''}
      >${renderChildren(node.children)}</ag-card>`;

    case 'AgInput':
      return html`<ag-input
        .name=${node.name ?? ''}
        .label=${node.label ?? ''}
        .type=${node.type ?? 'text'}
        .value=${node.value ?? ''}
        .placeholder=${node.placeholder ?? ''}
        .required=${node.required ?? false}
        .disabled=${node.disabled ?? false}
        .invalid=${node.invalid ?? false}
        .errorMessage=${node.errorMessage ?? ''}
        .helpText=${node.helpText ?? ''}
        @change=${() => doDispatch(node.on_change, actions)}
      ></ag-input>`;

    case 'AgSelect':
      return html`<ag-select
        .name=${node.name ?? ''}
        .label=${node.label ?? ''}
        .disabled=${node.disabled ?? false}
        .required=${node.required ?? false}
        .invalid=${node.invalid ?? false}
        .errorMessage=${node.errorMessage ?? ''}
        .helpText=${node.helpText ?? ''}
        .size=${node.size ?? ''}
        @change=${() => doDispatch(node.on_change, actions)}
      ></ag-select>`;

    case 'AgCheckbox':
      return html`<ag-checkbox
        .name=${node.name ?? ''}
        .labelText=${node.labelText ?? ''}
        .value=${node.value ?? ''}
        .checked=${node.checked ?? false}
        .disabled=${node.disabled ?? false}
        .required=${node.required ?? false}
        .invalid=${node.invalid ?? false}
        .errorMessage=${node.errorMessage ?? ''}
        .helpText=${node.helpText ?? ''}
        @change=${() => doDispatch(node.on_change, actions)}
      ></ag-checkbox>`;

    case 'AgToggle':
      return html`<ag-toggle
        .name=${node.name ?? ''}
        .label=${node.label ?? ''}
        .checked=${node.checked ?? false}
        .disabled=${node.disabled ?? false}
        .variant=${node.variant ?? 'default'}
        .size=${node.size ?? 'md'}
        .required=${node.required ?? false}
        .invalid=${node.invalid ?? false}
        .errorMessage=${node.errorMessage ?? ''}
        .helpText=${node.helpText ?? ''}
        @toggle-change=${() => doDispatch(node.on_change, actions)}
      ></ag-toggle>`;

    default:
      return nothing;
  }
}

/**
 * AgDynamicRenderer (Lit)
 *
 * A custom element that consumes a flat array of AgNode objects and renders
 * them using the AgnosticUI core web components directly. Renders into light
 * DOM so it works transparently inside any framework.
 *
 * Nodes not referenced as children by any other node are treated as roots.
 * Actions are routed through a whitelist map — unknown aliases are silently
 * ignored, providing an XSS boundary.
 *
 * @example
 * <ag-dynamic-renderer></ag-dynamic-renderer>
 *
 * el.nodes = [{ id: 'btn-1', component: 'AgButton', label: 'Click', on_click: 'SUBMIT' }];
 * el.actions = { SUBMIT: () => console.log('submitted') };
 */
export class AgDynamicRenderer extends LitElement {
  // Render into light DOM so child elements are accessible to parent frameworks
  override createRenderRoot() {
    return this;
  }

  @property({ type: Array }) nodes: AgNode[] = [];
  @property({ type: Object }) actions: Actions = {};

  override render() {
    const nodeMap = new Map(this.nodes.map(n => [n.id, n]));
    const childIds = new Set(this.nodes.flatMap(n => n.children ?? []));
    const rootNodes = this.nodes.filter(n => !childIds.has(n.id));
    return html`${rootNodes.map(node => renderNode(node, nodeMap, this.actions))}`;
  }
}

if (!customElements.get('ag-dynamic-renderer')) {
  customElements.define('ag-dynamic-renderer', AgDynamicRenderer);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-dynamic-renderer': AgDynamicRenderer;
  }
}
