// v2/lib/tests/uirig/audit-scope.ts
import {
  COMPONENT_NAMES,
  type ComponentName,
} from '../shared/component-registry';
import type { AuditCliOptions } from './cli-args';
import { planAuditScope, type AuditScopePlan } from './planner';

export interface ResolvedAuditScope {
  /** Final component list in canonical registry order. */
  components: ComponentName[];
  /** Changed-file plan, or null when --changed was not requested. */
  changedPlan: AuditScopePlan | null;
}

/**
 * Resolves CLI selection and optional Git-diff scope into the audit targets.
 *
 * Explicit components narrow the changed-file plan when both options are used.
 * An empty changed-file plan stays empty; it never silently becomes a full run.
 */
export function resolveAuditScope(
  options: AuditCliOptions,
  changedPaths: readonly string[] = []
): ResolvedAuditScope {
  const changedPlan = options.changed ? planAuditScope(changedPaths) : null;

  if (!options.changed) {
    return {
      components: options.components ?? [...COMPONENT_NAMES],
      changedPlan: null,
    };
  }

  const plannedComponents = changedPlan?.components ?? [];

  if (options.components === null) {
    return {
      components: plannedComponents,
      changedPlan,
    };
  }

  const selected = new Set(options.components);

  return {
    components: plannedComponents.filter((name) => selected.has(name)),
    changedPlan,
  };
}