import { describe, expect, it } from 'vitest';
import {
  getHarnessUrl,
  UIRIG_DIST_HARNESS_URL,
  UIRIG_SOURCE_HARNESS_URL,
} from './harness-url';

describe('getHarnessUrl', () => {
  it('uses the source harness by default', () => {
    expect(getHarnessUrl()).toBe(UIRIG_SOURCE_HARNESS_URL);
    expect(getHarnessUrl({ useDist: false })).toBe(UIRIG_SOURCE_HARNESS_URL);
  });

  it('uses the dist harness when requested', () => {
    expect(getHarnessUrl({ useDist: true })).toBe(UIRIG_DIST_HARNESS_URL);
  });
});
