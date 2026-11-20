export interface FollowScrollController {
  /** Whether auto-scroll is currently active */
  readonly isFollowing: boolean;
  /** Call from the scroll container's scroll event listener */
  onUserScroll: (el: HTMLElement) => boolean;
  /** Re-enable auto-scroll (e.g., on new prompt submit or "Jump to latest" click) */
  reset: () => boolean;
  /** Post-render sync: scrolls to the latest diff line or bottom if following */
  sync: (el: HTMLElement | null) => void;
}

/**
 * Checks whether a scrollable container is within `thresholdPx` of its bottom edge.
 */
export function isNearBottom(el: HTMLElement, thresholdPx = 36): boolean {
  return el.scrollHeight - el.scrollTop - el.clientHeight <= thresholdPx;
}

/**
 * Creates a stateful tail-follow controller with an async rAF guard
 * so programmatic scroll adjustments never falsely pause auto-follow.
 */
export function createFollowScrollController(thresholdPx = 36): FollowScrollController {
  let autoFollow = true;
  let isProgrammatic = false;
  let rafId: number | null = null;

  const scheduleGuardClear = () => {
    if (rafId !== null && typeof cancelAnimationFrame === 'function') {
      cancelAnimationFrame(rafId);
    }
    if (typeof requestAnimationFrame === 'function') {
      rafId = requestAnimationFrame(() => {
        isProgrammatic = false;
        rafId = null;
      });
    } else {
      isProgrammatic = false;
    }
  };

  return {
    get isFollowing() {
      return autoFollow;
    },

    onUserScroll(el: HTMLElement): boolean {
      if (isProgrammatic) {
        return autoFollow;
      }
      autoFollow = isNearBottom(el, thresholdPx);
      return autoFollow;
    },

    reset(): boolean {
      autoFollow = true;
      return autoFollow;
    },

    sync(el: HTMLElement | null): void {
      if (!el || !autoFollow) {
        return;
      }

      isProgrammatic = true;

      // Prefer scrolling the last highlighted diff line from data-model-diff.ts into view
      const diffNodes = el.querySelectorAll<HTMLElement>(
        '.a2ui-json-line--added, .a2ui-json-line--updated',
      );
      const lastDiff = diffNodes.length > 0 ? diffNodes[diffNodes.length - 1] : null;

      if (lastDiff && typeof lastDiff.scrollIntoView === 'function') {
        lastDiff.scrollIntoView({ block: 'nearest', behavior: 'auto' });
      } else {
        el.scrollTop = el.scrollHeight;
      }

      scheduleGuardClear();
    },
  };
}
