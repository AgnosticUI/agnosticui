import { AGNOSTICUI_CATALOG_ID, type A2uiWireMessage } from '@agnosticui/a2ui-lit';

export interface SupportScenario {
  id: string;
  title: string;
  prompt: string;
  messages: A2uiWireMessage[];
}

export interface QuickPromptChip {
  label: string;
  prompt: string;
}

export const QUICK_PROMPT_CHIPS: QuickPromptChip[] = [
  {
    label: 'Campaign Call Tracking',
    prompt:
      'Set up a paid search call tracking campaign with owner email, campaign channel, and instant conversion alerts.',
  },
  {
    label: 'High-Intent Caller Spike',
    prompt:
      'Alert the sales floor about a 42% surge in high-intent inbound callers and route overflow to senior specialists.',
  },
  {
    label: 'VIP Lead Routing Rule',
    prompt:
      'Create a priority caller routing rule for enterprise demo requests with manager email and instant specialist alerts.',
  },
  {
    label: 'Enterprise SLA & Credit Cap',
    prompt:
      'Configure an enterprise SLA escalation policy with an auto-approved credit cap slider, live currency formatting, and VP threshold alerts.',
  },
];

export const EMPTY_STATE_SURFACE_MESSAGES: A2uiWireMessage[] = [
  {
    version: '1.0',
    createSurface: {
      surfaceId: 'support_surface',
      catalogId: AGNOSTICUI_CATALOG_ID,
    },
  },
  {
    version: '1.0',
    updateComponents: {
      surfaceId: 'support_surface',
      components: [
        {
          id: 'root',
          component: 'AgCard',
          shadow: true,
          children: ['welcome_empty_state'],
        },
        {
          id: 'welcome_empty_state',
          component: 'AgEmptyState',
          title: 'Ready to Stream an A2UI v1.0 Surface',
          subtitle:
            'Choose a quick prompt chip or describe a workflow above and click Generate UI.',
          size: 'lg',
        },
      ],
    },
  },
  {
    version: '1.0',
    updateDataModel: {
      surfaceId: 'support_surface',
      path: '/',
      value: { status: 'idle' },
    },
  },
];

export const SUPPORT_SCENARIOS: SupportScenario[] = [
  {
    id: 'campaign_call_tracking',
    title: '1. Campaign Call Attribution & Routing',
    prompt:
      'Set up a paid search call tracking campaign with regional routing and instant conversion alerts.',
    messages: [
      {
        version: '1.0',
        createSurface: {
          surfaceId: 'support_surface',
          catalogId: AGNOSTICUI_CATALOG_ID,
        },
      },
      {
        version: '1.0',
        updateComponents: {
          surfaceId: 'support_surface',
          components: [
            {
              id: 'root',
              component: 'AgCard',
              stacked: true,
              children: ['caller_bubble', 'agent_bubble'],
            },
            {
              id: 'caller_bubble',
              component: 'AgMessageBubble',
              from: 'me',
              author: 'Jordan Taylor • Growth Marketing',
              time: 'Just now',
              message:
                'We are launching our Q4 Paid Search campaign tomorrow. Can you help set up call tracking and route high-intent callers to our sales desk?',
            },
            {
              id: 'agent_bubble',
              component: 'AgMessageBubble',
              from: 'them',
              variant: 'neutral',
              author: 'Campaign Concierge',
              time: 'Just now',
              children: ['agent_form_card'],
            },
            {
              id: 'agent_form_card',
              component: 'AgCard',
              stacked: true,
              children: [
                'triage_badge',
                'triage_heading',
                'triage_fieldset',
                'submit_btn',
              ],
            },
            {
              id: 'triage_badge',
              component: 'AgBadge',
              variant: 'info',
              children: ['triage_badge_text'],
            },
            {
              id: 'triage_badge_text',
              component: 'AgText',
              el: 'span',
              text: 'Campaign Setup • Live Attribution',
            },
            {
              id: 'triage_heading',
              component: 'AgText',
              el: 'h3',
              text: { '@path': '/ticket/headline' },
            },
            {
              id: 'triage_fieldset',
              component: 'AgFieldset',
              legend: 'Routing Region & Campaign Owner',
              bordered: true,
              children: [
                'cluster_combobox',
                'email_input',
                'revoke_toggle',
              ],
            },
            {
              id: 'cluster_combobox',
              component: 'AgCombobox',
              label: 'Sales Routing Desk',
              placeholder: 'Search sales desk...',
              required: true,
              options: [
                { value: 'na-enterprise', label: 'North America Enterprise Desk' },
                { value: 'emea-growth', label: 'EMEA Growth & Inbound Desk' },
                { value: 'apac-solutions', label: 'APAC Solutions Team' },
              ],
              value: { '@path': '/form/cluster' },
            },
            {
              id: 'email_input',
              component: 'AgInput',
              label: 'Campaign Owner Email',
              type: 'email',
              placeholder: 'jordan@company.com',
              required: true,
              value: { '@path': '/form/email' },
            },
            {
              id: 'revoke_toggle',
              component: 'AgToggle',
              label: 'Enable real-time conversation transcription & QA scoring',
              checked: { '@path': '/form/revokePrevious' },
            },
            {
              id: 'submit_btn',
              component: 'AgButton',
              variant: 'primary',
              size: 'lg',
              shape: 'rounded',
              label: 'Launch Campaign & Routing',
              action: {
                event: {
                  name: 'launch_campaign_routing',
                  context: {
                    cluster: { '@path': '/form/cluster' },
                    email: { '@path': '/form/email' },
                    transcriptionEnabled: { '@path': '/form/revokePrevious' },
                  },
                },
              },
            },
          ],
        },
      },
      {
        version: '1.0',
        updateDataModel: {
          surfaceId: 'support_surface',
          path: '/',
          value: {
            ticket: {
              headline: 'Q4 Paid Search Call Attribution & Routing',
            },
            form: {
              cluster: 'na-enterprise',
              email: 'jordan.taylor@brand.io',
              revokePrevious: true,
            },
          },
        },
      },
    ],
  },
];

