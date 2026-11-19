import type { A2uiWireMessage } from '@agnosticui/a2ui-lit';

export type AgentRoundTripOutcome =
  | {
      kind: 'append_turn';
      turn: 2 | 3;
      actionName: string;
      messages: A2uiWireMessage[];
    }
  | {
      kind: 'update_surface';
      turn: 1;
      actionName: string;
      messages: A2uiWireMessage[];
    }
  | {
      kind: 'rejected';
      turn: 1;
      actionName: string;
      reason: string;
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

interface QueueCallerRecord {
  id: string;
  account: string;
  meta: string;
  transcript: string;
  recommendedDesk: string;
}

const CALLER_QUEUE_PAGES: Record<number, [QueueCallerRecord, QueueCallerRecord]> = {
  1: [
    {
      id: 'CALL-4810',
      account: 'Vanguard Logistics • $240k ARR',
      meta: 'Wait: 00:48 • Intent: Enterprise Fleet Demo • Line: Paid Search',
      transcript:
        'Caller requested custom multi-region SLA onboarding for 1,400 dispatch seats within 30 days.',
      recommendedDesk: 'North America Enterprise Desk (VP Escalation Ready)',
    },
    {
      id: 'CALL-4811',
      account: 'Helios Biotech • $185k ARR',
      meta: 'Wait: 01:12 • Intent: Security & SOC2 Review • Line: Direct Inbound',
      transcript:
        'VP of Infrastructure asking for HIPAA BAA + SOC2 Type II packet ahead of Q4 procurement freeze.',
      recommendedDesk: 'North America Enterprise Desk (Security Specialist)',
    },
  ],
  2: [
    {
      id: 'CALL-4812',
      account: 'Meridian FinTech • $310k ARR',
      meta: 'Wait: 01:34 • Intent: Global API Volume Pricing • Line: Partner Referral',
      transcript:
        'Evaluating 12M monthly webhook events with sub-100ms failover guarantee across US-East and EU-Central.',
      recommendedDesk: 'Strategic Accounts Desk (Solutions Architect)',
    },
    {
      id: 'CALL-4813',
      account: 'Northstar Retail Group • $150k ARR',
      meta: 'Wait: 01:51 • Intent: Seasonal Peak Expansion • Line: Paid Search',
      transcript:
        'Needs immediate overflow routing for 85 regional store support lines before holiday traffic spike.',
      recommendedDesk: 'North America Enterprise Desk (Overflow Pool)',
    },
  ],
  3: [
    {
      id: 'CALL-4814',
      account: 'Aether Cloud Systems • $420k ARR',
      meta: 'Wait: 02:09 • Intent: Multi-Year Renewal & Expansion • Line: Executive Hotline',
      transcript:
        'CIO office inquiring about consolidating three legacy contact center vendors onto AgnosticUI.',
      recommendedDesk: 'Executive Accounts Desk (Senior Director)',
    },
    {
      id: 'CALL-4815',
      account: 'Solstice Energy Corp • $195k ARR',
      meta: 'Wait: 02:24 • Intent: Field Ops Voice Integration • Line: Organic Search',
      transcript:
        'Comparing real-time transcription accuracy and automated CRM ticket creation for field engineers.',
      recommendedDesk: 'North America Enterprise Desk (Technical Onboarding)',
    },
  ],
};

function clampQueuePage(rawPage: unknown): number {
  const num = Number(rawPage);
  if (!Number.isFinite(num)) return 1;
  return Math.max(1, Math.min(3, Math.round(num)));
}

function findCallerById(callerId: string, pageHint: number): QueueCallerRecord {
  const pagePair = CALLER_QUEUE_PAGES[pageHint] ?? CALLER_QUEUE_PAGES[1];
  const fromHint = pagePair.find((item) => item.id === callerId);
  if (fromHint) return fromHint;

  for (const pair of Object.values(CALLER_QUEUE_PAGES)) {
    const match = pair.find((item) => item.id === callerId);
    if (match) return match;
  }
  return pagePair[0];
}
function buildQueueListOutcome(
  baseComponents: Array<Record<string, unknown>>,
  actionName: string,
  page: number,
): AgentRoundTripOutcome {
  const [slot1, slot2] = CALLER_QUEUE_PAGES[page] ?? CALLER_QUEUE_PAGES[1];
  const startIdx = (page - 1) * 2 + 1;
  const endIdx = startIdx + 1;

  const updatedComponents = baseComponents.map((c) => {
    if (c.id === 'incident_card') {
      return {
        ...c,
        children: [
          'queue_breadcrumb',
          'local_badge',
          'local_heading',
          'queue_page_summary',
          'queue_slot_1_card',
          'queue_slot_2_card',
          'queue_pagination',
          'local_ack_btn',
        ],
      };
    }
    if (c.id === 'queue_breadcrumb') {
      return {
        ...c,
        items: [
          { label: 'Inbound Queue', href: '#queue' },
          { label: `High-Intent Surge (Page ${page} of 3)`, current: true },
        ],
      };
    }
    return c;
  });

  return {
    kind: 'update_surface',
    turn: 1,
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
          path: '/queue',
          value: {
            page,
            totalPages: 3,
            totalCallers: 6,
            view: 'list',
            selectedCallerId: '',
            summary: `Showing callers ${startIdx}–${endIdx} of 6 in the North America Enterprise Surge Queue.`,
            slot1: { id: slot1.id, account: slot1.account, meta: slot1.meta },
            slot2: { id: slot2.id, account: slot2.account, meta: slot2.meta },
          },
        },
      } as unknown as A2uiWireMessage,
    ],
  };
}

