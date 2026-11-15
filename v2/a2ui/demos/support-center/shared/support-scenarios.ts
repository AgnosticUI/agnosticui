import { AGNOSTICUI_CATALOG_ID, type A2uiWireMessage } from '@agnosticui/a2ui-lit';

export interface SupportScenario {
  id: string;
  title: string;
  prompt: string;
  messages: A2uiWireMessage[];
}

export const SUPPORT_SCENARIOS: SupportScenario[] = [
  {
    id: 'conversational_agent_triage',
    title: '1. Conversational Agent Triage (MessageBubble + Combobox + FACE)',
    prompt:
      'Caller asks Signal AI Agent to rotate a compromised Google Ads Webhook key and route alerts to the regional cluster.',
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
              author: 'Maya Patel • Revenue Ops',
              time: 'Just now',
              message:
                'We detected unexpected webhook retries on our Google Ads conversion endpoint. Can you help rotate the signing key for US-East?',
            },
            {
              id: 'agent_bubble',
              component: 'AgMessageBubble',
              from: 'them',
              variant: 'neutral',
              author: 'Signal AI Concierge',
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
              variant: 'warning',
              children: ['triage_badge_text'],
            },
            {
              id: 'triage_badge_text',
              component: 'AgText',
              el: 'span',
              text: 'P1 • Key Rotation & Webhook Guard',
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
              legend: 'Target Cluster & Security Owner',
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
              label: 'Routing Cluster',
              placeholder: 'Search regional cluster...',
              required: true,
              options: [
                { value: 'us-east-prod', label: 'US-East Production (Primary)' },
                { value: 'eu-central-prod', label: 'EU-Frankfurt (GDPR)' },
                { value: 'ap-southeast-prod', label: 'AP-Sydney Edge' },
              ],
              value: { '@path': '/form/cluster' },
            },
            {
              id: 'email_input',
              component: 'AgInput',
              label: 'Security Owner Email',
              type: 'email',
              placeholder: 'secops@company.com',
              required: true,
              value: { '@path': '/form/email' },
            },
            {
              id: 'revoke_toggle',
              component: 'AgToggle',
              label: 'Revoke previous signing secret immediately',
              checked: { '@path': '/form/revokePrevious' },
            },
            {
              id: 'submit_btn',
              component: 'AgButton',
              variant: 'primary',
              size: 'lg',
              shape: 'rounded',
              label: 'Validate & Rotate Signing Key',
              action: {
                event: {
                  name: 'rotate_webhook_key',
                  context: {
                    cluster: { '@path': '/form/cluster' },
                    email: { '@path': '/form/email' },
                    revokePrevious: { '@path': '/form/revokePrevious' },
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
              headline: 'Google Ads Conversion Webhook Key Rotation',
            },
            form: {
              cluster: 'us-east-prod',
              email: 'maya.patel@enterprise.io',
              revokePrevious: true,
            },
          },
        },
      },
    ],
  },
  {
    id: 'enterprise_triage',
    title: '2. Enterprise SSO Access Escalation (FACE + Two-Way @path)',
    prompt:
      'User usr_992 reports 403 SSO errors on enterprise invoice exports. Generate an access escalation form with validation.',
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
              children: ['sso_user_bubble', 'sso_agent_bubble'],
            },
            {
              id: 'sso_user_bubble',
              component: 'AgMessageBubble',
              from: 'me',
              author: 'David Chen • Enterprise Admin',
              time: '2m ago',
              message:
                'Our finance team (usr_992) is getting 403 Forbidden errors when exporting monthly invoices after our SAML IdP update.',
            },
            {
              id: 'sso_agent_bubble',
              component: 'AgMessageBubble',
              from: 'them',
              variant: 'neutral',
              author: 'Signal AI Concierge',
              time: '2m ago',
              children: ['sso_form_card'],
            },
            {
              id: 'sso_form_card',
              component: 'AgCard',
              stacked: true,
              children: [
                'header_tag',
                'title_text',
                'sla_alert',
                'ticket_fieldset',
                'sso_submit_btn',
              ],
            },
            {
              id: 'header_tag',
              component: 'AgBadge',
              variant: 'warning',
              children: ['header_tag_text'],
            },
            {
              id: 'header_tag_text',
              component: 'AgText',
              el: 'span',
              text: 'P1 • Enterprise SSO',
            },
            {
              id: 'title_text',
              component: 'AgText',
              el: 'h3',
              text: { '@path': '/ticket/headline' },
            },
            {
              id: 'sla_alert',
              component: 'AgAlert',
              variant: 'info',
              borderedLeft: true,
              children: ['sla_copy'],
            },
            {
              id: 'sla_copy',
              component: 'AgText',
              el: 'p',
              text: 'All fields below are live-bound via A2UI @path pointers and validated client-side via FACE reportValidity().',
            },
            {
              id: 'ticket_fieldset',
              component: 'AgFieldset',
              legend: 'Escalation Details',
              bordered: true,
              children: ['email_input', 'summary_input', 'urgent_check'],
            },
            {
              id: 'email_input',
              component: 'AgInput',
              label: 'Requester Work Email',
              type: 'email',
              placeholder: 'name@company.com',
              required: true,
              value: { '@path': '/form/email' },
            },
            {
              id: 'summary_input',
              component: 'AgInput',
              label: 'Incident Summary',
              placeholder: 'Describe SAML / invoice export symptom...',
              required: true,
              value: { '@path': '/form/summary' },
            },
            {
              id: 'urgent_check',
              component: 'AgCheckbox',
              labelText: 'Notify on-call security engineer immediately',
              checked: { '@path': '/form/pageOnCall' },
            },
            {
              id: 'sso_submit_btn',
              component: 'AgButton',
              variant: 'primary',
              size: 'lg',
              shape: 'rounded',
              label: 'Validate & Dispatch Escalation',
              action: {
                event: {
                  name: 'submit_escalation',
                  context: {
                    email: { '@path': '/form/email' },
                    summary: { '@path': '/form/summary' },
                    pageOnCall: { '@path': '/form/pageOnCall' },
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
            ticket: { headline: 'Ticket #INV-992: Enterprise Invoice SSO 403' },
            form: {
              email: 'usr_992@acme-corp.io',
              summary:
                'SAML assertion succeeds, but /api/v2/invoices returns 403 Forbidden',
              pageOnCall: true,
            },
          },
        },
      },
    ],
  },

    {
    id: 'status_overview',
    title: '3. Incident Diagnostics & Resolution Card',
    prompt:
      'Summarize root cause and resolution steps for SSO token scope mismatch.',
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
              children: ['diag_user_bubble', 'diag_agent_bubble'],
            },
            {
              id: 'diag_user_bubble',
              component: 'AgMessageBubble',
              from: 'me',
              author: 'David Chen • Enterprise Admin',
              time: '1m ago',
              message:
                'Can you run diagnostics on ticket #INV-992 and check which OAuth claim is missing?',
            },
            {
              id: 'diag_agent_bubble',
              component: 'AgMessageBubble',
              from: 'them',
              variant: 'neutral',
              author: 'Signal AI Diagnostics',
              time: 'Just now',
              children: ['diag_card'],
            },
            {
              id: 'diag_card',
              component: 'AgCard',
              stacked: true,
              children: [
                'resolved_badge',
                'diag_heading',
                'diag_alert',
                'divider_1',
                'ack_btn',
              ],
            },
            {
              id: 'resolved_badge',
              component: 'AgBadge',
              variant: 'success',
              children: ['resolved_badge_text'],
            },
            {
              id: 'resolved_badge_text',
              component: 'AgText',
              el: 'span',
              text: 'Root Cause Identified',
            },
            {
              id: 'diag_heading',
              component: 'AgText',
              el: 'h3',
              text: 'OAuth Scope Mismatch on Billing Role',
            },
            {
              id: 'diag_alert',
              component: 'AgAlert',
              variant: 'success',
              bordered: true,
              children: ['diag_body'],
            },
            {
              id: 'diag_body',
              component: 'AgText',
              el: 'p',
              text: 'Adding the `invoices:read` claim to the IdP group mapping restores access immediately without re-deploying.',
            },
            { id: 'divider_1', component: 'AgDivider' },
            {
              id: 'ack_btn',
              component: 'AgButton',
              variant: 'secondary',
              shape: 'rounded',
              label: 'Apply Patch & Close Ticket',
              action: {
                event: {
                  name: 'close_ticket',
                  context: { ticketId: 'INV-992' },
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
          path: '/status',
          value: 'ready',
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

  if (!rootChildren.includes('agent_confirm_bubble')) {
    rootChildren.push('agent_confirm_bubble');
  }

  const eventObj =
    typeof actionDetail.event === 'object' && actionDetail.event !== null
      ? (actionDetail.event as Record<string, unknown>)
      : undefined;

  const actionName = String(
    actionDetail.name ?? eventObj?.name ?? 'action_completed',
  );

  const updatedComponents = [
    ...baseComponents.map((c) =>
      c.id === 'root' ? { ...c, children: rootChildren } : c,
    ),
    {
      id: 'agent_confirm_bubble',
      component: 'AgMessageBubble',
      from: 'them',
      variant: 'success',
      author: 'Signal AI Concierge',
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
      text: `FACE Validated • ${actionName}`,
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
      text: 'Action verified and committed to the tenant audit trail. All required FACE fields passed validation.',
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
