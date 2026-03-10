import { defineComponent, h, type PropType, type VNode } from 'vue';
import type { AgNode } from '@agnosticui/schema';
import VueButton from 'agnosticui-core/button/vue';
import { VueCard } from 'agnosticui-core/card/vue';
import { VueInput } from 'agnosticui-core/input/vue';
import { VueSelect } from 'agnosticui-core/select/vue';
import { VueCheckbox } from 'agnosticui-core/checkbox/vue';
import { VueToggle } from 'agnosticui-core/toggle/vue';

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
): VNode | null {
  const renderChildren = (childIds?: string[]): (VNode | null)[] =>
    (childIds ?? []).map(id => {
      const child = nodeMap.get(id);
      return child ? renderNode(child, nodeMap, actions) : null;
    });

  switch (node.component) {
    case 'AgButton':
      return h(
        VueButton,
        {
          variant: node.variant,
          size: node.size,
          shape: node.shape,
          disabled: node.disabled,
          loading: node.loading,
          type: node.type,
          onClick: () => doDispatch(node.on_click, actions),
        },
        {
          default: () =>
            node.children?.length
              ? renderChildren(node.children)
              : (node.label ?? ''),
        },
      );

    case 'AgCard':
      return h(
        VueCard,
        {
          shadow: node.shadow,
          animated: node.animated,
          stacked: node.stacked,
          rounded: node.rounded,
          variant: node.variant,
        },
        { default: () => renderChildren(node.children) },
      );

    case 'AgInput':
      return h(VueInput, {
        name: node.name,
        label: node.label,
        type: node.type,
        value: node.value,
        placeholder: node.placeholder,
        required: node.required,
        disabled: node.disabled,
        readonly: node.readonly,
        invalid: node.invalid,
        errorMessage: node.errorMessage,
        helpText: node.helpText,
        onChange: () => doDispatch(node.on_change, actions),
      });

    case 'AgSelect':
      return h(VueSelect, {
        name: node.name,
        label: node.label,
        disabled: node.disabled,
        required: node.required,
        invalid: node.invalid,
        errorMessage: node.errorMessage,
        helpText: node.helpText,
        size: node.size,
        onChange: () => doDispatch(node.on_change, actions),
      });

    case 'AgCheckbox':
      return h(VueCheckbox, {
        name: node.name,
        labelText: node.labelText,
        value: node.value,
        checked: node.checked,
        disabled: node.disabled,
        required: node.required,
        invalid: node.invalid,
        errorMessage: node.errorMessage,
        helpText: node.helpText,
        onChange: () => doDispatch(node.on_change, actions),
      });

    case 'AgToggle':
      return h(VueToggle, {
        name: node.name,
        label: node.label,
        checked: node.checked,
        disabled: node.disabled,
        variant: node.variant,
        size: node.size,
        required: node.required,
        invalid: node.invalid,
        errorMessage: node.errorMessage,
        helpText: node.helpText,
        onToggleChange: () => doDispatch(node.on_change, actions),
      });

    default:
      return null;
  }
}

/**
 * AgDynamicRenderer (Vue)
 *
 * Consumes a flat array of AgNode objects and renders them using the
 * AgnosticUI Vue wrapper components. Nodes not referenced as children
 * by any other node are treated as roots.
 *
 * Actions are routed through a whitelist map — unknown aliases are
 * silently ignored, providing an XSS boundary.
 */
export const AgDynamicRenderer = defineComponent({
  name: 'AgDynamicRenderer',

  props: {
    nodes: {
      type: Array as PropType<AgNode[]>,
      required: true,
    },
    actions: {
      type: Object as PropType<Actions>,
      default: () => ({}),
    },
  },

  setup(props) {
    return () => {
      const nodeMap = new Map(props.nodes.map(n => [n.id, n]));
      const childIds = new Set(props.nodes.flatMap(n => n.children ?? []));
      const rootNodes = props.nodes.filter(n => !childIds.has(n.id));
      return rootNodes.map(node => renderNode(node, nodeMap, props.actions));
    };
  },
});
