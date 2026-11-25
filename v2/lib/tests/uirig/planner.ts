// v2/lib/tests/uirig/planner.ts
import { execFileSync } from 'node:child_process';
import { resolve } from 'node:path';
import {
  COMPONENT_NAMES,
  hasComponentTemplate,
  type ComponentName,
} from '../shared/component-registry';

export interface AuditScopePlan {
  /** Components to audit, in canonical registry order. */
  components: ComponentName[];
  /** Whether the change requires a full component sweep. */
  fullSweep: boolean;
  /** Normalized changed paths that affected the plan. */
  relevantPaths: string[];
}

type ExecFile = (
  file: string,
  args: string[],
  options: { cwd?: string; encoding: 'utf8' }
) => string;

/**
 * Shared source directories whose changes can affect multiple registered
 * components (including `src/components/shared/`, e.g. `CloseButton` used by
 * `Dialog` and `Toast`) and therefore escalate to a full registry sweep.
 */
const SHARED_SOURCE_PATHS = [
  /^src\/styles(?:\/|$)/,
  /^(?:v2\/)?theme-registry(?:\/|$)/,
  /^src\/shared(?:\/|$)/,
  /^src\/utils(?:\/|$)/,
  /^src\/components\/shared(?:\/|$)/,
];

const COMPONENT_SOURCE_PATH = /^src\/components\/([^/]+)(?:\/|$)/;

function normalizeChangedPath(path: string): string {
  return path
    .trim()
    .replaceAll('\\', '/')
    .replace(/^(?:\.\/)+/, '')
    .replace(/\/+/g, '/');
}

function stripLibraryPrefix(path: string): string {
  return path.startsWith('v2/lib/') ? path.slice('v2/lib/'.length) : path;
}

/**
 * Maps changed source paths to the smallest safe component audit scope.
 *
 * Unknown component directories and unrelated paths are ignored rather than
 * guessed. A shared-source change takes precedence and returns every component.
 */
export function planAuditScope(changedPaths: readonly string[]): AuditScopePlan {
  const normalizedPaths = changedPaths
    .map(normalizeChangedPath)
    .filter(Boolean)
    .map(stripLibraryPrefix);

  const sharedPaths = normalizedPaths.filter((path) =>
    SHARED_SOURCE_PATHS.some((pattern) => pattern.test(path))
  );

  if (sharedPaths.length > 0) {
    return {
      components: [...COMPONENT_NAMES],
      fullSweep: true,
      relevantPaths: sharedPaths,
    };
  }

  const changedComponents = new Set<ComponentName>();
  const relevantPaths: string[] = [];

  for (const path of normalizedPaths) {
    const match = COMPONENT_SOURCE_PATH.exec(path);
    if (!match) {
      continue;
    }

    const component = match[1];
    if (!hasComponentTemplate(component)) {
      continue;
    }

    changedComponents.add(component);
    relevantPaths.push(path);
  }

  return {
    components: COMPONENT_NAMES.filter((name) => changedComponents.has(name)),
    fullSweep: false,
    relevantPaths,
  };
}

/**
 * Reads changed paths relative to the current repository root using Git's
 * name-only diff output with rename detection disabled (`--no-renames`) and
 * deletions included (`--diff-filter=ACDMR`) so removed or moved component
 * files still trigger audits for their affected component.
 */
export function getGitChangedFiles(
  baseRef: string,
  execFile: ExecFile = execFileSync as ExecFile
): string[] {
  const normalizedBaseRef = baseRef.trim();
  if (!normalizedBaseRef) {
    throw new Error('A non-empty Git base reference is required.');
  }

  const repoRoot = execFile('git', ['rev-parse', '--show-toplevel'], {
    encoding: 'utf8',
  }).trim();

  const output = execFile(
    'git',
    [
      'diff',
      '--name-only',
      '--no-renames',
      '--diff-filter=ACDMR',
      `${normalizedBaseRef}...HEAD`,
      '--',
    ],
    {
      cwd: resolve(repoRoot),
      encoding: 'utf8',
    }
  );

  return output
    .split(/\r?\n/)
    .map((path) => path.trim())
    .filter(Boolean);
}
