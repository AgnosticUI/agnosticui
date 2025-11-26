import { describe, /* it, expect, beforeEach, afterEach */ } from 'vitest';
import { toHaveNoViolations } from 'jest-axe';
import './ButtonFx';

expect.extend(toHaveNoViolations);

describe('ButtonFx', () => {
  // TODO: Add tests based on SpecSheet.md
  it('has a test', () => {
    expect(true).toBe(true);
  })
});
