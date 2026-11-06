// v2/sdui/demo-support-center/src/client/__tests__/canvasRenderer.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { AgDynamicRenderer } from '../canvasRenderer.js';

describe('AgnosticUI SDUI Client - Canvas Renderer Spec Suite', () => {
  let virtualCanvasContainer: HTMLElement;
  let rendererInstance: AgDynamicRenderer;

  beforeEach(() => {
    console.log('\n[TEST_SETUP] Initializing clean virtual DOM container element...');
    document.body.innerHTML = '';
    virtualCanvasContainer = document.createElement('div');
    virtualCanvasContainer.id = 'app-root-canvas';
    document.body.appendChild(virtualCanvasContainer);
    rendererInstance = new AgDynamicRenderer(virtualCanvasContainer);
  });

  it('should cleanly translate valid schema nodes into secure browser DOM child structures', () => {
    console.log('\n--- START TEST: Safe Canvas Mounting Pipeline ---');
    const sampleCardNode = {
      id: 'ui_card_001',
      component: 'AgCard',
      props: { title: 'Enterprise Billing Invoice Overview' }
    };
    rendererInstance.appendNodeToCanvas(sampleCardNode);
    const targetMountedDiv = virtualCanvasContainer.querySelector('[data-agnode-id="ui_card_001"]');
    expect(targetMountedDiv).not.toBeNull();
    expect(targetMountedDiv?.className).toContain('ag-card');
    
    const childTitleHeader = targetMountedDiv?.querySelector('.ag-card-title');
    expect(childTitleHeader?.textContent).toBe('Enterprise Billing Invoice Overview');
    console.log('--- END TEST: Safe Canvas Mounting Pipeline Passed ---');
  });

  it('should correctly build and register form input elements with safe properties', () => {
    console.log('\n--- START TEST: AgInput Form Assembly Mechanics ---');

    const sampleInputNode = {
      id: 'cc_entry',
      component: 'AgInput',
      props: {
        label: 'Updated Card Number',
        placeholder: 'XXXX-XXXX-XXXX-XXXX'
      }
    };

    rendererInstance.appendNodeToCanvas(sampleInputNode);

    const inputGroupWrapper = virtualCanvasContainer.querySelector('[data-agnode-id="cc_entry"]');
    expect(inputGroupWrapper).not.toBeNull();
    expect(inputGroupWrapper?.className).toContain('ag-input-group');

    const attachedLabel = inputGroupWrapper?.querySelector('.ag-input-label');
    expect(attachedLabel).not.toBeNull();
    expect(attachedLabel?.textContent).toBe('Updated Card Number');

    const inputControl = inputGroupWrapper?.querySelector('.ag-input-field') as HTMLInputElement;
    expect(inputControl).not.toBeNull();
    expect(inputControl.id).toBe('ag-input-cc_entry');
    expect(inputControl.placeholder).toBe('XXXX-XXXX-XXXX-XXXX');

    inputControl.value = '4111222233334444';
    expect(inputControl.value).toBe('4111222233334444');

    console.log('--- END TEST: AgInput Form Assembly Mechanics Passed ---');
  });

  it('should block layout updates if the incoming tag attempts to execute an injection payload', () => {
    console.log('\n--- START TEST: Canvas Threat Vector Shielding ---');
    const maliciousAttackPayload = {
      id: 'exploit_node',
      component: 'script',
      props: { src: 'http://malicious-tracker.js' }
    };
    rendererInstance.appendNodeToCanvas(maliciousAttackPayload);
    const targetMountedDiv = virtualCanvasContainer.querySelector('[data-agnode-id="exploit_node"]');
    expect(targetMountedDiv).toBeNull();
    console.log('--- END TEST: Canvas Threat Vector Shielding Passed ---');
  });
});
