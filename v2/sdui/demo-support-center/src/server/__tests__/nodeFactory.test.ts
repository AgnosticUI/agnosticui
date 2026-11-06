/**
 * @file nodeFactory.test.ts
 * @description Unit specification testing the isolated component node factory.
 * Verifies both happy path layout synthesis and unhappy path fallback collections.
 */

import { describe, it, expect } from 'vitest';
import { runAccountLookupTool } from '../nodeFactory.js';

describe('AgnosticUI SDUI Node Factory Unit Suite', () => {
  it('should successfully manufacture an interactive 4-node remediation graph upon a past_due expired card lookup (Happy Path)', () => {
    console.log('\n--- START TEST: nodeFactory HAPPY PATH ANALYSIS ---');
    
    const userPrompt = "Check visibility blockages for user account usr_992 right now.";
    const manufacturedNodes = runAccountLookupTool(userPrompt);

    console.log(`[NODE_FACTORY_TEST] Manufactured graph contains ${manufacturedNodes.length} sequential nodes.`);
    
    // Enforce strict asset requirements matching the PRD user account failure loop
    expect(manufacturedNodes.length).toBe(4);
    
    expect(manufacturedNodes[0].component).toBe('AgMessageBubble');
    expect(manufacturedNodes[1].component).toBe('AgCard');
    expect(manufacturedNodes[2].component).toBe('AgInput');
    expect(manufacturedNodes[3].component).toBe('AgButton');

    // Confirm structural children linking is intact inside the manufactured layout tree
    expect(manufacturedNodes[1].children).toContain(`input_cc_usr_992`);
    expect(manufacturedNodes[1].children).toContain(`btn_submit_usr_992`);
  });

  it('should cleanly fallback to an empty array vector if the user query contains no match tokens (Unhappy Path)', () => {
    console.log('\n--- START TEST: nodeFactory UNHAPPY PATH ANALYSIS ---');
    
    const unmappedPrompt = "General developer question regarding CSS design utility parameters.";
    const manufacturedNodes = runAccountLookupTool(unmappedPrompt);

    console.log(`[NODE_FACTORY_TEST] Fallback array length verified: ${manufacturedNodes.length}`);
    
    // Explicitly guarantee an absolute empty response baseline on unmapped intents
    expect(manufacturedNodes).toEqual([]);
    expect(manufacturedNodes.length).toBe(0);
  });
});
