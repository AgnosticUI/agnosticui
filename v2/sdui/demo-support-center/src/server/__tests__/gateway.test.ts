/**
 * @file gateway.test.ts
 * @description Integration test verifying Hono gateway routing and health checks.
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
});
