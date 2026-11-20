import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { isNearBottom, createFollowScrollController } from './follow-scroll';

function makeMockContainer(metrics: {
  scrollHeight: number;
  scrollTop: number;
  clientHeight: number;
}) {
  const el = document.createElement('pre');
  Object.defineProperties(el, {
    scrollHeight: { value: metrics.scrollHeight, writable: true, configurable: true },
    scrollTop: { value: metrics.scrollTop, writable: true, configurable: true },
    clientHeight: { value: metrics.clientHeight, writable: true, configurable: true },
  });
  return el;
}

describe('follow-scroll', () => {
  beforeEach(() => {
    vi.stubGlobal('requestAnimationFrame', (cb: FrameRequestCallback) => {
      cb(0);
      return 1;
    });
    vi.stubGlobal('cancelAnimationFrame', vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  describe('isNearBottom', () => {
    it('returns true when scrolled within threshold of bottom', () => {
      const el = makeMockContainer({ scrollHeight: 500, scrollTop: 270, clientHeight: 200 });
      // 500 - 270 - 200 = 30 <= 36
      expect(isNearBottom(el, 36)).toBe(true);
    });

    it('returns false when scrolled up beyond threshold', () => {
      const el = makeMockContainer({ scrollHeight: 500, scrollTop: 200, clientHeight: 200 });
      // 500 - 200 - 200 = 100 > 36
      expect(isNearBottom(el, 36)).toBe(false);
    });
  });

  describe('createFollowScrollController', () => {
    it('starts with autoFollow enabled', () => {
      const ctrl = createFollowScrollController();
      expect(ctrl.isFollowing).toBe(true);
    });

    it('pauses autoFollow when user scrolls upward away from bottom', () => {
      const ctrl = createFollowScrollController();
      const el = makeMockContainer({ scrollHeight: 600, scrollTop: 100, clientHeight: 200 });

      const following = ctrl.onUserScroll(el);
      expect(following).toBe(false);
      expect(ctrl.isFollowing).toBe(false);
    });

    it('resumes autoFollow when user scrolls back near bottom', () => {
      const ctrl = createFollowScrollController();
      const el = makeMockContainer({ scrollHeight: 600, scrollTop: 100, clientHeight: 200 });

      ctrl.onUserScroll(el);
      expect(ctrl.isFollowing).toBe(false);

      el.scrollTop = 380; // 600 - 380 - 200 = 20 <= 36
      expect(ctrl.onUserScroll(el)).toBe(true);
      expect(ctrl.isFollowing).toBe(true);
    });

    it('ignores scroll events triggered while programmatic rAF guard is active', () => {
      const frameHolder: { cb: FrameRequestCallback | null } = { cb: null };
      vi.stubGlobal('requestAnimationFrame', (cb: FrameRequestCallback) => {
        frameHolder.cb = cb;
        return 1;
      });

      const ctrl = createFollowScrollController();
      const el = makeMockContainer({ scrollHeight: 600, scrollTop: 0, clientHeight: 200 });

      ctrl.sync(el);
      expect(el.scrollTop).toBe(600);

      // Simulate async scroll event firing with stale scrollTop before rAF clears guard
      el.scrollTop = 50;
      expect(ctrl.onUserScroll(el)).toBe(true);
      expect(ctrl.isFollowing).toBe(true);

      // Flush rAF; subsequent user scroll up should now pause
      frameHolder.cb?.(16);
      expect(ctrl.onUserScroll(el)).toBe(false);
    });

    it('scrolls the last highlighted diff element into view when present', () => {
      const ctrl = createFollowScrollController();
      const el = makeMockContainer({ scrollHeight: 600, scrollTop: 0, clientHeight: 200 });

      const firstDiff = document.createElement('span');
      firstDiff.className = 'a2ui-json-line a2ui-json-line--added';
      firstDiff.scrollIntoView = vi.fn();

      const lastDiff = document.createElement('span');
      lastDiff.className = 'a2ui-json-line a2ui-json-line--updated';
      lastDiff.scrollIntoView = vi.fn();

      const trailingLine = document.createElement('span');
      trailingLine.className = 'a2ui-json-line';
      trailingLine.textContent = '}';

      el.append(firstDiff, lastDiff, trailingLine);

      ctrl.sync(el);
      expect(firstDiff.scrollIntoView).not.toHaveBeenCalled();
      expect(lastDiff.scrollIntoView).toHaveBeenCalledWith({
        block: 'nearest',
        behavior: 'auto',
      });
    });

    it('falls back to scrolling to scrollHeight when no diff elements are present', () => {
      const ctrl = createFollowScrollController();
      const el = makeMockContainer({ scrollHeight: 750, scrollTop: 0, clientHeight: 200 });

      const plainLine = document.createElement('span');
      plainLine.className = 'a2ui-json-line';
      el.append(plainLine);

      ctrl.sync(el);
      expect(el.scrollTop).toBe(750);
    });

    it('resets autoFollow back to true on reset()', () => {
      const ctrl = createFollowScrollController();
      const el = makeMockContainer({ scrollHeight: 600, scrollTop: 0, clientHeight: 200 });

      ctrl.onUserScroll(el);
      expect(ctrl.isFollowing).toBe(false);

      expect(ctrl.reset()).toBe(true);
      expect(ctrl.isFollowing).toBe(true);
    });
  });
});
