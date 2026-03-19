// Structural invariant tests for the SDUI fixture graphs.
// Uses toHtml() as a lightweight serializer to confirm every fixture variation
// produces the expected form elements and button text without brittle snapshots.
// Assertions are derived from the fixture data itself, so they stay correct
// as fixtures evolve without any manual snapshot management.

import { describe, it, expect } from 'vitest';
import type { AgNode } from '@agnosticui/schema';
import { fixtureBank } from '../fixtures/index';
import { pickerFixture } from '../fixtures/picker';
import { toHtml } from './toHtml';

// ─── Helpers ─────────────────────────────────────────────────────────────────

function countByComponent(nodes: AgNode[], ...components: string[]): number {
  return nodes.filter(n => components.includes(n.component)).length;
}

function buttonLabels(nodes: AgNode[]): string[] {
  const labels: string[] = [];
  for (const node of nodes) {
    if (node.component !== 'AgButton' && node.component !== 'AgButtonFx') continue;
    for (const childId of node.children ?? []) {
      const child = nodes.find(n => n.id === childId);
      if (child?.component === 'AgText' && child.text) labels.push(child.text);
    }
  }
  return labels;
}

function inputLabels(nodes: AgNode[]): string[] {
  return nodes
    .filter(n => n.component === 'AgInput' || n.component === 'AgSelect')
    .map(n => (n as { label?: string }).label)
    .filter((l): l is string => !!l);
}

function assertFixtureHtml(nodes: AgNode[], context: string): void {
  const html = toHtml(nodes);

  // Non-empty output
  expect(html, `${context}: toHtml produced empty string`).not.toBe('');

  // Input element count: one <input> per node type that toHtml renders as <input>
  const expectedInputs = countByComponent(nodes, 'AgInput', 'AgToggle', 'AgCheckbox', 'AgSelectionCard');
  const actualInputs = (html.match(/<input/g) ?? []).length;
  expect(actualInputs, `${context}: input count`).toBe(expectedInputs);

  // Button count: one <button> per AgButton / AgButtonFx node
  const expectedButtons = countByComponent(nodes, 'AgButton', 'AgButtonFx');
  const actualButtons = (html.match(/<button/g) ?? []).length;
  expect(actualButtons, `${context}: button count`).toBe(expectedButtons);

  // Button labels appear in the HTML (AgText children of buttons)
  for (const label of buttonLabels(nodes)) {
    expect(html, `${context}: button label "${label}" missing`).toContain(label);
  }

  // Field labels appear in the HTML (label text for AgInput / AgSelect nodes)
  for (const label of inputLabels(nodes)) {
    expect(html, `${context}: field label "${label}" missing`).toContain(label);
  }
}

// ─── pickerFixture ───────────────────────────────────────────────────────────

describe('pickerFixture HTML structure', () => {
  it('produces correct element counts and text', () => {
    assertFixtureHtml(pickerFixture, 'pickerFixture');
  });
});

// ─── fixtureBank ─────────────────────────────────────────────────────────────

describe('fixtureBank HTML structure', () => {
  for (const [workflow, variations] of Object.entries(fixtureBank)) {
    describe(`workflow: ${workflow}`, () => {
      variations.forEach((nodes, i) => {
        it(`variation ${i + 1} produces correct element counts and text`, () => {
          assertFixtureHtml(nodes, `${workflow}[${i + 1}]`);
        });
      });
    });
  }
});
