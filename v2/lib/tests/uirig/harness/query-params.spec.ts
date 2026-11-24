// v2/lib/tests/uirig/harness/query-params.spec.ts
import { describe, it, expect } from 'vitest';
import { parseHarnessParams } from './query-params';

describe('uirig/harness/query-params', () => {
  it('parses valid component and defaults theme to light', () => {
    const result = parseHarnessParams('?component=Button');
    expect(result).toEqual({
      component: 'Button',
      theme: 'light',
      error: null,
    });
  });

  it('parses explicit dark theme parameter', () => {
    const result = parseHarnessParams('?component=Dialog&theme=dark');
    expect(result).toEqual({
      component: 'Dialog',
      theme: 'dark',
      error: null,
    });
  });

  it('falls back to light theme for unrecognized theme values', () => {
    const result = parseHarnessParams('?component=Tabs&theme=sepia');
    expect(result).toEqual({
      component: 'Tabs',
      theme: 'light',
      error: null,
    });
  });

  it('returns an actionable error when component parameter is missing', () => {
    const result = parseHarnessParams('');
    expect(result.component).toBeNull();
    expect(result.error).toContain('Missing required ?component=<Name> parameter');
  });

  it('returns an actionable error when component name is unknown', () => {
    const result = parseHarnessParams('?component=DoesNotExist');
    expect(result.component).toBeNull();
    expect(result.error).toContain('Unknown component "DoesNotExist"');
  });
});
