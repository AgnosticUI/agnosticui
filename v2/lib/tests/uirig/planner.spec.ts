// v2/lib/tests/uirig/planner.spec.ts
import { describe, expect, it, vi } from 'vitest';
import { COMPONENT_NAMES } from '../shared/component-registry';
import { getGitChangedFiles, planAuditScope } from './planner';

describe('uirig/planner', () => {
  it('targets registered components changed under src/components (including deletions)', () => {
    const plan = planAuditScope([
      'v2/lib/src/components/Button/core/Button.ts',
      'src/components/Dialog/styles.css',
      'src/components/NotRegistered/index.ts',
    ]);

    expect(plan.components).toEqual(['Button', 'Dialog']);
    expect(plan.fullSweep).toBe(false);
    expect(plan.relevantPaths).toEqual([
      'src/components/Button/core/Button.ts',
      'src/components/Dialog/styles.css',
    ]);
  });

  it('escalates shared-source paths to the complete registry', () => {
    const plan = planAuditScope([
      'src/components/Button/core/Button.ts',
      'v2/lib/src/styles/ag-tokens.css',
    ]);

    expect(plan.components).toEqual(COMPONENT_NAMES);
    expect(plan.fullSweep).toBe(true);
    expect(plan.relevantPaths).toEqual(['src/styles/ag-tokens.css']);
  });

  it.each([
    'src/styles/ag-tokens.css',
    'v2/theme-registry/src/index.ts',
    'theme-registry/src/index.ts',
    'v2/lib/src/shared/dom.ts',
    'src/utils/color.ts',
    'v2/lib/src/components/shared/CloseButton/_CloseButton.ts',
  ])('escalates shared path %s to the complete registry', (path) => {
    const plan = planAuditScope([path]);

    expect(plan.components).toEqual(COMPONENT_NAMES);
    expect(plan.fullSweep).toBe(true);
    expect(plan.relevantPaths).toHaveLength(1);
  });

  it.each([
    'tests/uirig/runner.ts',
    'v2/lib/tests/shared/component-registry.ts',
    'v2/lib/vite.uirig.config.ts',
    'v2/lib/package.json',
    'v2/lib/package-lock.json',
    '.github/workflows/uirig-audit.yml',
  ])('runs a fast 2-component canary smoke audit for harness/dependency/workflow path %s', (path) => {
    const plan = planAuditScope([path]);

    expect(plan.components).toEqual(['Avatar', 'Button']);
    expect(plan.fullSweep).toBe(false);
    expect(plan.relevantPaths).toHaveLength(1);
  });

  it('ignores documentation, site, and unknown component paths', () => {
    const plan = planAuditScope([
      'README.md',
      'site/src/pages/index.ts',
      'src/components/NotRegistered/index.ts',
    ]);

    expect(plan.components).toEqual([]);
    expect(plan.fullSweep).toBe(false);
    expect(plan.relevantPaths).toEqual([]);
  });

  it('normalizes Windows separators and preserves canonical registry order', () => {
    const plan = planAuditScope([
      'src\\components\\Toggle\\Toggle.ts',
      'src/components/Accordion/Accordion.ts',
    ]);

    expect(plan.components).toEqual(
      COMPONENT_NAMES.filter((name) => name === 'Accordion' || name === 'Toggle')
    );
    expect(plan.relevantPaths).toEqual([
      'src/components/Toggle/Toggle.ts',
      'src/components/Accordion/Accordion.ts',
    ]);
  });

  it('reads changed and deleted paths from the merge base to HEAD without collapsing renames', () => {
    const execFile = vi
      .fn()
      .mockReturnValueOnce('/repo\n')
      .mockReturnValueOnce(
        'v2/lib/src/components/Button/Button.ts\nv2/lib/src/components/Card/old.css\nREADME.md\n'
      );

    expect(getGitChangedFiles('origin/main', execFile)).toEqual([
      'v2/lib/src/components/Button/Button.ts',
      'v2/lib/src/components/Card/old.css',
      'README.md',
    ]);
    expect(execFile).toHaveBeenNthCalledWith(
      1,
      'git',
      ['rev-parse', '--show-toplevel'],
      { encoding: 'utf8' }
    );
    expect(execFile).toHaveBeenNthCalledWith(
      2,
      'git',
      [
        'diff',
        '--name-only',
        '--no-renames',
        '--diff-filter=ACDMR',
        'origin/main...HEAD',
        '--',
      ],
      {
        cwd: '/repo',
        encoding: 'utf8',
      }
    );
  });

  it('rejects an empty Git base reference without invoking the executor', () => {
    const execFile = vi.fn();

    expect(() => getGitChangedFiles('  ', execFile)).toThrow(
      'A non-empty Git base reference is required.'
    );
    expect(execFile).not.toHaveBeenCalled();
  });
});
