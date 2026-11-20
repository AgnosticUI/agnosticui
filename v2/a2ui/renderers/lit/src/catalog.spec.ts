// Comprehensive Vitest suite for @agnosticui/a2ui-lit:
// 1. Verifies all ported catalog components mount into <a2ui-surface> Light DOM & resolve @path bindings
// 2. Verifies two-way @path data binding across all ported interactive form controls
// 3. Verifies AgnosticUI FACE validation via validateSurface client function

import { describe, it, expect, beforeEach } from 'vitest';
import { MessageProcessor, DataContext } from '@a2ui/web_core/v1_0';
import { A2uiSurface, type LitComponentApi } from '@a2ui/lit';
import {
  AGNOSTICUI_CATALOG_ID,
  AgnosticUICatalog,
  registerAgnosticUICatalog,
  ValidateSurfaceImplementation,
  createMockA2uiStream,
  type A2uiWireMessage,
} from './index.js';

/**
 * Recursively awaits Lit `updateComplete` across light DOM and shadow roots
 * so every nested custom element finishes rendering before assertions run.
 */
async function settleTree(node: Node): Promise<void> {
  const el = node as HTMLElement & { updateComplete?: Promise<boolean> };
  if (el.updateComplete) {
    await el.updateComplete;
  }
  if (el.shadowRoot) {
    await settleTree(el.shadowRoot);
  }
  for (const child of Array.from(node.childNodes)) {
    await settleTree(child);
  }
}

/**
 * Streams an A2UI v1.0 fixture into a fresh MessageProcessor, mounts <a2ui-surface>,
 * and waits for all Lit components to settle.
 */
async function mountFixture(
  processor: MessageProcessor<LitComponentApi>,
  surfaceId: string,
  fixture: A2uiWireMessage[],
) {
  for await (const msg of createMockA2uiStream(fixture)) {
    processor.processMessages([msg as never]);
  }
  const surfaceModel = processor.model.getSurface(surfaceId);
  expect(surfaceModel).toBeDefined();

  const surfaceEl = new A2uiSurface();
  surfaceEl.setAttribute('data-surface-id', surfaceId);
  document.body.appendChild(surfaceEl);
  surfaceEl.surface = surfaceModel;
  await settleTree(surfaceEl);
  await new Promise((r) => setTimeout(r, 0));
  await settleTree(surfaceEl);

  return { surfaceModel: surfaceModel!, surfaceEl };
}

interface CatalogComponentCase {
  component: string;
  expectedTag: string;
  props: Record<string, unknown>;
  assertRendered?: (el: HTMLElement) => void;
}