interface UpdateComponentsEnvelope {
  updateComponents?: {
    surfaceId?: string;
    components?: Array<Record<string, unknown>>;
  };
}

export function buildActionConfirmationMessages(
  existingMessages: A2uiWireMessage[],
  actionDetail: Record<string, unknown>,
): A2uiWireMessage[] {
  const envelopes = existingMessages as unknown as UpdateComponentsEnvelope[];
  const updateMsg = envelopes.find(
    (m) => typeof m.updateComponents === 'object' && m.updateComponents !== null,
  );

  const baseComponents = updateMsg?.updateComponents?.components ?? [];
  const rootComp = baseComponents.find((c) => c.id === 'root');
  const rootChildren = Array.isArray(rootComp?.children)
    ? [...(rootComp.children as string[])]
    : [];

  const eventObj =
    typeof actionDetail.event === 'object' && actionDetail.event !== null
      ? (actionDetail.event as Record<string, unknown>)
      : undefined;

  const actionName = String(
    actionDetail.name ?? eventObj?.name ?? 'action_completed',
  );

  const rawContext =
    typeof actionDetail.context === 'object' && actionDetail.context !== null
      ? (actionDetail.context as Record<string, unknown>)
      : typeof eventObj?.context === 'object' && eventObj.context !== null
        ? (eventObj.context as Record<string, unknown>)
        : {};

  const ownerEmail =
    typeof rawContext.ownerEmail === 'string' && rawContext.ownerEmail.trim().length > 0
      ? rawContext.ownerEmail.trim()
      : undefined;

  // Reject missing or empty /form/ownerEmail on SLA policy publish, keeping it unpublished and required
  if (actionName === 'publish_sla_policy' && !ownerEmail) {
    const enforcedComponents = baseComponents.map((c) =>
      c.id === 'sla_approver_input' ? { ...c, required: true } : c,
    );
    return [
      {
        version: '1.0',
        updateComponents: {
          surfaceId: 'support_surface',
          components: enforcedComponents,
        },
      } as unknown as A2uiWireMessage,
    ];
  }

  if (!rootChildren.includes('user_action_bubble')) {
    rootChildren.push('user_action_bubble');
  }
  if (!rootChildren.includes('agent_confirm_bubble')) {
    rootChildren.push('agent_confirm_bubble');
  }

  const sourceComponentId =
    typeof actionDetail.sourceComponentId === 'string'
      ? actionDetail.sourceComponentId
      : undefined;

  const clickedButton =
    (sourceComponentId
      ? baseComponents.find((c) => c.id === sourceComponentId)
      : undefined) ??
    baseComponents.find((c) => c.component === 'AgButton');

  const buttonDisplayLabel =
    typeof clickedButton?.label === 'string' && clickedButton.label.length > 0
      ? clickedButton.label
      : actionName
          .split('_')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');

  const summaryLine = ownerEmail
    ? `All preferences have been validated and published. Confirmation and live alerts are routed to ${ownerEmail}.`
    : typeof rawContext.title === 'string'
      ? `Overflow routing is now active for "${rawContext.title}". Senior specialists have been notified.`
      : 'Your workflow has been validated and published to the active workspace.';

  const updatedComponents = [
    ...baseComponents.map((c) =>
      c.id === 'root' ? { ...c, children: rootChildren } : c,
    ),
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
      children: ['confirm_badge', 'confirm_alert'],
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
      text: `Published • ${buttonDisplayLabel}`,
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
  ];

  return [
    {
      version: '1.0',
      updateComponents: {
        surfaceId: 'support_surface',
        components: updatedComponents,
      },
    } as unknown as A2uiWireMessage,
  ];
}
