import {
  AGNOSTICUI_CATALOG_ID,
  AgnosticUICatalog,
  type A2uiWireMessage,
} from '@agnosticui/a2ui-lit';

export const GEMINI_MODEL_ID = 'gemini-3.8-flash';
export const MAX_SESSION_CALLS = 5;

let sessionCallCount = 0;

export interface LiveGeminiResult {
  messages: A2uiWireMessage[];
  latencyMs: number;
  callsUsed: number;
  maxCalls: number;
}

export function getGeminiSessionUsage(): { used: number; max: number } {
  return { used: sessionCallCount, max: MAX_SESSION_CALLS };
}

function buildSystemInstruction(): string {
  const componentList = Object.keys(AgnosticUICatalog.components)
    .map((name) => `- ${name}`)
    .join('\n');

  return [
    'You are an A2UI v1.0 UI compiler for AgnosticUI Web Components.',
    `Use exact catalogId: "${AGNOSTICUI_CATALOG_ID}".`,
    'Respond ONLY with a valid JSON array of A2UI v1.0 wire messages:',
    '1) {"version":"1.0","createSurface":{"surfaceId":"support_surface","catalogId":"' +
      AGNOSTICUI_CATALOG_ID +
      '"}}',
    '2) {"version":"1.0","updateComponents":{"surfaceId":"support_surface","components":[...]}}',
    '3) {"version":"1.0","updateDataModel":{"surfaceId":"support_surface","path":"/","value":{...}}}',
    'Rules:',
    '- Root component MUST have id: "root" (typically AgCard with stacked: true).',
    '- Every component uses flat adjacency list references via children: ["child_id"].',
    '- Bind dynamic values using {"@path": "/form/fieldName"} and populate initial values in updateDataModel.',
    '- Set required: true on important AgInput fields for FACE validation.',
    '- Available catalog components:',
    componentList,
  ].join('\n');
}

function extractJsonArray(rawText: string): A2uiWireMessage[] {
  const cleaned = rawText
    .trim()
    .replace(/^```(?:json)?\s*/i, '')
    .replace(/\s*```$/i, '')
    .trim();

  const parsed = JSON.parse(cleaned) as unknown;
  if (!Array.isArray(parsed)) {
    throw new Error('Gemini response was not a JSON array of A2UI messages.');
  }
  return parsed as A2uiWireMessage[];
}

export async function generateLiveA2uiSurface(
  apiKey: string,
  userPrompt: string,
): Promise<LiveGeminiResult> {
  const trimmedKey = apiKey.trim();
  const trimmedPrompt = userPrompt.trim();

  if (!trimmedKey) {
    throw new Error('Please paste your Google AI Studio API key first.');
  }
  if (!trimmedPrompt) {
    throw new Error('Please enter a workflow prompt to generate.');
  }
  if (sessionCallCount >= MAX_SESSION_CALLS) {
    throw new Error(
      `Session safety cap reached (${MAX_SESSION_CALLS}/${MAX_SESSION_CALLS} Gemini calls). Reload the page to reset.`,
    );
  }

  sessionCallCount += 1;
  const startedAt = performance.now();
  const host = ['generativelanguage', 'googleapis', 'com'].join('.');
  const url = new URL(
    `https://${host}/v1beta/models/${encodeURIComponent(GEMINI_MODEL_ID)}:generateContent`,
  );
  url.searchParams.set('key', trimmedKey);

  const response = await fetch(url.toString(), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      systemInstruction: {
        parts: [{ text: buildSystemInstruction() }],
      },
      contents: [
        {
          role: 'user',
          parts: [{ text: trimmedPrompt }],
        },
      ],
      generationConfig: {
        temperature: 0.2,
        responseMimeType: 'application/json',
      },
    }),
  });

  if (!response.ok) {
    const errBody = await response.text();
    throw new Error(`Gemini API HTTP ${response.status}: ${errBody.slice(0, 240)}`);
  }

  const data = (await response.json()) as {
    candidates?: Array<{
      content?: { parts?: Array<{ text?: string }> };
    }>;
  };

  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) {
    throw new Error('Gemini returned an empty candidate response.');
  }

  const messages = extractJsonArray(text);
  const latencyMs = Math.round(performance.now() - startedAt);

  return {
    messages,
    latencyMs,
    callsUsed: sessionCallCount,
    maxCalls: MAX_SESSION_CALLS,
  };
}