function buildQueueDrilldownOutcome(
  baseComponents: Array<Record<string, unknown>>,
  actionName: string,
  page: number,
  caller: QueueCallerRecord,
): AgentRoundTripOutcome {
  const detailIds = new Set([
    'queue_detail_card',
    'queue_detail_title',
    'queue_detail_meta',
    'queue_detail_transcript',
    'queue_detail_desk',
    'queue_back_btn',
  ]);
  const withoutOldDetail = baseComponents.filter((c) => !detailIds.has(String(c.id)));
  const accountShortName = caller.account.split(' • ')[0] ?? caller.account;

  const updatedBase = withoutOldDetail.map((c) => {
    if (c.id === 'incident_card') {
      return {
        ...c,
        children: [
          'queue_breadcrumb',
          'local_badge',
          'local_heading',
          'queue_detail_card',
          'local_ack_btn',
        ],
      };
    }
    if (c.id === 'queue_breadcrumb') {
      return {
        ...c,
        items: [
          { label: 'Inbound Queue', href: '#queue' },
          { label: `High-Intent Surge (Page ${page})`, href: `#page-${page}` },
          { label: `${caller.id} • ${accountShortName}`, current: true },
        ],
      };
    }
    return c;
  });

  const detailComponents: Array<Record<string, unknown>> = [
    {
      id: 'queue_detail_card',
      component: 'AgCard',
      stacked: true,
      children: [
        'queue_detail_title',
        'queue_detail_meta',
        'queue_detail_transcript',
        'queue_detail_desk',
        'queue_back_btn',
      ],
    },
    { id: 'queue_detail_title', component: 'AgText', el: 'h4', text: `${caller.id} — ${caller.account}` },
    { id: 'queue_detail_meta', component: 'AgText', el: 'p', text: caller.meta },
    { id: 'queue_detail_transcript', component: 'AgText', el: 'p', text: `Live Intent Summary: ${caller.transcript}` },
    { id: 'queue_detail_desk', component: 'AgText', el: 'p', text: `Recommended Assignment: ${caller.recommendedDesk}` },
    {
      id: 'queue_back_btn',
      component: 'AgButton',
      variant: 'secondary',
      bordered: true,
      size: 'sm',
      shape: 'rounded',
      label: `Back to Surge Queue (Page ${page})`,
      action: { event: { name: 'navigate_queue_breadcrumb', context: { page } } },
    },
  ];

    return {
    kind: 'update_surface',
    turn: 1,
    actionName,
    messages: [
      {
        version: '1.0',
        updateComponents: {
          surfaceId: 'support_surface',
          components: [...updatedBase, ...detailComponents],
        },
      } as unknown as A2uiWireMessage,
      {
        version: '1.0',
        updateDataModel: {
          surfaceId: 'support_surface',
          path: '/queue',
          value: {
            page,
            totalPages: 3,
            totalCallers: 6,
            view: 'detail',
            selectedCallerId: caller.id,
            selectedAccount: caller.account,
            recommendedDesk: caller.recommendedDesk,
          },
        },
      } as unknown as A2uiWireMessage,
    ],
  };
}

