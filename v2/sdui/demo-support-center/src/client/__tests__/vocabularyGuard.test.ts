// v2/sdui/demo-support-center/src/client/__tests__/vocabularyGuard.test.ts
import { describe, it, expect } from 'vitest';
import { isNodeVocabularyValid } from '../vocabularyGuard.js';

describe('AgnosticUI SDUI Client - Vocabulary Guard Specification Suite', () => {
  
  it('should accept fully compliant authorized AgnosticUI nodes', () => {
    console.log('\n--- START TEST: Vocabulary Guard Compliance Verification ---');
    
    const validCardNode = {
      id: 'card_992',
      component: 'AgCard',
      props: { title: 'Billing Issue Breakdown' }
    };

    console.log(`[TEST_EXEC] Submitting candidate: ${JSON.stringify(validCardNode)}`);
    const result = isNodeVocabularyValid(validCardNode);
    
    expect(result).toBe(true);
    console.log('--- END TEST: Vocabulary Guard Compliance Verification Passed ---');
  });

  it('should intercept and block hallucinated native HTML tags or external components', () => {
    console.log('\n--- START TEST: Vocabulary Guard Hallucination Protection ---');
    
    const maliciousHtmlNode = {
      id: 'malicious_div',
      component: 'div', // Hallucinated raw HTML element
      props: { innerHTML: '<script>alert("xss")</script>' }
    };

    console.log(`[TEST_EXEC] Submitting candidate with raw HTML tag: ${JSON.stringify(maliciousHtmlNode)}`);
    const result = isNodeVocabularyValid(maliciousHtmlNode);
    
    expect(result).toBe(false);
    console.log('--- END TEST: Vocabulary Guard Hallucination Protection Passed ---');
  });

  it('should reject structurally broken layout objects missing core parameters', () => {
    console.log('\n--- START TEST: Vocabulary Guard Malformed Object Rejection ---');
    
    const brokenNode = {
      id: 'broken_element_001'
      // Missing mandatory "component" parameter entirely
    };

    console.log(`[TEST_EXEC] Submitting malformed candidate: ${JSON.stringify(brokenNode)}`);
    const result = isNodeVocabularyValid(brokenNode);
    
    expect(result).toBe(false);
    console.log('--- END TEST: Vocabulary Guard Malformed Object Rejection Passed ---');
  });
});
