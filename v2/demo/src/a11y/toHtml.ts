// Converts an AgNode[] flat graph to a semantic HTML string for axe-core testing.
// NOT a production renderer — exists solely to give axe-core real HTML to inspect.
// Tests that AI-generated node graphs contain the data needed for accessible rendering
// (labels, button text, ARIA roles, etc.) independently of web-component internals.

import type { AgNode } from '@agnosticui/schema';

type NodeMap = Map<string, AgNode>;

function buildNodeMap(nodes: AgNode[]): NodeMap {
  return new Map(nodes.map(n => [n.id, n]));
}

function renderChildren(node: AgNode, nodeMap: NodeMap): string {
  const n = node as Record<string, unknown>;
  if (!Array.isArray(n['children'])) return '';
  return (n['children'] as string[])
    .map(id => {
      const child = nodeMap.get(id);
      return child ? renderNode(child, nodeMap) : '';
    })
    .join('');
}

function renderNode(node: AgNode, nodeMap: NodeMap): string {
  const n = node as Record<string, unknown>;
  const id = n['id'] as string;
  const children = renderChildren(node, nodeMap);

  switch (node.component) {
    case 'AgText': {
      const el = (n['el'] as string) ?? 'span';
      return `<${el}>${String(n['text'] ?? '')}</${el}>`;
    }

    case 'AgButton':
    case 'AgButtonFx': {
      const type = (n['type'] as string) ?? 'button';
      const disabled = n['disabled'] ? ' disabled' : '';
      return `<button type="${type}"${disabled}>${children}</button>`;
    }

    case 'AgInput': {
      const label = n['label'] as string | undefined;
      const type = (n['type'] as string) ?? 'text';
      const placeholder = n['placeholder'] ? ` placeholder="${n['placeholder']}"` : '';
      const required = n['required'] ? ' required' : '';
      const inputId = `${id}-input`;
      const labelHtml = label ? `<label for="${inputId}">${label}</label>` : '';
      return `<div>${labelHtml}<input id="${inputId}" type="${type}"${placeholder}${required} /></div>`;
    }

    case 'AgToggle': {
      const label = n['label'] as string | undefined;
      const toggleId = `${id}-toggle`;
      const labelHtml = label ? `<label for="${toggleId}">${label}</label>` : '';
      return `<div><input id="${toggleId}" type="checkbox" role="switch" />${labelHtml}</div>`;
    }

    case 'AgCheckbox': {
      const labelText = n['labelText'] as string | undefined;
      const cbId = `${id}-cb`;
      const required = n['required'] ? ' required' : '';
      const labelHtml = labelText ? `<label for="${cbId}">${labelText}</label>` : '';
      return `<div>${labelHtml}<input id="${cbId}" type="checkbox"${required} /></div>`;
    }

    case 'AgSelect': {
      const label = n['label'] as string | undefined;
      const selectId = `${id}-select`;
      const labelHtml = label ? `<label for="${selectId}">${label}</label>` : '';
      return `<div>${labelHtml}<select id="${selectId}"></select></div>`;
    }

    case 'AgLink': {
      const href = (n['href'] as string) ?? '#';
      return `<a href="${href}">${children}</a>`;
    }

    case 'AgCard': {
      return `<section>${children}</section>`;
    }

    case 'AgFieldset': {
      const legend = n['legend'] as string | undefined;
      const legendHtml = legend ? `<legend>${legend}</legend>` : '';
      return `<fieldset>${legendHtml}${children}</fieldset>`;
    }

    case 'AgSelectionCardGroup': {
      const legend = n['legend'] as string | undefined;
      const legendHtml = legend ? `<legend>${legend}</legend>` : '';
      return `<fieldset>${legendHtml}${children}</fieldset>`;
    }

    case 'AgSelectionCard': {
      const label = n['label'] as string | undefined;
      const value = n['value'] as string | undefined;
      const inputId = `${id}-radio`;
      const labelHtml = label
        ? `<label for="${inputId}">${label}${children}</label>`
        : children;
      return `<div><input id="${inputId}" type="radio" value="${value ?? ''}" />${labelHtml}</div>`;
    }

    case 'AgAlert': {
      return `<div role="alert">${children}</div>`;
    }

    case 'AgDivider': {
      return '<hr />';
    }

    case 'AgBadge':
    case 'AgBadgeFx':
    case 'AgTag':
    case 'AgKbd':
    case 'AgMark':
    case 'AgMessageBubble':
    case 'AgHeader':
    case 'AgAccordion':
    case 'AgTabs':
    case 'AgProgress':
    case 'AgSelectionButton':
    case 'AgSelectionButtonGroup': {
      return `<div>${children}</div>`;
    }

    default:
      return children;
  }
}

/**
 * Converts an AgNode[] flat graph to semantic HTML for axe-core accessibility testing.
 * Renders only root nodes (nodes not referenced as children of any other node).
 */
export function toHtml(nodes: AgNode[]): string {
  const nodeMap = buildNodeMap(nodes);
  const childIds = new Set<string>();
  for (const node of nodes) {
    const n = node as Record<string, unknown>;
    if (Array.isArray(n['children'])) {
      for (const id of n['children'] as string[]) childIds.add(id);
    }
  }
  const roots = nodes.filter(n => !childIds.has(n.id));
  return roots.map(n => renderNode(n, nodeMap)).join('\n');
}
