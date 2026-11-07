/**
 * @file actions.test.ts
 * @description Unit test suite enforcing the action token sanitization perimeter.
 * Imports and exercises the production registry single source of truth.
 */

import { describe, it, expect, vi } from 'vitest';
import { safeDispatchAction, ACTION_DICTIONARY } from '../actions.js';

describe('AgnosticUI SDUI Gateway Action Token Sanitization', () => {

  it('should successfully execute the internal callback for an authorized, safe production token key', () => {
    console.log('\n--- START TEST: HAPPY PATH VALIDATION ---');
    
    // Create a spy monitoring the actual production submission function execution context
    const submitSpy = vi.spyOn(ACTION_DICTIONARY, 'SUBMIT_BILLING_DELTA');
    
    const result = safeDispatchAction("SUBMIT_BILLING_DELTA", ACTION_DICTIONARY);
    
    expect(result).toBe(true);
    expect(submitSpy).toHaveBeenCalledTimes(1);
    
    // Clean up mock references cleanly
    submitSpy.mockRestore();
  });

  it('should completely intercept and drop malicious script strings or unregistered hallucinations', () => {
    console.log('\n--- START TEST: MALICIOUS INJECTION ADVERSARIAL PASS ---');
    
    // Spy on our production execution keys to ensure they remain untouched
    const submitSpy = vi.spyOn(ACTION_DICTIONARY, 'SUBMIT_BILLING_DELTA');
    const cancelSpy = vi.spyOn(ACTION_DICTIONARY, 'CANCEL_BILLING_FLOW');
    
    // Simulate an adversarial script injection attempt imitating a token structure
    const adversarialPayload = "javascript:alert(document.cookie); // SUBMIT_BILLING_DELTA";
    
    const result = safeDispatchAction(adversarialPayload, ACTION_DICTIONARY);
    
    // Assertions enforcing that nothing was leaked down the execution pipelines
    expect(result).toBe(false); 
    expect(submitSpy).not.toHaveBeenCalled();
    expect(cancelSpy).not.toHaveBeenCalled();
    
    submitSpy.mockRestore();
    cancelSpy.mockRestore();
  });
});
