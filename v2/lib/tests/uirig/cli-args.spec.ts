// v2/lib/tests/uirig/cli-args.spec.ts
import { describe, expect, it } from 'vitest';
import { COMPONENT_NAMES } from '../shared/component-registry';
import { parseAuditCliArgs } from './cli-args';

describe('uirig/cli-args', () => {
  it('defaults to no explicit component selection and no changed-file scope', () => {
    expect(parseAuditCliArgs([])).toEqual({
      components: null,
      changed: false,
      baseRef: null,
    });
  });

  it('parses a component selection', () => {
    expect(parseAuditCliArgs(['--components=Button,Dialog'])).toEqual({
      components: ['Button', 'Dialog'],
      changed: false,
      baseRef: null,
    });
  });

  it('parses changed-file scope with an explicit base ref', () => {
    expect(parseAuditCliArgs(['--changed', '--base=origin/feature-target'])).toEqual({
      components: null,
      changed: true,
      baseRef: 'origin/feature-target',
    });
  });

  it('accepts either main or master as an explicitly supplied base', () => {
    for (const baseRef of ['origin/main', 'origin/master']) {
      expect(parseAuditCliArgs(['--changed', `--base=${baseRef}`]).baseRef).toBe(baseRef);
    }
  });

  it('gives actionable base-branch guidance if --changed has no base', () => {
    expect(() => parseAuditCliArgs(['--changed'])).toThrow(
      /--changed requires --base=<ref>/
    );
    expect(() => parseAuditCliArgs(['--changed'])).toThrow(/git branch -r/);
    expect(() => parseAuditCliArgs(['--changed'])).toThrow(/origin\/main or origin\/master/);
    expect(() => parseAuditCliArgs(['--changed'])).toThrow(/pull request target branch/);
  });

  it('rejects a blank base ref', () => {
    expect(() => parseAuditCliArgs(['--changed', '--base=  '])).toThrow(
      '--base requires a non-empty Git ref'
    );
  });

  it('rejects --base without --changed', () => {
    expect(() => parseAuditCliArgs(['--base=origin/main'])).toThrow(
      '--base can only be used with --changed.'
    );
  });

  it('rejects unknown component names and reports valid names', () => {
    let thrown: unknown;

    try {
      parseAuditCliArgs(['--components=NotAComponent']);
    } catch (error) {
      thrown = error;
    }

    expect(thrown).toBeInstanceOf(Error);
    expect((thrown as Error).message).toContain('Unknown component "NotAComponent".');
    expect((thrown as Error).message).toContain(COMPONENT_NAMES.join(', '));
  });

  it('rejects duplicate options', () => {
    expect(() =>
      parseAuditCliArgs(['--base=origin/main', '--base=origin/master', '--changed'])
    ).toThrow('Specify --base only once.');

    expect(() =>
      parseAuditCliArgs(['--components=Button', '--components=Dialog'])
    ).toThrow('Specify --components only once.');
  });

  it('rejects unsupported arguments', () => {
    expect(() => parseAuditCliArgs(['--changd'])).toThrow(
      'Unknown argument "--changd".'
    );
  });
});