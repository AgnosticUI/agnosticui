// v2/lib/tests/uirig/runner.spec.ts
import { describe, it, expect } from 'vitest';
import { buildUirigCheckArgs, HARNESS_STAGE_SCOPE } from './runner';

describe('uirig/runner', () => {
  it('constructs uirig check CLI args scoped to #uirig-stage with light/dark themes and JSON output', () => {
    const args = buildUirigCheckArgs(
      'http://localhost:4174/tests/uirig/harness/index.html?component=Button',
      '/tmp/ag-tokens-combined.css'
    );

    expect(args).toEqual([
      'check',
      'http://localhost:4174/tests/uirig/harness/index.html?component=Button',
      '--tokens-path=/tmp/ag-tokens-combined.css',
      '--themes=light,dark',
      `--scope=${HARNESS_STAGE_SCOPE}`,
      '--json',
    ]);
  });
});