function buildSlaCreditCapSurface(trimmedPrompt: string): A2uiWireMessage[] {
  return [
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
            children: ['user_prompt_bubble', 'agent_reply_bubble'],
          },
          {
            id: 'user_prompt_bubble',
            component: 'AgMessageBubble',
            from: 'me',
            author: 'Jordan Taylor • Growth Marketing',
            time: 'Just now',
            message: trimmedPrompt,
          },
          {
            id: 'agent_reply_bubble',
            component: 'AgMessageBubble',
            from: 'them',
            variant: 'neutral',
            author: 'Enterprise Policy Concierge',
            time: 'Just now',
            children: ['sla_card'],
          },
          {
            id: 'sla_card',
            component: 'AgCard',
            stacked: true,
            children: [
              'sla_breadcrumb',
              'sla_badge',
              'sla_heading',
              'sla_fieldset',
              'sla_threshold_alert',
              'sla_submit_btn',
            ],
          },
          {
            id: 'sla_breadcrumb',
            component: 'AgBreadcrumb',
            type: 'slash',
            items: [
              { label: 'Support Ops', href: '#ops' },
              { label: 'Enterprise SLA', href: '#sla' },
              { label: 'Escalation Policy', current: true },
            ],
          },
          {
            id: 'sla_badge',
            component: 'AgBadge',
            variant: 'info',
            children: ['sla_badge_text'],
          },
          {
            id: 'sla_badge_text',
            component: 'AgText',
            el: 'span',
            text: 'SLA Governance • Two-Way @path Slider',
          },
          {
            id: 'sla_heading',
            component: 'AgText',
            el: 'h3',
            text: { '@path': '/policy/title' },
          },
          {
            id: 'sla_fieldset',
            component: 'AgFieldset',
            legend: 'Auto-Approved Credit Cap & Escalation',
            bordered: true,
            children: [
              'sla_cap_currency',
              'sla_cap_slider',
              'sla_approver_input',
            ],
          },
          {
            id: 'sla_cap_currency',
            component: 'AgIntlFormatter',
            type: 'currency',
            currency: 'USD',
            lang: 'en-US',
            value: { '@path': '/policy/maxCredit' },
          },
          {
            id: 'sla_cap_slider',
            component: 'AgSlider',
            label: 'Auto-Approved SLA Credit Cap ($)',
            min: 0,
            max: 5000,
            step: 250,
            showTooltip: true,
            value: { '@path': '/policy/maxCredit' },
          },
          {
            id: 'sla_approver_input',
            component: 'AgInput',
            label: 'Escalation Approver Email',
            type: 'email',
            required: true,
            value: { '@path': '/form/ownerEmail' },
          },
          {
            id: 'sla_threshold_alert',
            component: 'AgAlert',
            variant: 'warning',
            borderedLeft: true,
            children: ['sla_threshold_mark'],
          },
          {
            id: 'sla_threshold_mark',
            component: 'AgMark',
            variant: 'warning',
            children: ['sla_threshold_copy'],
          },
          {
            id: 'sla_threshold_copy',
            component: 'AgText',
            el: 'span',
            text: 'Credits above $2,500 trigger automatic VP Support sign-off.',
          },
          {
            id: 'sla_submit_btn',
            component: 'AgButton',
            variant: 'primary',
            size: 'lg',
            shape: 'rounded',
            label: 'Publish SLA Policy',
            action: {
              event: {
                name: 'publish_sla_policy',
                context: {
                  maxCredit: { '@path': '/policy/maxCredit' },
                  ownerEmail: { '@path': '/form/ownerEmail' },
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
          policy: {
            title: 'Enterprise SLA & Auto-Credit Policy',
            maxCredit: 1500,
          },
          form: {
            ownerEmail: 'jordan.taylor@brand.io',
          },
        },
      },
    },
  ];
}

