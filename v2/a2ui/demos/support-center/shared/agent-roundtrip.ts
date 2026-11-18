import type { A2uiWireMessage } from '@agnosticui/a2ui-lit';

/**
 * Discriminated result returned by `advanceAgentRoundTrip` so Studio shells
 * (Lit, React, Vue) know whether to apply incremental wire messages or reset
 * back to the initial surface.
 */
export type AgentRoundTripOutcome =
  | {
      kind: 'append_turn';
      turn: 2 | 3;
      actionName: string;
      messages: A2uiWireMessage[];
    }
  | {
      kind: 'reset';
      turn: 1;
      actionName: string;
      messages: A2uiWireMessage[];
    };

interface UpdateComponentsEnvelope {
  updateComponents?: {
    surfaceId?: string;
    components?: Array<Record<string, unknown>>;
  };
}

/**
 * Extracts the flat component list from the initial `updateComponents` wire envelope.
 */
function extractBaseComponents(
  existingMessages: readonly A2uiWireMessage[],
): Array<Record<string, unknown>> {
  const envelopes = existingMessages as unknown as UpdateComponentsEnvelope[];
  const updateMsg = envelopes.find(
    (m) => typeof m.updateComponents === 'object' && m.updateComponents !== null,
  );
  return updateMsg?.updateComponents?.components ?? [];
}

/**
 * Normalizes action event names across direct `{ name }` and nested `{ event: { name } }` payloads.
 */
function resolveActionName(actionDetail: Record<string, unknown>): string {
  const eventObj =
    typeof actionDetail.event === 'object' && actionDetail.event !== null
      ? (actionDetail.event as Record<string, unknown>)
      : undefined;
  return String(actionDetail.name ?? eventObj?.name ?? 'action_completed');
}

/**
 * Normalizes action context dictionaries across flat and nested A2UI event envelopes.
 */
function resolveActionContext(
  actionDetail: Record<string, unknown>,
): Record<string, unknown> {
  const eventObj =
    typeof actionDetail.event === 'object' && actionDetail.event !== null
      ? (actionDetail.event as Record<string, unknown>)
      : undefined;

  if (typeof actionDetail.context === 'object' && actionDetail.context !== null) {
    return actionDetail.context as Record<string, unknown>;
  }
  if (typeof eventObj?.context === 'object' && eventObj.context !== null) {
    return eventObj.context as Record<string, unknown>;
  }
  return {};
}

/**
 * Resolves a human-readable button label from the triggering component ID or action name.
 */
