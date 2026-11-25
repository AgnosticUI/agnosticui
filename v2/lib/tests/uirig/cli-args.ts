// v2/lib/tests/uirig/cli-args.ts
import {
  COMPONENT_NAMES,
  hasComponentTemplate,
  type ComponentName,
} from '../shared/component-registry';

export interface AuditCliOptions {
  /** Explicit component selection, or null when no selection was supplied. */
  components: ComponentName[] | null;
  /** Whether to use Git changes to derive the component audit scope. */
  changed: boolean;
  /** Git base reference used by --changed. */
  baseRef: string | null;
}

const CHANGED_BASE_GUIDANCE = [
  '--changed requires --base=<ref>.',
  'To determine the correct base, run `git branch --show-current` and `git branch -r`.',
  'If `git rev-parse --abbrev-ref --symbolic-full-name \'@{upstream}\'` reports that no upstream is configured, choose the remote branch your work targets (for example, origin/main or origin/master).',
  'Fetch that branch with `git fetch origin <branch>`, then retry with `--base=origin/<branch>`.',
  'Use your pull request target branch if it has a different name.',
].join('\n');

export function parseAuditCliArgs(argv: readonly string[]): AuditCliOptions {
  let changed = false;
  let baseRef: string | null = null;
  let components: ComponentName[] | null = null;

  for (const arg of argv) {
    if (arg === '--changed') {
      changed = true;
      continue;
    }

    if (arg.startsWith('--base=')) {
      const value = arg.slice('--base='.length).trim();
      if (!value) {
        throw new Error('--base requires a non-empty Git ref, e.g. --base=origin/main.');
      }
      if (baseRef !== null) {
        throw new Error('Specify --base only once.');
      }
      baseRef = value;
      continue;
    }

    if (arg === '--base') {
      throw new Error(
        'Use --base=<ref>, for example --base=origin/main. Do not leave the base ref blank.'
      );
    }

    if (arg.startsWith('--components=')) {
      if (components !== null) {
        throw new Error('Specify --components only once.');
      }

      const rawNames = arg
        .slice('--components='.length)
        .split(',')
        .map((name) => name.trim())
        .filter(Boolean);

      if (rawNames.length === 0) {
        throw new Error('--components requires at least one component name.');
      }

      components = rawNames.map((name) => {
        if (!hasComponentTemplate(name)) {
          throw new Error(
            `Unknown component "${name}". Valid components: ${COMPONENT_NAMES.join(', ')}`
          );
        }
        return name;
      });
      continue;
    }

    throw new Error(
      `Unknown argument "${arg}". Supported arguments: --components=<names>, --changed, --base=<ref>.`
    );
  }

  if (changed && baseRef === null) {
    throw new Error(CHANGED_BASE_GUIDANCE);
  }

  if (!changed && baseRef !== null) {
    throw new Error('--base can only be used with --changed.');
  }

  return { components, changed, baseRef };
}