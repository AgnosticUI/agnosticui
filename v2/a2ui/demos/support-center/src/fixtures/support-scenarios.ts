import { AGNOSTICUI_CATALOG_ID, type A2uiWireMessage } from '@agnosticui/a2ui-lit';

export interface SupportScenario {
  id: string;
  title: string;
  prompt: string;
  messages: A2uiWireMessage[];
}

export const SUPPORT_SCENARIOS: SupportScenario[] = [
  {
    id: 'enterprise_triage',
    title: '1. Enterprise Account Access Form (FACE + Two-Way @path)',
    prompt: 'User usr_992 reports 403 SSO errors on enterprise invoice exports. Generate an access escalation form with validation.',
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
              shadow: true,
              stacked: true,
              children: ['header_tag', 'title_text', 'sla_alert', 'ticket_fieldset', 'submit_btn'],
            },
            { id: 'header_tag', component: 'AgBadge', variant: 'warning', value: 'P1 • Enterprise SSO' },
            { id: 'title_text', component: 'AgText', el: 'h2', text: { '@path': '/ticket/headline' } },
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
              id: 'submit_btn',
              component: 'AgButton',
              variant: 'primary',
              size: 'lg',
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
              summary: 'SAML assertion succeeds, but /api/v2/invoices returns 403 Forbidden',
              pageOnCall: true,
            },
          },
        },
      },
    ],
  },
  {
    id: 'status_overview',
    title: '2. Incident Diagnostics & Resolution Card',
    prompt: 'Summarize root cause and resolution steps for SSO token scope mismatch.',
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
              shadow: true,
              stacked: true,
              variant: 'success',
              children: ['resolved_badge', 'diag_heading', 'diag_alert', 'divider_1', 'ack_btn'],
            },
            { id: 'resolved_badge', component: 'AgBadge', variant: 'success', value: 'Root Cause Identified' },
            { id: 'diag_heading', component: 'AgText', el: 'h2', text: 'OAuth Scope Mismatch on Billing Role' },
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
