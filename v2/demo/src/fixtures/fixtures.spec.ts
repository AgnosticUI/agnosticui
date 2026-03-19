import { describe, it, expect } from 'vitest';
import { validateGraph } from '@agnosticui/schema';
import { fixtureBank } from './index';
import { pickerFixture } from './picker';

describe('SDUI fixture graphs', () => {
  describe('pickerFixture', () => {
    it('validates as a valid node graph', () => {
      const result = validateGraph(pickerFixture);
      if (!result.success) {
        const detail = result.errors
          .map(e => `  [${e.nodeId}] ${e.errors.join('; ')}`)
          .join('\n');
        throw new Error(`pickerFixture has invalid nodes:\n${detail}`);
      }
      expect(result.success).toBe(true);
    });
  });

  describe('fixtureBank', () => {
    for (const [workflow, variations] of Object.entries(fixtureBank)) {
      describe(`workflow: ${workflow}`, () => {
        variations.forEach((nodes, i) => {
          it(`variation ${i + 1} validates as a valid node graph`, () => {
            const result = validateGraph(nodes);
            if (!result.success) {
              const detail = result.errors
                .map(e => `  [${e.nodeId}] ${e.errors.join('; ')}`)
                .join('\n');
              throw new Error(
                `${workflow} variation ${i + 1} has invalid nodes:\n${detail}`
              );
            }
            expect(result.success).toBe(true);
          });
        });
      });
    }
  });
});
