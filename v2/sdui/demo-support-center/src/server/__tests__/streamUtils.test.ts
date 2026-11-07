/**
 * @file streamUtils.test.ts
 * @description Unit test suite verifying the progressive stream parser accumulator logic.
 * Breaks down stream verification into three tight, atomic specification passes.
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { ChunkAccumulator } from '../streamUtils.js';

describe('AgnosticUI SDUI Progressive Stream Chunk Accumulator', () => {
  let accumulator: ChunkAccumulator;

  // Initialize a fresh accumulator instance before every isolated test spec run
  beforeEach(() => {
    accumulator = new ChunkAccumulator();
  });

  it('1. should return an empty collection when fed an incomplete object fragment string', () => {
    console.log('\n--- START SPEC 1: INCOMPLETE CHUNK PASS ---');
    
    const output = accumulator.pushChunk('[\n  {"id": "msg_1", "component": "Ag');
    
    expect(output).toEqual([]); 
    expect(accumulator.getBufferLength()).toBeGreaterThan(0);
  });

  it('2. should cleanly extract a full object the exact moment its closing brace completes', () => {
    console.log('\n--- START SPEC 2: CLOSING BRACE COMPLETION PASS ---');
    
    // Feed the initial prefix fragment
    accumulator.pushChunk('[\n  {"id": "msg_1", "component": "Ag');
    
    // Feed the remainder token that seals the component definition block
    const output = accumulator.pushChunk('MessageBubble", "message": "Hello World"},\n  ');
    
    expect(output).toEqual([
      { id: 'msg_1', component: 'AgMessageBubble', message: 'Hello World' }
    ]);
  });

  it('3. should process subsequent clean objects and retain trailing array layout characters', () => {
    console.log('\n--- START SPEC 3: TRAILING LAYOUT MARKUP PASS ---');
    
    // Seed and clear a prior complete element block cleanly
    accumulator.pushChunk('{"id": "msg_1", "component": "AgText", "text": "Hi"}');
    
    // Push a fresh token closing out a second node accompanied by an array closing bracket symbol
    const output = accumulator.pushChunk('{"id": "card_main", "component": "AgCard"}\n]');
    
    expect(output).toEqual([
      { id: 'card_main', component: 'AgCard' }
    ]);
    
    // Enforce that the accumulator safely retains the trailing array structural characters (\n])
    expect(accumulator.getBufferLength()).toBe(2); 
  });
});