function extractBaseComponents(
  existingMessages: readonly A2uiWireMessage[],
): Array<Record<string, unknown>> {
  const mergedById = new Map<string, Record<string, unknown>>();
  for (const msg of existingMessages) {
    const envelope = msg as unknown as UpdateComponentsEnvelope;
    const list = envelope.updateComponents?.components;
    if (Array.isArray(list)) {
      for (const comp of list) {
        if (typeof comp.id === 'string') {
          mergedById.set(comp.id, comp);
        }
      }
    }
  }
  return Array.from(mergedById.values());
}

function resolveActionName(actionDetail: Record<string, unknown>): string {
  const eventObj =
    typeof actionDetail.event === 'object' && actionDetail.event !== null
      ? (actionDetail.event as Record<string, unknown>)
      : undefined;
  return String(actionDetail.name ?? eventObj?.name ?? 'action_completed');
}

function resolveActionContext(
  actionDetail: Record<string, unknown>,
): Record<string, unknown> {
  if (typeof actionDetail.context === 'object' && actionDetail.context !== null) {
    return actionDetail.context as Record<string, unknown>;
  }
  const eventObj =
    typeof actionDetail.event === 'object' && actionDetail.event !== null
      ? (actionDetail.event as Record<string, unknown>)
      : undefined;
  if (eventObj && typeof eventObj.context === 'object' && eventObj.context !== null) {
    return eventObj.context as Record<string, unknown>;
  }
  return {};
}

function resolveButtonLabel(
  baseComponents: Array<Record<string, unknown>>,
  actionDetail: Record<string, unknown>,
  actionName: string,
): string {
  const sourceId =
    typeof actionDetail.sourceComponentId === 'string'
      ? actionDetail.sourceComponentId
      : '';
  const sourceComp = baseComponents.find((c) => c.id === sourceId);
  if (typeof sourceComp?.label === 'string' && sourceComp.label.trim().length > 0) {
    return sourceComp.label.trim();
  }
  return actionName
    .split('_')
    .filter(Boolean)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

function buildTurnTwoComponents(
  buttonDisplayLabel: string,
  rawContext: Record<string, unknown>,
): Array<Record<string, unknown>> {
  const recipient =
    typeof rawContext.ownerEmail === 'string' && rawContext.ownerEmail.length > 0
      ? rawContext.ownerEmail
      : typeof rawContext.email === 'string' && rawContext.email.length > 0
        ? rawContext.email
        : '';

  const cluster =
    typeof rawContext.cluster === 'string' && rawContext.cluster.length > 0
      ? rawContext.cluster
      : typeof rawContext.desk === 'string' && rawContext.desk.length > 0
        ? rawContext.desk
        : 'na-enterprise';

  const summaryText = recipient
    ? `Workflow confirmed for ${recipient}. Live routing & attribution are now active.`
    : typeof rawContext.title === 'string' && rawContext.title.length > 0
      ? `Overflow routing activated for "${rawContext.title}". Senior specialists have been notified.`
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
        'confirm_next_steps_label',
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
      text: 'Action Confirmed • A2UI v1.0',
    },
    {
      id: 'confirm_alert',
      component: 'AgAlert',
      variant: 'success',
      borderedLeft: true,
      children: ['confirm_copy'],
    },
    {
      id: 'confirm_copy',
      component: 'AgText',
      el: 'p',
      text: summaryText,
    },
    {
      id: 'confirm_next_steps_label',
      component: 'AgText',
      el: 'p',
      text: 'Choose a follow-up agent action:',
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
            ownerEmail: recipient,
            cluster,
            submittedLabel: buttonDisplayLabel,
            summaryText,
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

function buildTurnThreeComponents(
  rawContext: Record<string, unknown>,
): Array<Record<string, unknown>> {
  const recipient =
    typeof rawContext.ownerEmail === 'string' && rawContext.ownerEmail.length > 0
      ? rawContext.ownerEmail
      : 'ops@brand.io';
  const cluster =
    typeof rawContext.cluster === 'string' && rawContext.cluster.length > 0
      ? rawContext.cluster
      : 'na-enterprise';

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
      author: 'Call Telemetry Agent',
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
      text: 'Test Call Verified • 98ms Connect',
    },
    {
      id: 'verify_alert',
      component: 'AgAlert',
      variant: 'info',
      borderedLeft: true,
      children: ['verify_copy'],
    },
    {
      id: 'verify_copy',
      component: 'AgText',
      el: 'p',
      text: `Simulated inbound VIP call routed to ${cluster} desk and logged for ${recipient}.`,
    },
  ];
}

