import { describe, expect, it, vi } from 'vitest';
import { AGNOSTICUI_CATALOG_ID, type A2uiWireMessage } from '@agnosticui/a2ui-lit';
import {
  expandToGranularStream,
  playProgressiveA2uiStream,
  type StreamPhase,
} from './stream-player.js';

/**
 * Realistic sample A2UI v1.0 wire stream containing:
 * 1. createSurface
 * 2. A batched updateComponents message with 3 components
 * 3. updateDataModel
 */
const SAMPLE_BATCHED_STREAM: A2uiWireMessage[] = [
  {
    version: '1.0',
    createSurface: {
      surfaceId: 'support_surface',
      catalogId: AGNOSTICUI_CATALOG_ID,
    },
  },
  {
    version: '1.0',
    updateComponents: {
      surfaceId: 'support_surface',
      components: [
        { id: 'root', component: 'AgCard', children: ['title_txt', 'email_inp'] },
        { id: 'title_txt', component: 'AgText', text: 'Call Tracking Setup' },
        { id: 'email_inp', component: 'AgInput', label: 'Owner Email', value: { path: '/ownerEmail' } },
      ],
    },
  },
  {
    version: '1.0',
    updateDataModel: {
      surfaceId: 'support_surface',
      path: '/',
      value: { ownerEmail: 'ops@agnosticui.com' },
    },
  },
];

describe('StreamPlayer (Progressive A2UI JSONL Streaming)', () => {
  it('expands batched updateComponents into single-component wire frames', () => {
    console.log('\n--- START TEST: expandToGranularStream ---');

    const granular = expandToGranularStream(SAMPLE_BATCHED_STREAM);
    console.log('Input message count:', SAMPLE_BATCHED_STREAM.length);
    console.log('Expanded frame count:', granular.length);

    // 1 createSurface + 3 split updateComponents + 1 updateDataModel = 5 frames
    expect(granular).toHaveLength(5);
    expect('createSurface' in granular[0]).toBe(true);
    expect('updateComponents' in granular[1]).toBe(true);
    expect('updateComponents' in granular[2]).toBe(true);
    expect('updateComponents' in granular[3]).toBe(true);
    expect('updateDataModel' in granular[4]).toBe(true);

    // Narrow the second frame's updateComponents payload cleanly without `any`
    const firstComponentFrame = granular[1];
    if (
      'updateComponents' in firstComponentFrame &&
      typeof firstComponentFrame.updateComponents === 'object' &&
      firstComponentFrame.updateComponents !== null &&
      'components' in firstComponentFrame.updateComponents &&
      Array.isArray(firstComponentFrame.updateComponents.components)
    ) {
      const components = firstComponentFrame.updateComponents.components as Array<{ id: string }>;
      expect(components).toHaveLength(1);
      expect(components[0].id).toBe('root');
    } else {
      throw new Error('Expected granular[1] to contain a single-item updateComponents array');
    }

    console.log('--- END TEST: expandToGranularStream PASSED ---\n');
  });

  it('transitions deterministically through skeleton -> typing -> streaming -> complete', async () => {
    console.log('\n--- START TEST: progressive phase & frame lifecycle ---');

    const observedPhases: StreamPhase[] = [];
    const receivedFrames: A2uiWireMessage[] = [];

    const handle = playProgressiveA2uiStream(
      SAMPLE_BATCHED_STREAM,
      {
        onPhaseChange: (phase) => observedPhases.push(phase),
        onMessage: (msg) => receivedFrames.push(msg),
      },
      {
        skeletonDelayMs: 10,
        typingDelayMs: 10,
        chunkDelayMs: 10,
        verbose: true,
      },
    );

    const completed = await handle.finished;

    expect(completed).toBe(true);
    expect(observedPhases).toEqual(['skeleton', 'typing', 'streaming', 'complete']);
    expect(receivedFrames).toHaveLength(5);

    console.log('Observed phase sequence:', observedPhases.join(' -> '));
    console.log('--- END TEST: progressive phase & frame lifecycle PASSED ---\n');
  });

  it('cancels cleanly mid-stream without emitting stale frames', async () => {
    console.log('\n--- START TEST: mid-stream cancellation ---');

    const onMessageSpy = vi.fn();
    const observedPhases: StreamPhase[] = [];

    const handle = playProgressiveA2uiStream(
      SAMPLE_BATCHED_STREAM,
      {
        onPhaseChange: (phase) => observedPhases.push(phase),
        onMessage: (msg) => {
          onMessageSpy(msg);
          // Abort right after the 2nd frame arrives
          if (onMessageSpy.mock.calls.length === 2) {
            handle.cancel();
          }
        },
      },
      {
        skeletonDelayMs: 5,
        typingDelayMs: 5,
        chunkDelayMs: 25,
        verbose: true,
      },
    );

    const completed = await handle.finished;

    // Must resolve to `false` (cancelled) and never reach 'complete' or emit frames 3..5
    expect(completed).toBe(false);
    expect(onMessageSpy).toHaveBeenCalledTimes(2);
    expect(observedPhases).not.toContain('complete');

    console.log('Frames emitted before abort:', onMessageSpy.mock.calls.length);
    console.log('--- END TEST: mid-stream cancellation PASSED ---\n');
  });
});