// Exhaustive test matrix covering AgText + all 44 ported Ag* wrappers (45 total)
const ALL_CATALOG_COMPONENT_CASES: CatalogComponentCase[] = [
  {
    component: 'AgText',
    expectedTag: 'ag-a2ui-text',
    props: { el: 'h2', text: { '@path': '/dynamicTitle' } },
    assertRendered: (el) => expect(el.querySelector('h2')?.textContent).toBe('Resolved Catalog Heading'),
  },
  { component: 'AgAccordion', expectedTag: 'ag-accordion', props: {} },
  { component: 'AgAlert', expectedTag: 'ag-alert', props: { variant: 'info' } },
  { component: 'AgAspectRatio', expectedTag: 'ag-aspect-ratio', props: { width: 16, height: 9 } },
  { component: 'AgAvatar', expectedTag: 'ag-avatar', props: { text: 'JT' } },
  { component: 'AgBadge', expectedTag: 'ag-badge', props: { variant: 'success' } },
  {
    component: 'AgBreadcrumb',
    expectedTag: 'ag-breadcrumb',
    props: { items: [{ label: 'Home', href: '/' }, { label: 'Catalog', current: true }] },
  },
  {
    component: 'AgButton',
    expectedTag: 'ag-button',
    props: { variant: 'primary', label: 'Launch' },
    assertRendered: (el) => expect(el.textContent?.trim()).toBe('Launch'),
  },
  { component: 'AgCard', expectedTag: 'ag-card', props: { shadow: true } },
  { component: 'AgCheckbox', expectedTag: 'ag-checkbox', props: { labelText: 'Subscribe', checked: true } },
  { component: 'AgCombobox', expectedTag: 'ag-combobox', props: { label: 'Region', value: 'us-east' } },
  { component: 'AgCopyButton', expectedTag: 'ag-copy-button', props: { text: 'sk_live_123', label: 'Copy API key' } },
  { component: 'AgDialog', expectedTag: 'ag-dialog', props: { open: false, heading: 'Confirm Action' } },
  { component: 'AgDivider', expectedTag: 'ag-divider', props: {} },
  { component: 'AgDrawer', expectedTag: 'ag-drawer', props: { open: false, heading: 'Details Drawer', position: 'end' } },
  { component: 'AgEmptyState', expectedTag: 'ag-empty-state', props: { title: 'No records yet' } },
  { component: 'AgFieldset', expectedTag: 'ag-fieldset', props: { legend: 'Account Details' } },
  { component: 'AgHeader', expectedTag: 'ag-header', props: {} },
  { component: 'AgIcon', expectedTag: 'ag-icon', props: { size: '24', type: 'primary' } },
  { component: 'AgIconButton', expectedTag: 'ag-icon-button', props: { label: 'Settings', unicode: '⚙' } },
  { component: 'AgImage', expectedTag: 'ag-image', props: { src: 'https://example.com', alt: 'Hero preview' } },
  { component: 'AgInput', expectedTag: 'ag-input', props: { label: 'Full Name', value: 'Jordan Taylor' } },
  {
    component: 'AgIntlFormatter',
    expectedTag: 'ag-intl-formatter',
    props: { type: 'currency', value: 1234.5, currency: 'USD', lang: 'en-US' },
  },
  { component: 'AgKbd', expectedTag: 'ag-kbd', props: { size: 'md' } },
  { component: 'AgLink', expectedTag: 'ag-link', props: { href: 'https://agnosticui.com', variant: 'primary' } },
  { component: 'AgLoader', expectedTag: 'ag-loader', props: { size: 'default', ariaLabel: 'Loading items' } },
  { component: 'AgMark', expectedTag: 'ag-mark', props: { variant: 'warning' } },
  { component: 'AgMessageBubble', expectedTag: 'ag-message-bubble', props: { from: 'them', author: 'Concierge' } },
  { component: 'AgPagination', expectedTag: 'ag-pagination', props: { current: 2, totalPages: 10 } },
  { component: 'AgPopover', expectedTag: 'ag-popover', props: { placement: 'bottom', triggerType: 'click' } },
  { component: 'AgProgress', expectedTag: 'ag-progress', props: { value: 65, max: 100 } },
  { component: 'AgProgressRing', expectedTag: 'ag-progress-ring', props: { value: 80 } },
  { component: 'AgRadio', expectedTag: 'ag-radio', props: { name: 'tier', value: 'pro', labelText: 'Pro Tier' } },
  { component: 'AgRating', expectedTag: 'ag-rating', props: { value: 4, max: 5 } },
  { component: 'AgSelect', expectedTag: 'ag-select', props: { label: 'Priority', value: 'high' } },
  {
    component: 'AgSelectionButton',
    expectedTag: 'ag-selection-button',
    props: { value: 'standard', label: 'Standard SLA' },
    assertRendered: (el) => expect(el.textContent?.trim()).toBe('Standard SLA'),
  },
  {
    component: 'AgSelectionButtonGroup',
    expectedTag: 'ag-selection-button-group',
    props: { type: 'radio', name: 'sla_tier', legend: 'SLA Tier' },
  },
  { component: 'AgSkeletonLoader', expectedTag: 'ag-skeleton-loader', props: { variant: 'rounded', height: '24px' } },
  { component: 'AgSlider', expectedTag: 'ag-slider', props: { label: 'Budget', min: 0, max: 100, value: 40 } },
  { component: 'AgSpinner', expectedTag: 'ag-spinner', props: {} },
  { component: 'AgTabs', expectedTag: 'ag-tabs', props: {} },
  { component: 'AgTag', expectedTag: 'ag-tag', props: { variant: 'info' } },
  { component: 'AgTimeline', expectedTag: 'ag-timeline', props: {} },
  { component: 'AgToggle', expectedTag: 'ag-toggle', props: { label: 'Auto-renew', checked: true } },
  { component: 'AgTooltip', expectedTag: 'ag-tooltip', props: { content: 'Helpful tip', placement: 'top' } },
];

