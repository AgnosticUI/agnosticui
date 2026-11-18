import { describe, expect, it } from 'vitest';
import { SUPPORT_SCENARIOS } from './support-scenarios.js';
import { advanceAgentRoundTrip } from './agent-roundtrip.js';

/**
 * Helper to extract component IDs from the `updateComponents` envelope in an outcome.
 */
function extractComponentIds(messages: readonly unknown[]): string[] {
  const envelope = messages.find(
    (m): m is { updateComponents: { components: Array<{ id: string }> } } =>
      typeof m === 'object' &&
      m !== null &&
      'updateComponents' in m &&
      typeof (m as Record<string, unknown>).updateComponents === 'object',
  );
  return envelope?.updateComponents.components.map((c) => c.id) ?? [];
}

describe('AgentRoundTrip (Stateful Multi-Turn Agent Loop)', () => {
  const baseScenarioMessages = SUPPORT_SCENARIOS[0].messages;

  it('advances Turn 1 form submission -> Turn 2 confirmation with interactive next-step buttons', () => {
    console.log('\n--- START TEST: Turn 1 -> Turn 2 ---');

    const outcome = advanceAgentRoundTrip(baseScenarioMessages, {
      name: 'launch_campaign_routing',
      sourceComponentId: 'submit_btn',
      context: {
        email: 'jordan.taylor@brand.io',
        cluster: 'na-enterprise',
      },
    });

    console.log('Turn 2 outcome kind:', outcome.kind, 'turn:', outcome.turn);
    expect(outcome.kind).toBe('append_turn');
    expect(outcome.turn).toBe(2);
    expect(outcome.messages).toHaveLength(2);

    const ids = extractComponentIds(outcome.messages);
    console.log('Turn 2 component IDs:', ids);
    expect(ids).toContain('user_action_bubble');
    expect(ids).toContain('agent_confirm_bubble');
    expect(ids).toContain('simulate_test_btn');
    expect(ids).toContain('reset_thread_btn');

    console.log('--- END TEST: Turn 1 -> Turn 2 PASSED ---\n');
  });

  it('advances Turn 2 -> Turn 3 live verification receipt without duplicate IDs', () => {
    console.log('\n--- START TEST: Turn 2 -> Turn 3 ---');

    const outcome = advanceAgentRoundTrip(baseScenarioMessages, {
      event: {
        name: 'simulate_test_call',
        context: {
          verifiedEmail: 'jordan.taylor@brand.io',
          cluster: 'na-enterprise',
        },
      },
    });

    console.log('Turn 3 outcome kind:', outcome.kind, 'turn:', outcome.turn);
    expect(outcome.kind).toBe('append_turn');
    expect(outcome.turn).toBe(3);

    const ids = extractComponentIds(outcome.messages);
    const uniqueIds = new Set(ids);
    console.log('Turn 3 total IDs:', ids.length, 'unique IDs:', uniqueIds.size);

    // Every component ID in the updated surface must be strictly unique
    expect(uniqueIds.size).toBe(ids.length);
    expect(ids).toContain('agent_confirm_bubble');
    expect(ids).toContain('user_verify_bubble');
    expect(ids).toContain('agent_verify_bubble');

    console.log('--- END TEST: Turn 2 -> Turn 3 PASSED ---\n');
  });

  it('resets cleanly back to Turn 1 when reset_agent_thread is triggered', () => {
    console.log('\n--- START TEST: Reset to Turn 1 ---');

    const outcome = advanceAgentRoundTrip(baseScenarioMessages, {
      event: { name: 'reset_agent_thread' },
    });

    console.log('Reset outcome kind:', outcome.kind, 'turn:', outcome.turn);
    expect(outcome.kind).toBe('reset');
    expect(outcome.turn).toBe(1);
    expect(outcome.messages).toEqual(baseScenarioMessages);

    console.log('--- END TEST: Reset to Turn 1 PASSED ---\n');
  });
});
