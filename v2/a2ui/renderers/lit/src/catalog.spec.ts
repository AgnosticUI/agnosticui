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

async function mountFixture(processor: MessageProcessor<LitComponentApi>, surfaceId: string, fixture: A2uiWireMessage[]) {
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

describe('AgnosticUI A2UI v1.0 Catalog & Surface', () => {
  beforeEach(() => {
    registerAgnosticUICatalog();
    document.body.innerHTML = '';
  });

  it('streams createSurface, updateComponents, and updateDataModel into <a2ui-surface>', async () => {
    const processor = new MessageProcessor<LitComponentApi>([AgnosticUICatalog]);
    const { surfaceEl } = await mountFixture(processor, 'demo_surface', [
      { version: '1.0', createSurface: { surfaceId: 'demo_surface', catalogId: AGNOSTICUI_CATALOG_ID } },
      {
        version: '1.0',
        updateComponents: {
          surfaceId: 'demo_surface',
          components: [
            { id: 'root', component: 'AgCard', shadow: true, children: ['cta_btn'] },
            { id: 'cta_btn', component: 'AgButton', variant: 'primary', label: { '@path': '/ctaLabel' } },
          ],
        },
      },
      { version: '1.0', updateDataModel: { surfaceId: 'demo_surface', path: '/ctaLabel', value: 'Submit Request' } },
    ]);

    expect(surfaceEl.querySelector('ag-card')).not.toBeNull();
    const agButton = surfaceEl.querySelector('ag-button');
    expect(agButton).not.toBeNull();
    expect(agButton?.textContent?.trim()).toBe('Submit Request');
  });

  it('syncs two-way @path updates from AgInput and AgCheckbox back into the DataModel', async () => {
    const processor = new MessageProcessor<LitComponentApi>([AgnosticUICatalog]);
    const { surfaceModel, surfaceEl } = await mountFixture(processor, 'form_surface', [
      { version: '1.0', createSurface: { surfaceId: 'form_surface', catalogId: AGNOSTICUI_CATALOG_ID } },
      {
        version: '1.0',
        updateComponents: {
          surfaceId: 'form_surface',
          components: [
            { id: 'root', component: 'AgCard', children: ['email_field', 'terms_check'] },
            { id: 'email_field', component: 'AgInput', label: 'Work Email', type: 'email', value: { '@path': '/form/email' } },
            { id: 'terms_check', component: 'AgCheckbox', labelText: 'Accept terms', checked: { '@path': '/form/agree' } },
          ],
        },
      },
      { version: '1.0', updateDataModel: { surfaceId: 'form_surface', path: '/form', value: { email: '', agree: false } } },
    ]);

    const agInput = surfaceEl.querySelector('ag-input');
    const agCheckbox = surfaceEl.querySelector('ag-checkbox');
    expect(agInput).not.toBeNull();
    expect(agCheckbox).not.toBeNull();

    agInput!.dispatchEvent(new CustomEvent('input-change', { detail: { value: 'sophia@invoca.com' }, bubbles: true }));
    agCheckbox!.dispatchEvent(new CustomEvent('checkbox-change', { detail: { checked: true }, bubbles: true }));

    expect(surfaceModel.dataModel.get('/form/email')).toBe('sophia@invoca.com');
    expect(surfaceModel.dataModel.get('/form/agree')).toBe(true);
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

    // Simulate invalid state on the FACE control when required input is empty
    agInput.reportValidity = () => false;
    const dataCtx = new DataContext(surfaceModel, '/');
    expect(ValidateSurfaceImplementation.execute({}, dataCtx)).toBe(false);

    // Simulate valid state once user enters required text
    agInput.reportValidity = () => true;
    expect(ValidateSurfaceImplementation.execute({}, dataCtx)).toBe(true);
  });
});
