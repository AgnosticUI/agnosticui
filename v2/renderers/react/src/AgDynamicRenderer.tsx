import * as React from 'react';
import type { AgNode } from '@agnosticui/schema';
import { ReactButton } from 'agnosticui-core/button/react';
import { ReactCard } from 'agnosticui-core/card/react';
import { ReactInput } from 'agnosticui-core/input/react';
import { ReactSelect } from 'agnosticui-core/select/react';
import { ReactCheckbox } from 'agnosticui-core/checkbox/react';
import { ReactToggle } from 'agnosticui-core/toggle/react';

type Actions = Record<string, (payload?: unknown) => void>;

export interface AgDynamicRendererProps {
  nodes: AgNode[];
  actions?: Actions;
}

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

function dispatch(alias: string | undefined, actions: Actions): void {
  if (alias) actions[alias]?.();
}

function renderNode(
  node: AgNode,
  nodeMap: Map<string, AgNode>,
  actions: Actions,
): React.ReactNode {
  const renderChildren = (childIds?: string[]): React.ReactNode[] =>
    (childIds ?? [])
      .map(id => {
        const child = nodeMap.get(id);
        return child ? renderNode(child, nodeMap, actions) : null;
      })
      .filter((n): n is React.ReactNode => n !== null);

  switch (node.component) {
    case 'AgButton':
      return (
        <ReactButton
          key={node.id}
          variant={node.variant}
          size={node.size}
          shape={node.shape}
          disabled={node.disabled}
          loading={node.loading}
          type={node.type}
          onClick={() => dispatch(node.on_click, actions)}
        >
          {node.children?.length ? renderChildren(node.children) : (node.label ?? '')}
        </ReactButton>
      );

    case 'AgCard':
      return (
        <ReactCard
          key={node.id}
          shadow={node.shadow}
          animated={node.animated}
          stacked={node.stacked}
          rounded={node.rounded}
          variant={node.variant}
        >
          {renderChildren(node.children)}
        </ReactCard>
      );

    case 'AgInput':
      return (
        <ReactInput
          key={node.id}
          name={node.name}
          label={node.label}
          type={node.type}
          value={node.value}
          placeholder={node.placeholder}
          required={node.required}
          disabled={node.disabled}
          readonly={node.readonly}
          invalid={node.invalid}
          errorMessage={node.errorMessage}
          helpText={node.helpText}
          onChange={() => dispatch(node.on_change, actions)}
        />
      );

    case 'AgSelect':
      return (
        <ReactSelect
          key={node.id}
          name={node.name}
          label={node.label}
          disabled={node.disabled}
          required={node.required}
          invalid={node.invalid}
          errorMessage={node.errorMessage}
          helpText={node.helpText}
          size={node.size}
          onChange={() => dispatch(node.on_change, actions)}
        />
      );

    case 'AgCheckbox':
      return (
        <ReactCheckbox
          key={node.id}
          name={node.name}
          labelText={node.labelText}
          value={node.value}
          checked={node.checked}
          disabled={node.disabled}
          required={node.required}
          invalid={node.invalid}
          errorMessage={node.errorMessage}
          helpText={node.helpText}
          onChange={() => dispatch(node.on_change, actions)}
        />
      );

    case 'AgToggle':
      return (
        <ReactToggle
          key={node.id}
          name={node.name}
          label={node.label}
          checked={node.checked}
          disabled={node.disabled}
          variant={node.variant}
          size={node.size}
          required={node.required}
          invalid={node.invalid}
          errorMessage={node.errorMessage}
          helpText={node.helpText}
          onToggleChange={() => dispatch(node.on_change, actions)}
        />
      );

    default:
      return null;
  }
}

/**
 * AgDynamicRenderer (React)
 *
 * Consumes a flat array of AgNode objects and renders them using the
 * AgnosticUI React wrapper components. Nodes not referenced as children
 * by any other node are treated as roots.
 *
 * Actions are routed through a whitelist map — unknown aliases are
 * silently ignored, providing an XSS boundary.
 */
export function AgDynamicRenderer({ nodes, actions = {} }: AgDynamicRendererProps): React.ReactElement {
  const nodeMap = new Map(nodes.map(n => [n.id, n]));
  const childIds = new Set(nodes.flatMap(n => n.children ?? []));
  const rootNodes = nodes.filter(n => !childIds.has(n.id));

  return (
    <>
      {rootNodes.map(node => renderNode(node, nodeMap, actions))}
    </>
  );
}
