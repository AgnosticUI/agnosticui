import type { A2uiWireMessage } from '@agnosticui/a2ui-lit';

/**
 * Represents the 4 visual stages of a progressive A2UI stream in the Studio UI.
 * - 'skeleton' : Initial shell / placeholder state before agent text starts
 * - 'typing'   : Agent message bubble typing indicator is active
 * - 'streaming': Individual A2UI wire envelopes are arriving incrementally
 * - 'complete' : All envelopes have been delivered to the MessageProcessor
 */
export type StreamPhase = 'skeleton' | 'typing' | 'streaming' | 'complete';

/**
 * Callbacks invoked as the stream progresses through phases and wire frames.
 */
export interface StreamPlayerCallbacks {
  /** Fired whenever the UI should transition between skeleton, typing, streaming, and complete. */
  onPhaseChange?: (phase: StreamPhase) => void;
  /** Fired for each individual A2UI v1.0 wire envelope ready to feed into MessageProcessor. */
  onMessage: (message: A2uiWireMessage, index: number, total: number) => void;
}

/**
 * Timing and cancellation controls for progressive playback.
 */
export interface StreamPlayerOptions {
  /** Milliseconds spent in the 'skeleton' phase before transitioning to 'typing'. Default: 140ms */
  skeletonDelayMs?: number;
  /** Milliseconds spent in the 'typing' phase before the first component arrives. Default: 220ms */
  typingDelayMs?: number;
  /** Milliseconds between each granular A2UI wire message during 'streaming'. Default: 110ms */
  chunkDelayMs?: number;
  /** Optional AbortSignal so clicking a new prompt cleanly cancels an in-flight stream. */
  signal?: AbortSignal;
  /** Enable verbose terminal/console execution logging for debugging & learning. Default: true */
  verbose?: boolean;
}

/**
 * Handle returned by `playProgressiveA2uiStream` allowing callers to await completion or abort early.
 */
export interface StreamPlaybackHandle {
  /** Resolves to `true` if completed naturally, or `false` if aborted early. */
  finished: Promise<boolean>;
  /** Immediately cancels any pending timers and stops further callbacks. */
  cancel: () => void;
}

/**
 * Pure helper that splits batched `updateComponents` messages into single-component
 * wire envelopes so AgnosticUI surfaces build progressively field-by-field.
 *
 * @param messages - Standard A2UI v1.0 wire message array (from local compiler or Gemini).
 * @returns An expanded array of granular A2UI v1.0 wire messages.
 */
export function expandToGranularStream(
  messages: readonly A2uiWireMessage[],
): A2uiWireMessage[] {
  // Accumulator for our fine-grained wire frames
  const granularFrames: A2uiWireMessage[] = [];

  for (const msg of messages) {
    // Check if this envelope contains a batch of multiple components
    if (
      'updateComponents' in msg &&
      msg.updateComponents &&
      Array.isArray(msg.updateComponents.components) &&
      msg.updateComponents.components.length > 1
    ) {
      const { surfaceId, components } = msg.updateComponents;

      // Emit one `updateComponents` envelope per component so the UI streams incrementally
      for (const singleComponent of components) {
        granularFrames.push({
          version: msg.version ?? '1.0',
          updateComponents: {
            surfaceId,
            components: [singleComponent],
          },
        });
      }
    } else {
      // Pass `createSurface`, `updateDataModel`, `deleteSurface`, or 1-item updates as-is
      granularFrames.push(msg);
    }
  }

  return granularFrames;
}

/**
 * Internal promise-based sleep helper that respects an `AbortSignal`.
 * Clears its timer immediately if aborted so no dangling timeouts remain in Node/browser.
 */
function cancellableDelay(ms: number, signal: AbortSignal): Promise<boolean> {
  // If already aborted before waiting, exit immediately
  if (signal.aborted) {
    return Promise.resolve(false);
  }

  // Zero-delay fast path for instant playback mode
  if (ms <= 0) {
    return Promise.resolve(true);
  }

  return new Promise<boolean>((resolve) => {
    const onAbort = () => {
      clearTimeout(timerId);
      resolve(false);
    };

    const timerId = setTimeout(() => {
      signal.removeEventListener('abort', onAbort);
      resolve(true);
    }, ms);

    signal.addEventListener('abort', onAbort, { once: true });
  });
}

/**
 * Plays an array of A2UI v1.0 wire messages progressively through four observable stages:
 * `skeleton` -> `typing` -> `streaming` (1 wire envelope per tick) -> `complete`.
 */
export function playProgressiveA2uiStream(
  messages: readonly A2uiWireMessage[],
  callbacks: StreamPlayerCallbacks,
  options: StreamPlayerOptions = {},
): StreamPlaybackHandle {
  const {
    skeletonDelayMs = 140,
    typingDelayMs = 220,
    chunkDelayMs = 110,
    signal: externalSignal,
    verbose = true,
  } = options;

  // Internal controller linked to any optional external AbortSignal
  const internalController = new AbortController();
  const { signal } = internalController;

  if (externalSignal) {
    if (externalSignal.aborted) {
      internalController.abort();
    } else {
      externalSignal.addEventListener('abort', () => internalController.abort(), {
        once: true,
      });
    }
  }

  // Expand batched component arrays into single-component streaming envelopes
  const frames = expandToGranularStream(messages);
  const totalFrames = frames.length;

  const log = (step: string) => {
    if (verbose) {
      console.log(`[StreamPlayer] ${step}`);
    }
  };

  const finished = (async (): Promise<boolean> => {
    log(`Starting stream with ${messages.length} raw messages -> ${totalFrames} granular frames.`);

    // Stage 1: Skeleton shell
    if (signal.aborted) return false;
    log(`Phase -> 'skeleton' (waiting ${skeletonDelayMs}ms)`);
    callbacks.onPhaseChange?.('skeleton');
    if (!(await cancellableDelay(skeletonDelayMs, signal))) {
      log('Aborted during skeleton phase.');
      return false;
    }

    // Stage 2: Agent typing indicator
    if (signal.aborted) return false;
    log(`Phase -> 'typing' (waiting ${typingDelayMs}ms)`);
    callbacks.onPhaseChange?.('typing');
    if (!(await cancellableDelay(typingDelayMs, signal))) {
      log('Aborted during typing phase.');
      return false;
    }

    // Stage 3: Incremental wire frame arrival
    if (signal.aborted) return false;
    log(`Phase -> 'streaming' (emitting ${totalFrames} frames @ ${chunkDelayMs}ms intervals)`);
    callbacks.onPhaseChange?.('streaming');

    for (let i = 0; i < totalFrames; i++) {
      if (signal.aborted) {
        log(`Aborted at frame ${i + 1}/${totalFrames}.`);
        return false;
      }

      const frame = frames[i];
      log(`Emitting frame ${i + 1}/${totalFrames}: ${Object.keys(frame).filter((k) => k !== 'version').join(', ')}`);
      callbacks.onMessage(frame, i, totalFrames);

      // Pause between frames (skip trailing delay after the very last frame)
      if (i < totalFrames - 1) {
        if (!(await cancellableDelay(chunkDelayMs, signal))) {
          log(`Aborted while waiting after frame ${i + 1}/${totalFrames}.`);
          return false;
        }
      }
    }

    // Stage 4: Stream complete
    if (signal.aborted) return false;
    log(`Phase -> 'complete'`);
    callbacks.onPhaseChange?.('complete');
    return true;
  })();

  return {
    finished,
    cancel: () => {
      log('Manual cancel() invoked.');
      internalController.abort();
    },
  };
}
