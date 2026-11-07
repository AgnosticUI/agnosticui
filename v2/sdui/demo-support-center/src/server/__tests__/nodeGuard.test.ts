/**
 * @file nodeGuard.test.ts
 * @description Unit specification testing the isolated component node validation guard.
 * Verifies happy path data returns, action stripping, and unhappy path null drops.
 */

import { describe, it, expect } from 'vitest';
import { sanitizeAndValidateNode } from '../nodeGuard.js';

describe('AgnosticUI SDUI Node Guard Unit Suite', () => {
  it('should return the validated data node object when provided a perfectly compliant element shape (Happy Path)', () => {
    console.log('\n--- START TEST: nodeGuard HAPPY PATH ANALYSIS ---');

    const compliantNode = {
      id: "node_card_happy",
      component: "AgCard",
      children: []
    };

    const result = sanitizeAndValidateNode(compliantNode);

    console.log('[NODE_GUARD_TEST] Happy path result outcome data extraction signature:', result);
    
    expect(result).not.toBeNull();
    expect(result?.id).toBe('node_card_happy');
    expect(result?.component).toBe('AgCard');
  });

  it('should intercept and scrub unmapped action tokens while returning a clean compliant object', () => {
    console.log('\n--- START TEST: nodeGuard SECURITY ACTION SANITIZATION ---');

    const maliciousButton = {
      id: "node_btn_exploit",
      component: "AgButton",
      variant: "danger",
      actionToken: "javascript:eval('unsafe')",
      children: []
    };

    const result = sanitizeAndValidateNode(maliciousButton) as any;

    console.log('[NODE_GUARD_TEST] Post-sanitization object attributes tracking view:', result);

    expect(result).not.toBeNull();
    expect(result.id).toBe('node_btn_exploit');
    expect(result.component).toBe('AgButton');
    // The node guard must drop the unmapped key to pass strict Zod validation checks cleanly
    expect(result.actionToken).toBeUndefined();
  });

  it('should cleanly return null if the incoming object configuration violates strict Zod schema properties (Unhappy Path)', () => {
    console.log('\n--- START TEST: nodeGuard UNHAPPY PATH ANALYSIS ---');

    // Structuring an invalid component containing an unrecognized property collision attribute
    const malformedNode = {
      id: "node_invalid_01",
      component: "AgCard",
      hallucinatedPropField: "Malicious Core Content",
      children: []
    };

    const result = sanitizeAndValidateNode(malformedNode);

    console.log(`[NODE_GUARD_TEST] Corrupted element result verification indicator:`, result);

    // Enforce that the guard drops the invalid item cleanly by handing back a literal null reference
    expect(result).toBeNull();
  });
});