describe('AgnosticUI A2UI v1.0 Catalog & Surface', () => {
  beforeEach(() => {
    registerAgnosticUICatalog();
    document.body.innerHTML = '';
  });

  it('registers all ported catalog components and mounts every single one cleanly into <a2ui-surface>', async () => {
    // Verify catalog count matches our 45-component test matrix
    expect(AgnosticUICatalog.components.size).toBe(45);
    expect(AgnosticUICatalog.components.size).toBe(ALL_CATALOG_COMPONENT_CASES.length);

    const registeredNames = Array.from(AgnosticUICatalog.components.keys()).sort();
    const testedNames = ALL_CATALOG_COMPONENT_CASES.map((c) => c.component).sort();
    expect(testedNames).toEqual(registeredNames);

    const childIds = ALL_CATALOG_COMPONENT_CASES.map((_, idx) => `item_${idx}`);
    const components: Record<string, unknown>[] = [
      { id: 'root', component: 'AgCard', shadow: true, children: childIds },
      ...ALL_CATALOG_COMPONENT_CASES.map((entry, idx) => ({
        id: `item_${idx}`,
        component: entry.component,
        ...entry.props,
      })),
    ];

    const processor = new MessageProcessor<LitComponentApi>([AgnosticUICatalog]);
    const { surfaceEl } = await mountFixture(processor, 'all_catalog_surface', [
      { version: '1.0', createSurface: { surfaceId: 'all_catalog_surface', catalogId: AGNOSTICUI_CATALOG_ID } },
      { version: '1.0', updateComponents: { surfaceId: 'all_catalog_surface', components } },
      {
        version: '1.0',
        updateDataModel: {
          surfaceId: 'all_catalog_surface',
          path: '/dynamicTitle',
          value: 'Resolved Catalog Heading',
        },
      },
    ]);

    for (const entry of ALL_CATALOG_COMPONENT_CASES) {
      const mounted = surfaceEl.querySelector(entry.expectedTag) as HTMLElement | null;
      expect(mounted, `Expected <${entry.expectedTag}> for ${entry.component} to mount`).not.toBeNull();
      entry.assertRendered?.(mounted!);
    }
    console.info(`[catalog.spec] Verified all ${ALL_CATALOG_COMPONENT_CASES.length} AgnosticUI A2UI v1.0 components mounted cleanly.`);
  });

  it('syncs two-way @path updates across all ported interactive form controls back into DataModel', async () => {
    const processor = new MessageProcessor<LitComponentApi>([AgnosticUICatalog]);
    const { surfaceModel, surfaceEl } = await mountFixture(processor, 'two_way_bindings_surface', [
      { version: '1.0', createSurface: { surfaceId: 'two_way_bindings_surface', catalogId: AGNOSTICUI_CATALOG_ID } },
      {
        version: '1.0',
        updateComponents: {
          surfaceId: 'two_way_bindings_surface',
          components: [
            {
              id: 'root',
              component: 'AgCard',
              children: [
                'email_input',
                'region_combobox',
                'priority_select',
                'terms_checkbox',
                'plan_radio',
                'csat_rating',
                'alerts_toggle',
                'budget_slider',
                'tier_group',
              ],
            },
            { id: 'email_input', component: 'AgInput', label: 'Email', value: { '@path': '/form/email' } },
            { id: 'region_combobox', component: 'AgCombobox', label: 'Region', value: { '@path': '/form/region' } },
            { id: 'priority_select', component: 'AgSelect', label: 'Priority', value: { '@path': '/form/priority' } },
            { id: 'terms_checkbox', component: 'AgCheckbox', labelText: 'Terms', checked: { '@path': '/form/terms' } },
            { id: 'plan_radio', component: 'AgRadio', labelText: 'Enterprise', checked: { '@path': '/form/enterprise' } },
            { id: 'csat_rating', component: 'AgRating', value: { '@path': '/form/rating' } },
            { id: 'alerts_toggle', component: 'AgToggle', label: 'Alerts', checked: { '@path': '/form/alerts' } },
            { id: 'budget_slider', component: 'AgSlider', label: 'Budget', min: 0, max: 100, value: { '@path': '/form/budget' } },
            {
              id: 'tier_group',
              component: 'AgSelectionButtonGroup',
              type: 'radio',
              name: 'tier_choice',
              value: { '@path': '/form/tier' },
              children: ['tier_opt_pro'],
            },
            { id: 'tier_opt_pro', component: 'AgSelectionButton', value: 'pro', label: 'Pro' },
          ],
        },
      },
      {
        version: '1.0',
        updateDataModel: {
          surfaceId: 'two_way_bindings_surface',
          path: '/form',
          value: {
            email: '',
            region: '',
            priority: '',
            terms: false,
            enterprise: false,
            rating: 0,
            alerts: false,
            budget: 25,
            tier: 'starter',
          },
        },
      },
    ]);

    const agInput = surfaceEl.querySelector('ag-input') as HTMLElement & { value?: string };
    agInput.value = 'maya.patel@enterprise.io';
    agInput.dispatchEvent(new Event('input', { bubbles: true }));

    surfaceEl.querySelector('ag-combobox')!.dispatchEvent(
      new CustomEvent('change', { detail: { value: 'eu-central' }, bubbles: true }),
    );
    surfaceEl.querySelector('ag-select')!.dispatchEvent(
      new CustomEvent('change', { detail: { value: 'urgent' }, bubbles: true }),
    );
    surfaceEl.querySelector('ag-checkbox')!.dispatchEvent(
      new CustomEvent('change', { detail: { checked: true }, bubbles: true }),
    );
    surfaceEl.querySelector('ag-radio')!.dispatchEvent(
      new CustomEvent('change', { detail: { checked: true, value: 'enterprise' }, bubbles: true }),
    );
    surfaceEl.querySelector('ag-rating')!.dispatchEvent(
      new CustomEvent('rating-change', { detail: { value: 5 }, bubbles: true }),
    );
    surfaceEl.querySelector('ag-toggle')!.dispatchEvent(
      new CustomEvent('toggle-change', { detail: { checked: true }, bubbles: true }),
    );
    surfaceEl.querySelector('ag-slider')!.dispatchEvent(
      new CustomEvent('change', { detail: { value: 75 }, bubbles: true }),
    );
    surfaceEl.querySelector('ag-selection-button-group')!.dispatchEvent(
      new CustomEvent('selection-change', { detail: { value: 'pro', checked: true, selectedValues: ['pro'] }, bubbles: true }),
    );

    expect(surfaceModel.dataModel.get('/form/email')).toBe('maya.patel@enterprise.io');
    expect(surfaceModel.dataModel.get('/form/region')).toBe('eu-central');
    expect(surfaceModel.dataModel.get('/form/priority')).toBe('urgent');
    expect(surfaceModel.dataModel.get('/form/terms')).toBe(true);
    expect(surfaceModel.dataModel.get('/form/enterprise')).toBe(true);
    expect(surfaceModel.dataModel.get('/form/rating')).toBe(5);
    expect(surfaceModel.dataModel.get('/form/alerts')).toBe(true);
    expect(surfaceModel.dataModel.get('/form/budget')).toBe(75);
    expect(surfaceModel.dataModel.get('/form/tier')).toBe('pro');
    console.info('[catalog.spec] Verified two-way @path sync across all ported interactive controls.');
  });

  it('validates AgnosticUI FACE controls via validateSurface client function', async () => {
    const processor = new MessageProcessor<LitComponentApi>([AgnosticUICatalog]);
    const { surfaceModel, surfaceEl } = await mountFixture(processor, 'face_surface', [
      { version: '1.0', createSurface: { surfaceId: 'face_surface', catalogId: AGNOSTICUI_CATALOG_ID } },
      {
        version: '1.0',
        updateComponents: {
          surfaceId: 'face_surface',
          components: [
            { id: 'root', component: 'AgCard', children: ['req_input'] },
            { id: 'req_input', component: 'AgInput', label: 'Subject', required: true, value: { '@path': '/ticket/subject' } },
          ],
        },
      },
      { version: '1.0', updateDataModel: { surfaceId: 'face_surface', path: '/ticket/subject', value: '' } },
    ]);

    const agInput = surfaceEl.querySelector('ag-input') as HTMLElement & { reportValidity?: () => boolean };
    expect(agInput).not.toBeNull();

    agInput.reportValidity = () => false;
    const dataCtx = new DataContext(surfaceModel, '/');
    expect(ValidateSurfaceImplementation.execute({}, dataCtx)).toBe(false);

    agInput.reportValidity = () => true;
    expect(ValidateSurfaceImplementation.execute({}, dataCtx)).toBe(true);
  });

    it('renders AgTimeline items into slotted ag-timeline-item elements', async () => {
    const processor = new MessageProcessor<LitComponentApi>([AgnosticUICatalog]);
    const { surfaceEl } = await mountFixture(processor, 'surface_timeline', [
      {
        version: '1.0',
        createSurface: {
          surfaceId: 'surface_timeline',
          catalogId: AGNOSTICUI_CATALOG_ID,
        },
      },
      {
        version: '1.0',
        updateComponents: {
          surfaceId: 'surface_timeline',
          components: [
            {
              id: 'root',
              component: 'AgTimeline',
              orientation: 'vertical',
              variant: 'primary',
              items: [
                { start: '14:22:01', marker: '1', end: 'VIP call connected' },
                { start: '14:22:02', marker: '2', end: 'CRM record verified' },
              ],
            },
          ],
        },
      },
    ]);

    const timelineItems = surfaceEl.querySelectorAll('ag-timeline-item');
    expect(timelineItems).toHaveLength(2);
    expect(timelineItems[0]?.querySelector('[slot="ag-start"]')?.textContent).toBe('14:22:01');
    expect(timelineItems[0]?.querySelector('[slot="ag-end"]')?.textContent).toBe('VIP call connected');
    expect(timelineItems[1]?.querySelector('[slot="ag-start"]')?.textContent).toBe('14:22:02');
    expect(timelineItems[1]?.querySelector('[slot="ag-end"]')?.textContent).toBe('CRM record verified');
  });
});
