/**
 * @file gateway.test.ts
 * @description Integration test verifying Hono gateway routing, health checks,
 * and streaming SDUI /api/chat real-time chunk aggregation pipelines.
 * Uses decoupled in-memory request injection to prevent local port binding race conditions.
 */

import { describe, it, expect } from 'vitest';
import app from '../gateway.js'; // Import our active application instance layout

describe('AgnosticUI SDUI Hono Gateway Shell', () => {

  it('should respond with an operational text status when hitting the health check endpoint', async () => {
    console.log('\n--- START TEST: HTTP GATEWAY HEALTH ROUTE CHECKS ---');
    
    // Simulate an incoming server transaction envelope using native Request injection
    const requestFixture = new Request('http://localhost/api/health', {
      method: 'GET'
    });
    
    // Pipe the transaction directly down into our Hono application engine fetch broker
    const response = await app.fetch(requestFixture);
    const bodyText = await response.text();
    
    console.log(`[TEST_AUDIT] 📥 Received response status: ${response.status}`);
    console.log(`[TEST_AUDIT] 📑 Received response body: "${bodyText}"`);
    
    // Enforce our operational contracts
    expect(response.status).toBe(200);
    expect(bodyText).toContain('Gateway Sandbox Operational');
  });

  it('should enforce proper Server-Sent Events (SSE) streaming protocol headers on /api/chat', async () => {
    console.log('\n--- START TEST: SSE STREAMING PROTOCOL COMPLIANCE ---');

    // Setup an empty chat invocation payload to trigger the streaming pipeline
    const requestFixture = new Request('http://localhost/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Hello Support Agent' })
    });

    const response = await app.fetch(requestFixture);
    
    console.log(`[TEST_AUDIT] 📥 Streaming response status: ${response.status}`);
    console.log(`[TEST_AUDIT] 🏷️ Response Content-Type: ${response.headers.get('Content-Type')}`);

    // Verify compliance with the standard SSE protocol
    expect(response.status).toBe(200);
    expect(response.headers.get('Content-Type')).toBe('text/event-stream');
    expect(response.headers.get('Cache-Control')).toContain('no-cache');
    expect(response.headers.get('Connection')).toBe('keep-alive');
  });

  it('should process highly fragmented text chunks and yield fully aggregated SDUI data nodes', async () => {
    console.log('\n--- START TEST: STREAM FRAGMENTATION AGGREGATION ---');

    // Simulate a highly fractured, raw LLM token stream outputting an AgNode structure
    const incomingFragments = [
      'data: {"id": "node_1", ',
      '"component": "Ag',
      'Card", "props": {',
      '"title": "Billing Profile"}}',
      '\n\n'
    ];

    const encoder = new TextEncoder();
    const binaryChunks = incomingFragments.map(f => encoder.encode(f));

    // Construct a mock stream exposing Symbol.asyncIterator to perfectly align with gateway's for-await loop
    const mockStream = {
      [Symbol.asyncIterator]: async function* () {
        for (const chunk of binaryChunks) {
          yield chunk;
        }
      }
    };

    // Send the simulated stream directly into the gateway interface hook
    const requestFixture = new Request('http://localhost/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: mockStream as any,
      // @ts-ignore - duplex is required in modern Node fetch for streaming bodies
      duplex: 'half'
    });

    const response = await app.fetch(requestFixture);
    const responseText = await response.text();

    console.log(`[TEST_AUDIT] 📑 Aggregated SSE Stream output text:\n${responseText}`);

    // Confirm that the streaming engine successfully aggregated the awkward parts
    expect(responseText).toContain('data:');
    expect(responseText).toContain('node_1');
    expect(responseText).toContain('AgCard');
    expect(responseText).toContain('Billing Profile');
  });

  it('should identify and sanitize or neutralize malicious or unregistered action tokens at the gateway edge', async () => {
    console.log('\n--- START TEST: SECURITY VECTOR ACTION SANITIZATION ---');

    // Simulate an adversarial payload structure injecting a malicious JavaScript execution string
    const maliciousPayload = [
      'data: {"id": "node_bad", "component": "AgButton", "props": {',
      '"actionToken": "javascript:void(window.location=\'http://attacker.com\')", ',
      '"label": "Exploit Link"}}\n\n'
    ];

    const encoder = new TextEncoder();
    const binaryChunks = maliciousPayload.map(c => encoder.encode(c));

    const mockStream = {
      [Symbol.asyncIterator]: async function* () {
        for (const chunk of binaryChunks) {
          yield chunk;
        }
      }
    };

    const requestFixture = new Request('http://localhost/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: mockStream as any,
      // @ts-ignore
      duplex: 'half'
    });

    const response = await app.fetch(requestFixture);
    const responseText = await response.text();

    console.log(`[TEST_AUDIT] 📑 Sanitization validation test output:\n${responseText}`);

    // Verify that the adversarial action layout rule was systematically intercepted
    expect(responseText).not.toContain('javascript:void');
    expect(responseText).not.toContain('attacker.com');
  });
});
