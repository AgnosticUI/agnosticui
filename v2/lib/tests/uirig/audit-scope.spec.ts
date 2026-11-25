// v2/lib/tests/uirig/audit-scope.spec.ts
import { describe, expect, it } from 'vitest';
import { COMPONENT_NAMES } from '../shared/component-registry';
import { parseAuditCliArgs } from './cli-args';
import { resolveAuditScope } from './audit-scope';

describe('uirig/audit-scope', () => {
  it('uses all registered components by default', () => {
    const options = parseAuditCliArgs([]);

    expect(resolveAuditScope(options).components).toEqual(COMPONENT_NAMES);
  });

  it('uses explicit components when changed-file scope is off', () => {
    const options = parseAuditCliArgs(['--components=Dialog,Button']);

    expect(resolveAuditScope(options).components).toEqual(['Dialog', 'Button']);
  });

  it('uses the planned components when --changed is enabled', () => {
    const options = parseAuditCliArgs([
      '--changed',
      '--base=origin/main',
    ]);

    const result = resolveAuditScope(options, [
      'src/components/Button/core/Button.ts',
      'src/components/Dialog/styles.css',
      'README.md',
    ]);

    expect(result.components).toEqual(['Button', 'Dialog']);
    expect(result.changedPlan?.fullSweep).toBe(false);
    expect(result.changedPlan?.relevantPaths).toEqual([
      'src/components/Button/core/Button.ts',
      'src/components/Dialog/styles.css',
    ]);
  });

  it('narrows a changed-file plan when explicit components are also supplied', () => {
    const options = parseAuditCliArgs([
      '--changed',
      '--base=origin/main',
      '--components=Dialog,Toggle',
    ]);

    const result = resolveAuditScope(options, [
      'src/components/Button/core/Button.ts',
      'src/components/Dialog/styles.css',
      'src/components/Toggle/core/Toggle.ts',
    ]);

    expect(result.components).toEqual(['Dialog', 'Toggle']);
  });

  it('returns an empty scope when explicit components do not intersect the changed plan', () => {
    const options = parseAuditCliArgs([
      '--changed',
      '--base=origin/main',
      '--components=Toggle',
    ]);

    const result = resolveAuditScope(options, [
      'src/components/Button/core/Button.ts',
    ]);

    expect(result.components).toEqual([]);
  });

  it('preserves an empty changed-file scope instead of falling back to all components', () => {
    const options = parseAuditCliArgs([
      '--changed',
      '--base=origin/main',
    ]);

    const result = resolveAuditScope(options, [
      'README.md',
      'site/src/pages/index.ts',
    ]);

    expect(result.components).toEqual([]);
    expect(result.changedPlan?.fullSweep).toBe(false);
  });

  it('does not narrow a full shared-source sweep when explicit components are absent', () => {
    const options = parseAuditCliArgs([
      '--changed',
      '--base=origin/main',
    ]);

    const result = resolveAuditScope(options, ['src/styles/ag-tokens.css']);

    expect(result.components).toEqual(COMPONENT_NAMES);
    expect(result.changedPlan?.fullSweep).toBe(true);
  });

  it('narrows a full shared-source sweep when explicit components are supplied', () => {
    const options = parseAuditCliArgs([
      '--changed',
      '--base=origin/main',
      '--components=Dialog,Button',
    ]);

    const result = resolveAuditScope(options, ['src/styles/ag-tokens.css']);

    expect(result.components).toEqual(['Button', 'Dialog']);
    expect(result.changedPlan?.fullSweep).toBe(true);
  });
});