import { describe, expect, it } from 'vitest';
import { SUPPORT_SCENARIOS } from './support-scenarios.js';
import { advanceAgentRoundTrip } from './agent-roundtrip.js';

interface WireComponentRecord {
  id: string;
  text?: unknown;
  action?: {
    event?: {
      name?: string;
      context?: Record<string, unknown>;
    };
  };
}

function extractComponents(messages: readonly unknown[]): WireComponentRecord[] {
  const envelope = messages.find(
    (m): m is { updateComponents: { components: WireComponentRecord[] } } =>
      typeof m === 'object' &&
      m !== null &&
      'updateComponents' in m &&
      typeof (m as Record<string, unknown>).updateComponents === 'object',
  );
  return envelope?.updateComponents.components ?? [];
}

describe('AgentRoundTrip (Stateful Multi-Turn Agent Loop)', () => {
  const baseScenarioMessages = SUPPORT_SCENARIOS[0].messages;

  it('advances Turn 1 form submission -> Turn 2 confirmation with interactive next-step buttons', () => {
    const outcome = advanceAgentRoundTrip(baseScenarioMessages, {
      name: 'launch_campaign_routing',
      sourceComponentId: 'submit_btn',
      context: {
        email: 'jordan.taylor@brand.io',
        cluster: 'na-enterprise',
      },
    });

    expect(outcome.kind).toBe('append_turn');
    expect(outcome.turn).toBe(2);
    expect(outcome.messages).toHaveLength(2);

    const ids = extractComponents(outcome.messages).map((c) => c.id);
    expect(ids).toContain('user_action_bubble');
    expect(ids).toContain('agent_confirm_bubble');
    expect(ids).toContain('simulate_test_btn');
    expect(ids).toContain('reset_thread_btn');
  });

  it('advances Turn 2 -> Turn 3 live verification receipt preserving submitted email and desk', () => {
    const turnTwoOutcome = advanceAgentRoundTrip(baseScenarioMessages, {
      name: 'launch_campaign_routing',
      sourceComponentId: 'submit_btn',
      context: {
        email: 'sarah.chen@enterprise.io',
        cluster: 'emea-growth',
      },
    });

    const turnTwoComponents = extractComponents(turnTwoOutcome.messages);
    const simulateBtn = turnTwoComponents.find((c) => c.id === 'simulate_test_btn');
    expect(simulateBtn?.action?.event?.name).toBe('simulate_test_call');

    const turnThreeOutcome = advanceAgentRoundTrip(baseScenarioMessages, {
      event: simulateBtn?.action?.event,
    });

    expect(turnThreeOutcome.kind).toBe('append_turn');
    expect(turnThreeOutcome.turn).toBe(3);

    const components = extractComponents(turnThreeOutcome.messages);
    const ids = components.map((c) => c.id);
    const uniqueIds = new Set(ids);

    expect(uniqueIds.size).toBe(ids.length);
    expect(ids).toContain('agent_confirm_bubble');
    expect(ids).toContain('user_verify_bubble');
    expect(ids).toContain('agent_verify_bubble');

    const confirmAlertText = components.find((c) => c.id === 'confirm_copy')?.text;
    const verifyAlertText = components.find((c) => c.id === 'verify_copy')?.text;

    expect(String(confirmAlertText)).toContain('sarah.chen@enterprise.io');
    expect(String(verifyAlertText)).toContain('sarah.chen@enterprise.io');
    expect(String(verifyAlertText)).toContain('emea-growth');
  });

  it('resets cleanly back to Turn 1 when reset_agent_thread is triggered', () => {
    const outcome = advanceAgentRoundTrip(baseScenarioMessages, {
      event: { name: 'reset_agent_thread' },
    });

    expect(outcome.kind).toBe('reset');
    expect(outcome.turn).toBe(1);
    expect(outcome.messages).toEqual(baseScenarioMessages);
  });
  
  it('preserves title-only Turn 2 overflow routing summary when advancing to Turn 3', () => {
    const turnTwoOutcome = advanceAgentRoundTrip(baseScenarioMessages, {
      name: 'activate_overflow_routing',
      sourceComponentId: 'local_ack_btn',
      context: {
        title: '42% Surge in Qualified Inbound Sales Calls',
        overflowActive: true,
      },
    });

    const turnTwoComponents = extractComponents(turnTwoOutcome.messages);
    const originalConfirmCopy = String(
      turnTwoComponents.find((c) => c.id === 'confirm_copy')?.text ?? '',
    );
    expect(originalConfirmCopy).toContain('42% Surge in Qualified Inbound Sales Calls');

    const simulateBtn = turnTwoComponents.find((c) => c.id === 'simulate_test_btn');
    const turnThreeOutcome = advanceAgentRoundTrip(baseScenarioMessages, {
      event: simulateBtn?.action?.event,
    });

    const turnThreeComponents = extractComponents(turnThreeOutcome.messages);
    const preservedConfirmCopy = String(
      turnThreeComponents.find((c) => c.id === 'confirm_copy')?.text ?? '',
    );
    expect(preservedConfirmCopy).toBe(originalConfirmCopy);
  });

});
