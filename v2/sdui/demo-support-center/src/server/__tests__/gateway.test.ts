// v2/sdui/demo-support-center/src/server/__tests__/gateway.test.ts

import { describe, it, expect } from 'vitest';
import app from '../gateway.js';
import { validate } from '@agnosticui/schema';

/**
 * Localized Type Extension combining standard RequestInit with modern streaming parameters.
 * Fixes compiler definition lag without resorting to type-erasure via 'as any'.
 */
type RequestInitWithDuplex = RequestInit & { duplex?: 'half' | 'full' };

describe('AgnosticUI SDUI Hono Gateway Shell', () => {
  it('should respond with an operational text status when hitting the health check endpoint', async () => {
    console.log('[TEST_EXEC] Testing gateway server health vector...');
    const res = await app.request('/api/health');
    expect(res.status).toBe(200);
    const bodyText = await res.text();
    expect(bodyText).toBe('Gateway Sandbox Operational');
  });

  it('should enforce proper Server-Sent Events (SSE) streaming protocol headers on /api/chat', async () => {
    console.log('[TEST_EXEC] Testing mandatory SSE streaming network header parameters...');
    const res = await app.request('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ message: 'Initialize stream verification sequence' })
    });

    expect(res.status).toBe(200);
    expect(res.headers.get('Content-Type')).toContain('text/event-stream');
    expect(res.headers.get('Cache-Control')).toBe('no-cache');
  });

  it('should process highly fragmented text chunks and yield fully aggregated SDUI data nodes', async () => {
    console.log('[TEST_EXEC] Diagnostic pre-flight verification for AgCard layout configuration...');
    
    // Aligned to meet the flat strict object schema requirements of the core library
    const rawCardObject = {
      id: "node_card_agg",
      component: "AgCard",
      children: []
    };

    const preFlightCheck = validate(rawCardObject);
    if (!preFlightCheck.success) {
      console.error('\n❌ [TEST_PREFLIGHT_CRITICAL_FAILURE] Card mock failed Zod validation inside the test space!');
      console.error('❌ Pre-flight Zod error list:', preFlightCheck.errors);
    }
    expect(preFlightCheck.success).toBe(true);

    const componentFrag1 = `data: ${JSON.stringify(rawCardObject)}`;
    const componentFrag2 = '\n';

    const res = await app.request('/api/chat', {
      method: 'POST',
      duplex: 'half',
      body: new ReadableStream({
        async start(controller) {
          const encoder = new TextEncoder();
          controller.enqueue(encoder.encode(componentFrag1));
          await new Promise(r => setTimeout(r, 5));
          controller.enqueue(encoder.encode(componentFrag2));
          controller.close();
        }
      })
    } as RequestInitWithDuplex);

    expect(res.status).toBe(200);
    const responseText = await res.text();
    
    console.log('[TEST_ASSERT] Received payload from streaming accumulator text sequence:\n', responseText);
    
    expect(responseText).toContain('data:');
    expect(responseText).toContain('node_card_agg');
    expect(responseText).toContain('AgCard');
  });

  it('should identify and sanitize or neutralize malicious or unregistered action tokens at the gateway edge', async () => {
    console.log('[TEST_EXEC] Diagnostic pre-flight verification for AgButton layout configuration...');

    // The raw mock template contains the actionToken key which will be intercepted and cleaned by our gateway
    const rawButtonObject = {
      id: "node_btn_malicious",
      component: "AgButton",
      variant: "primary",
      actionToken: "javascript:alert(1)",
      children: []
    };

    const componentFrag = `data: ${JSON.stringify(rawButtonObject)}\n`;

    const res = await app.request('/api/chat', {
      method: 'POST',
      duplex: 'half',
      body: new ReadableStream({
        async start(controller) {
          const encoder = new TextEncoder();
          controller.enqueue(encoder.encode(componentFrag));
          controller.close();
        }
      })
    } as RequestInitWithDuplex);

    expect(res.status).toBe(200);
    const responseText = await res.text();

    console.log('[TEST_ASSERT] Received payload from malicious input sweep:\n', responseText);

    expect(responseText).toContain('node_btn_malicious');
    expect(responseText).toContain('AgButton');
    expect(responseText).not.toContain('javascript:alert(1)');
  });
});
