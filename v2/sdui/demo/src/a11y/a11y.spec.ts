// @vitest-environment jsdom
import { describe, it, expect } from 'vitest';
import axe from 'axe-core';
import type { AgNode } from '@agnosticui/schema';
import { fixtureBank } from '../fixtures/index';
import { pickerFixture } from '../fixtures/picker';
import { knownBadFixture, knownGoodFixture } from './known-bad-fixture';
import { toHtml } from './toHtml';

async function runAxe(nodes: AgNode[]): Promise<axe.AxeResults> {
  document.body.innerHTML = `<main>${toHtml(nodes)}</main>`;
  return axe.run(document.body, {
    runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa'] },
  });
}

function criticalViolations(results: axe.AxeResults): axe.Result[] {
  return results.violations.filter(
    v => v.impact === 'critical' || v.impact === 'serious',
  );
}

function failureDetail(workflow: string, violations: axe.Result[]): string {
  return violations
    .map(v =>
      `  [${v.id}] ${v.description}\n` +
      v.nodes.map(n => `    ${n.html}`).join('\n'),
    )
    .join('\n');
}

// ─── Gate verification ────────────────────────────────────────────────────────

describe('a11y gate verification', () => {
  it('known-good fixture passes axe with no critical/serious violations', async () => {
    const results = await runAxe(knownGoodFixture);
    const violations = criticalViolations(results);
    if (violations.length > 0) {
      throw new Error(
        `known-good fixture has unexpected a11y violations:\n${failureDetail('known-good', violations)}`,
      );
    }
    expect(violations).toHaveLength(0);
  });

  it('known-bad fixture fails axe (verifies the gate detects violations)', async () => {
    const results = await runAxe(knownBadFixture);
    const violations = criticalViolations(results);
    expect(violations.length).toBeGreaterThan(0);
  });
});

// ─── Picker fixture ───────────────────────────────────────────────────────────

describe('pickerFixture a11y', () => {
  it('passes with no critical/serious violations', async () => {
    const results = await runAxe(pickerFixture);
    const violations = criticalViolations(results);
    if (violations.length > 0) {
      throw new Error(
        `pickerFixture has a11y violations:\n${failureDetail('pickerFixture', violations)}`,
      );
    }
    expect(violations).toHaveLength(0);
  });
});

// ─── fixtureBank ─────────────────────────────────────────────────────────────

describe('fixtureBank a11y', () => {
  for (const [workflow, variations] of Object.entries(fixtureBank)) {
    describe(`workflow: ${workflow}`, () => {
      variations.forEach((nodes, i) => {
        it(`variation ${i + 1} passes axe`, async () => {
          const results = await runAxe(nodes);
          const violations = criticalViolations(results);
          if (violations.length > 0) {
            throw new Error(
              `${workflow} variation ${i + 1} has critical/serious a11y violations:\n` +
              failureDetail(`${workflow}[${i}]`, violations),
            );
          }
          expect(violations).toHaveLength(0);
        });
      });
    });
  }
});