export function advanceAgentRoundTrip(
  existingMessages: readonly A2uiWireMessage[],
  actionDetail: Record<string, unknown>,
): AgentRoundTripOutcome {
  const actionName = resolveActionName(actionDetail);

  if (actionName === 'reset_agent_thread') {
    return {
      kind: 'reset',
      turn: 1,
      actionName,
      messages: [...existingMessages],
    };
  }

  const baseComponents = extractBaseComponents(existingMessages);
  const rawContext = resolveActionContext(actionDetail);

  if (actionName === 'change_queue_page' || actionName === 'navigate_queue_breadcrumb') {
    const targetPage = clampQueuePage(rawContext.page);
    return buildQueueListOutcome(baseComponents, actionName, targetPage);
  }

  if (actionName === 'inspect_queue_caller') {
    const currentPage = clampQueuePage(rawContext.page);
    const callerId = String(rawContext.callerId ?? '');
    const caller = findCallerById(callerId, currentPage);
    return buildQueueDrilldownOutcome(baseComponents, actionName, currentPage, caller);
  }

  if (actionName === 'publish_sla_policy') {
    const ownerEmail =
      typeof rawContext.ownerEmail === 'string'
        ? rawContext.ownerEmail.trim()
        : '';
    if (!ownerEmail) {
      return {
        kind: 'rejected',
        turn: 1,
        actionName,
        reason: 'Approver email is required before publishing SLA policy',
        messages: [
          {
            version: '1.0',
            updateDataModel: {
              surfaceId: 'support_surface',
              path: '/form/ownerEmail',
              value: '',
            },
          } as unknown as A2uiWireMessage,
        ],
      };
    }
  }

  const root = baseComponents.find((c) => c.id === 'root');
  const rootChildren = Array.isArray(root?.children)
    ? [...(root.children as string[])]
    : ['user_prompt_bubble', 'agent_reply_bubble'];

  for (const id of ['user_action_bubble', 'agent_confirm_bubble']) {
    if (!rootChildren.includes(id)) {
      rootChildren.push(id);
    }
  }

  const buttonDisplayLabel = resolveButtonLabel(
    baseComponents,
    actionDetail,
    actionName,
  );

  const resolvedTurnTwoLabel =
    typeof rawContext.submittedLabel === 'string' && rawContext.submittedLabel.length > 0
      ? rawContext.submittedLabel
      : buttonDisplayLabel;

  const turnTwoComponents = buildTurnTwoComponents(resolvedTurnTwoLabel, rawContext);
  if (typeof rawContext.summaryText === 'string' && rawContext.summaryText.length > 0) {
    const copyComp = turnTwoComponents.find((c) => c.id === 'confirm_copy');
    if (copyComp) {
      copyComp.text = rawContext.summaryText;
    }
  }

  if (actionName === 'simulate_test_call') {
    for (const id of ['user_verify_bubble', 'agent_verify_bubble']) {
      if (!rootChildren.includes(id)) {
        rootChildren.push(id);
      }
    }
    const updatedComponents = [
      ...baseComponents.map((c) =>
        c.id === 'root' ? { ...c, children: rootChildren } : c,
      ),
      ...turnTwoComponents,
      ...buildTurnThreeComponents(rawContext),
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
              lastAction: actionName,
              status: 'verified',
              turn: 3,
              timestamp: new Date().toISOString(),
            },
          },
        } as unknown as A2uiWireMessage,
      ],
    };
  }

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
            lastAction: actionName,
            status: 'confirmed',
            turn: 2,
            timestamp: new Date().toISOString(),
          },
        },
      } as unknown as A2uiWireMessage,
    ],
  };
}
