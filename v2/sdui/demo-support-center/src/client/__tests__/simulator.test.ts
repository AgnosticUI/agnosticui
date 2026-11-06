// v2/sdui/demo-support-center/src/client/__tests__/simulator.test.ts

import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { LiveSimulatorController } from '../simulator.js';
import { createMockDOM, mockFetchStream, type MockRenderer } from './helpers.js';

describe('AgnosticUI Live Support Simulator Panel Suite', () => {
  let form: HTMLFormElement;
  let input: HTMLInputElement;
  let renderer: MockRenderer;
  let controller: LiveSimulatorController;
  let restoreFetch: (() => void) | null = null;

  beforeEach(() => {
    console.log('[TEST_SETUP] Extracting clean boilerplate DOM elements from shared harness factory...');
    ({ form, input, renderer } = createMockDOM());
    controller = new LiveSimulatorController('/api/mock-stream-gateway');
  });

  afterEach(() => {
    if (restoreFetch) {
      console.log('[TEST_TEARDOWN] Safe-restoring global fetch network intercept state loops...');
      restoreFetch();
      restoreFetch = null;
    }
  });

  it('should successfully cycle streaming layouts and bind reactive property graphs onto the custom web component canvas', async () => {
    console.log('\n--- START CONCISE SIMULATOR TEST RUN ---');
    
    // 1. Setup Environment Action Bindings
    controller.bindSimulatorInterface(form, input, renderer);
    input.value = 'User usr_992 visible profile billing failure lookup';
    
    // Provision our pristine, abstracted network streaming packet payload chunks
    restoreFetch = mockFetchStream([
      'data: {"id":"card_01","component":"AgCard","children":[]}\n',
      'data: {"id":"btn_01","component":"AgButton","variant":"success","children":[]}\n'
    ]);

    // 2. Trigger UI Form Action Handshake
    console.log('[TEST_TRIGGER] Dispatched interactive browser form submit event...');
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));

    // Yield macro-task execution queue windows to let asynchronous fetch chunks fully resolve
    await new Promise(resolve => setTimeout(resolve, 10));

    // 3. Behavioral Assertions Check
    const accumulated = controller.getAccumulatedNodes();
    console.log(`[TEST_ASSERT] Analyzing results. Accumulated node count: ${accumulated.length}`);
    
    expect(renderer.resetCanvasCount).toBe(1); // Safely reset active canvas states prior to writing updates
    expect(accumulated.length).toBe(2);        // Extract and capture all streaming JSON structures smoothly
    expect(renderer.nodes.length).toBe(2);     // Successfully forward the pristine array down to the web element
    expect(renderer.nodes[0].id).toBe('card_01');
    expect(renderer.nodes[1].component).toBe('AgButton');
    
    console.log('--- END CONCISE SIMULATOR TEST RUN (ALL GREEN) ---');
  });
});