function resolveButtonLabel(
  baseComponents: Array<Record<string, unknown>>,
  actionDetail: Record<string, unknown>,
  actionName: string,
): string {
  const sourceComponentId =
    typeof actionDetail.sourceComponentId === 'string'
      ? actionDetail.sourceComponentId
      : undefined;

  const clickedButton =
    (sourceComponentId
      ? baseComponents.find((c) => c.id === sourceComponentId)
      : undefined) ??
    baseComponents.find((c) => c.component === 'AgButton');

  if (typeof clickedButton?.label === 'string' && clickedButton.label.length > 0) {
    return clickedButton.label;
  }

  return actionName
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
/**
 * Builds the Turn 2 confirmation components + interactive next-step action buttons
 * ("Simulate Live Test Call" and "Reset Conversation").
 */
function buildTurnTwoComponents(
  buttonDisplayLabel: string,
  rawContext: Record<string, unknown>,
): Array<Record<string, unknown>> {
  const emailCandidate =
    typeof rawContext.email === 'string' && rawContext.email.length > 0
      ? rawContext.email
      : typeof rawContext.ownerEmail === 'string' && rawContext.ownerEmail.length > 0
        ? rawContext.ownerEmail
        : undefined;

  const summaryLine = emailCandidate
    ? 'All preferences have been validated and published. Confirmation and live alerts are routed to ' +
      emailCandidate +
      '.'
    : typeof rawContext.title === 'string'
      ? 'Overflow routing is now active for "' +
        rawContext.title +
        '". Senior specialists have been notified.'
      : 'Your workflow has been validated and published to the active workspace.';

  return [
    {
      id: 'user_action_bubble',
      component: 'AgMessageBubble',
      from: 'me',
      author: 'Jordan Taylor • Growth Marketing',
      time: 'Just now',
      message: buttonDisplayLabel,
    },
    {
      id: 'agent_confirm_bubble',
      component: 'AgMessageBubble',
      from: 'them',
      variant: 'neutral',
      author: 'Campaign Concierge',
      time: 'Just now',
      children: ['confirm_card'],
    },
    {
      id: 'confirm_card',
      component: 'AgCard',
      stacked: true,
      children: [
        'confirm_badge',
        'confirm_alert',
        'simulate_test_btn',
        'reset_thread_btn',
      ],
    },
    {
      id: 'confirm_badge',
      component: 'AgBadge',
      variant: 'success',
      children: ['confirm_badge_text'],
    },
    {
      id: 'confirm_badge_text',
      component: 'AgText',
      el: 'span',
      text: 'Published • ' + buttonDisplayLabel,
    },
    {
      id: 'confirm_alert',
      component: 'AgAlert',
      variant: 'primary',
      borderedLeft: true,
      children: ['confirm_copy'],
    },
    {
      id: 'confirm_copy',
      component: 'AgText',
      el: 'p',
      text: summaryLine,
    },
    {
      id: 'simulate_test_btn',
      component: 'AgButton',
      variant: 'primary',
      size: 'md',
      shape: 'rounded',
      label: 'Simulate Live Test Call',
      action: {
        event: {
          name: 'simulate_test_call',
          context: {
            verifiedEmail: emailCandidate ?? 'ops@agnosticui.com',
            cluster: String(rawContext.cluster ?? 'na-enterprise'),
          },
        },
      },
    },
    {
      id: 'reset_thread_btn',
      component: 'AgButton',
      variant: 'secondary',
      bordered: true,
      size: 'md',
      shape: 'rounded',
      label: 'Reset Conversation',
      action: {
        event: {
          name: 'reset_agent_thread',
        },
      },
    },
  ];
}

/**
 * Builds the Turn 3 live verification receipt components when the user clicks
 * "Simulate Live Test Call" on Turn 2.
 */
function buildTurnThreeComponents(
  rawContext: Record<string, unknown>,
): Array<Record<string, unknown>> {
  const verifiedEmail = String(rawContext.verifiedEmail ?? 'ops@agnosticui.com');
  const cluster = String(rawContext.cluster ?? 'na-enterprise');

  return [
    {
      id: 'user_verify_bubble',
      component: 'AgMessageBubble',
      from: 'me',
      author: 'Jordan Taylor • Growth Marketing',
      time: 'Just now',
      message: 'Simulate Live Test Call',
    },
    {
      id: 'agent_verify_bubble',
      component: 'AgMessageBubble',
      from: 'them',
      variant: 'neutral',
      author: 'Campaign Concierge',
      time: 'Just now',
      children: ['verify_card'],
    },
    {
      id: 'verify_card',
      component: 'AgCard',
      stacked: true,
      children: ['verify_badge', 'verify_alert'],
    },
    {
      id: 'verify_badge',
      component: 'AgBadge',
      variant: 'info',
      children: ['verify_badge_text'],
    },
    {
      id: 'verify_badge_text',
      component: 'AgText',
      el: 'span',
      text: 'End-to-End Verification Passed • 42ms',
    },
    {
      id: 'verify_alert',
      component: 'AgAlert',
      variant: 'success',
      borderedLeft: true,
      children: ['verify_copy'],
    },
    {
      id: 'verify_copy',
      component: 'AgText',
      el: 'p',
      text:
        'Test call routed to ' +
        cluster +
        ' desk and webhook receipt delivered to ' +
        verifiedEmail +
        '.',
    },
  ];
}

/**
 * Stateful multi-turn A2UI v1.0 round-trip dispatcher:
 * - Primary form submit (`launch_campaign_routing` or any initial button) -> Turn 2 confirmation + next-step buttons
 * - `simulate_test_call` -> Turn 3 verification receipt + DataModel `/agent` audit patch
 * - `reset_agent_thread` -> Reset outcome returning the initial Turn 1 wire messages
 */
export function advanceAgentRoundTrip(
  existingMessages: readonly A2uiWireMessage[],
  actionDetail: Record<string, unknown>,
): AgentRoundTripOutcome {
  const actionName = resolveActionName(actionDetail);

  // Branch 1: Reset conversation back to Turn 1 clean form
  if (actionName === 'reset_agent_thread') {
    return {
      kind: 'reset',
      turn: 1,
      actionName,
      messages: [...existingMessages],
    };
  }

  const baseComponents = extractBaseComponents(existingMessages);
  const rootComp = baseComponents.find((c) => c.id === 'root');
  const rootChildren = Array.isArray(rootComp?.children)
    ? [...(rootComp.children as string[])]
    : [];

  const rawContext = resolveActionContext(actionDetail);
  const buttonDisplayLabel = resolveButtonLabel(
    baseComponents,
    actionDetail,
    actionName,
  );

  // Always preserve Turn 2 components so Turn 3 appends cleanly below Turn 2
  const turnTwoComponents = buildTurnTwoComponents(buttonDisplayLabel, rawContext);
  for (const id of ['user_action_bubble', 'agent_confirm_bubble']) {
    if (!rootChildren.includes(id)) {
      rootChildren.push(id);
    }
  }

  // Branch 2: Turn 3 verification receipt when user tests the live route
  if (actionName === 'simulate_test_call') {
    for (const id of ['user_verify_bubble', 'agent_verify_bubble']) {
      if (!rootChildren.includes(id)) {
        rootChildren.push(id);
      }
    }

    const turnThreeComponents = buildTurnThreeComponents(rawContext);
    const updatedComponents = [
      ...baseComponents.map((c) =>
        c.id === 'root' ? { ...c, children: rootChildren } : c,
      ),
      ...turnTwoComponents,
      ...turnThreeComponents,
    ];

    return {
      kind: 'append_turn',
      turn: 3,
      actionName,
      messages: [
        {
          version: '1.0',
          updateComponents: {
            surfaceId: 'support_surface',
            components: updatedComponents,
          },
        } as unknown as A2uiWireMessage,
        {
          version: '1.0',
          updateDataModel: {
            surfaceId: 'support_surface',
            path: '/agent',
            value: {
              roundTripTurn: 3,
              lastAction: actionName,
              testCallVerified: true,
              latencyMs: 42,
            },
          },
        } as unknown as A2uiWireMessage,
      ],
    };
  }

  // Branch 3: Turn 2 initial form submission confirmation + next-step options
  const updatedComponents = [
    ...baseComponents.map((c) =>
      c.id === 'root' ? { ...c, children: rootChildren } : c,
    ),
    ...turnTwoComponents,
  ];

  return {
    kind: 'append_turn',
    turn: 2,
    actionName,
    messages: [
      {
        version: '1.0',
        updateComponents: {
          surfaceId: 'support_surface',
          components: updatedComponents,
        },
      } as unknown as A2uiWireMessage,
      {
        version: '1.0',
        updateDataModel: {
          surfaceId: 'support_surface',
          path: '/agent',
          value: {
            roundTripTurn: 2,
            lastAction: actionName,
            published: true,
          },
        },
      } as unknown as A2uiWireMessage,
    ],
  };
}