export async function generateLocalA2uiSurface(
  userPrompt: string,
): Promise<LiveGeminiResult> {
  const trimmedPrompt = userPrompt.trim();
  if (!trimmedPrompt) {
    throw new Error('Please enter a workflow prompt to generate.');
  }

  const startedAt = performance.now();
  await new Promise((resolve) => window.setTimeout(resolve, 120));

  const lower = trimmedPrompt.toLowerCase();
  const isSlaPolicy =
    /\bsla\b/i.test(trimmedPrompt) ||
    lower.includes('credit cap') ||
    lower.includes('slider') ||
    lower.includes('escalation policy');

  const isAlert =
    !isSlaPolicy &&
    (lower.includes('surge') ||
      lower.includes('spike') ||
      lower.includes('outage') ||
      lower.includes('incident'));

  const isVipRouting =
    !isSlaPolicy &&
    !isAlert &&
    (lower.includes('vip') ||
      lower.includes('priority caller') ||
      lower.includes('routing rule') ||
      lower.includes('desk'));

  const messages: A2uiWireMessage[] = isSlaPolicy
    ? buildSlaCreditCapSurface(trimmedPrompt)
    : isAlert
      ? [
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
                  children: ['user_prompt_bubble', 'agent_reply_bubble'],
                },
                {
                  id: 'user_prompt_bubble',
                  component: 'AgMessageBubble',
                  from: 'me',
                  author: 'Jordan Taylor • Growth Marketing',
                  time: 'Just now',
                  message: trimmedPrompt,
                },
                {
                  id: 'agent_reply_bubble',
                  component: 'AgMessageBubble',
                  from: 'them',
                  variant: 'neutral',
                  author: 'CX Insights Agent',
                  time: 'Just now',
                  children: ['incident_card'],
                },
                {
                  id: 'incident_card',
                  component: 'AgCard',
                  stacked: true,
                  children: [
                    'local_badge',
                    'local_heading',
                    'local_alert',
                    'local_ack_btn',
                  ],
                },
                {
                  id: 'local_badge',
                  component: 'AgBadge',
                  variant: 'warning',
                  children: ['local_badge_text'],
                },
                {
                  id: 'local_badge_text',
                  component: 'AgText',
                  el: 'span',
                  text: 'Live Trend • High-Intent Caller Surge',
                },
                {
                  id: 'local_heading',
                  component: 'AgText',
                  el: 'h3',
                  text: { '@path': '/incident/title' },
                },
                {
                  id: 'local_alert',
                  component: 'AgAlert',
                  variant: 'primary',
                  borderedLeft: true,
                  children: ['local_alert_copy'],
                },
                {
                  id: 'local_alert_copy',
                  component: 'AgText',
                  el: 'p',
                  text: trimmedPrompt,
                },
                {
                  id: 'local_ack_btn',
                  component: 'AgButton',
                  variant: 'primary',
                  label: 'Activate Overflow Routing',
                  shape: 'rounded',
                  action: {
                    event: {
                      name: 'activate_overflow_routing',
                      context: {
                        title: { '@path': '/incident/title' },
                        overflowActive: true,
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
                incident: {
                  title: '42% Surge in Qualified Inbound Sales Calls',
                  severity: 'elevated',
                },
              },
            },
          },
        ]

              : isVipRouting
        ? [
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
                    children: ['user_prompt_bubble', 'agent_reply_bubble'],
                  },
                  {
                    id: 'user_prompt_bubble',
                    component: 'AgMessageBubble',
                    from: 'me',
                    author: 'Jordan Taylor • Growth Marketing',
                    time: 'Just now',
                    message: trimmedPrompt,
                  },
                  {
                    id: 'agent_reply_bubble',
                    component: 'AgMessageBubble',
                    from: 'them',
                    variant: 'neutral',
                    author: 'Routing Concierge',
                    time: 'Just now',
                    children: ['vip_card'],
                  },
                  {
                    id: 'vip_card',
                    component: 'AgCard',
                    stacked: true,
                    children: [
                      'vip_badge',
                      'vip_heading',
                      'vip_fieldset',
                      'vip_submit_btn',
                    ],
                  },
                  {
                    id: 'vip_badge',
                    component: 'AgBadge',
                    variant: 'success',
                    children: ['vip_badge_text'],
                  },
                  {
                    id: 'vip_badge_text',
                    component: 'AgText',
                    el: 'span',
                    text: 'Priority Routing • Enterprise Accounts',
                  },
                  {
                    id: 'vip_heading',
                    component: 'AgText',
                    el: 'h3',
                    text: { '@path': '/routing/ruleName' },
                  },
                  {
                    id: 'vip_fieldset',
                    component: 'AgFieldset',
                    legend: 'Destination Desk & QA Scoring',
                    bordered: true,
                    children: [
                      'vip_desk_combobox',
                      'vip_owner_input',
                      'vip_qa_toggle',
                    ],
                  },
                  {
                    id: 'vip_desk_combobox',
                    component: 'AgCombobox',
                    label: 'Destination Sales Desk',
                    placeholder: 'Select sales desk...',
                    required: true,
                    options: [
                      {
                        value: 'na-enterprise',
                        label: 'North America Enterprise Desk',
                      },
                      { value: 'emea-growth', label: 'EMEA Growth & Inbound Desk' },
                      { value: 'apac-solutions', label: 'APAC Solutions Team' },
                    ],
                    value: { '@path': '/routing/desk' },
                  },
                  {
                    id: 'vip_owner_input',
                    component: 'AgInput',
                    label: 'Account Manager Email',
                    type: 'email',
                    placeholder: 'manager@company.com',
                    required: true,
                    value: { '@path': '/form/ownerEmail' },
                  },
                  {
                    id: 'vip_qa_toggle',
                    component: 'AgToggle',
                    label: 'Enable real-time conversation transcription & QA scoring',
                    checked: { '@path': '/routing/qaScoring' },
                  },
                  {
                    id: 'vip_submit_btn',
                    component: 'AgButton',
                    variant: 'primary',
                    size: 'lg',
                    shape: 'rounded',
                    label: 'Publish VIP Routing Rule',
                    action: {
                      event: {
                        name: 'publish_vip_routing',
                        context: {
                          cluster: { '@path': '/routing/desk' },
                          desk: { '@path': '/routing/desk' },
                          ownerEmail: { '@path': '/form/ownerEmail' },
                          qaScoring: { '@path': '/routing/qaScoring' },
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
                  routing: {
                    ruleName: 'Enterprise Demo Priority Caller Routing',
                    desk: 'na-enterprise',
                    qaScoring: true,
                  },
                  form: {
                    ownerEmail: 'jordan.taylor@brand.io',
                  },
                },
              },
            },
          ]
        : [
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
                    children: ['user_prompt_bubble', 'agent_reply_bubble'],
                  },
                  {
                    id: 'user_prompt_bubble',
                    component: 'AgMessageBubble',
                    from: 'me',
                    author: 'Jordan Taylor • Growth Marketing',
                    time: 'Just now',
                    message: trimmedPrompt,
                  },
                  {
                    id: 'agent_reply_bubble',
                    component: 'AgMessageBubble',
                    from: 'them',
                    variant: 'neutral',
                    author: 'Campaign Concierge',
                    time: 'Just now',
                    children: ['generated_form_card'],
                  },
                  {
                    id: 'generated_form_card',
                    component: 'AgCard',
                    stacked: true,
                    children: [
                      'local_badge',
                      'local_heading',
                      'local_fieldset',
                      'local_submit_btn',
                    ],
                  },
                  {
                    id: 'local_badge',
                    component: 'AgBadge',
                    variant: 'info',
                    children: ['local_badge_text'],
                  },
                  {
                    id: 'local_badge_text',
                    component: 'AgText',
                    el: 'span',
                    text: 'Campaign Setup • Live Attribution',
                  },
                  {
                    id: 'local_heading',
                    component: 'AgText',
                    el: 'h3',
                    text: { '@path': '/meta/title' },
                  },
                  {
                    id: 'local_fieldset',
                    component: 'AgFieldset',
                    legend: 'Campaign Attribution Details',
                    bordered: true,
                    children: [
                      'owner_email_input',
                      'resource_id_input',
                      'urgent_checkbox',
                    ],
                  },
                  {
                    id: 'owner_email_input',
                    component: 'AgInput',
                    label: 'Campaign Owner Email',
                    type: 'email',
                    placeholder: 'jordan@company.com',
                    required: true,
                    value: { '@path': '/form/ownerEmail' },
                  },
                  {
                    id: 'resource_id_input',
                    component: 'AgInput',
                    label: 'Campaign Channel / Line Name',
                    placeholder: 'Paid Search — Enterprise Demo',
                    required: true,
                    value: { '@path': '/form/resourceId' },
                  },
                  {
                    id: 'urgent_checkbox',
                    component: 'AgCheckbox',
                    labelText: 'Notify sales specialists immediately on high-intent calls',
                    checked: { '@path': '/form/expedited' },
                  },
                  {
                    id: 'local_submit_btn',
                    component: 'AgButton',
                    variant: 'primary',
                    size: 'lg',
                    shape: 'rounded',
                    label: 'Launch Campaign & Routing',
                    action: {
                      event: {
                        name: 'launch_campaign_routing',
                        context: {
                          ownerEmail: { '@path': '/form/ownerEmail' },
                          resourceId: { '@path': '/form/resourceId' },
                          expedited: { '@path': '/form/expedited' },
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
                  meta: { title: 'Q4 Paid Search Call Attribution' },
                  form: {
                    ownerEmail: 'jordan.taylor@brand.io',
                    resourceId: 'Paid Search — Enterprise Demo',
                    expedited: true,
                  },
                },
              },
            },
          ];

  return {
    messages,
    latencyMs: Math.round(performance.now() - startedAt),
    callsUsed: sessionCallCount,
    maxCalls: MAX_SESSION_CALLS,
  };
}
